import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./014.2-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Index types' },
            { loc: [0, 4], note: 'Define the type of the value' },
            { loc: [5, 8], note: 'Interface with index property' },
            { loc: [9, 19], note: 'Can have any key, but the value must be of a type' }
        ]}
    />
)
