import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./012.2-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Type guards (pre 2.0)' },
            { loc: [0, 1], note: 'A variable which could be anything!' },
            { loc: [9, 12], note: 'A type guard function to check if an object is a Flight' },
            { loc: [2, 7], note: 'Can use type guards to gain type safety inside a block' },
            { loc: [7, 8], note: 'Outside the if block, it is still a `any` type' }
        ]}
    />
)
