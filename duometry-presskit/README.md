# Duometry press kit

Standalone Jekyll page following the µBrowser 5.0 and µAI press kits. Public route after website deployment: `/duometry-presskit/`. The minimal `/duometry-presskit/short/` page shows only the teaser player and TestFlight button. The existing dark/citron palette, typography, expandable sections and copy controls are retained. `layout: null`, `sitemap: false` and `noindex, nofollow` remain in place.

## Contents

- Current English and German press copy and fact sheet in `text/`.
- Current graphite/citron app icon, 1024 × 1024 PNG, in `icons/`.
- 17 original English screenshots: ten Duo images in light/dark at 1398 × 2034, and seven iPhone 18 Pro images at 1206 × 2622.
- Three feature images at 2400 × 1600 in `artwork/`.
- Approved 21-second English teaser trailer, 1920 × 1080 at 30 fps, with the Digital Clouds soundtrack. The original MP4 is copied byte-for-byte; the poster is extracted at 1.8 seconds. Both pages share these files in `videos/`.
- Existing captioned, silent 2:34 feature-tour video, labelled as showing an earlier interface.
- Complete asset bundle: `downloads/duometry-presskit.zip`.
- Image-only bundle with editable artwork sources: `downloads/duometry-images.zip`.

Original screenshot PNG bytes are unchanged. The native simulator captures are from September 27, 2026. Duo uses sample hinge input; iPhone uses the production slider game. All scores are computed by the app. Development chrome was hidden only in a disposable copy of the app. Feature images use rounded graphic frames, not hardware renders. `asset-sources.json` records source paths relative to the Duometry app project and checksums for current screenshots/artwork. Legacy screenshot filenames remain on disk for old direct links; they are not shown in the current page or included in the rebuilt full ZIP.

## Product copy

Solo and Together keep the target number visible and hide the current input until reveal. Daily Fold and By Eye are the memory challenges: three targets each day, with the target hidden before guessing, weekly progress, saved official results and practice. Daily attempts persist; active Solo/Together sessions do not. The kit also describes Free Measure, appearance choices and offline play. English and German refer to the press-copy languages; screenshots are English.

## TestFlight

Public beta invitation: [https://testflight.apple.com/join/PUm89hu7](https://testflight.apple.com/join/PUm89hu7). The header CTA, beta section, English and German press copy, fact sheet, and short page use this URL. When changing the invitation link, update those locations and rebuild the complete press ZIP. Price and release date remain unannounced.

## Maintenance

Copy controls are in the existing `presskit.js`; descriptions, downloads, TestFlight links and details sections work without JavaScript. Preview through Jekyll so front matter is removed. The page has no Liquid expressions or layout dependencies, so an isolated static preview can also remove only the YAML front matter.

After editing assets or text, run `python3 _tools/rebuild_downloads.py` from this directory. The full ZIP includes only the current manifest-listed screenshots/artwork, icon, both videos and their posters, press text, README and provenance manifest. The image-only ZIP is supplied from the Duometry app project’s `Design/PressKit/Duometry-Press-Images.zip`.
