import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0.005 $4',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "$2",

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4',
    },

    variants: {
        variant :{
            primary: {
                color: '$black',
                backgroundColor: '$iToddy500',

                '&:not(:disabled):hover': {
                    backgroundColor: '$iToddy300'
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                    cursor: 'not-allowed'
                }
            },
            secondary: {
                color: '$iToddy300',
                border: '2px solid $iToddy500',

                
                '&:not(:disabled):hover': {
                    backgroundColor: '$iToddy500',
                    color: '$black'
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                    borderColor: '$gray200',
                    cursor: 'not-allowed'
                }
            },
            tertiary: {
                color: "$white",

                '&:not(:disabled):hover': {
                    color: '$white'
                },
                
                '&:disabled': {
                    color: '$gray100',
                    cursor: 'not-allowed'
                }
            },
        },

        size: {
            sm: {
                height: 32
            },
            md: {
                height: 46
            }
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})

export interface ButtonProps extends ComponentProps<typeof Button>{
    as?: ElementType
}

Button.displayName = 'Button'