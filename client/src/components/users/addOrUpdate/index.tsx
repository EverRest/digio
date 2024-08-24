import React, { useState, useEffect, ReactElement } from "react";
import { Formik } from "formik";
import { Paper, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../../../api/users";
import { UserPayload } from "../../../types/fe/user";
import { handleSubmit } from "./utilts";
import AddOrUpdateForm from "./form";

const AddOrUpdateUser = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<UserPayload>({
    email: "",
    mood: "",
    role: "",
    password: "",
    username: "",
    name: "",
  });

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      if (id) {
        const response = await getUser(id);
        if (response.ok) {
          const json = await response.json();
          setInitialValues({
            email: json.email,
            mood: json.mood,
            username: json.username,
            name: json.name,
            role: json.role ?? "admin",
            password: "",
          });
        }
      }
    };
    fetchUser();
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

export default AddOrUpdateUser;