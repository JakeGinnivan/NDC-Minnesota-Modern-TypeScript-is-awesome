import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./010.2-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Control flow analysis' },
            { loc: [0, 3], note: 'A log function which accepts a string or a log function' },
            { loc: [3, 4], note: 'Check the runtime type of the parameter' },
            { loc: [4, 5], note: 'Can call the function because of type guard!' },
            { loc: [7, 8], note: 'What is the type of msg?' },
            { loc: [7, 8], note: '< 2.0: string | GetLogMessage' },
            { loc: [7, 8], note: '> 2.0: string due to type narrowing!' }
        ]}
    />
)
