import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const useGameContext = () => useContext(GameContext);

export default useGameContext;
