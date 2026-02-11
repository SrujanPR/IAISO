import os
import re

learning_dir = 'src/pages/iaiso/learning'
updated_count = 0

for root, dirs, files in os.walk(learning_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if 'IFFAI' in content:
                new_content = content.replace('IFFAI', 'IAISO')
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                updated_count += 1
                print(f'Updated: {filepath}')

print(f'\nTotal files updated: {updated_count}')
