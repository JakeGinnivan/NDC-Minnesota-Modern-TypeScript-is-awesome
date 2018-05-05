import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!../assets/code.example')

// tslint:disable-next-line:no-console
console.log(code)
export default (
    <CodeSlide
        lang="ts"
        code={code}
        showLineNumbers={false}
        ranges={
            [
                { loc: [0, 1], title: 'The Beginning' },
                { loc: [1, 2] },
                { loc: [1, 2], note: 'Heres a note!' },
                { loc: [2, 3] }
            ]
            // ...
        }
    />
)
