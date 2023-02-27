import { styled } from './styles'

const Button = styled('button', {
    fontFamily: '$default',
    backgroundColor: '$iToddy500',
    borderRadius: '$md',
})

export function App() {
    return (
        <Button>Hello World</Button>
    )
}