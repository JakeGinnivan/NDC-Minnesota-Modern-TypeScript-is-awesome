import * as React from 'react'
import { Slide, BlockQuote, Quote, Cite, Appear, Text, S } from 'spectacle'

export default (
    <Slide
        transition={['fade']}
        bgColor="secondary"
        textColor="primary"
        notes={'Panel run by Erik Meijer with Anders Hejlsberg, Gilad Bracha, Martin Odersky, and Peter Alvaro.'}
    >
        <BlockQuote>
            <Quote textSize="4rem">Are you saying you cannot write large programs in JavaScript?</Quote>
            <Cite>Erik Meijer</Cite>
        </BlockQuote>

        <Appear>
            <BlockQuote>
                <Quote textSize="4rem">
                    No, you can write large programs in JavaScript. You just can’t maintain them.
                </Quote>
                <Cite>Anders Hejlsberg</Cite>
            </BlockQuote>
        </Appear>

        <Appear>
            <Text textColor="white" textSize="2rem" margin="10rem 0 0 0">
                <S type="underline">
                    {'https://channel9.msdn.com/Events/Lang-NEXT/Lang-NEXT-2012/Panel-Web-and-Cloud-Programming'}
                </S>
            </Text>
        </Appear>
    </Slide>
)
