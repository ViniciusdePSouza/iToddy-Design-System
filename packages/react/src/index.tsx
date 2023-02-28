import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$iToddy700',
    borderRadius: '$md',
    border: 0,
    fontWeight: 'bold',
    color: "$black",

    variants: {
        size: {
            small: {
                fontSize: 14,
                padding: '$2 $4',
            },
            big: {
                fontSize: 16,
                padding: '$3 $6',
            }
        }
    },

    defaultVariants: {
        size: 'small'
    }
})

export type ButtonProps = ComponentProps<typeof Button>