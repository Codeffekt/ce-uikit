
<p align="center">
      <img src="./projects/docs/public/logo.svg" alt"logo" width="128px" height="128px">
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

## Building the Library

To build the library, follow these steps:

**Open a Terminal:**
    Navigate to the root directory of your workspace where the library is located.    

**Install Dependencies:**
Run the following command to install the necessary dependencies:
```bash
npm install
```
In workspace root folder
```sh
 npm install --save @codeffekt/ce-uikit
```
This command triggers the build process, which compiles the TypeScript files, bundles the assets, and generates the distributable files for your library.

After the build process completes, you should find the compiled library files in the dist directory.

## Running docs

**Install Dependencies:**
Run the following command to install the necessary dependencies:
```bash
npm install
```
In workspace root folder
```sh
 npm run start:docs
```

Open your browser : [http://localhost:4201](http://localhost:4201)

## License
This project is licensed under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)