import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./010.5-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        showLineNumbers={false}
        ranges={[
            { loc: [0, 0], title: 'ES6 Modules' },
            { loc: [0, 6], note: 'Named exports' },
            { loc: [7, 9], note: 'Named imports' },
            { loc: [10, 11], note: 'Default exports' },
            { loc: [22, 24], note: 'Default imports' },
            { loc: [22, 28] }
        ]}
    />
)
