# Carline Dad Enterprises

Marketing site for [thecarlinedad.com](https://thecarlinedad.com)—products, teaching, and business contact.

## Stack

- [Astro](https://astro.build) (static)
- Deployed on [Vercel](https://vercel.com)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Configuration

Edit `src/config/site.ts` for business name, email, Skool URL, and domain.

Product cards live in `src/data/products.ts`.

Optional contact form: set `PUBLIC_FORMSPREE_ID` in Vercel (see `.env.example`).

## Deploy to Vercel

1. Push this repo to GitHub (`chris-712interactive/carlineDadEnterprises`).
2. In Vercel: **Add New Project** → import the repo.
3. Framework preset: **Astro** (auto-detected).
4. Add domain **thecarlinedad.com** (and `www` redirect to apex or vice versa).
5. DNS at your registrar:
   - Apex: `A` record → `76.76.21.21` (Vercel)
   - Or `CNAME` `www` → `cname.vercel-dns.com`
6. Submit `https://thecarlinedad.com` in Stripe when live.

## Stripe checklist

- [ ] Site live on HTTPS
- [ ] Business name matches Stripe application
- [ ] `/contact` with support email
- [ ] `/privacy` and `/terms` published
