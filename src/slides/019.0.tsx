import * as React from 'react'
import { Slide, Heading, Text } from 'spectacle'

export default (
    <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} caps textColor="tertiary">
            Modern TypeScript is awesome!!
        </Heading>
        <Text margin="80px 0 0" textColor="secondary" bold>
            Jake Ginnivan
        </Text>
        <Text>Seven West Media</Text>
        <Heading size={2} caps textColor="tertiary">
            Questions?
        </Heading>
    </Slide>
)
