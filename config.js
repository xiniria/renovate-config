module.exports = {
  platform: 'gitlab',
  endpoint: 'https://gitlab.illuin.tech/api/v4',
  token: process.env.RENOVATE_TOKEN,

  repositories: [
    '3ACentrale/2020-air-monitoring-pwa/air-monitoring-backend',
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
