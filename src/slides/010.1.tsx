import * as React from 'react'
import { Slide, Layout } from 'spectacle'
import { images } from '../images'

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Layout
            style={{
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            }}
        >
            <img style={{ display: 'flex', objectFit: 'contain' }} src={images.dependencyList} />
        </Layout>
    </Slide>
)
