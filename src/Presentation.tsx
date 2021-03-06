import * as React from 'react'
import { Deck } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

import './images'

require('normalize.css')

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quarternary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
)
interface State {
    // tslint:disable-next-line:no-any
    slides?: React.ReactElement<any>[]
}

export class Presentation extends React.Component<{}, State> {
    state: State = {}

    componentDidMount() {
        localStorage.clear()
        const slidesContext = require.context('./slides', true, /(.*\/.*.tsx)$/)
        const loadedSlides = slidesContext
            .keys()
            // tslint:disable-next-line:no-any
            .reduce<React.ReactElement<any>[]>((acc, id) => {
                const slideModule = slidesContext(id).default
                // I want to allow a folder which holds slides so I can group parts of the preso
                // making it easier to re-organise.
                if (slideModule instanceof Array) {
                    slideModule.forEach(sm => acc.push(sm))
                } else {
                    acc.push(slideModule)
                }
                return acc
            }, [])

        this.setState({
            slides: loadedSlides
        })
    }
    render() {
        if (!this.state.slides) {
            return <div>Loading...</div>
        }

        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
                controls={false}
                {...{ contentWidth: 1920 }}
            >
                {this.state.slides.map((slide, index) => {
                    return React.cloneElement(slide, { key: index })
                })}
            </Deck>
        )
    }
}
