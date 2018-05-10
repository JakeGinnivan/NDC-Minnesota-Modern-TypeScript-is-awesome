import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Heading size={2} textColor="tertiary" caps>
            What is TypeScript?
        </Heading>

        <Image src={images.typescriptSuperset} />
    </Slide>
)
