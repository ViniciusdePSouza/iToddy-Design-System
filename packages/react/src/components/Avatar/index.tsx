import { AvatarContainer, AvatarFallBack, AvatarImage } from "./styles";
import { User } from 'phosphor-react'
import { ComponentProps } from "react";

export function Avatar(props: AvatarProps ) {
    return (
        <AvatarContainer>
            <AvatarImage {...props}/>

            <AvatarFallBack delayMs={600}>
                <User/>
            </AvatarFallBack>
        </AvatarContainer>
    )
}

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

Avatar.displayName = 'Avatar'