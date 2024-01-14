module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'C:\Users\Jakub\Documents\Folderu\nazwa-projektu2\tsconfig.js', // Dodaj ścieżki do Twoich plików źródłowych
      'C:\Users\Jakub\Documents\Folderu\nazwa-projektu2\tsconfig.spec.js' // Dodaj ścieżki do plików testowych
    ],
    browsers: ['Chrome'], 
    reporters: ['progress', 'coverage'], 

    
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};