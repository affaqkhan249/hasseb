# Elite Holidays — Hero Section (React + Tailwind CSS)

A pixel-accurate recreation of the Elite Holidays travel agency hero section, built with React, Vite, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar/Navbar.jsx          Top contact bar + floating nav with mobile menu
    Hero/Hero.jsx               Hero heading, features, buttons, background
    ConsultationForm/
      ConsultationForm.jsx      "Get a Free Consultation" form card
    WhatsAppButton/
      WhatsAppButton.jsx        Fixed bottom-right WhatsApp button
  App.jsx
  main.jsx
  index.css                     Tailwind directives + base styles
tailwind.config.js               Custom brand colors, shadows, font
postcss.config.js
index.html
```

## Notes

- **Hero background image**: the project hot-links a stock travel photo from Unsplash as a stand-in for the reference photo (couples cannot be reliably sourced/licensed automatically). To use your own image:
  1. Drop your file into `src/assets/` (e.g. `hero-bg.jpg`).
  2. In `src/components/Hero/Hero.jsx`, replace the `HERO_IMAGE_URL` constant with an import:
     ```jsx
     import heroImage from "../../assets/hero-bg.jpg";
     // ...
     style={{ backgroundImage: `url(${heroImage})` }}
     ```
- **Fonts**: Poppins is loaded via Google Fonts `<link>` tags in `index.html` (weights 300–800).
- **Icons**: all icons come from `react-icons/fa` (Font Awesome set).
- **Colors**: the brand palette is defined as custom Tailwind colors in `tailwind.config.js` (`primary-navy`, `dark-navy`, `brand-blue`, `gold`, `light-gold`, etc.) so you can reuse them anywhere with classes like `bg-dark-navy` or `text-gold`.
- **Responsive**: the layout stacks vertically below the `lg` breakpoint — the form moves under the hero text, the nav collapses into a hamburger menu, and buttons go full width on small screens.
- **Accessibility**: semantic landmarks, labelled form fields, and visible focus rings (`focus-visible`) are included throughout.
