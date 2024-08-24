import { Cancel } from "@mui/icons-material";
import CropIcon from "@mui/icons-material/Crop";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Slider,
  Typography,
  Dialog,
} from "@mui/material";
import React, { ReactElement, useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg, resizeFile } from "./utils";
import { postProfilePicture } from "../../../../../api/users";
import { handleServerError } from "../../../../../utils/http";
import { setUser } from "../../../../../redux/slices/user/user";
import useAppDispatch from "../../../../../hooks/useAppDispatch";
import { Point, Area } from "react-easy-crop/types";
import { CropEasyTypes } from "./types";
import { useTranslation } from "react-i18next";

/* istanbul ignore next */
const CropEasy = ({
  id,
  filePath,
  setAvatarImage,
  serError,
  open,
  setOpen,
}: CropEasyTypes): ReactElement => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const cropComplete = (croppedArea: Area, croppedAreaPixels: Area): void => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const zoomPercent = (value: number): string => {
    return `${Math.round(value * 100)}%`;
  };

  const cropImage = async (): Promise<void> => {
    setOpen(false);
    const { file } = await getCroppedImg(filePath, croppedAreaPixels!);
    const resizedFile = await resizeFile(file!);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    const data = new FormData();
    data.append("_method", "PATCH");
    data.append("avatar_file", resizedFile!);
    const res = await postProfilePicture(id, data);
    if (res.status !== 200) {
      const { errorMessage } = handleServerError(res);
      serError(errorMessage);
      setOpen(false);
    } else {
      const resJson = await res.json();
      dispatch(setUser(resJson.data));
      setAvatarImage(resJson.data.avatar_file.url);
      serError("");
    }
  };

  return (
    <Dialog
      maxWidth={"sm"}
      open={open}
      aria-labelledby="max-width-dialog-title"
      data-testid="forward-invoice-dialog"
    >
      <DialogContent
        dividers
        sx={{
          background: "#333",
          position: "relative",
          height: 600,
          width: "auto",
          minWidth: { sm: 600 },
        }}
      >
        <Cropper
          image={filePath}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          onZoomChange={setZoom}
          onCropChange={setCrop}
          onCropComplete={cropComplete}
        />
      </DialogContent>
      <DialogActions sx={{ flexDirection: "column", mx: 3, my: 2 }}>
        <Box sx={{ width: "100%", mb: 1 }}>
          <Box>
            <Typography>Zoom: {zoomPercent(zoom)}</Typography>
            <Slider
              valueLabelDisplay="auto"
              valueLabelFormat={zoomPercent}
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              data-testid="slider"
              onChange={(e, zoom) => setZoom(Number(zoom))}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<Cancel />}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            data-testid="crop-button"
            variant="contained"
            startIcon={<CropIcon />}
            onClick={cropImage}
          >
            {t("crop")}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default CropEasy;
