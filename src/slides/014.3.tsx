import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./014.4-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Mapped types' },
            { loc: [5, 6], note: 'Create union of feature keys' },
            { loc: [7, 8], note: `Can use 'in' keyword to map keys!` },
            {
                loc: [7, 8],
                note: 'type FeatureState = { autoplayVideo: Feature, newArticlePage: Feature }'
            },
            {
                loc: [8, 9],
                note: 'type FeatureDescription = { autoplayVideo: string, newArticlePage: string }'
            }
        ]}
    />
)
