# GloomhavenTracker

## Local Dev

Run `nodemon`.

## Deployment

Pushing to the `master` branch automatically deploys the app. If local deployment is needed... something like `firebase deploy --only hosting`.

## Deploying bundle

When static game data changes, a new bundle needs to be deployed or clients will fail.

```
ts-node ./scripts/export_bundles.ts
```

This script writes directly into Cloud Storage. Refresh and clients should work again.
