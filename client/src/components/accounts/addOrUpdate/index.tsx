import React, {useState, useEffect, ReactElement} from "react";
import {Formik} from "formik";
import {Paper, Grid} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {getAccount} from "../../../api/accounts";
import {AccountPayload} from "../../../types/fe/account";
import {handleSubmit} from "./utilts";
import AddOrUpdateForm from "./form";

const AddOrUpdateAccount = (): ReactElement => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [initialValues, setInitialValues] = useState<AccountPayload>({
        accountName: "",
        description: "",
        link: "",
        accountType: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        const fetchAccount = async (): Promise<void> => {
            if (id) {
                const response = await getAccount(id);
                if (response.ok) {
                    const json = await response.json();
                    setInitialValues({
                        accountName: json.accountName,
                        link: json.link,
                        description: json.description,
                        accountType: json.accountType,
                        password: "",
                        email: "",
                    });
                }
            }
        };
        fetchAccount();
    }, [id]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper>
                    <Formik
                        enableReinitialize
                        initialValues={initialValues}
                        onSubmit={handleSubmit({
                            navigate, id, setFormMessage: () => {
                            }
                        })}
                    >
                        {(props) => <AddOrUpdateForm {...props} />}
                    </Formik>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AddOrUpdateAccount;