import * as React from 'react'
import { Slide, Image, Fill } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['zoom']} margin={'0px'}>
        <Fill>
            <Image src={images.perthGazette} />
        </Fill>
    </Slide>
)
