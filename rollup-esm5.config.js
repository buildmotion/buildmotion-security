export default {
    input: 'dist/buildmotion-security.js',
    output: {file: 'dist/buildmotion-security.js', format: 'es', file: 'dist/buildmotion-security.js'},
    globals: {
        // Angular dependencies
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/common/http': 'ng.common.http',
        '@angular/forms': 'ng.forms',
        '@angular/http': 'ng.http',
        '@angular/router': 'ng.router',
        '@buildmotion/foundation': 'buildmotion-foundation',
        '@buildmotion/logging': 'buildmotion-logging',
        '@buildmotion/core': 'buildmotion-core',
        'angular-rules-engine': 'angular-rules-engine'
    }
};
