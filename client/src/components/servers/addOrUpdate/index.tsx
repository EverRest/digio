import React, { useState, useEffect, ReactElement } from "react";
import { Formik } from "formik";
import { Paper, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getProject } from "../../../api/projects";
import { ProjectPayload } from "../../../types/fe/project";
import { handleSubmit } from "./utilts";
import AddOrUpdateForm from "./form";

const AddOrUpdateProject = (): ReactElement => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<ProjectPayload>({
    description: "",
    name: "",
    projectType: "",
    password: "",
    url: "",
    tags: [],
    farmDescription: "",
    start: "",
    end: ""
  });

  useEffect(() => {
    const fetchProject = async (): Promise<void> => {
      if (id) {
        const response = await getProject(id);
        if (response.ok) {
          const json = await response.json();
          setInitialValues({
            description: json.description,
            name: json.name,
            password: "",
            url: json.url,
            projectType: json.projectType,
            tags: json.tags,
            farmDescription: json.farmDescription,
            start: json.start,
            end: json.end
          });
        }
      }
    };
    fetchProject();
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

export default AddOrUpdateProject;