module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('whirl', '~1.0.0');
  }
};
