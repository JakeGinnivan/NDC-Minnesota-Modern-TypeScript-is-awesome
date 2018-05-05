declare module 'spectacle-code-slide' {
    export interface Range {
        loc: [number, number]
        title?: string
        note?: string
    }
    export interface CodeSlideProps {
        lang?: 'js' | 'ts' | 'tsx'
        code: string
        ranges: Range[]
        showLineNumbers?: boolean
    }
    export default class CodeSlide extends React.Component<CodeSlideProps> {}
}
