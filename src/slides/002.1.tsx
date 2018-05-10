import * as React from 'react'
import { Slide, Heading, Text, Appear } from 'spectacle'
import { css } from 'emotion'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Heading textColor="tertiary" size={3} margin="0 0 50px 0">
            Why not TypeScript initially?
        </Heading>
        <div className={css({ '& p': { lineHeight: '4rem' } })}>
            <Appear>
                <Text>Webpack loader imaturity</Text>
            </Appear>
            <Appear>
                <Text>&lt; TypeScript 1.8 did not have great CommonJS module support</Text>
            </Appear>
            <Appear>
                <Text>Object Rest/Spread and other ES6 features missing</Text>
            </Appear>
            <Appear>
                <Text>Missing JSX support</Text>
            </Appear>
            <Appear>
                <Text>Unable to express certain JS patterns/idioms</Text>
            </Appear>
        </div>
    </Slide>
)
