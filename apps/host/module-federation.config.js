module.exports = {
  name: 'host',
  remotes: ['test'],
  shared: (libraryName, libraryOptions) => {
    if (libraryName === '@angular/localize/init') {
      return {
        ...libraryOptions,
        eager: true,
      };
    }
  },
};
