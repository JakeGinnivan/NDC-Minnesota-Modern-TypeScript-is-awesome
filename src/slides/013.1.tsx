import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./013.2-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Tagged union' },
            { loc: [0, 6], note: 'Add `kind`=flight' },
            { loc: [7, 12], note: 'Add `kind`=layover' },
            { loc: [13, 14], note: 'Variable which is a union of those two interfaces' },
            { loc: [15, 20], note: 'Can now just check the `kind` property to know the type' }
        ]}
    />
)
