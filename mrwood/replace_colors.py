import os
import glob
import re

mappings = {
    r'\bcharcoal\b': 'foreground',
    r'\bink\b': 'foreground',
    r'\bpaper\b': 'background',
    r'\bivory\b': 'background',
    r'\blinen\b': 'muted',
    r'\bsand\b': 'muted',
    r'\bwalnut\b': 'accent',
    r'\bbronze\b': 'accent',
    r'\bsmoke\b': 'muted-foreground'
}

for filepath in glob.glob('src/**/*.jsx', recursive=True):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for old, new in mappings.items():
        new_content = re.sub(old, new, new_content)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
