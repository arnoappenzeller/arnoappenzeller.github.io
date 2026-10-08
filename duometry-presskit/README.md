# Duometry press kit

Standalone Jekyll page following the µBrowser 5.0 and µAI press kits. Public route after website deployment: `/duometry-presskit/`. The minimal `/duometry-presskit/short/` page shows only the teaser player and TestFlight button. The existing dark/citron palette, typography, expandable sections and copy controls are retained. `layout: null`, `sitemap: false` and `noindex, nofollow` remain in place.

## Contents

- Current English and German press copy and fact sheet in `text/`.
- Current graphite/citron app icon, 1024 × 1024 PNG, in `icons/`.
- Six current, unframed English screenshots in a collapsed section at the end: three Duo inner-display captures at 2007 × 2853 and three iPhone captures at 1206 × 2622. Individual original PNG downloads and `downloads/duometry-raw-screenshots.zip` are available.
- Three feature images at 2400 × 1600 in `artwork/`.
- Approved 21-second English teaser trailer, 1920 × 1080 at 30 fps, with the Digital Clouds soundtrack. The original MP4 is copied byte-for-byte; the poster is extracted at 1.8 seconds. Both pages share these files in `videos/`.
- Existing captioned, silent 2:34 feature-tour video, labelled as showing an earlier interface.
- Complete asset bundle: `downloads/duometry-presskit.zip`.
- Image-only bundle with the selected raw screenshots, feature artwork and icon: `downloads/duometry-images.zip`.

The six raw PNGs are copied unchanged from the October 6–7, 2026 App Store capture set. Their RGB pixels match the native Simulator originals; only redundant opaque alpha was removed in the capture delivery. Production SwiftUI views use deterministic sample input and players. No device frames, promotional text or crops are added. Feature images retain the September 2026 artwork. `asset-sources.json` records source paths and checksums. Earlier screenshot files remain on disk for old direct links, but are excluded from the current gallery and rebuilt ZIPs.

## Product copy

Solo and Together keep the target number visible and hide the current input until reveal. Daily Fold and By Eye are the memory challenges: three targets each day, with the target hidden before guessing, weekly progress, saved official results and practice. Daily works with folding on Duo or the dial on other iPhones. Daily attempts persist; active Solo/Together sessions do not. The kit also describes Free Measure, appearance choices and offline play. English and German refer to the press-copy languages; screenshots are English.

## TestFlight

Public beta invitation: [https://testflight.apple.com/join/PUm89hu7](https://testflight.apple.com/join/PUm89hu7). The header CTA, beta section, English and German press copy, fact sheet, and short page use this URL. When changing the invitation link, update those locations and rebuild the complete press ZIP. Price and release date remain unannounced.

## Maintenance

Copy controls are in the existing `presskit.js`; descriptions, downloads, TestFlight links and details sections work without JavaScript. Preview through Jekyll so front matter is removed. The page has no Liquid expressions or layout dependencies, so an isolated static preview can also remove only the YAML front matter.

After editing assets or text, run `python3 _tools/rebuild_downloads.py` from this directory. The full ZIP includes only the current manifest-listed screenshots/artwork, icon, both videos and their posters, press text, README and provenance manifest. The same manifest also generates the image-only and raw-screenshot ZIPs, keeping every download aligned with the page. The raw ZIP contains only the six PNGs; the image ZIP adds feature artwork and the app icon. `/short/` stays unchanged.
