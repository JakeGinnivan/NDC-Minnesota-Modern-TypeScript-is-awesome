import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./014.2-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Index types' },
            { loc: [0, 2], note: 'Start with some type aliases' },
            { loc: [3, 6], note: 'interface with index property' },
            { loc: [7, 20], note: 'Can have any key, but the value must be of a type' },
            { loc: [16, 18], note: 'Compilation error!' }
        ]}
    />
)
