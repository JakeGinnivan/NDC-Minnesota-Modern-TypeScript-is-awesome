import * as React from 'react'
import { Slide, Heading, Text, Appear } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Heading textColor="tertiary" size={3} margin="0 0 50px 0">
            TypeScript at SWM
        </Heading>
        <Appear>
            <Text>Universal React/Redux with WebPack</Text>
        </Appear>
        <Appear>
            <Text>Started with Babel/ES6</Text>
        </Appear>
        <Appear>
            <Text>Converted to TypeScript after launch of The West</Text>
        </Appear>

        <Appear>
            <Text margin="30px 0 0 0">Why?</Text>
        </Appear>
    </Slide>
)
