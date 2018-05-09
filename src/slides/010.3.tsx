import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./010.4-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 1], note: 'Function with optional options object' },
            { loc: [1, 2], note: 'Set options to empty object if not defined' },
            { loc: [2, 3], note: '' },
            { loc: [7, 8], note: 'What is the type of msg?' },
            { loc: [7, 8], note: '< 2.0: string | GetLogMessage' },
            { loc: [7, 8], note: '> 2.0: string due to type narrowing!' }
        ]}
    />
)
