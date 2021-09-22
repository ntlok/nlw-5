
import { createContext, ReactNode, useState } from "react";

type PlayerContextTextProps = {
    title: string;
    description: string;
}

type PlayerContextElementProps = {
    children: ReactNode;
}


export const PlayerContextText = createContext({} as PlayerContextTextProps);


export function PlayerContextElemento({ children }: PlayerContextElementProps) {

    const [episodeList, setEpisodeList] = useState([])

    return(
        <PlayerContextText.Provider
            value={{

            }}
        >
            { children }
        </PlayerContextText.Provider>
    )
}

