import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useTheme = (): any => useContext(ThemeContext);

export default useTheme;
