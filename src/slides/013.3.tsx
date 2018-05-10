import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'
import { awesomeImages } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Heading size={2} textColor="tertiary" caps>
            So why is that awesome?
        </Heading>
        <Heading size={5}>Close to nominal typing, way better union type safety</Heading>

        <Image width="50%" src={awesomeImages.legoFace} />
    </Slide>
)
