import * as React from 'react'
import { Block } from './block'
import { Blocks } from './block-types'

// tslint:disable
const article: Article = {
    heading: 'Intro to TypeScript',
    contents: [
        { type: 'standfirst', text: 'It can sometimes be hard to see the value in TypeScript.' },
        { type: 'text', text: 'But after using it, it is very hard to go back.' },
        { type: 'blockquote', quote: 'But after using it, it is very hard to go back.', cite: 'Jake Ginnivan' },
        {
            type: 'text',
            text: 'Give it a go, you will not regret it',
            formatting: [{ type: 'italics', from: 18, to: 26 }]
        }
    ]
}

interface Article {
    heading: string
    contents: Blocks[]
}

interface ArticleComponentProps {
    article: Article
}

type StatelessComponent<TProps> = (props: TProps) => JSX.Element

const ArticleComponent: StatelessComponent<ArticleComponentProps> = props => (
    <div>
        <h1>{props.article.heading}</h1>
        <article>{props.article.contents.map(block => <Block block={block} />)}</article>
    </div>
)

const renderedArticle = <ArticleComponent article={article} />
renderedArticle
