import * as React from 'react'
import { Block } from './block'

// tslint:disable

const article = {
    heading: 'Intro to TypeScript',
    contents: [
        { type: 'standfirst', text: 'It can sometimes be hard to see the value in TypeScript.' },
        { type: 'text', tixt: 'But after using it, it is very hard to go back.' },
        { type: 'blockquote', quote: 'But after using it, it is very hard to go back.', cite: 'Jake Ginnivan' },
        {
            type: 'text',
            text: 'Give it a go, you will not regret it',
            formatting: [{ type: 'italics', range: [18, 26] }]
        }
    ]
}

const ArticleComponent = props => (
    <div>
        <h1>{props.article.heading}</h1>
        <article>{props.article.content.map(block => <Block block={block} />)}</article>
    </div>
)

const articleElement = <ArticleComponent article={article} />
articleElement
