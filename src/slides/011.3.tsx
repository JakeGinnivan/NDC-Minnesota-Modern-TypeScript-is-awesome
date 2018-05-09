import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./011.4-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 1], note: 'Function with optional options object' },
            { loc: [1, 2], note: 'Set options to empty object if not defined' },
            { loc: [2, 3], note: 'TypeScript has now removed `undefined` from type of options!' },
            { loc: [4, 5], note: '`options` is now { pretty: boolean }' }
        ]}
    />
)
