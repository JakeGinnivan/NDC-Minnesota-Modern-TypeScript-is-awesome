import * as React from 'react'
import CodeSlide from 'spectacle-code-slide'

const code = require('!!raw-loader!./014.4-code')

export default (
    <CodeSlide
        lang="ts"
        code={code}
        ranges={[
            { loc: [0, 0], title: 'Mapped types' },
            { loc: [0, 11], note: 'Accomodation and Address types' },
            { loc: [12, 15], note: 'A mapped type to document an interface!' },
            { loc: [16, 22], note: 'Enforced documentation! But what about city?' },
            { loc: [23, 26], note: 'Notice the -?' },
            { loc: [16, 22], note: 'Error: city is missing from Address' }
        ]}
    />
)
