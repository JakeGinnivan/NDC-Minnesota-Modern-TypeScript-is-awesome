import * as React from 'react'
import { Slide, Heading, Image, Appear } from 'spectacle'
import { awesomeImages } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Heading size={2} textColor="tertiary" caps>
            So why is that awesome?
        </Heading>
        <Heading size={5}>Compile time safety for types with same keys but different values!</Heading>

        <Appear>
            <Image width="50%" src={awesomeImages.thatIsAwesome} />
        </Appear>
    </Slide>
)
