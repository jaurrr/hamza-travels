# Hamza Travels — Changes (October 2026)

Hello Belal bhai! This file explains every change made to the website in this
update. Nothing is deleted — all your old pages still work.

---

## 1. Homepage cards are now clickable

The 4 cards on the home page (Travel, Documents, College Related Services,
Support) can now be clicked. Each card title opens the Services page, and the
small items inside each card open the correct service page directly.

### Card mapping (which link opens which page)

| Card | Card title opens | Small items open |
|------|-----------------|------------------|
| Travel | /services | Flight Ticket → Flight Ticket Booking page; Train Ticket → Train Ticket Booking page; Hotel Booking → Hotel Booking page |
| Documents | /services | PAN Card → PAN Card Services page; Passport → Passport Services page; Aadhaar Card → Aadhaar Card Services page |
| College Related Services (NEW — replaced "Online Service" card) | /services | Scholarship → Scholarship Services page; Admission Forms → College Admission Forms page; Exam Forms → Examination Form Services page |
| Support | /contact | WhatsApp Help → WhatsApp chat (message pre-written); Call Us → phone call |

---

## 2. "Apply Now" is now "Enquire Now"

Every "Apply Now" button on the whole website now says **"Enquire Now"**.
Clicking it opens a very simple form with only ONE box: **Your Name**
(writing your name is optional, not compulsory).

After clicking the button, WhatsApp opens automatically with a ready message,
for example:

> Hi Hamza Travels! I want to enquire about Flight Ticket Booking. My name is Rahul.

If the name box is left empty, the message is sent without the name part.
Your shop number **919935212224** receives all enquiries.

---

## 3. Hindi / English language button

There is now a language button (EN | हिं) in the top menu. The FULL website —
every heading, button, service name and description — is translated into Hindi.
The website remembers the visitor's choice. Service names and details also
change to Hindi.

⚠️ **Please check the Hindi text** (see "NEEDS YOUR INPUT" below).

---

## 4. New scrolling home page

The home page is now one long scrolling page with sections: Home → Popular
Services → About → Explore → Contact. Scrolling highlights the correct menu
item automatically. Gentle scroll-snap is used (it never forces or traps
scrolling).

New sections added to the home page:
- **Popular Services** — 8 most-used services with a "View all" button.
- **Why Choose Us** — includes your **50% advance payment** policy.
- **Customer Reviews** — 3 sample reviews are shown as SAMPLE. You must
  replace them with real customer reviews (see "NEEDS YOUR INPUT").
- **Big WhatsApp button** — "Chat on WhatsApp Now" with a ready message.

---

## 5. Explore page — destinations are clickable

All 12 destination cards (Makkah, Madinah, Dubai, Thailand, Kashmir, Goa,
etc.) are now clickable. Clicking a card opens WhatsApp with a ready message
like: "Hi Hamza Travels! I want to know more about Dubai."

---

## 6. WhatsApp links now carry a ready message

Every WhatsApp button on the website (home page, contact page, footer,
floating button) now opens WhatsApp with a pre-written message, so customers
don't face a blank chat. Two numbers are used, same as before:
- **919935212224** — for customer enquiries (footer, floating button, forms)
- **919682742861** — only for "Talk to Owner" links

---

## 7. Other fixes

- **Spelling fixed:** "Benificary" → "Beneficiary", "/RC" → "/ RC",
  "Village Camping" → **"Village Camp"** (please confirm this name — see below).
- **"100+ Services" → "46+ Services"** (the real number of services).
- **Voice search** (microphone in search box): if it fails, the visitor now
  sees a clear message instead of nothing happening.
- **Wrong address (404) page:** opening a wrong link now shows a proper
  "Page Not Found" page with buttons to go Home — instead of silently
  redirecting.
- **Google/SEO:** every page now has its own title and description in both
  English and Hindi, so Google shows the correct text for each page.
- **Splash screen** (Hamza Travels logo animation) now shows only on the
  first visit, not on every page reload.
- **Big screens:** the website now looks correct on very large monitors
  (28-inch), and nothing overlaps on small phones (360px width).
- **Dark mode:** all changed sections also look correct in dark mode.
- **No invented prices:** wherever charges were not fixed, the website still
  says "Contact us for charges" — no fake prices were added anywhere.

---

## NEEDS YOUR INPUT (please confirm these 5 things)

1. **"Village Camp" name** — the service was named "Village Camping / All
   Types of Services". Spelling is fixed to "Village Camp / All Types of
   Services". Please confirm this is the correct name.
2. **Customer reviews** — the 3 reviews on the home page are clearly marked
   SAMPLE. Please send 3 real customer reviews (name + their words) to
   replace them.
3. **College card links** — the new "College Related Services" card links to
   Scholarship, College Admission Forms, and Examination Form Services pages.
   Please confirm these 3 links are correct.
4. **Hindi text** — all Hindi translations were written carefully, but please
   read the Hindi version once and tell us if any word sounds wrong.
5. **Prices** — no prices were invented. If you want fixed prices shown for
   any service, please share the price list.

---

## How to use this update (for Jauhar)

1. Extract this ZIP over the `hamza-update` branch folder (replace files).
2. Test locally: `npm install` then `npx ng serve` — check EN/Hindi toggle,
   enquiry flow, and all card links.
3. If everything looks good, merge `hamza-update` into `main` (Vercel
   redeploys automatically).

**Build status:** `npx ng build --configuration production` passes
(only a pre-existing bundle-size warning). Tested with Angular 22.

---

## 8. Language button is now a small A/अ button (2026-10-02)

The old EN | हिंदी strip in the top bar is replaced with a small button that
looks exactly like the night-mode button. It shows **A** for English and **अ**
for Hindi. One click switches the whole website's language.

---

## 9. No more flashing codes on page load (2026-10-02)

**Problem:** On refresh, strange codes like `nav.home`, `nav.services`
flashed for a second before the real text appeared.

**Fix:** The page now waits for the language files to load before showing
anything. Correct text appears directly — no flashing codes.

---

## 10. Real customer reviews (2026-10-02)

The 3 sample reviews are replaced with real ones:
- **Ranjeet** — PAN Card Service — 4 stars
- **Fahad Azmi** — Flight Booking — 5 stars
- **Seema** — Scholarship Form — 3 stars

The "SAMPLE" badge is removed. Each review's star rating can be changed
anytime — just tell Jauhar the new number.

---

## 11. Smoother scrolling on the home page (2026-10-02)

**Problem:** Scrolling on the home page felt like it was getting "stuck",
as if the website was hanging.

**Fix:** Long sections (Services, About, Explore...) now scroll completely
freely. The gentle snap effect stays only on short sections. Scrolling feels
smooth now.
