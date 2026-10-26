# What changed

## Why the two stylesheets fought
Both files styled the same plain selectors: `body`, `.card`, `.grid`, `h2`, `h3`, `ul`, `li`, `button`, `.cta` and `:root`.
Whichever loaded last won, so the pricing page changed the main page's background and cards.
Now there is one stylesheet:
- Shared base (colors, fonts, buttons, nav, footer) uses variables and applies to both pages.
- Pricing styles are namespaced: `.ticket`, `.price-grid`, `.ticket-cta`, `.price-note`, `.toggle`. The photo cards stay `.card`.
- No page-specific styles on `body`, `h2`, `ul` or `button` any more.

## Bugs fixed
- Pricing is now a real page (`pricing.html`, it was empty) and the nav links to it; the old `index (1).html` and `style (1).css` are gone.
- Stray "N" after the hero image removed; dead links fixed (logo, Contact, Book Now); Blog link removed (there was no blog).
- "Other Services" cards now show real services with prices (they were copies of the "Why choose" cards with empty image URLs), and they open on click (the old script only found the first group).
- Scrolling strip loops cleanly (the list is duplicated) and stops for reduced-motion users.
- One `<h1>` per page, all other headings are `<h2>`/`<h3>`; unclosed section fixed; heading-inside-span fixed.
- Typos: Unparalled, Everytime, "turn beat the dirt of you your car".
- Folder names lowercase (`fonts`, `icons`) and no spaces in file names, which breaks less on hosting.
- Added a footer with contact details, hours and area, a closing "Ready for a shine?" band, and a page description.
- Lorem ipsum replaced with short, generic copy.

## Weight
Images went from about 6.9 MB to about 370 KB (WebP, resized). Two of the old photos were over 4000px wide.

## Check before launch
- The "Why choose" claims (plant-based products, coatings that last months, under two hours) are from your original text. Make sure each client can say them.
- The "1,483+ Happy Customers" figure is your placeholder. Replace it with a real number or delete that block.
- Phone, WhatsApp, email, hours and area are placeholders.
- Two photos are small (the exterior shot is 600px wide and the paint shot 632px), so they soften on big screens.

## Other Services + Location
- Other Services is now a sideways scroller of photo cards: price on the photo, name in a frosted label, and a progress bar instead of the browser scrollbar (drag the thumb or click the track). Photos go in `images/services/` (see the README.txt there); without a photo a card shows a dark gradient.
- Four cards use your pricing tiers (Engine Wash R90, Full House + Polish R200, Auto Valet R450, Claybar + Polish R650). The other four come from your hero service list and say "Get a quote" because no price was set; add prices in `index.html` when you have them.
- New Location section after the "Ready for a shine?" band: name, address, hours, phone and a map panel. The map is a drawn placeholder (no iframe, no tracking); the "Visit Us Today!" pill opens Google Maps for the address in `SITE.address` (`js/site.js`). To show a real embedded map instead, replace the `<svg class="loc-svg">` with a Google Maps `<iframe>`.
- "See the map" link added in the footer.
