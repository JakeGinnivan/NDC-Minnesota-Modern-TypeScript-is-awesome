import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./011.4-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Control flow analysis' },
            { loc: [0, 1], note: 'An optional parameter' },
            { loc: [1, 4], note: 'Return undefined if options is not defined' },
            { loc: [5, 6], note: 'Options is no longer unioned with undefined' }
        ]}
    />
)
