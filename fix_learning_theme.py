import os
import re

learning_dir = 'src/pages/iaiso/learning'
updated_count = 0

def update_learning_page(filepath):
    global updated_count
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace main background from slate gradient to navy background
    content = content.replace(
        'bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800',
        'bg-background text-foreground'
    )
    
    # Replace text colors
    content = content.replace('text-slate-900 dark:text-white', 'text-foreground')
    content = content.replace('text-slate-600 dark:text-slate-300', 'text-gray-text')
    content = content.replace('text-slate-500 dark:text-slate-400', 'text-gray-text')
    content = content.replace('text-slate-700 dark:text-slate-300', 'text-gray-text')
    
    # Replace card backgrounds
    content = content.replace('bg-white dark:bg-slate-800', 'bg-secondary/30')
    content = content.replace('bg-white dark:bg-slate-900', 'bg-secondary/50')
    content = content.replace('bg-slate-100/50 dark:bg-slate-800/50', 'bg-secondary/30')
    
    # Replace borders
    content = content.replace('border-slate-200 dark:border-slate-700', 'border-border')
    content = content.replace('border-slate-300', 'border-border')
    
    # Replace remaining slate references
    content = content.replace('text-slate-900', 'text-foreground')
    content = content.replace('text-slate-600', 'text-gray-text')
    content = content.replace('text-slate-500', 'text-gray-text')
    content = content.replace('text-slate-400', 'text-gray-text')
    content = content.replace('text-slate-300', 'text-gray-text')
    content = content.replace('text-slate-700', 'text-gray-text')
    
    # Replace bg-slate backgrounds
    content = content.replace('bg-slate-50', 'bg-secondary/30')
    content = content.replace('bg-slate-100', 'bg-secondary/30')
    content = content.replace('bg-slate-200', 'bg-secondary/50')
    content = content.replace('bg-slate-800', 'bg-navy-800')
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        updated_count += 1
        print(f'Updated: {filepath}')
        return True
    return False

# Walk through all learning pages
for root, dirs, files in os.walk(learning_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            update_learning_page(filepath)

print(f'\nTotal files updated: {updated_count}')
