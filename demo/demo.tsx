import * as React from 'react'
import { Block } from './block'

// tslint:disable

const article = {
    heading: 'Intro to TypeScript',
    contents: [
        { type: 'standfirst', text: 'TypeScript just keeps getting better.' },
        { type: 'text', tixt: 'Lets start with the basics.' },
        { type: 'blockquote', quote: 'TypeScript is awesome.', cite: 'Jake Ginnivan' },
        {
            type: 'text',
            text: 'TypeScript is awesome.',
            formatting: [{ type: 'italics', range: [18, 26] }]
        }
    ]
}

const ArticleComponent = props => {
    return (
        <div>
            <h1>{props.article.heading}</h1>
            <article>{props.article.content.map(block => <Block block={block} />)}</article>
        </div>
    )
}

const articleElement = <ArticleComponent article={article} />
articleElement
