# Duometry press kit

Standalone Jekyll page following the µBrowser 5.0 and µAI press kits. Public route after website deployment: `/duometry-presskit/`. The minimal `/duometry-presskit/short/` page shows the teaser player, a prominent App Store button and a secondary TestFlight link. The existing dark/citron palette, typography, expandable sections and copy controls are retained. `layout: null`, `sitemap: false` and `noindex, nofollow` remain in place.

## Contents

- Current English and German press copy and fact sheet in `text/`.
- Selected press coverage from Andru Edwards, UrAvgConsumer, MacRumors and iGeneration, displayed in an open section below the trailer. Two responsive video cards load official YouTube-hosted thumbnails on demand and link to the original videos; the Andru Edwards link starts at 3:06. No embedded player is loaded. Article links follow beneath, and the main header links directly to the section. `text/duometry-coverage.txt` includes all four source links and is part of the standard press ZIP; third-party thumbnails are not bundled.
- Current graphite/citron app icon, 1024 × 1024 PNG, in `icons/`.
- Six current, unframed English screenshots in a collapsed section at the end: three Duo inner-display captures at 2007 × 2853 and three iPhone captures at 1206 × 2622. Individual original PNG downloads and `downloads/duometry-raw-screenshots.zip` are available.
- Three feature images at 2400 × 1600 in `artwork/`.
- Five English App Store Duo images, 2007 × 2853, in `screenshots/app-store-duo/`. The expandable section follows the feature images. Original marketing wording and device frames are preserved. Individual PNGs and `downloads/duometry-app-store-duo.zip` are available.
- Approved 37-second English press-kit trailer, 1920 × 1080 at 30 fps, with explanatory text and the Digital Clouds soundtrack. Main menu → Solo → multiplayer → Free Measure. The original MP4 and its one-second poster are copied byte-for-byte from PressKit v1. Both pages share these files in `videos/`.
- A direct MP4 download of the approved 37-second Social v1 edition without explanatory text overlays. Native app text and the closing brand remain. The soundtrack is retained; this is not the silent edition. Both videos are separate downloads from the [online press kit](https://arno.app/duometry-presskit/#teaser-video), keeping the standard ZIP small.
- The earlier 21-second trailer, its poster and the older feature tour remain at their original URLs for existing links, but are excluded from the current page and downloads.
- Standard press bundle with images, icon, trailer poster, press text and source notes: `downloads/duometry-presskit.zip`. MP4 videos are not included.
- Image-only bundle with the selected raw screenshots, App Store Duo images, feature artwork and icon: `downloads/duometry-images.zip`.

The six raw PNGs are copied unchanged from the October 6–7, 2026 App Store capture set. Their RGB pixels match the native Simulator originals; only redundant opaque alpha was removed in the capture delivery. Production SwiftUI views use deterministic sample input and players. No device frames, promotional text or crops are added. Feature images retain the September 2026 artwork. `asset-sources.json` records source paths and checksums. Earlier screenshot files remain on disk for old direct links, but are excluded from the current gallery and rebuilt ZIPs.

The Duo marketing images are copied unchanged from `Design/AppStore/2026-10-08-Duo-Framed-v1-Localized/Promos/en/`. The source set records official Apple frames for images 02–04. It labels the folded images 01 and 05 as concept renders using the existing trailer model, with commercial rights unverified. This provenance status is retained in `asset-sources.json`; inclusion here does not establish rights clearance.

The videos use native SwiftUI Simulator footage with scripted hinge and press input, composited onto the same existing device model. Its commercial rights remain unverified. Source hashes, frame dimensions, duration and capture provenance for both video editions are recorded in `asset-sources.json`.

## Product copy

The English and German descriptions cover guessing angles, solo and group play, Daily challenges, Free Measure / Explore Angles, and offline use. Compatibility, player count, languages, availability, price and developer details are kept in the compact fact sheet. Screenshots remain in English.

## Release and TestFlight

Duometry is available for US$2.99, released on Monday, October 19, 2026. App Store: [https://apps.apple.com/app/id6814650592](https://apps.apple.com/app/id6814650592). Apple's public listing and US price were verified on October 22, 2026. The main header and short page make the App Store download the primary action. The fact sheet and downloadable English/German text also include the release details and App Store link.

Public beta invitation: [https://testflight.apple.com/join/PUm89hu7](https://testflight.apple.com/join/PUm89hu7). The main header and short page retain this URL as a secondary link. Downloadable English/German text and the fact sheet also include it so they can be shared independently. When changing release details or either Apple link, update those locations and rebuild the complete press ZIP.

## Maintenance

On-page English/German descriptions and facts use short prose; their text downloads add TestFlight and contact information. Image sizes appear once per group. Detailed provenance and soundtrack credits stay in this README and the manifest. Copy controls are in the existing `presskit.js`; descriptions, downloads, TestFlight links and details sections work without JavaScript. Preview through Jekyll so front matter is removed. The page has no Liquid expressions or layout dependencies, so an isolated static preview can also remove only the YAML front matter.

After editing assets or text, run `python3 _tools/rebuild_downloads.py` from this directory. The standard ZIP includes the current manifest-listed raw screenshots, App Store Duo images and artwork, icon, the press trailer's poster, press text, README and provenance manifest. Both MP4s remain separate downloads on the page. The same manifest also generates the image-only, App Store Duo and raw-screenshot ZIPs, keeping every download aligned with the page. The raw ZIP contains only the six PNGs; the Duo ZIP contains only its five original PNGs; the image ZIP includes both sets, feature artwork and the app icon. `/short/` retains its compact player layout, uses the current press trailer and leads with the App Store download.
