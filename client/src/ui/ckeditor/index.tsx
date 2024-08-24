//https://codesandbox.io/s/vrz60?file=/src/index.js
import React, { ReactElement, ReactNode, useContext, useState } from "react";
//@ts-ignore
import ClassicEditor from "ckeditor-ckeditor5-build-classic-mention";
//@ts-ignore
import { CKEditor as CKEditor5React } from "@ckeditor/ckeditor5-react";
import { CKEditorProps } from "./types";
import { Button, Grid, TextField } from "@mui/material";
import { CKEditorWrapper } from "./styled";
import "./style.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { THEMES } from "../../constants";
import { useTranslation } from "react-i18next";

/* istanbul ignore next */
const CKEditor = ({
  content,
  feeds,
  handleSave,
  onReady,
  onChange,
  onBlur,
  onFocus,
  placeHolder
}: CKEditorProps): ReactElement => {
  const [isCKEditorVisible, setIsCKEditorVisible] = useState(false);
  const useTheme = (): any => useContext(ThemeContext);
  const { theme } = useTheme();
  const { t } = useTranslation();
  const props = {
    editor: ClassicEditor,
    data: content,
    config: {
      extraPlugins: ["Mention"],
      mention: {
        feeds,
      },
      toolbar: [
        "bold",
        "italic",
        "bulletedList",
        "numberedList",
        "link",
        "imageUpload",
      ],
    },
    onReady: (editor: any) => {
      editor.editing.view.focus();
      onReady && onReady(editor);
    },
    onChange: onChange,
    onBlur: (event: any, editor: any) => {
      onBlur && onBlur(event, editor);
    },
    onFocus: onFocus,
  };

  const themeSwitch = (): ReactNode => {
    switch (theme) {
      case THEMES.DEFAULT:
        return <CKEditor5React {...props} />;
      case THEMES.DARK:
        return (
          <CKEditorWrapper className={"ckeditor-dark-wrapper"}>
            <CKEditor5React {...props} />
          </CKEditorWrapper>
        );
    }
  };

  return (
    <>
      {!isCKEditorVisible && (
        <TextField
          id="demo-helper-text-misaligned"
          label=""
          fullWidth
          onClick={() => setIsCKEditorVisible(true)}
          onBlur={() => setIsCKEditorVisible(false)}
          placeholder={ t(placeHolder? placeHolder : 'leaveComment')}
        />
      )}
      {isCKEditorVisible && (
        <Grid container>
          <Grid item xs={12}>
            {themeSwitch()}
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              justifyContent={"flex-end"}
              spacing={1}
              sx={{ pt: 2 }}
            >
              <Grid
                item
                xs={3}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="text"
                  color={"primary"}
                  size="small"
                  sx={{ ml: 1 }}
                  onClick={() => setIsCKEditorVisible(false)}
                >
                  Cancel
                </Button>
                <Button
                  disabled={!content}
                  variant="contained"
                  size="small"
                  sx={{ ml: 1 }}
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CKEditor;
