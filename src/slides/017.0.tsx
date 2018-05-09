import * as React from 'react'
import { Slide, Heading, Text, Appear } from 'spectacle'

export default (
    <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} textColor="primary" caps>
            Feature Recap!
        </Heading>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                Control flow analysis
            </Text>
        </Appear>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                Strict null checks
            </Text>
        </Appear>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                Tagged unions
            </Text>
        </Appear>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                Indexed / Mapped Types
            </Text>
        </Appear>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                Type modifiers
            </Text>
        </Appear>
        <Appear>
            <Text textColor="secondary" lineHeight={1.5}>
                Conditional types
            </Text>
        </Appear>
    </Slide>
)
