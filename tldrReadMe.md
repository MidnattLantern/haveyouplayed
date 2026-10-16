# Haveyouplayed

Live link: https://haveyouplayed.vercel.app

Developed by Alma Isaksson 2026

## Table of contents
- [About](#about)
- [Tech stack](#tech-stack)
- [Wireframes](#wireframes)
- [Codebase architecture](#codebase-architecture)
- [AI disclosure](#ai-disclosure)

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
This project is styled with custom made css modules. Styling from the ground up offers more control and freedom, also, tools such as Bootstrap or Tailwind removes one of the most fun elements of frontend-development.

Modular styling allow multiple components to use the same class-names without interfering with each other, allowing an overall better structure. Only `index.scss` may target elements directly, such as `<p>` or `<table>`, unless such elements are nested inside a class-name.

There's one exception to modular styling: CSS for advanced SVG:s: Because JSX and XML code are different, modular styling is incompatible and you must use non-modular-css-files. 

The tradeoff is that custom styling can easily become hard to read and maintain. Especially when ambitious styling demand complexity – for instance – force you to repeat selectors in inconvenient places. A transition animation could potentially break ats a readable and convenient spot for no reason.

This project attempt to make the styling coherent with predictable property patterns, such as beginning blocks of rules with `position: (value)`, or using variables with calculations as values as often as possible. Making a readable stylesheet is one of the hardest tasks of styling, no wonder many developers prefer Bootstrap and Tailwind.

### useState
- Showing and hiding the navigation-bar as a boolean is practical for phone-users. A switch button toggle a state determing whether the nav-bar should be visible or not.
- Showing and hiding more details of a game as a boolean. Each game card has its own state as a component. Technically there are as many states as there are objects in the catalogue.
- One for platform-filters, and another for genre-filters, both as string arrays. Seperating these two is cleaner than combining.
- Storing draft for contact form as an object.
- Storing error message for each draft field as an object.

## AI disclosure
I'm ideologically not supportive of LLM:s, but I'm not completely against it either. Ethical concerns aside, I have found useful ways with Claude: A documentation lookup tool, and effective troubleshooter. I prefer to use old fashioned Google:ing as the primary way to find answers, but that's not always helpful. One could:
- Spend a couple hours skimming around forums and endless documentations, and maybe find some relevant clues in a sea of irrelevant info.
- Spend a couple minutes asking Claude about a roadblock and get custom tailored answers to get unstuck.

For instance, [the guide for installing SVG support for React Vite](https://www.npmjs.com/package/vite-plugin-svgr) doesn't do a good job at explaining the setup for the `vite-env.d.ts` file. It's framed as an optional helper that makes the job of the developer a little more convenient, but good luck deploying your project to Github Pages or Vercel when your build fails. Here, Claude may step in, explaining why the build fails, and how to properly set up that `vite-env.d.ts` file inside the right directory.

It's important if Claude introduce you to functions you're unfamiliar with, that you take your time to understand it properly. Ask Claude for advice, but make sure you understand every reciever and callback you write or paste into the code, and don't bite off more than you can chew. Less professional but independent code is better than more professional code Claude provided.

I prefer validating information in forums and documentation. Claude can give hints on what to search for.

Claude have been used as a lookup tool. However no asset, vector and raster, nor a single line of code, is AI-generated.