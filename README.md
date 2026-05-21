# Express Bus — Captive Free WiFi Portal

Mobile-first React + Vite + Tailwind CSS implementation of the Stitch designs
for the Express Bus on-board captive portal.

## Screens

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/screens/WifiLogin.jsx` | Email-only WiFi sign-in |
| `/connected` | `src/screens/Connected.jsx` | Success screen + auto-redirect |
| `/magazine` | `src/screens/EMagazine.jsx` | e-Magazine bento grid |
| `/vouchers` | `src/screens/MyVouchers.jsx` | Voucher list + loyalty banner |
| `/vouchers/:id` | `src/screens/VoucherDetail.jsx` | Voucher detail + QR modal |

A `TopAppBar` and `BottomNavBar` are shared by `AppLayout`. The voucher detail
screen has its own header with a back button.

## Develop

```bash
npm install
npm run dev
```

The dev server listens on `0.0.0.0:5173`.

## Build

```bash
npm run build
npm run preview
```

## Design tokens

Material 3 color, type and spacing tokens from the Stitch designs are mapped
into `tailwind.config.js`. Use Tailwind classes like `bg-primary`,
`text-on-surface-variant`, `font-headline-lg-mobile`, `text-headline-lg-mobile`,
`px-container-margin-mobile`, etc.

Icons use Material Symbols Outlined via the `<Icon name="..." />` component;
pass `filled` to switch to the filled variant.
