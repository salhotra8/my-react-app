import { useContext } from "react";
import { GameQueryContext } from "../components/helpers/GameQueryProvider";

const GameQuery = () => useContext(GameQueryContext);
export default GameQuery;
