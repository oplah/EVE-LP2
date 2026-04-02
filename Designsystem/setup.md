# Typography setup

This guide covers how to set up typography in your application, including font loading and Tailwind plugin configuration.

## Google Sans Flex (recommended)

Google Sans Flex is a variable font that provides multiple weights and widths in a single file.

### 1. Load the font

Choose one of the following methods:

#### Option A: HTML link tags

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..900&display=swap" rel="stylesheet">
```

#### Option B: CSS @import (Tailwind v4)

Import directly in your CSS file - ideal for Tailwind v4's CSS-first approach:

```css
/* Font import must come FIRST */
@import "https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..900&display=swap";

@import "tailwindcss";

@config "./tailwind.config.js";
```

> **Important:** The Google Fonts `@import` must be the first statement in your CSS file. CSS requires `@import` rules to precede all other rules.
>
> **Note:** Google Sans Flex requires the variable font version to support width variations (`font-variation-settings: "wdth"`). Fontsource currently only offers static font weights, which won't work with this typography system.

### 2. Configure Tailwind plugin

```typescript
// tailwind.config.ts
import typography from '@mindvalley/design-system/tailwind/plugins/typography-gsf'

export default {
  plugins: [
    typography({
      brands: ['mindvalley'], // or ['b2b'] for B2B projects
    }),
  ],
}
```

### Plugin options

```typescript
typography({
  // Class name casing (default: 'kebabCase')
  casing: 'kebabCase' | 'camelCase' | 'snakeCase' | 'pascalCase' | 'noCase',

  // Responsive breakpoints
  breakpoints: {
    tablet: '768px',   // default: theme('screens.md')
    desktop: '1024px', // default: theme('screens.lg')
  },

  // Optional class prefix
  prefix: 'mv-',

  // Brands to include
  brands: ['mindvalley', 'b2b'],
})
```

### Tailwind v4 Setup

Tailwind v4 uses a CSS-first approach and doesn't require a config file by default. However, to use the typography plugin, you'll need to create a config file and load it with the `@config` directive.

**Step 1: Create `tailwind.config.js`**

```js
// tailwind.config.js
import typography from '@mindvalley/design-system/tailwind/plugins/typography-gsf'

export default {
  plugins: [
    typography({
      brands: ['mindvalley'],
    }),
  ],
}
```

**Step 2: Load the config in your CSS**

```css
/* app.css */
@import "tailwindcss";
@config "./tailwind.config.js";
```

**Step 3: Use typography classes as normal**

```html
<h1 class="title-bold-1">Welcome</h1>
<p class="body">Body text</p>
```

This same process works for the Sharp Grotesk plugin.

### 3. Use typography classes

```html
<h1 class="title-bold-1">Welcome to Mindvalley</h1>
<p class="body">This is body text using Google Sans Flex.</p>
<button class="button-text">Click Me</button>
```

> **Important:** Typography classes are already responsive - don't add screen prefixes!
>
> ```html
> <!-- Bad -->
> <h1 class="title-bold-5 md:title-bold-3">Hello</h1>
>
> <!-- Good -->
> <h1 class="title-bold-5">Hello</h1>
> ```

---

## Sharp Grotesk (legacy)

Sharp Grotesk is the legacy typography system using static font files hosted on Fastly CDN.

### 1. Load the font

#### Direct CSS import

```css
/* Mindvalley brand */
@import '@mindvalley/design-system/typography/mindvalley/fonts.css';

/* B2B brand */
@import '@mindvalley/design-system/typography/b2b/fonts.css';
```

#### JavaScript import

```typescript
import '@mindvalley/design-system/typography/mindvalley/fonts.css'
```

### 2. Configure Tailwind plugin

```typescript
// tailwind.config.ts
import typography from '@mindvalley/design-system/tailwind/plugins/typography'

export default {
  plugins: [
    typography({
      brands: ['mindvalley'],
    }),
  ],
}
```

---

## Framework examples

### React (Vite)

```tsx
// src/main.tsx
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

```html
<!-- index.html -->
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..900&display=swap" rel="stylesheet">
</head>
```

### Next.js (App Router)

```tsx
// app/layout.tsx
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Next.js (Pages Router)

```tsx
// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

### Vue 3

```typescript
// src/main.ts
import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

createApp(App).mount('#app')
```

```html
<!-- index.html -->
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..900&display=swap" rel="stylesheet">
</head>
```

### Phoenix (Elixir)

Add to your layout template (`lib/your_app_web/components/layouts/root.html.heex`):

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..900&display=swap" rel="stylesheet">
</head>
```

**For Sharp Grotesk with PostCSS/SCSS:**

Configure `postcss-import` to resolve from `node_modules`:

```javascript
// assets/postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['node_modules']
    }),
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
```

Then import in SCSS:

```scss
// assets/css/app.scss
@import '@mindvalley/design-system/dist/typography/mindvalley/fonts.css';
```

> **Note:** When using `@import` with `postcss-import`, use the full `dist/` path.

### CSS-in-JS (Styled Components)

```tsx
import { createGlobalStyle } from 'styled-components'

// Add the Google Fonts link tag to your HTML head

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Google Sans Flex', Helvetica, Arial, sans-serif;
  }
`

export default function App() {
  return (
    <>
      <GlobalStyles />
      {/* Your app content */}
    </>
  )
}
```

---

## Troubleshooting

### Fonts not loading

1. **Check link tags**: Ensure the Google Fonts link is in your HTML `<head>`
2. **CDN access**: Ensure your app can reach `fonts.googleapis.com`
3. **Variable font support**: Verify your browser supports variable fonts

### TypeScript errors

If you get TypeScript errors when importing CSS:

```typescript
// src/types/css.d.ts
declare module '*.css' {
  const content: string
  export default content
}
```

### PostCSS import issues

When using `@import` in SCSS/CSS with `postcss-import`, use the full `dist/` path:

```scss
/* Works */
@import '@mindvalley/design-system/dist/typography/mindvalley/fonts.css';

/* May not work */
@import '@mindvalley/design-system/typography/mindvalley/fonts.css';
```

---

## Related

- [Migration Guide](migration.md) - Migrate from Sharp Grotesk to Google Sans Flex
- [Typography Overview](README.md) - Class reference and overview
