import * as React from 'react'
import './timeline.css'
import { css } from 'emotion'

export interface Props {
    items: {
        label?: string
        description?: string
    }[]
}
export interface ItemProps {
    label?: string
    description?: string
    totalItems: number
}

export const TimelineItem: React.SFC<ItemProps> = ({ label, description, totalItems }) => {
    return (
        <li
            className={css({
                position: 'relative',
                display: 'inline-block',
                float: 'left',
                width: `${Math.round(100 / totalItems)}%`,
                font: 'bold 14px arial',
                height: '50px'
            })}
        >
            {label && <p className="diplome">{label}</p>}
            {label && <span className="point" />}
            {description && <p className="description">{description}</p>}
        </li>
    )
}

export const Timeline: React.SFC<Props> = ({ items }) => {
    return (
        <ol>
            {items.map(item => (
                <TimelineItem
                    key={item.label}
                    label={item.label}
                    description={item.description}
                    totalItems={items.length}
                />
            ))}
        </ol>
    )
}
