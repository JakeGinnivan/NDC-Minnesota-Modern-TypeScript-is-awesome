interface TextFormatting {
    type: string
    to: number
    from: number
}
interface TextBlock {
    type: string
    text: string
    formatting: TextFormatting
}
interface StandfirstBlock {
    type: string
    text: string
}
interface BlockQuote {
    type: string
    quote: string
    cite: string
}
// TODO How did we do this before tagged unions?
export type Blocks = TextBlock | StandfirstBlock | BlockQuote

export function isTextBlock(block: Blocks): block is TextBlock {
    return block.type === 'text'
}

export function isStandfirstBlock(block: Blocks): block is StandfirstBlock {
    return block.type === 'standfirst'
}

export function isQuote(block: Blocks): block is BlockQuote {
    return block.type === 'blockquote'
}
