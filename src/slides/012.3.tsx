import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./012.4-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Type guards (post 2.0)' },
            { loc: [0, 1], note: 'Union type' },
            { loc: [2, 3], note: 'Use type guard' },
            { loc: [6, 7], note: 'Inside guarded block, return' },
            { loc: [9, 10], note: 'Outside the if block, type has been narrowed to Layover' }
        ]}
    />
)
