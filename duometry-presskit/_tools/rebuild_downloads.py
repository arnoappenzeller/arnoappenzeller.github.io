#!/usr/bin/env python3
"""Rebuild the press and image ZIPs from one asset manifest."""
import json
from pathlib import Path
import zipfile

root = Path(__file__).resolve().parent.parent
sources = json.loads((root / 'asset-sources.json').read_text())
screenshots = [item['file'] for item in sources['screenshots']]
app_store = [item['file'] for item in sources['app_store_screenshots']]
images = screenshots + app_store + [item['file'] for item in sources['artwork']] + ['icons/duometry-ios-1024.png']
press = ['README.md', 'asset-sources.json'] + images
press += [sources['teaser']['file'], sources['teaser']['poster']['file']]
press += [path.relative_to(root).as_posix() for path in sorted((root / 'text').glob('*.txt'))]

for filename, prefix, names in [
    ('duometry-presskit.zip', 'Duometry-Press-Kit', press),
    ('duometry-images.zip', 'Duometry-Images', images),
    ('duometry-app-store-duo.zip', 'Duometry-App-Store-Duo', app_store),
    ('duometry-raw-screenshots.zip', 'Duometry-Raw-Screenshots', screenshots),
]:
    archive = root / 'downloads' / filename
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as bundle:
        for name in names:
            bundle.write(root / name, prefix + '/' + name)
    with zipfile.ZipFile(archive) as bundle:
        assert bundle.testzip() is None
    print(f'{len(names)} files · {archive.stat().st_size / 1_000_000:.1f} MB · {archive.name}')
