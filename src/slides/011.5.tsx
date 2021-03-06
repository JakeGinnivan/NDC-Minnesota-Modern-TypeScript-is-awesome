import * as React from 'react'
import { Slide, Heading, Image } from 'spectacle'
import { awesomeImages } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Heading size={2} textColor="tertiary" caps>
            So why is that awesome?
        </Heading>
        <Heading size={5}>No more 'undefined is not a function' errors, idiomatic JS!</Heading>

        <Image width="50%" src={awesomeImages.dogStick} />
    </Slide>
)
