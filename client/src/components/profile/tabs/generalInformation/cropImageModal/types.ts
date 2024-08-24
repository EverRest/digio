import React from "react";

export interface CroppedImg {
  file: Blob | null;
  url: string;
}

export interface CropEasyTypes {
  id: number;
  filePath: string;
  setAvatarImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  serError: React.Dispatch<React.SetStateAction<string>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
