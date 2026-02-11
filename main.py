import re
from pathlib import Path

def find_project_root(start: Path) -> Path:
    for p in (start, *start.parents):
        if (p / "src").is_dir():
            return p
    raise SystemExit(f"Project root not found from: {start}")


ROOT = find_project_root(Path(__file__).resolve().parent)
LEARNING_DIR = ROOT / "src" / "pages" / "iaiso" / "learning"

VIDEO_PROGRAM_OBJECTIVES = "/video 1.mp4"
VIDEO_DELIVERY_MODEL = "/video 2.mp4"

PROGRAM_HEADING = "Program Objectives"
DELIVERY_HEADING = "Delivery Model"


def inject_video_after_opening_div(block: str, video_src: str) -> str:
    """
    Expects `block` to start with an opening <div ...> and returns same block
    with video + overlay injected immediately after that opening tag.
    """
    # Find the first opening div tag end `>`
    m = re.search(r"<div[^>]*>", block)
    if not m:
        return block

    opening = m.group(0)
    after_open = block[m.end():]

    # If already contains this video, don't double-inject
    if video_src in block:
        return block

    injection = (
        "\n        <video\n"
        '          className="absolute inset-0 w-full h-full object-cover pointer-events-none"\n'
        f'          src="{video_src}"\n'
        "          autoPlay\n"
        "          muted\n"
        "          loop\n"
        "          playsInline\n"
        "        />\n"
        '        <div className="absolute inset-0 bg-black/55" />\n'
    )

    # Ensure container is relative/overflow-hidden so the absolute video works
    # Replace common className patterns if present
    opening2 = opening

    # Add/replace className to include relative + overflow-hidden
    # Handles: className="..."; keeps existing classes and prefixes needed ones if missing.
    cm = re.search(r'className="([^"]*)"', opening2)
    if cm:
        classes = cm.group(1)
        needed = ["relative", "overflow-hidden"]
        for n in needed:
            if n not in classes.split():
                classes = f"{n} {classes}"
        # Remove bg-secondary/30 if present (video becomes background)
        classes = classes.replace(" bg-secondary/30", "").replace("bg-secondary/30", "").strip()
        opening2 = opening2[:cm.start(1)] + classes + opening2[cm.end(1):]
    else:
        # If no className, add one (rare)
        opening2 = opening2[:-1] + ' className="relative overflow-hidden">'  # before '>'

    # Ensure there is a relative z-10 wrapper on the first max-w container inside:
    # We'll replace the first occurrence of `max-w-... mx-auto ...` wrapper to add `relative z-10` if missing.
    # (safe-ish; only within this section block)
    after_open2 = after_open
    after_open2 = re.sub(
        r'(<div\s+className=")(max-w-[^"]*mx-auto[^"]*)(")',
        lambda mm: mm.group(1) + (mm.group(2) if "z-10" in mm.group(2) else f"relative z-10 {mm.group(2)}") + mm.group(3),
        after_open2,
        count=1,
    )

    return opening2 + injection + after_open2


def tune_text_classes_for_video(block: str, heading_text: str) -> str:
    """
    Make headings/paragraphs readable inside video background sections.
    Only applies inside the passed `block`.
    """
    # Heading: text-foreground -> text-white for the matching section title
    block = re.sub(
        rf'(<h2[^>]*className="[^"]*)text-foreground([^"]*"[^>]*>\s*{re.escape(heading_text)}\s*</h2>)',
        r"\1text-white\2",
        block,
        flags=re.IGNORECASE,
    )

    # Common subtitle paragraph: text-gray-text -> text-white/80
    block = re.sub(
        r'className="([^"]*)text-gray-text([^"]*)"',
        lambda m: f'className="{m.group(1)}text-white/80{m.group(2)}"',
        block,
    )

    # Card headings inside these sections
    block = re.sub(
        r'(<h3[^>]*className="[^"]*)text-foreground([^"]*")',
        r"\1text-white\2",
        block,
    )

    # Paragraphs inside cards
    block = re.sub(
        r'(<p[^>]*className="[^"]*)text-gray-text([^"]*")',
        r"\1text-white/80\2",
        block,
    )

    return block


def tune_card_container_classes(block: str) -> str:
    """
    Convert common card containers used in those sections to translucent dark with blur.
    """
    # Program Objectives cards: bg-secondary/30 ... border border-border
    block = re.sub(
        r'className="bg-secondary/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border"',
        'className="bg-black/35 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-white/10"',
        block,
    )

    # Delivery Model cards: bg-secondary/30 rounded-2xl ... border border-border
    block = re.sub(
        r'className="bg-secondary/30 rounded-2xl p-8 shadow-lg border border-border"',
        'className="bg-black/35 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/10"',
        block,
    )

    return block


def extract_section_block(full_text: str, heading: str) -> tuple[str, int, int] | None:
    """
    Heuristic:
    - Find the heading text occurrence.
    - Expand backwards to the nearest '<div ref={addToRefs}' (start of section)
    - Expand forward to the matching closing '</div>' for that section (best-effort via simple stack count)
    Returns (block, start_index, end_index) or None.
    """
    idx = full_text.find(heading)
    if idx == -1:
        return None

    # Find nearest preceding section container
    start = full_text.rfind("<div ref={addToRefs}", 0, idx)
    if start == -1:
        return None

    # Naive tag balance from start to find end of this div block
    # Count <div occurrences and </div> occurrences
    div_open = 0
    pos = start
    while pos < len(full_text):
        next_open = full_text.find("<div", pos)
        next_close = full_text.find("</div>", pos)
        if next_close == -1:
            return None

        if next_open != -1 and next_open < next_close:
            div_open += 1
            pos = next_open + 4
        else:
            div_open -= 1
            pos = next_close + 6
            if div_open <= 0:
                end = pos
                return full_text[start:end], start, end

    return None


def process_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")

    # Skip if already applied
    if VIDEO_PROGRAM_OBJECTIVES in text or VIDEO_DELIVERY_MODEL in text:
        return False

    changed = False

    # Program Objectives
    sec = extract_section_block(text, PROGRAM_HEADING)
    if sec:
        block, s, e = sec
        block2 = inject_video_after_opening_div(block, VIDEO_PROGRAM_OBJECTIVES)
        block2 = tune_card_container_classes(block2)
        block2 = tune_text_classes_for_video(block2, PROGRAM_HEADING)
        if block2 != block:
            text = text[:s] + block2 + text[e:]
            changed = True

    # Delivery Model
    sec = extract_section_block(text, DELIVERY_HEADING)
    if sec:
        block, s, e = sec
        block2 = inject_video_after_opening_div(block, VIDEO_DELIVERY_MODEL)
        block2 = tune_card_container_classes(block2)
        block2 = tune_text_classes_for_video(block2, DELIVERY_HEADING)
        if block2 != block:
            text = text[:s] + block2 + text[e:]
            changed = True

    if changed:
        backup = path.with_suffix(path.suffix + ".bak")
        backup.write_text(path.read_text(encoding="utf-8"), encoding="utf-8")
        path.write_text(text, encoding="utf-8")

    return changed


def main():
    if not LEARNING_DIR.exists():
        raise SystemExit(f"Learning directory not found: {LEARNING_DIR}")

    files = sorted(LEARNING_DIR.rglob("*.tsx"))
    modified = 0
    scanned = 0

    for f in files:
        scanned += 1
        try:
            if process_file(f):
                modified += 1
                print(f"MODIFIED: {f.relative_to(ROOT)}")
        except Exception as ex:
            print(f"ERROR: {f.relative_to(ROOT)} -> {ex}")

    print(f"\nScanned: {scanned}")
    print(f"Modified: {modified}")
    print("Backups: created as *.tsx.bak for each modified file")


if __name__ == "__main__":
    main()