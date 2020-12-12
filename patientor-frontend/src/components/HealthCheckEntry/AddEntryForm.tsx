import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiBaseUrl } from '../../constants';
import { Grid, Button } from "semantic-ui-react";
import { Field, Formik, Form } from "formik";

import { TextField, SelectField2, DiagnosisSelection } from "../../AddPatientModal/FormField";
import { Gender, HealthCheckEntry, HealthCheckRating } from "../../types";
import { Diagnosis } from '../../types';


export type ratingOptions = {
    value: HealthCheckRating;
    label: string;
  };

interface Props {
    onSubmit: (values: EntryFormValues) => void;
    onCancel: () => void;
  }

 const ratingOptions: ratingOptions[] = [
    { value: HealthCheckRating.Healthy, label: "Healthy" },
    { value: HealthCheckRating.CriticalRisk, label: "Critical" },
    { value: HealthCheckRating.HighRisk, label: "High" },
    { value: HealthCheckRating.LowRisk, label: "Low" },
  ];
  

  export type EntryFormValues = Omit<HealthCheckEntry, "id">;

const AddEntryForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [diagnosis, setDiagnosis] = useState<Diagnosis[] | []>([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/diagnosis`)
    .then(val => setDiagnosis(val.data))
  }, [])

  return (
    <Formik
      initialValues={{
        type: "HealthCheck",
        description: "",
        specialist: "",
        diagnosisCodes: [''],
        healthCheckRating: HealthCheckRating.Healthy,
        date: '',
      }}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form ui">
            <Field
              label="Description"
              placeholder="description"
              name="description"
              component={TextField}
            />
            <Field
              label="Specialist"
              placeholder="specialist"
              name="specialist"
              component={TextField}
            />
            <Field
              label="Date"
              placeholder="YYYY-MM-DD"
              name="Date"
              component={TextField}
            />
            <SelectField2
              label="healthCheckRating"
              name="rating"
              options={ratingOptions}
            />
            <DiagnosisSelection diagnoses={diagnosis} setFieldTouched={setFieldTouched} setFieldValue={setFieldValue} />
            <Grid>
              <Grid.Column floated="left" width={5}>
                <Button type="button" onClick={onCancel} color="red">
                  Cancel
                </Button>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Button
                  type="submit"
                  floated="right"
                  color="green"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;
