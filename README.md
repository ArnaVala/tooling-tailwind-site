
# Module 3 - TOOLING - TAILWIND CSS (with SASS)

[Live Link](https://av-tooling-tailwindcss.netlify.app/)
Two pages: index.html with link to [products page](https://av-tooling-tailwindcss.netlify.app/product.html#)

I made 2 pages with [Tailwind Css](https://tailwindcss.com/).
[Tailwind Documentation](https://tailwindcss.com/docs)
<br>
Tailwind is a utility-first CSS framework.
I decided to plug it in with SASS, which was a bit of a nightmare. It made my build quite slow, andthe styling was slow to update on the live server. Furthermore in hindsight it is actually  quite unecessary to use SASS when using Tailwind, as for basic sites, you really do not have to write much CSS in stylesheets. 
<br>

### Styling and Theming with Tailwind
Tailwind is quite great when using theming. Most of the styling is done in the Tailwind.config.js file.
There you can define your theme: e.g. colors, typography, spacing etc if you want to override the default tailwind styles. Tailwind does not have components like Bootstrap, but you can quickly build up a site with basic styling quite rapidly when getting the hang of it, and even without changing anything in the tailwind.config.js.
<br>
I used both Tailwind utility classes in the HTML files, and
for elements/components that are repeated through the site,
I also tried using the '@apply' method in the CSS. (see SASS files)
<br>

#### Using Tailwind with SASS
As I mentioned earlier, I don't find that Tailwind CSS and SASS function well together in plain HTML.
But having used TailwindCSS and SASS in React I can say it is quite okay.
- When using SASS you import the custom SCSS files into the tailwind.scss.
