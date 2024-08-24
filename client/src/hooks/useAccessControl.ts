import useAppSelector from "./useAppSelector";
import { User } from "../types/be/user";
import { useEffect, useState } from "react";

interface UseAccessControl {
  _user: null | User;
  isTenant: boolean | undefined;
}

const useAccessControl = (): UseAccessControl => {
  const { _user } = useAppSelector((state) => state.user);
  const [isTenant, setIsTenant] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (_user) {
      setIsTenant(_user.role === "tenant");
    }
  }, []);

  return { _user, isTenant };
};

export default useAccessControl;
