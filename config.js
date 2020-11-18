require('dotenv').config();

module.exports = {
  platform: 'gitlab',
  endpoint: 'https://gitlab.illuin.tech/api/v4',
  token: process.env.RENOVATE_TOKEN,
  gitPrivateKey: process.env.GPG_KEY || '',

  repositories: [
    '3ACentrale/2020-air-monitoring-pwa/renovate-config',
    '3ACentrale/2020-air-monitoring-pwa/air-monitoring-backend',
    '3ACentrale/2020-air-monitoring-pwa/air-monitoring-frontend',
  ],

  logLevel: 'info',

  requireConfig: true,
  onboarding: true,
  onboardingConfig: {
    extends: ['config:base'],
    prConcurrentLimit: 5,
  },

  enabledManagers: [
    'npm',
  ],
};
