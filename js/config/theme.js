app.config(function($mdThemingProvider) {
    $mdThemingProvider.definePalette('amberPalette', {
        '50': '#fff8e1',
        '100': '#ffecb3',
        '200': '#ffe082',
        '300': '#ffd54f',
        '400': '#ffca28',
        '500': '#ffc107',
        '600': '#ffb300',
        '700': '#ffa000',
        '800': '#ff8f00',
        '900': '#ff6f00',
        'A100': '#ffe57f',
        'A200': '#ffd740',
        'A400': '#ffc400',
        'A700': '#ffab00',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': [],
        'contrastLightColors': undefined
    });
    
    $mdThemingProvider.definePalette('greenPalette', {
        '50': '#e8f5e9',
        '100': '#c8e6c9',
        '200': '#a5d6a7',
        '300': '#81c784',
        '400': '#66bb6a',
        '500': '#4caf50',
        '600': '#43a047',
        '700': '#388e3c',
        '800': '#2e7d32',
        '900': '#1b5e20',
        'A100': '#b9f6ca',
        'A200': '#69f0ae',
        'A400': '#00e676',
        'A700': '#00c853',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': [],
        'contrastLightColors': undefined
    });
    
    $mdThemingProvider.definePalette('deepOrangePalette', {
        '50': '#fbe9e7',
        '100': '#ffccbc',
        '200': '#ffab91',
        '300': '#ff8a65',
        '400': '#ff7043',
        '500': '#ff5722',
        '600': '#f4511e',
        '700': '#e64a19',
        '800': '#d84315',
        '900': '#bf360c',
        'A100': '#ff9e80',
        'A200': '#ff6e40',
        'A400': '#ff3d00',
        'A700': '#dd2c00',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': [],
        'contrastLightColors': undefined
    });
    
    $mdThemingProvider.definePalette('redPalette', {
        '50': '#ffebee',
        '100': '#ffcdd2',
        '200': '#ef9a9a',
        '300': '#e57373',
        '400': '#ef5350',
        '500': '#f44336',
        '600': '#e53935',
        '700': '#d32f2f',
        '800': '#c62828',
        '900': '#b71c1c',
        'A100': '#ff8a80',
        'A200': '#ff5252',
        'A400': '#ff1744',
        'A700': '#d50000',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': [],
        'contrastLightColors': undefined
    });
    
    $mdThemingProvider.definePalette('indigoPalette', {
        '50': '#e8eaf6',
        '100': '#c5cae9',
        '200': '#9fa8da',
        '300': '#7986cb',
        '400': '#5c6bc0',
        '500': '#3f51b5',
        '600': '#3949ab',
        '700': '#303f9f',
        '800': '#283593',
        '900': '#1a237e',
        'A100': '#8c9eff',
        'A200': '#536dfe',
        'A400': '#3d5afe',
        'A700': '#304ffe',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': [],
        'contrastLightColors': undefined
    });
    
    $mdThemingProvider.definePalette('tealPalette', {
        '50':   '#e0f2f1',
        '100':  '#b2dfdb',
        '200':  '#80cbc4',
        '300':  '#4db6ac',
        '400':  '#26a69a',
        '500':  '#009688',
        '600':  '#00897b',
        '700':  '#00796b',
        '800':  '#00695c',
        '900':  '#004d40',
        'A100': '#a7ffeb',
        'A200': '#64ffda',
        'A400': '#1de9b6',
        'A700': '#00bfa5',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': [],
        'contrastLightColors': undefined
    });
    
    $mdThemingProvider.theme('amber').primaryColor('amberPalette');
    $mdThemingProvider.theme('green').primaryColor('greenPalette');
    $mdThemingProvider.theme('deep-orange').primaryColor('deepOrangePalette');
    $mdThemingProvider.theme('red').primaryColor('redPalette');
    $mdThemingProvider.theme('indigo').primaryColor('indigoPalette');
    $mdThemingProvider.theme('teal').primaryColor('tealPalette');
});