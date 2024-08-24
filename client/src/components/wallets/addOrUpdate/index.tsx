import React, { useState, useEffect, ReactElement } from "react";
import { Formik } from "formik";
import { Paper, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getWallet } from "../../../api/wallets";
import { handleSubmit } from "./utilts";
import AddOrUpdateForm from "./form";
import {WalletPayload} from "../../../types/fe/wallet";

const AddOrUpdateWallet = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<WalletPayload>({
    address: "",
    description: "",
    name: "",
    walletName: "",
    walletType: "",
    password: "",
    token: "",
    phrase: "",
    secret: "",
    publicKey: "",
    privateKey: "",
    apiKey: ""
  });

  useEffect(() => {
    const fetchWallet = async (): Promise<void> => {
      if (id) {
        const response = await getWallet(id);
        if (response.ok) {
          const json = await response.json();
          setInitialValues({
            address: json.address,
            description: json.description,
            name: json.name,
            walletName: json.walletName,
            walletType: json.walletType,
          });
        }
      }
    };
    fetchWallet();
  }, [id]);

  return (
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={handleSubmit({ navigate, id, setFormMessage: () => {} })}
            >
              {(props) => <AddOrUpdateForm {...props} />}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
  );
};

export default AddOrUpdateWallet;