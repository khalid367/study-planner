# Weekly Study Planner

A responsive study schedule with prayer times, private classes, live Muscat time, persistent completion tracking, and an automatic weekly reset every Sunday at 12:00 PM.

## Persistence

Progress is stored in the browser using `localStorage`. It survives refreshes and browser restarts on the same device and browser. The saved state is versioned, synchronized across open tabs, and automatically cleared when the new week begins. No personal data is sent to a server.

## Test locally

```bash
npm test
npm run check
```

Serve the `dist` directory with any static server and open `index.html`.

## Deploy to GitHub Pages

The included workflow tests the planner and publishes the `dist` directory whenever `main` is pushed. In the GitHub repository, open **Settings → Pages** and choose **GitHub Actions** as the source if it is not selected automatically.
