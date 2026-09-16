# Kenneth / Apps

A small, static portfolio for independent iPhone apps. It is designed for free hosting on GitHub Pages and does not require a custom domain, server, database, analytics, or build step.

## Publish with GitHub Pages

1. Put these files in the root of a public GitHub repository.
2. Open **Settings → Pages** in that repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

The site will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Add another app

1. Add its 1024×1024 icon to `assets/`.
2. Add a new button inside `.icon-row` in `index.html`.
3. Add the app’s details to the `apps` object in `site.js`.
4. Add stable privacy and terms pages under `apps/APP-NAME/`.

No compilation is needed; open `index.html` directly or serve the folder with any static file server.
