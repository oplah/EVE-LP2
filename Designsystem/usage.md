# Usage guide

## Installation

### Using npm or yarn

We recommend using either npm or yarn to install, as per your own preference.

```bash
npm install @mindvalley/design-system
```

```bash
yarn add @mindvalley/design-system
```

The package supports both ES module syntax and CommonJS syntax.

#### *ES module syntax*

```js
  import { colors } from '@mindvalley/design-system'
```

#### *CommonJS syntax*

```js
  const { colors } = require('@mindvalley/design-system')

```

## 🎨 colors

To use the colors from the design system there are two options.

### 1. TailwindCSS

If you use TailwindCSS in your project, using the colors is a simple two-step process:

1. Install the design system. See [installation](#using-npm-or-yarn).
2. Use the [CommonJS syntax](#commonjs-syntax) to include the colors and extend your `tailwind.config.js`.

*Example tailwind.config.js*

```js
  const { colors } = require('@mindvalley/design-system')

  module.exports = {
    theme: {
      colors: {
        ...colors
      }
    }
  }
```

For other brands (e.g., B2B), you can access and combine colors from the core Mindvalley brand
and override the redefined colors using the B2B-specific colors.

```js
  const { colors } = require('@mindvalley/design-system');
  const { colors: b2bColors } = require('@mindvalley/design-system/b2b');

  module.exports = {
    theme: {
      colors: {
        ...colors,
        ...b2bColors
      }
    }
  }
```

#### Tailwind v4

Tailwind v4 uses a CSS-first approach and doesn't require a config file by default. However, to use the design system colors, you'll need to create a config file and load it with the `@config` directive.

**Step 1: Create `tailwind.config.js`**

```js
// tailwind.config.js
import { colors } from '@mindvalley/design-system'

export default {
  theme: {
    colors: {
      ...colors
    }
  }
}
```

For B2B projects:

```js
// tailwind.config.js
import { colors } from '@mindvalley/design-system'
import { colors as b2bColors } from '@mindvalley/design-system/b2b'

export default {
  theme: {
    colors: {
      ...colors,
      ...b2bColors
    }
  }
}
```

**Step 2: Load the config in your CSS**

```css
/* app.css */
@import "tailwindcss";
@config "./tailwind.config.js";
```

**Step 3: Use color classes as normal**

```html
<div class="bg-brand-accent text-white">...</div>
```

### Why the override?

Both brands share color names, but their hues and shades differ. The override ensures B2B developers get brand-specific shades.

Here is the full list of [B2B colors](https://www.figma.com/file/1EPj7v5H5JhP2d0v2h8QeC/B2B-Foundations?type=design&node-id=1-395&mode=design&t=SY5HTy1zbFO5p80n-0).

#### Gradients

For gradients you can use the following TailwindCSS presets:

- Purple wave: `from-brand-accent to-purple-600`
- Orange Wave: `from-orange-500 to-orange-600`
- Yellow wave: `from-yellow-400 to-yellow-500`
- Blue Wave: `from-blue-600 to-blue-700`
- Grey wave (150 - white): `from-cool-grey-150 to-white`
- Gray wave (600 - 700): `from-cool-gray-600 to-cool-gray-700`

Example use:

```html
  <div class="bg-gradient-to-b from-brand-accent to-purple-600 ..."></div>
```

Will give you purple wave gradient.

##### 💡 Note

If you'd like other custom names, you can make [tailwindcss color customizations](https://tailwindcss.com/docs/customizing-colors#using-the-default-colors) to the provided values and use them in your code.

### 2. Using CSS-in-JS

1. Install the design system. See [installation](#using-npm-or-yarn).
2. Use the [ES module](#es-module-syntax) syntax to import your module and include it in your code.

 *Sample usage in a React app*

```js
  import React from 'react'
  import { colors } from '@mindvalley/design-system'

  function App() {
    const isBackgroundRed = true;

    return (
      <div
        style={{
          backgroundColor: isBackgroundRed ? colors.red : colors.blue,
        }}
      />
    );
  }

  export default App;
```

## 🖋️ Typography

### Loading typography fonts

Before using the typography plugin, load the required fonts:

**Google Sans Flex**

```html
<!-- Add to your HTML <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wdth,wght@75..125,100..900&display=swap" rel="stylesheet">
```

> **Note:** Google Sans Flex requires the variable font version to support width variations. Fontsource currently only offers static font weights, which won't work with this typography system.

**Sharp Grotesk**

```javascript
import '@mindvalley/design-system/typography/mindvalley/fonts.css'
```

> 📖 For framework-specific examples (Next.js, React, Vite, Vue, Phoenix) see the [Typography Setup Guide](typography/setup.md).

### Typography plugin (TailwindCSS)

We provide a TailwindCSS typography plugin that lets developers use Figma typography class names directly, without configuring font sizes, line heights, or font families manually.

> ⚠️ **Important:** Typography classes are already responsive - don't add screen prefixes!
>
> ```html
> <!-- ❌ Bad -->
> <h1 class="title-bold-5 md:title-bold-3">Hello</h1>
>
> <!-- ✅ Good -->
> <h1 class="title-bold-5">Hello</h1>
> ```

#### How to use it?

To match Figma typography values in your code:

1. Install the design system as described in the [install section](#using-npm-or-yarn).

2. Load the typography fonts using one of the methods described in [Loading Typography Fonts](#loading-typography-fonts) above.

3. Require and use the Tailwind typography plugin in your `tailwind.config.js` file.

   **Google Sans Flex (Recommended):**

      ```js
      module.exports = {
        ...
        plugins: [
          require('@mindvalley/design-system/dist/tailwind/plugins/typography-gsf.js')()
        ],
        ...
      }
      ```

   **Sharp Grotesk (Legacy):**

      ```js
      module.exports = {
        ...
        plugins: [
          require('@mindvalley/design-system/dist/tailwind/plugins/typography.js')()
        ],
        ...
      }
      ```

   > 📖 **Migrating?** See the [GSF Migration Guide](typography/migration.md) for details on switching from Sharp Grotesk to Google Sans Flex.

   <!-- -->

   > ⚠️ **Tailwind v4:** Tailwind v4 does not use js config files. To use the typography plugins see [Tailwind v4 typography Setup guide](typography/setup.md#tailwind-v4-setup) for details.

4. Find the name to use by inspecting the selected text on the Figma design file.

![Getting Class Name](getting-class-name.png)

1. Use the class name as follows. Remember to adjust that according to the casing option if you are not using the default.

```html
<p class="button-text">...</p>

<!-- This won't work as the button-text class generated is already responsive -->
<p class="button-text lg:button-text">...</p>
```

*Note that*

- The typography plugin by default, generates Kebab cased class names, such as `title-bold-1`.  However, you can customize the class name casing by passing a `casing` option to the plugin. Supported casing options include `snakeCase`, `camelCase`, `pascalCase`, and `noCase`.

Here is how to pass the casing:

  ```js
  module.exports = {
  ...
    plugins: [
      // GSF plugin
      require('@mindvalley/design-system/dist/tailwind/plugins/typography-gsf.js')({ casing: "noCase" }),
      // Or Sharp Grotesk plugin
      // require('@mindvalley/design-system/dist/tailwind/plugins/typography.js')({ casing: "noCase" }),
    ],
    ...
  }
  ```

  Output:
  When using `noCase`, the generated CSS class will look like this:

  ```css
  .titlebold8 {
    ...
  }
  ```

##### Generated CSS reference

Here's an example of the responsive CSS generated for `title-bold-5`:

```css
.title-bold-5 {
  font-family: 'Sharp Grotesk Cyr Semibold 20', Helvetica, Arial, 'sans-serif';
  font-size: 1.5rem;
  letter-spacing: 0.015625rem;
  line-height: 1.875rem;
}
/* configured-breakpoint value is the value of the breakpoint identifier you pass in the plugin configuration. */
@media (min-width: <configured-breakpoint>) {
  .title-bold-5 {
    font-size: 1.75rem;
    line-height: 2.125rem;
  }
}
```

#### Configuring the brand

The design system supports multiple brands: Mindvalley (core) and B2B. Each brand has typography tokens for consistent styling across projects.

To configure the typography for a specific brand within your TailwindCSS setup, you will need to adjust your `tailwind.config.js` file to include the brand-specific typography tokens.

Here's how you can configure the brand:

1. In your `tailwind.config.js` file, require and configure the typography plugin with the brand option.

For the core Mindvalley brand:

```js
module.exports = {
// ...
  plugins: [
    require('@mindvalley/design-system/dist/tailwind/plugins/typography.js')({
      brands: ['mindvalley']
    }),
  ],
  // ...
}
```

This is the same as the default config and ends up rendering typography classes for Mindvalley's core
design. You can omit this if you are working with just the normal Mindvalley brand.

For the B2B brand:

```js
module.exports = {
// ...
  plugins: [
    require('@mindvalley/design-system/dist/tailwind/plugins/typography.js')({
      brands: ['mindvalley', 'b2b']
    }),
  ],
  // ...
}
```

This configuration will generate the necessary CSS classes for typography based on the tokens defined for each brand.
You can then use these classes in your HTML or JSX files to apply the correct typography styles for the brand
you are working on.

Note: B2b brand builds on top of the core brand typography with an additional specific typography style. As such we have to have both options added to the brands config list for both to be included.

Browse [B2B foundations figma file](https://www.figma.com/file/1EPj7v5H5JhP2d0v2h8QeC/B2B-Foundations?type=design&node-id=139-11&mode=design&t=SY5HTy1zbFO5p80n-0) to see the specific typography.

#### Configuring the prefix

To customize the class names further, you can prepend a prefix to all typography class names generated by the plugin. This is particularly useful for specific naming conventions.

Here is how to pass the prefix:

```js
module.exports = {
  ...
  plugins: [
    require('@mindvalley/design-system/dist/tailwind/plugins/typography.js')({
      prefix: "mv-type--", // Your desired prefix
      // other options...
    }),
  ],
  ...
}
```

**Output:**
When using `mv-type--`, the generated CSS class will look like this:

```css
.mv-type--title-bold-3 {
  ...
}
```

#### Configuring the breakpoint

By default, the plugin uses the `lg` breakpoint from the [screen size configuration](https://tailwindcss.com/docs/screens) in your Tailwind configuration. If you have a different configuration or naming convention for your Tailwind breakpoints, you can specify the identifier of the desired breakpoint using the `breakingPoint` option in the plugin configuration.

For example, let's say you have a custom tailwind configuration that uses a different naming convention.
You'll need to make the plugin aware of the `breakingPoint` boundary between the desktop and mobile/tablet. To this, you can pass the `breakingPoint` option to the plugin and pass the key of the desired `breakingPoint` as defined in your configuration.

  ```js
  module.exports = {
  ...
    theme: {
      screens: {
        'sm': '480px',
        'md': '992px',
        'lg': '1024px',
        'xl': '1280px',
      }
    }
    plugins: [
      /* Passing the identifier of the screen size to use as the breakingPoint */
      require('@mindvalley/design-system/dist/tailwind/plugins/typography.js')({ breakingPoint: 'md'}),
    ],
    ...
  }
  ```

  Expected Output:

  ```css
    .title-bold-5 {
      font-family: 'Sharp Grotesk Semibold 21', 'Helvetica', 'Arial', 'sans-serif';
      font-size: 1.5rem;
      letter-spacing: 0rem;
      line-height: 1.875rem;
    }
    @media (min-width: 992px) {
      .title-bold-5 {
        font-size: 1.75rem;
        line-height: 2.125rem;
      }
    }
  ```

You can find the full list of typography definitions here 👉 [Figma typography](https://www.figma.com/file/Gmdp0kAAYsmBgCthFjGkpY/MV-Core?node-id=5593%3A26473&t=3PPGng5xmhzaFyRe-0)

## ©️ Icons

Icons are organized into three categories:

1. **Brand Icons**: These icons are specific to branding and include logos, trademarks, etc.
2. **UI Icons**: Designed to enhance user interface aesthetics and usability.
3. **Category Icons**: These icons represent different categories or topics covered in the content.

All icons are available as single icons or as combined sets in an svg sprite.

> A sprite is a single image file which contains multiple graphics. By using sprites, you can load multiple icons with a single HTTP request.
>
> See the [Working Figma file for icons](https://www.figma.com/file/0b2swzflgtIMoELPgj4TVI/MV-Icons?node-id=203:3)

Accessing the icons for your project is a straightforward process. We provide a single npm package with different ways of accessing icons.

### Installing the icons

You will have to have the mindvalley design system npm package installed to access the icons. See the [installation guide](#using-npm-or-yarn).

#### Accessing the icons

With the package installed you can now access the icons with these access methods.

a) **Recommended method (brand + category-specific directories)**

This is the updated and recommended method. It involves accessing icons and sprites from brands > category-specific organized directories.
Icons are also organized by brand.

```sh
├── dist
│    │── brands
│    │   ├── b2b
│    │   │   └── icons
│    │   │       ├── sprites
│    │   │       │   └── ui-icons.svg
│    │   │       └── ui-icons
│    │   │           ├── activity-filled.svg
│    │   │           ├── activity-outlined.svg
│    │   │           ├── ...
│    │   │           └── zoom-out-outlined.svg
│    │   │ 
│    │   └── mindvalley
│    │       └── icons
│    │            ├── brand-icons
│    │            │   ├── aging-filled.svg
│    │            │   ├── aging-outlined.svg
│    │            │   └── ...
│    │            ├── categories
│    │            │   ├── icon-body.svg
│    │            │   ├── icon-career.svg
│    │            │   └── ...
│    │            ├── ui-icons
│    │            │   ├── activity-filled.svg
│    │            │   ├── ...
│    │            │   └── zoom-out-outlined.svg
│    │            ├── sprites
│    │            │   ├── ui-icons.svg
│    │            │   ├── brand-icons.svg
│    │            │   └── categories.svg

```

And here are the path conventions to follow:

- Path to an individual icon: `@mindvalley/design-system/dist/brands/<brand>/icons/<category>/<icon-name>.svg`
- Path to combined sprite icons: `@mindvalley/design-system/dist/brands/<brand>/icons/sprites/<category-sprite>.svg`

For example:

- Individual B2B UI icon: `@mindvalley/design-system/dist/brands/b2b/icons/ui-icons/activity-filled.svg`
- Mindvalley brand icons sprite: `@mindvalley/design-system/dist/brands/mindvalley/icons/sprites/brand-icons.svg`

For a detailed overview of the available icons in each category and brand, refer to the following:

1. [B2B UI Icons](brands/b2b/icons/ui-icons.md)
2. [Mindvalley Brand Icons](brands/mindvalley/icons/brand-icons.md)
3. [Mindvalley Category Icons](brands/mindvalley/icons/categories.md)
4. [Mindvalley UI Icons](brands/mindvalley/icons/ui-icons.md)

b) **Legacy Method (a) (To be deprecated) - category-specific directories with no brand**

Below is the organized file tree, showcasing the intuitive structuring of icons in category-specific folders and sprites:

```sh
dist
├── icons
│   └── categories 
│   │   ├── icon-body.svg                 // single category icon
│   │   ├── icons-career.svg
│   │   ├── ...
│   │   └── wordmark-soul-spanish.svg
│   │
│   └── brand-icons 
│   │   ├── aging-filled.svg              // single brand icon
│   │   ├── aging-outlined.svg
│   │   ├── ...
│   │   └── vision-outlined.svg
│   │
│   └── ui-icons  
│   │   ├── activity-filled.svg           // single ui icon
│   │   ├── activity-outline.svg
│   │   ├── ...
│   │   └── zoom-out-outline.svg
│   │
│   ├── sprites
│   │   ├── ui-icons.svg                  // sprites by category
│   │   ├── brand-icons.svg
│   │   ├── categories.svg
```

And here are the path conventions to follow:

- Path to an individual icon: `@mindvalley/design-system/dist/icons/<category>/<icon-name>.svg`
- Path to combined sprite icons: `@mindvalley/design-system/dist/icons/<sprites>/<category-sprite>.svg`

For a detailed overview of the available icons in each category, refer to the following:

1. [Brand Icons](icons/brand-icons.md)
2. [UI Icons](icons/ui-icons.md)
3. [Category Icons](icons/categories.md)

b) **Legacy Method (b) (To be deprecated) - combined directory/sprite**

This initial method involves using the combined `svg-defs.svg` sprite file or from the `svg` folder which is combination of UI icons and category icons.

Here’s the tree path for a clearer view:

```text
dist
├── svg
│   ├── activity-filled.svg
│   ├── activity-outline.svg
│   ├── airplay-filled.svg
│   ├── airplay-official-audio.svg       // single icon file
│   ├── airplay-official-video.svg
│   ├── ...
│   └── zoom-out-outline.svg
├── svg-sprite
│   └── svg-defs.svg                     // sprite file
```

And here are the path conventions to follow:

- Path to individual icons: `@mindvalley/design-system/dist/svg/<icon-name>.svg`
- Path to combined sprite icons: `@mindvalley/design-system/dist/svg-sprite/svg-defs.svg`

Visit the Legacy [combined icons view](icons/legacy-combined.md) for the full list of icons accessed this way.

> Important: This legacy method of accessing icons is slated for deprecation. We encourage users to adopt the updated, category-specific approach to ensure compatibility and receive the latest icon updates.

#### Using icons in your project?

Below are instructions for integrating icons in different types of projects including Vue and Elixir Phoenix applications.

##### With Vue.js

There are plenty of JS libraries to use here but the recommended one is [vue-svg-sprite](https://github.com/thierrymichel/vue-svg-sprite).

##### Using vue-svg-sprite

Start by installing it:

```sh
npm i vue-svg-sprite
```

or

```sh
yarn add vue-svg-sprite
```

And then, in your code, you can import and configure the library to work with the provided sprites.

```js
import Vue from 'vue';
import { svgSpritePlugin } from 'vue-svg-sprite';

/** See all the paths to import from in the Accessing icons from the npm package section */
import svgSpriteUrl from '@mindvalley/design-system/dist/svg-sprite/svg-defs.svg'

Vue.use(SvgSprite, {
  url: svgSpriteUrl
})

/** On a component */ 
<template>
  <div class="container">  
    <svg v-svg symbol="activity-filled" size="24" class="some-class" ></svg>
  </div>
</template>
```

Checkout vue-svg-sprite documentation for more configuration and usage in vue.

 Be sure to checkout [Accessing icons from the npm package](#accessing-the-icons) for all paths to icon / sprites.

#### 2. Usage in Elixir phoenix

**1. Import the sprite in your js file(s)**

*in your `**/app.js`*

```js
  import "@mindvalley/design-system/dist/svg-sprite/svg-defs.svg";
  ...
```

**2. Update your bundler to load the svg sprite**

*webpack.config.js*

```js
  module.exports = {
    ...
    module: {
      rules: [
       ...,
        {
          test: /\.(svg)$/i,
          loader: "file-loader",
          options: {
            name: '[name].[ext]',
            outputPath: "../images",
          },
        }
      ]
    }
  }
```

This configuration is set up to process .svg files through [file-loader](https://v4.webpack.js.org/loaders/file-loader/) or [asset modules](https://webpack.js.org/guides/asset-modules/), keeping their original names and placing them in a directory named images one level above the Webpack output directory. In this example the images folder here is the one in `assets/` in a phoenix project.

By doing this the svg sprite is available during development and will be copied over and be available in priv/static in production.

**3. Use a helper module to help import the sprite**

Next, define a helper module to consume the sprite:

```elixir
defmodule SampleApp.SvgHelpers do
  @moduledoc """
  Svg helpers for rendering svg icons
  """
  import Phoenix.HTML.Tag

  @base_path "/images"

  @doc """
  Creates an SVG tag which references a SVG sprite from an external SVG sprite
  file and returns it as a safe HTML string.

  ** How to use it **
  <%= svg_icon "activity-filled", class: "w-5 h-5 fill-current inline-block" %>

  ** The html output
  <svg class="inline-block w-5 h-5 fill-current">
    <use href="/images/svg-defs.svg#activity-filled"></use>
  </svg>
  """
  def svg_icon(icon_id, opts \\ [])

  def svg_icon(icon_id, opts) do
    content_tag(:svg, use_tag(icon_id), opts)
  end

  defp use_tag(icon_id) do
    content_tag(:use, "", href: @base_path <> "/svg-defs.svg#" <> icon_id)
  end
end
```

**4. Use the module**

Next import the helper globally to make the svg_icon/2 available:

```elixir
# import the helper in /lib/sample_app_web.ex
import SampleApp.SvgHelpers 
```

And finally use the sprite using the icon id.

```elixir
<%= svg_icon "chevron-right-filled", class: "w-5 h-5 fill-current inline-block" %>
```

> Note: You can also use the [SvgSprite](https://hexdocs.pm/svg_sprite/SvgSprite.html) library, which works well with the category-specific directory structure.

💡 Tip

Icon names and previews are in the [Accessing the icons](#accessing-the-icons) section. Sample preview:

![icons previews](./icon-preview-names-ids.png)

## 🔜 Wordmarks

Just like icons, wordmarks are also conveniently organized into specific directories and also include a common sprites folder.

```text
dist
├── wordmarks
│   ├── trainers 
│   │   ├── agapi-stassinopoulos.svg    // Example of a single trainer wordmark
│   │   ├── ajit-nawalkha-left.svg
│   │   ├── ...
│   │   └── vykintas-glodenis.svg
│   │
│   ├── topics 
│   │   ├── certs-10-x-fitness-left.svg  // Example of a single topic wordmark
│   │   ├── certs-10-x-fitness.svg
│   │   ├── ...
│   │   └── coming-soon-reclaim-your-happiness.svg
│   │
│   └── sprites
│       ├── trainers.svg             // Trainers wordmarks sprite
│       └── topics.svg               // Topics wordmarks sprite
```

Here are the path conventions to follow to access wordmarks:

- Path to an individual wordmark: `@mindvalley/design-system/dist/wordmarks/<category>/<wordmark-name>.svg`
- Path to a combined wordmarks sprite: `@mindvalley/design-system/dist/wordmarks/sprites/<category-sprite>.svg`

Explore the detailed list of wordmarks available for each category

1. [Topics](wordmarks/topics.md)
2. [Trainers](wordmarks/trainers.md)

Since they are svgs under the hood, you can use the methods defined in the [icons](#©️-icons) section to access and utilize them in your app.
