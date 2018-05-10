import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'
import { awesomeImages } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Heading size={2} textColor="tertiary" caps>
            So why is that awesome?
        </Heading>
        <Heading size={5}>Less type guard functions, close to nominal typing</Heading>

        <Image width="50%" src={awesomeImages.legoFace} />
    </Slide>
)
