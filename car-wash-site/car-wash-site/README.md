# Car wash site (white-label)

Plain HTML, CSS and JavaScript. Open `index.html` in a browser to run it.

    index.html      home page
    pricing.html    pricing page (Car / SUV toggle)
    css/styles.css  the one stylesheet for both pages
    js/site.js      client details at the top, plus the card and pricing behavior
    images/ fonts/ icons/

## Setting it up for a new client

1. Open `js/site.js` and edit the `SITE` block: brand name, phone, WhatsApp number, email, hours, area.
   Every `data-brand`, `data-phone`, `data-whatsapp` and so on in the HTML fills from there, and
   "Book Now" opens WhatsApp with a ready-made message.
2. Change the `<title>` and description in the `<head>` of each page.
3. Edit prices in `pricing.html` (`data-car` and `data-suv` on each ticket, and the big number inside it).
4. Swap photos in `images/` (keep the file names, or update the `url(...)` lines near the cards in `styles.css`).
5. Brand colors are variables at the top of `styles.css` (`--accent`, `--dark`, `--page`).

## Also in `js/site.js`
`address` feeds the Location section and the "Visit Us Today!" button (opens Google Maps). Service photos go in `images/services/`.
