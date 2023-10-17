
<p align="center">
       <svg width="128" height="128" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="35" height="35" rx="4" fill="#FDA403"/>
        <path d="M17.5214 4C15.8927 4.61765 14.3514 5.70616 13.7843 6.17321C15.9262 9.67323 17.1682 13.1599 17.5214 14.4657C19.8641 7.94609 20.1151 8.33689 21.2864 6.17321C19.5015 4.6634 18.0327 4.09532 17.5214 4Z" fill="white"/>
        <path d="M27.4082 8.7696C25.8871 7.91064 24.0758 7.42747 23.3603 7.29326C22.1797 11.2439 20.4202 14.488 19.688 15.6162C26.0299 13.1678 25.9058 13.6181 28.2681 13.111C28.2142 10.7391 27.6723 9.22846 27.4082 8.7696Z" fill="white"/>
        <path d="M30.2473 20.1175C29.9853 18.3574 29.2558 16.5902 28.9239 15.9266C25.1488 17.3727 21.5678 17.9178 20.2491 18.0096C26.0056 21.6754 25.5818 21.8488 27.4129 23.461C29.2147 21.9725 30.0533 20.6118 30.2473 20.1175Z" fill="white"/>
        <path d="M23.5109 29.158C24.6548 27.8183 25.5028 26.1076 25.7838 25.4197C22.2726 23.3918 19.5584 20.9353 18.6403 19.9606C19.6157 26.8363 19.2132 26.6156 19.1908 29.0902C21.4621 29.5437 23.0172 29.3244 23.5109 29.158Z" fill="white"/>
        <path d="M11.971 29.3238C13.6991 29.4989 15.5496 29.2114 16.2588 29.0458C15.826 24.9377 16.1968 21.2453 16.4362 19.9126C11.548 24.7246 11.489 24.2606 9.51254 25.6808C10.4734 27.8391 11.5519 29.0087 11.971 29.3238Z" fill="white"/>
        <path d="M4.85636 20.4C5.81344 21.8856 7.19785 23.1769 7.77042 23.6369C10.6074 20.7022 13.6363 18.6691 14.7962 18.0194C8.07127 17.1634 8.38534 16.8239 6.06395 16.1465C5.03601 18.272 4.83058 19.8678 4.85636 20.4Z" fill="white"/>
        <path d="M7.42919 8.99039C6.87771 10.6787 6.73883 12.5924 6.73833 13.3382C10.7407 13.8208 14.1688 15.014 15.3826 15.5502C11.8964 9.59219 12.3507 9.63661 11.4406 7.34465C9.17447 7.82428 7.82211 8.64166 7.42919 8.99039Z" fill="white"/>
    </svg>
</p>

<h1 align="center">ce-uikit</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-v0.1.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/github/license/saltstack/salt" alt="License">
</p>

## Overview

[**ce-uikit**](https://github.com/codeffekt/ce-uikit) is a comprehensive collection of reusable components and layout utilities designed to streamline the development of Angular applications. 
It provides a set of polished UI elements including buttons, popovers, search boxes, and select menus, along with powerful layout tools for creating visually appealing interfaces without dealing with css headaches.

## Features

- **Customizable Design System**: Tailor the UI to your brand with a comprehensive set of variables for colors, typography, and more.
- **Layout Utilities**: Simplify the arrangement of UI elements with our utility components for layout, spacing, alignment, and more.
- **Polished Components**: A curated set of components like buttons, popovers, search boxes, and select menus that are ready to use out of the box.
- **Easy Integration**: Seamlessly integrate the UI kit into your Angular projects with straightforward installation and usage instructions.

## Installation

1. Install required tools:

 ```sh
 npm install --save @codeffekt/ce-uikit
 ```

1. Link a pre-defined theme 

 ```scss
 @import '@codeffekt/ce-uikit/themes/blue-radiant-red.scss'
 ```

 or add it to angular.json:
 ```json
 "styles": ["@codeffekt/ce-uikit/themes/blue-radiant-red.scss"],
 ```
 
1. Add CeUIkit into your app.module.ts file:

```typescript
...
import { CeUikitModule } from '@codeffekt/ce-uikit';
...

@NgModule({
  imports: [
    ...
    CeUikitModule
  ],
  ...
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## Usage 

In your component template use ce-uikit layout utilities and components :

```html
<ce-grid [gap]="2" gridCols="200px 1fr">
  <ce-container [padding]="2">
      <ce-text color="primary">Hello</ce-text>
  </ce-container>
  <ce-container>
      <ce-text>World</ce-text>
  </ce-container>
</ce-container>
```
More information on ce-uikit usage coming soon...

## License
This project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)