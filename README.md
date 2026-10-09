# Haveyouplayed
Live link: https://haveyouplayed.vercel.app

Developed by Alma Isaksson 2026

## Table of contents
1. [About](#about)
2. [Tech stack](#tech-stack)
3. [Local dev guide](#local-dev-guide)
4. [Deployment](#deployment)
5. [Wireframes](#wireframes)
6. [Codebase architecture](#codebase-architecture)
7. [Usestates](#usestates)
8. [AI disclosure](#ai-disclosure)
9. [Other notes](#other-notes)
10. [Acknowledgements](#acknowledgements)

## About

## Tech stack
- HTML
- CSS & SCSS
- JavaScript & TypeScript
- React for Vite
- Github
- Vercel
- Figma
- Affinity

## Local dev guide
Haveyouplayed uses Vite + React + TypeScript. Prerequisites that your machine has Node installed. Simply make sure you're at the same directory level as "package.json", you can check your directory level by running `ls` in the terminal. If you see "package.json", you may run `npm install`, this is only neccessary once, or until packages are either added or updated. To run the web-app in localhost, run `npm run dev`.

## Deployment
Haveyouplayed house its codebase on Github, and is being hosted by Vercel.

### Vercel
Prerequisites that your github is linked to your Vercel's team and that the codebase has a vercel.json file included in root directory. Under Add New / Project, select the repository name "haveyouplayed". If access is limited, search the name, click "Configure GitHub App", and give Vercel access permissions from there. Since this is a project created with Vite, "Application Preset" should be set to "Vite". Before clicking "Deploy", ensure there are no errors in the codebase. Any error as mundane as "'myUnusedComponent' is declared but its value is never read." will cause a deployment failure. Patch any such errors and push to repo. Note: if you've already made an initial deployment, Vercel will try again automatically. Remember that Vercel will make a new deployment for each git push.

## Wireframes
Wireframes were done through Figma: [www.figma.com/design (haveyouplayed)](https://www.figma.com/design/PV0j8Asx3JjxLCcvLFy2mr/Untitled?node-id=0-1&t=xQby5OZztakyctIW-1)

NOTE: Changes from initial wireframe to final product may vary. This project does not make an orthodox commitment.

## Codebase architecture
- [Components](#components)
- [SCSS modules](#scss-modules)
- [SCSS for SVG](#scss-for-svg)
- [ID Navigation](#id-navigation)
- [Naming files and directories](#naming-files-and-directories)
- [Navbar](#navbar)

### Components
The architecture takes advantage of React's component-based JSX features.

### SCSS modules
By utulizing .module for scss documents, each component and its class-names can be truly unique, meaning multiple components could have ".container" without overlapping each other. Note that .module files shouldn't use element selectors, such as "span" or "article", use class-names instead. Universal element selectors and variables should be specified in index.scss. Colors and fonts should always use variables going back to index.scss.

### SCSS for SVG
The SCSS module convention does not apply for targeting some complex SVG:s. Using modular SCSS are usually convenient and doable when the entire SVG asset is targeted, but becomes complicated if the SVG use for instance more than one non-hard-coded color. Targeting and assigning modular id:s doesn't work the same way in a JSX-file as for an XML-file, therefore, this exception exist to allow targeting multiple elements within more complex SVG:s. A non-modular-SCSS file may exist to correspond an SVG and target SVG:s id:s or classNames. Keep in mind when working with these rules to be cautious when naming id:s inside SVG:s so that multiple SCSS files and targetId:s does not overlap each other.

### ID Navigation
Any destination should live in App.tsx. This way, looking for the destination points throughout the codebase is conventient.

### Naming files and directories
Directories use camelCase, files making up a component use PascalCase, and regular JS files use camelCase. SCSS files use the same name as its corresponding TSX file, with a .module addition. Exceptions are main.tsx, index.scss, and CSS ruels for targeting SVG:s (see [SCSS for SVG](#scss-for-svg)). SCSS class-names use camelCase, since modules break with dashes in JSX. Underscores still work though, and may be used for BEM:s, such as "wrapper__myCard".

### NavBar
The navigation-bar is adapted from the solution of one of my private projects: [Divines Of Idoria](https://midnattlantern.github.io/divinesofidoria/). It's a phone-first design.

The link panel is shown or hidden, depending on a boolean's state: showNavBar. A toggle button is always present at the bottom left, flipping that state.

The `<header>` element wrap both the nav and toggle button. It's `position: fixed` and cover the full viewport. By default, click event flow through, allowing the user to interact with the app underneath. Only the `<nav>` and toggle `<button>` capture events.

When `showNavBar` is true, the header captures all click-events. Its only job is to close the nav. Wherever the user clicks: A destination, the hide navbar button, outside either, they'll always want the next action to be hiding the menu and resume interacting with the app. `handleHideNavBar()` handles this. Because the header sits at the highest z-index, the entire viewport turns into one large button: `onClick={showNavBar ? handleHideNavBar : undefined}`.

What about keyboard accessibility? The header doesn't rely on React state handling, it turns to CSS instead. When a link or the toggle is at focus, a CSS :hover-within rule reveals the menu, regardless of the ´showNavBar´'s boolean state.

After a destination is selected, `handleHideNavBar()` moves focus to the main view `#navBarTabDestination`, escaping the keyboard user away from the navbar, to the main content.

Wide screens override most rules with a fixed sidebar. The toggle button gets `pointer-events: none` and `visibility: hidden`, which also removes it from the tab order and prevents "phantom tabbing". This may raise WCAG concerns.

The logo exists in the DOM twice, one for the mobile viewport, the other for the desktop viewport. Whether this is best practice or not could be debated, but it's an appropriate decision for this project's scope.

# Usestates
useState being one central part for this project, this deserve its own chapter. The useState:s of Haveyouplayed are:
- Showing and hiding the navigation-bar as a boolean.

## AI disclosure
I remain committed to distancing myself from AI and LLMs by minimizing my use of them. Claude have been involved strictly for looking up technical information, when traditional video tutorials and reading in forums such as Reddit, Stack Overflow or YouTube tutorials fall short. This includes TypeScript flags or syntax, Vite documentation, grammar check, technical tools jargons, or oddly specific gotchas. However, no code, nor any vector and raster assets were AI generated.

## Other notes
### SVG for React
React read SVG:s a little differently from a vanilla Vite project. You need the svgr plugin. Guide how to install the plugin can be found here: [www.npmjs.com/package/vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr). Something the guide does not make super clear is that you must create a `vite-env.d.ts` file in /src with the contents:
```TypeScript
// src/vite-env.d.ts
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
```
 I don't know the techincal details, but to prevent SVG:s from crashing your app, simply add `?react` to the end of your import: `import logo from './logo.svg?react'`.

## Acknowledgements
- How to deploy to Vercel: [vercel.com/kb/guide/deploying-react-with-vercel](https://vercel.com/kb/guide/deploying-react-with-vercel)
- Kanit (font theme): [fonts.google.com/specimen/Kanit](https://fonts.google.com/specimen/Kanit)
- How to add SVG support for React for Vite: [www.npmjs.com/package/vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr)
- SVG a11y tip: [stackoverflow.com/questions/57983591](https://stackoverflow.com/questions/57983591/firefox-a11y-audit-with-inline-svgs-content-with-images-must-be-labeled)
- Navigation bar influence: [github.com/MidnattLantern/divinesofidoria](https://github.com/MidnattLantern/divinesofidoria)