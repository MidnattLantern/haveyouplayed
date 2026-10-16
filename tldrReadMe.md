# Haveyouplayed

Live link: https://haveyouplayed.vercel.app

Developed by Alma Isaksson 2026

## Table of contents
1. [About](#about)
2. [Tech stack](#tech-stack)
3. [Local dev guide](#local-dev-guide)
4. [Wireframes](#wireframes)
5. [Codebase architecture](#codebase-architecture)
6. [AI disclosure](#ai-disclosure)

## About
By its identity, Haveyouplayed is an enthusiasts page targeted towards gamers who may feel overwhelmed by the endless catalogue of video-games and fear they'll spend money on a title they don't like. The visitor believe the staff(s) managing this project has good taste in video games, thus trusting they won't regret buying any of the featured games. A filter system help the visitor find more revelavt suggestions. The visitor can also send a message with a formfield, although it's a pretend form, so no data is sent and forgotten.

The reason Haveyouplayed exists: It's a part of vocational training. As the developer, I mainly demonstrate understanding in the React framework, modular styling, filtering, using `.map()`, and `useState`.

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

## Wireframes
Wireframes were done through Figma: [www.figma.com/design (haveyouplayed)](https://www.figma.com/design/PV0j8Asx3JjxLCcvLFy2mr/Untitled?node-id=0-1&t=xQby5OZztakyctIW-1)

Changes from initial wireframe to final product may vary. Precise dimensions or optional features could be too early to know during initial sketch, discovering better decisions during development, or discarded (for optional content) as there's not enough time.

## Codebase architecture
### Directory structure
Each component has its own directory, with the `.tsx` file and its correspondent files, such as `.module.scss`.

The files at `src` directory level belong there, since they function as the 'mothetships'.

The `gameCard` component is a child to `library`. I was debating whether it should be nested inside `library` or stay on the same level as every other component. There's no strict convention, and given the small scope of this project, nesting it inside `library` would've felt out of place. For a project with a larger scope where there may be many child components, I would've nested those components in the parent's directory.

Image and vetor assetes are primarly stored in the `public` directory, falling back to the assets directory as backup.

### Modular (S)CSS
CSS modules offers more control and freedom. Also, tools such as Bootstrap or Tailwind removes one of the most fun elements of frontend-development.

Modular styling allow multiple components to use the same class-names without interfering with one another. Only `index.scss` may target elements, such as `<p>` or `<table>`, unless such elements are nested inside a class-name.

Because JSX and XML code are different, modular styling is incompatible with SVG:s and you must use non-modular-css-files. Non-modular css files may exist exclusively for styling advanced SVG:s.

Custom styling has a tradeoff: They can become hard to read and maintain, especially when ambitious styling demand complexity, like forcing you to repeat selectors in inconvenient places. A transition animation could potentially break at a readable and convenient spot for no reason.

This project attempt to make the styling coherent with predictable property patterns, such as beginning blocks of rules with `position: (value)`, or using variables with calculations when possible. Making a readable stylesheet is one of the hardest tasks of styling, it makes sense some developers prefer Bootstrap and Tailwind. One of my regrets are waiting with organizing the stylesheets. The sooner you organize your stylesheets, the better.

### useState
- Showing and hiding the navigation-bar as a boolean is practical for phone-users.
- Showing and hiding more details of a game as a boolean. Each game card has its own state as a component. Technically there are as many states during runtime as there are objects in the catalogue.
- One for platform-filters, and another for genre-filters, both as string arrays. Seperating these two is cleaner.
- Storing draft for contact form as an object. Using JavaScript as the source-of-truth is more robust than the DOM.
- Storing error message for each draft field as an object.

## AI disclosure
LLM's can be useful as a documentation lookup tool or a troubleshooter. Old fashioned Google:ing is preferred, while effective for common roadblocks, finding clues for niché problems among forums and documentations can feel like looking for a needle in a haystack.

For instance, [the guide for installing SVG support for React Vite](https://www.npmjs.com/package/vite-plugin-svgr) doesn't do a good job at explaining the setup for the `vite-env.d.ts` file. It's framed as something optional that makes develpment a little bit more convenient, but good luck deploying your project to Github Pages or Vercel when your build fails. Claude steps in to clarify the gaps in the documentation, explaining why the build fails, and how to properly set up that `vite-env.d.ts` file inside the right directory.

If Claude introduce unfamiliar functions during troubleshooting, time was spent understanding it properly, until every reciever and callback written in the code felt like second nature. Less professional but independent code is often better than more professional code provided by Claude.

Due to generative AI's unsustainable foundation, its involvement here left a bitter aftertaste. Developers did just fine before 2022, so I'm trying to be as independent from generative AI as possible.

In terms of content, no asset, vector and raster, nor a single line of code, is AI-generated.