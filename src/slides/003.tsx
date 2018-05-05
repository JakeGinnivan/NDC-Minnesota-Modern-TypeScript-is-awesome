import * as React from 'react'
import { Slide, Heading, Text, Appear } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps>
            Agenda
        </Heading>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                Why TypeScript?
            </Text>
        </Appear>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                TypeScript Introduction
            </Text>
        </Appear>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                Awesome features in TypeScript 2.x
            </Text>
        </Appear>
    </Slide>
)
