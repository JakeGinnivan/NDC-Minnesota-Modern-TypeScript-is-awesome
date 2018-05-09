import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./013.2-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Tagged union' },
            { loc: [0, 14], note: 'Add the tagging field (type)' },
            { loc: [1, 2], note: 'It should be a unique `string literal`' },
            { loc: [15, 16], note: 'Create a union type of the `tagged` types' },
            { loc: [16, 17], note: `'text' | 'standfirst' | 'blockquote'` },
            { loc: [19, 34], note: 'Can now use the tag field as a Type Guard' },
            { loc: [35, 42], note: 'Exhaustive check' }
        ]}
    />
)
