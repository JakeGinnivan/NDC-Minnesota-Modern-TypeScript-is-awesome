import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./016.2-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [8, 11] },
            {
                loc: [12, 13],
                note:
                    'type ArticleDescription = { heading: string, byline: { name: string, photo: string }, contents: string }'
            },
            {
                loc: [14, 21],
                note: `Deep interface documentation!`
            }
        ]}
    />
)
