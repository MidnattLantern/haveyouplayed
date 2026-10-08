# Haveyouplayed
Live link: 
Developed by Alma Isaksson 2026

## Table of contents
1. [About](#about)
2. [Tech stack](#tech-stack)
3. [Local dev guide](#local-dev-guide)
4. [Deployment](#deployment)
5. [Wireframes](#wireframes)
6. [Codebase architecture](#codebase-architecture)
7. [AI disclosure](#ai-disclosure)
8. [Acknowledgements](#acknowledgements)

## About

## Tech stack
- HTML
- CSS & SCSS
- JavaScript & TypeScript
- React for Vite
- Github
- Vercel

## Local dev guide
Haveyouplayed uses Vite + React + TypeScript. Prerequisites that your machine has Node installed. Simply make sure you're at the same directory level as "package.json", you can check your directory level by running `ls` in the terminal. If you see "package.json", you may run `npm install`, this is only neccessary once, or until packages are either added or updated. To run the web-app in localhost, run `npm run dev`.

## Deployment
Haveyouplayed house its codebase on Github, and is being hosted by Vercel.

## Wireframes
Wireframes were done through Figma: [www.figma.com/design (haveyouplayed)](https://www.figma.com/design/PV0j8Asx3JjxLCcvLFy2mr/Untitled?node-id=0-1&t=xQby5OZztakyctIW-1)
NOTE: Changes from initial wireframe to final product may vary. This project does not make an orthodox commitment.

## Codebase architecture
### Components
The architecture takes advantage of React's component-based JSX features. The three "mothership" components: header, main, and footer live as seperate entities.

### SCSS modules
By utulizing .module for scss documents, each component and its class-names can be truly unique, meaning multiple components could have ".container" without overlapping each other. Note that .module files shouldn't use element selectors, such as "span" or "article", use class-names instead. Universal element selectors should be specified in index.scss.

### ID Navigation
Any destination should live in App.tsx. This way, looking for the destination points throughout the codebase is conventient.

### Naming files and directories
Directories use camelCase, files making up a component use PascalCase, and regular JS files use camelCase. SCSS files use the same name as its corresponding TSX file, with a .module addition. Exceptions are main.tsx and index.scss. SCSS class-names use camelCase, since modules break with dashes in JSX. Underscores still work though, and may be used for BEM:s, such as "wrapper__myCard".

## AI disclosure
I remain committed to distancing myself from AI and LLMs by minimizing my use of them. Claude have been involved strictly for looking up technical information, when traditional video tutorials and reading in forums such as Reddit, Stack Overflow or YouTube tutorials fall short. This includes TypeScript flags or syntax, Vite documentation, grammar check, technical tools jargons, or oddly specific gotchas. However, no code, nor any vector and raster assets were AI generated.

## Acknowledgements
- How to deploy to Vercel: [vercel.com/kb/guide/deploying-react-with-vercel](https://vercel.com/kb/guide/deploying-react-with-vercel)