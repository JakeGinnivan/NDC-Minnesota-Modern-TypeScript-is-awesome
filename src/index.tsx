import Redbox from 'redbox-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Presentation } from './Presentation'
import { AppContainer } from 'react-hot-loader'

import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-tomorrow.css'

// tslint:disable-next-line:no-any
const CustomErrorReporter: React.SFC<{ error: any }> = ({ error }) => <Redbox error={error} />

ReactDOM.render(<Presentation />, document.getElementById('root') as HTMLElement)

ReactDOM.render(
    <AppContainer errorReporter={CustomErrorReporter}>
        <Presentation />
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./Presentation', () => {
        const NextPresentation = require('./Presentation').default
        ReactDOM.render(
            <AppContainer errorReporter={CustomErrorReporter}>
                <NextPresentation />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}