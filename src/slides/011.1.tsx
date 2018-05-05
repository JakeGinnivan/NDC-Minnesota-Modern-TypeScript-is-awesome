import * as React from 'react'
import { Slide, Text, Code, Appear, Image } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Text>
            In JavaScript we could call it the two billion-dollar mistake because we have both <Code>null</Code> and{' '}
            <Code>undefined</Code>
        </Text>

        <Appear>
            <Text margin="50px 0 0 0">TypeError: undefined is not a function</Text>
        </Appear>
        <Appear>
            <Image src={images.rageQuit} />
        </Appear>
    </Slide>
)
