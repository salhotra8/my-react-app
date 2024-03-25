import React, { ReactNode, useState } from "react";
import { SortOrder } from "../SortSelector/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: SortOrder;
  searchText?: string;
}

interface IGameQueryContext {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export const GameQueryContext = React.createContext<IGameQueryContext>(
  {} as IGameQueryContext
);

const GameQueryProvider = ({ children }: ChildrenProps) => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({});

  return (
    <GameQueryContext.Provider value={{ gameQuery, setGameQuery }}>
      {children}
    </GameQueryContext.Provider>
  );
};

export default GameQueryProvider;
