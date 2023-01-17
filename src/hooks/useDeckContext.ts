import { useContext } from "react";
import { DeckContext } from "../context/DeckContext";

const useDeckContext = () => useContext(DeckContext);

export default useDeckContext;
