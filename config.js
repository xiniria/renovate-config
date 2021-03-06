require('dotenv').config();

module.exports = {
  platform: 'gitlab',
  endpoint: 'https://gitlab.illuin.tech/api/v4',
  token: process.env.RENOVATE_TOKEN,

  hostRules: [{
    domainName: 'github.com',
    token: process.env.GITHUB_PUBLIC_TOKEN,
  }],

  repositories: [
    '3ACentrale/2020-air-monitoring-pwa/renovate-config',
    '3ACentrale/2020-air-monitoring-pwa/air-monitoring-backend',
    '3ACentrale/2020-air-monitoring-pwa/air-monitoring-frontend',
  ],

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
