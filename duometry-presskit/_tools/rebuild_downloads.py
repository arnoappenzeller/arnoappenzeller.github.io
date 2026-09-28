#!/usr/bin/env python3
"""Rebuild the complete press ZIP using only the current asset manifest."""
import json
from pathlib import Path
import zipfile

root = Path(__file__).resolve().parent.parent
sources = json.loads((root / 'asset-sources.json').read_text())
names = ['README.md', 'asset-sources.json', 'icons/duometry-ios-1024.png',
         'videos/duometry-features-demo.mp4', 'videos/duometry-duo-poster.png']
names += [sources['teaser']['file'], sources['teaser']['poster']['file']]
names += [item['file'] for item in sources['screenshots'] + sources['artwork']]
names += [path.relative_to(root).as_posix() for path in sorted((root / 'text').glob('*.txt'))]
archive = root / 'downloads/duometry-presskit.zip'
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as bundle:
    for name in names:
        bundle.write(root / name, 'Duometry-Press-Kit/' + name)
with zipfile.ZipFile(archive) as bundle:
    assert bundle.testzip() is None
print(f'{len(names)} files · {archive.stat().st_size / 1024 / 1024:.1f} MB · {archive}')
