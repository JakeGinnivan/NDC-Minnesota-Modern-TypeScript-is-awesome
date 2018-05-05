import * as React from 'react'
import { Slide, Appear, Text } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Appear>
            <img width="200px" src={images.browserify} />
        </Appear>
        <Appear>
            <img width="30%" src={images.webpack} />
        </Appear>
        <Appear>
            <img width="30%" src={images.npm} />
        </Appear>

        <Appear>
            <Text textColor="secondary" margin="60px 0 0 0">
                TypeScript definition files acquired from NPM now!
            </Text>
        </Appear>

        <Appear>
            <Text textColor="secondary" margin="60px 0 0 0">
                Much better suppport for node module resolution
            </Text>
        </Appear>
    </Slide>
)
