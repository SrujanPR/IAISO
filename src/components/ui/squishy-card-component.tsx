import { motion } from "framer-motion";
import { Check } from "lucide-react";

type SquishyCardProps = {
  badge: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const SquishyCard = ({
  badge,
  title,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
}: SquishyCardProps) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className={
        "relative h-[28rem] w-full shrink-0 overflow-hidden rounded-2xl border p-8 " +
        (highlighted
          ? "border-navy-950/30 bg-rooman-orange"
          : "border-navy-950/20 bg-rooman-orange")
      }
    >
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/10 via-black/5 to-black/10" />

      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/15 px-3 py-0.5 text-xs font-semibold text-white">
          {badge}
        </span>

        <div className="mb-2 font-heading text-xl font-semibold text-white">{title}</div>

        <motion.div
          initial={{ scale: 0.95 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="mb-3 block origin-top-left font-mono text-4xl font-black leading-[1.1] text-white"
        >
          {price}
          <span className="ml-2 text-sm font-bold text-white/80">{period}</span>
        </motion.div>

        <p className="mb-5 text-sm leading-relaxed text-white/85">{description}</p>

        <ul className="space-y-2 text-sm text-white/90">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="absolute bottom-4 left-4 right-4 z-20 rounded-lg bg-white py-2 text-center font-mono text-sm font-black uppercase text-black dark:text-black transition-colors hover:bg-white/90">
        {cta}
      </button>

      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#000000"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#000000"
      />
    </motion.svg>
  );
};

export default SquishyCard;
export type { SquishyCardProps };
