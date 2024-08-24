import { User } from "../../../../types/fe/user";
import { AppDispatch } from "../../../../redux/store";

export enum UserProfileTests {
  FIRST_NAME = "FIRST_NAME",
  LAST_NAME = "LAST_NAME",
  ERROR_MESSAGE = "ERROR_MESSAGE",
}

export interface GetUserProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  errorMessageText: string;
}

export interface DeleteAvatarProps {
  id: number;
  dispatch: AppDispatch;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAvatarImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  serError: React.Dispatch<React.SetStateAction<string>>;
}

export interface FetchUserData {
  data: User;
  meta: {
    status: number;
  };
}
