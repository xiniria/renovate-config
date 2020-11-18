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

### Signing the created commits

If you want the commits created by Renovate to appear as signed on Gitlab, you will have to provide a GPG key
to the Renovate bot. In order to do that, follow the instructions on [this link](https://docs.gitlab.com/ee/user/project/repository/gpg_signed_commits/)
to create the key and register it on your Gitlab account. Note that you have to create the key with an e-mail
address that Gitlab knows for the commits to appear as verified. If you don't create the key with your Gitlab
e-mail address, you can register the address you used in your account settings, in "Emails".

Once the GPG key is created and registered on Gitlab, add this line to your `.env` file to tell the Renovate
bot to use it (replacing all newlines with `\n`s):

```dotenv
GPG_KEY="[your key here]"
```

## Running automatically

The Gitlab CI should trigger a Renovate run every day.
