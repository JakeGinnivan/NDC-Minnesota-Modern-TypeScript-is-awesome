import * as React from 'react'
import { Slide, Heading, Appear, Image } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Heading size={2} textColor="tertiary" caps>
            What is TypeScript?
        </Heading>

        <Appear>
            <Image src={images.typescriptSuperset} />
        </Appear>
    </Slide>
)
