import * as React from 'react'
import { Slide, BlockQuote, Quote, Cite } from 'spectacle'

export default (
    <Slide
        transition={['fade']}
        bgColor="secondary"
        textColor="primary"
        notes="Responsible for quicksort amongst other things"
    >
        <BlockQuote>
            <Quote textSize="2.5rem">
                <p>I call it my billion-dollar mistake. It was the invention of the null reference in 1965...</p>
                <p>
                    But I couldn&#39;t resist the temptation to put in a null reference, simply because it was so easy
                    to implement.
                </p>
                <p>
                    This has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused
                    a billion dollars of pain and damage in the last forty years.
                </p>
            </Quote>
            <Cite>Tony Hoare</Cite>
        </BlockQuote>
    </Slide>
)
