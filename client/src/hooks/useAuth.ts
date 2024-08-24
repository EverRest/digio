import { useContext } from "react";
import { AuthContext } from "../contexts/JWTContext";

const useAuth = (): any => {
  const context = useContext(AuthContext);
  /* istanbul ignore next */
  if (!context)
    throw new Error("AuthContext must be placed within AuthProvider");

  return context;
};

export default useAuth;
