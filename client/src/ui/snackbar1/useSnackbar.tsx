import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import SnackbarComponent from "./index";
/* istanbul ignore next */
const useSnackbar = (): ReturnType => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [link, setLink] = useState("");

  const handleSnackbarClose = (): void => setIsSnackbarVisible(false);

  const Snackbar = (
    <SnackbarComponent
      type={type}
      open={isSnackbarVisible}
      title={title}
      link={link}
      autoHideDuration={5000}
      onClose={handleSnackbarClose}
    />
  );

  const snackbar = {
    success(message: string) {
      setTitle(message);
      setType("success");
      setIsSnackbarVisible(true);
    },
    error(message: string) {
      setTitle(message);
      setType("error");
      setIsSnackbarVisible(true);
    },
  };

  return {
    isSnackbarVisible,
    handleSnackbarClose,
    setIsSnackbarVisible,
    title,
    setTitle,
    type,
    setType,
    setLink,
    snackbar,
    Snackbar,
  };
};

export default useSnackbar;

interface ReturnType {
  isSnackbarVisible: boolean;
  handleSnackbarClose: () => void;
  setIsSnackbarVisible: Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: (type: string) => void;
  setLink: (link: string) => void;
  snackbar: Snackbar;
  Snackbar: ReactElement;
}

export interface Snackbar {
  success: (title: string) => void;
  error: (title: string) => void;
}
