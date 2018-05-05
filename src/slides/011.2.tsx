import * as React from 'react'
import { Slide, Text, Code, Appear, Layout, Fill, Heading } from 'spectacle'
import { css } from 'emotion'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <div className={css({ '& p': { lineHeight: '4rem' } })}>
            <Layout>
                <Appear>
                    <Fill>
                        <Heading size={3}>TypeScript 1.x</Heading>
                        <Text>All types can be undefined</Text>
                        <Text>
                            <Code>const x: number = undefined</Code> &lt;-- OK
                        </Text>
                    </Fill>
                </Appear>

                <Appear>
                    <Fill>
                        <Heading size={3}>TypeScript 2.x</Heading>
                        <Appear>
                            <Text>
                                <Code>--strictNullCheck</Code> introduced
                            </Text>
                        </Appear>
                        <Appear>
                            <Text>Removes undefined from all types</Text>
                        </Appear>
                        <Appear>
                            <Text>
                                <Code>null</Code> &amp; <Code>undefined</Code> now are unary types
                            </Text>
                        </Appear>
                        <Appear>
                            <Text>
                                <Code>const x: number = undefined</Code> &lt;-- error
                            </Text>
                        </Appear>
                        <Appear>
                            <Text>
                                <Code>const x: number | undefined = undefined</Code> &lt;-- OK
                            </Text>
                        </Appear>
                    </Fill>
                </Appear>
            </Layout>
        </div>
    </Slide>
)
