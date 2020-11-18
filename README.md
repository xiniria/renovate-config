# Renovate configuration

This repo contains the configuration for the Renovate bot on the 3ACentrale/2020-air-monitoring-pwa
repos of Illuin's Gitlab instance.

## Running manually

### Creating a Gitlab API key

If you want to trigger a manual run of the Renovate bot, you first have to create a Gitlab API key.
To do that, go to your account settings on Gitlab. In "Access Tokens", create a key with `api` access,
and copy it once it is created.

Then, create a file called `.env` at the root of this project (it will be ignored by Git) and copy-paste
this line in it:

```dotenv
RENOVATE_TOKEN="[your token here]"
```

### Running the script

Once this is done, you should be able to trigger a run with `npm run renovate` (or `npm run renovate:dry-run`
for a dry run).

## Running automatically

The Gitlab CI should trigger a Renovate run every day.
