import * as React from 'react'
import { Slide, Appear } from 'spectacle'
import { Timeline } from '../components/timeline'
import { css } from 'emotion'

const Line: React.SFC<{ left: number; label?: string; style?: object }> = ({ left, label, style }) => (
    <div
        className={css({
            position: 'absolute',
            left: `${left}%`
        })}
    >
        <div
            className={css({
                width: 0,
                height: 0,
                margin: '0 auto',
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '10px solid black'
            })}
        />
        <div
            className={css({
                display: 'inline-block',
                height: '50px',
                borderLeft: 'thick solid #000'
            })}
        />

        {label && (
            <div
                className={css({
                    display: 'block',
                    width: '12rem'
                })}
            >
                {label}
            </div>
        )}
    </div>
)

export default (
    <Slide transition={['fade']} bgColor="primary">
        <Timeline
            items={[
                { label: 'ES3' },
                {},
                { label: 'ES5' },
                {},
                { label: 'ES2015' },
                { label: 'ES2016' },
                { label: 'ES2017' }
            ]}
        />

        <div>
            <Appear>
                <div>
                    <Line left={32} label="State of the web JS" />
                </div>
            </Appear>
            <Appear>
                <div>
                    <Line left={58} label="State of the server JS" />
                </div>
            </Appear>
            <Appear>
                <div>
                    <Line left={83} label="State of the art JS" />
                </div>
            </Appear>
        </div>
    </Slide>
)
