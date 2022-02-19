module.exports = {
  extends: 'semantic-release-monorepo',
  branches: ['main', { name: 'beta-release', prerelease: true }],
  npmPublish: true,
};
