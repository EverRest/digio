import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  DialogTitle,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import Button from "../../ui/button/Button";
import Dialog from "@mui/material/Dialog";
import { route } from "../../utils/url";
import { useCustomEventListener } from "react-custom-events";

function Default(): React.ReactElement {
  const { t } = useTranslation();
  const [sessionExpire, setSessionExpire] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  useCustomEventListener("logout", async () => {
    setSessionExpire(true);
  });

  const handleSessionLogout = async (): Promise<void> => {
    const { pathname } = location;
    await signOut();
    navigate(route("sign-in"), {
      state: {
        from: pathname,
      },
    });
  };
  return (
    <React.Fragment>
      <Dialog open={sessionExpire} data-testid="session-timeout-modal">
        <DialogTitle>{t("sessionExpireTitle")}</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6" gutterBottom component="div" mb={5}>
            {t("sessionExpireContent")}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSessionLogout}
            testId="session-timeout-modal-btn-sign-out"
            title={t("signOut")}
            type="button"
            disabled={false}
            isLoading={false}
          />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Default;
