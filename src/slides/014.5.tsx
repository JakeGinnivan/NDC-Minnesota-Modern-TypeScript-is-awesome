import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./014.6-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Built in mapped types' },
            { loc: [0, 5] },
            { loc: [6, 10], note: 'Partial, all keys now optional' },
            { loc: [12, 16], note: `Readonly, all keys now readonly` },
            { loc: [18, 22], note: `Pick, pick a subset of properties` }
        ]}
    />
)
