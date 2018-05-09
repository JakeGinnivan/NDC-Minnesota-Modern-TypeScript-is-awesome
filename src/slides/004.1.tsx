import * as React from 'react'
import { Slide } from 'spectacle'

class ExplainTypeScript extends React.Component {
    render() {
        return (
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
            </ul>
        )
    }
}

export default (
    <Slide transition={['fade']} bgColor="primary">
        <ExplainTypeScript />
    </Slide>
)
