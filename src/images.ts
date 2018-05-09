import preloader from 'spectacle/lib/utils/preloader'

export const images = {
    perthGazette: require('./assets/PerthGazette.png'),
    theWestWebsite: require('./assets/TheWestWebsite.png'),
    vsoLogo: require('./assets/vso-logo.png'),
    vsCodeLogo: require('./assets/vscode-logo.png'),
    dependencyList: require('./assets/DependencyList.png'),
    scriptTag: require('./assets/script-tag.png'),
    rageQuit: require('./assets/rage_quit.gif'),

    npm: require('./assets/modules/npm.png'),
    webpack: require('./assets/modules/webpack.jpg'),
    browserify: require('./assets/modules/browserify_logo.png')
}

export const awesomeImages = {
    bath: require('./assets/awesome-gifs/awesome-bath.gif'),
    dogStick: require('./assets/awesome-gifs/dog-stick.gif'),
    legoAwesome: require('./assets/awesome-gifs/legoAwesome.gif'),
    legoFace: require('./assets/awesome-gifs/legoFace.gif'),
    thatIsAwesome: require('./assets/awesome-gifs/thatisawesome.gif')
}
preloader(images)
preloader(awesomeImages)
