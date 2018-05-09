import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./015.2-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [6, 7] },
            {
                loc: [8, 9],
                note: 'type ArticleDescription = { heading: string, byline?: string, contents: string }'
            },
            { loc: [10, 14], note: `Oops, byline is optional` },
            {
                loc: [26, 27],
                note: `Property 'byline' is missing in type '{ heading: string; contents: string; }'.`
            }
        ]}
    />
)
