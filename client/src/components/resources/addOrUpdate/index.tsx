import React, { useState, useEffect, ReactElement } from "react";
import { Formik } from "formik";
import { Paper, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getResource } from "../../../api/resources";
import { ResourcePayload } from "../../../types/fe/resource";
import { handleSubmit } from "./utilts";
import AddOrUpdateForm from "./form";

const AddOrUpdateResource = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<ResourcePayload>({
    description: "",
    name: "",
    resourceType: "",
    password: "",
    url: ""
  });

  useEffect(() => {
    const fetchResource = async (): Promise<void> => {
      if (id) {
        const response = await getResource(id);
        if (response.ok) {
          const json = await response.json();
          setInitialValues({
            description: json.description,
            name: json.name,
            password: "",
            resourceType: json.resourceType,
            url: json.url
          });
        }
      }
    };
    fetchResource();
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

export default AddOrUpdateResource;