import * as React from 'react'
import { Slide, Image } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Image width="80%" src={images.scriptTag} />
    </Slide>
)
