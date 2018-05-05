import * as React from 'react'
import { Slide, Heading, List, Appear, ListItem } from 'spectacle'

export default (
    <Slide
        transition={['fade']}
        bgColor="primary"
        notes={`1) new features faster, target older browsers
2) Move runtime errors to compilation time
3) Speed up development, make it easier to understand existing code quicker`}
    >
        <Heading size={2} textColor="tertiary" caps margin="0 0 100px 0">
            Problems to solve
        </Heading>

        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <List>
                <Appear>
                    <ListItem>Downlevel compilation (ES6/7 -> ES3/5)</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Type checking during compilation</ListItem>
                </Appear>
                <Appear>
                    <ListItem>Increase development speed</ListItem>
                </Appear>
            </List>
        </div>
    </Slide>
)
