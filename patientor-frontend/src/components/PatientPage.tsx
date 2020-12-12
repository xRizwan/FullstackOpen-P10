import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { Patient } from '../types';
import { Card } from 'semantic-ui-react'
import { apiBaseUrl } from "../constants";
import EntryPage from './EntryPage';
import { EntryFormValues } from './HealthCheckEntry/AddEntryForm';
import HealthCheckWrapper from './HealthCheckEntry/EntryFormWrapper';

const PatientPage: React.FC = () => {
  const params = useParams<{id: string}>();
  const [patient, setPatient] = useState<Patient | undefined>();

  const submitNewEntry = async (values: EntryFormValues) => {
    console.log(values);
    try {
      const { data: updatedPatient } = await axios.post<Patient>(
        `${apiBaseUrl}/patients`,
        values
      );
      console.log(updatedPatient)
    } catch (e) {
      console.error(e.response.data);
    }
  };

  useEffect(() => {
    axios.get<Patient>(`${apiBaseUrl}/patients/${params.id}`)
    .then(val => setPatient(val.data));
  }, [params.id])

  return (
    <div className="App">
        {patient && (
          <>
            <Card>
            <Card.Content>
              <Card.Header>Name: {patient.name}</Card.Header>
              <br />
              <Card.Meta>Occupation: {patient.occupation}</Card.Meta>
              <Card.Description>
                SSN: {patient.ssn}
                {patient.entries.map((entry, index) => <EntryPage key={index} entry={entry} />)}
              </Card.Description>
            </Card.Content>
          </Card>
          <HealthCheckWrapper id={params.id} onSubmit={submitNewEntry} />
          </>
        )}
    </div>
  );
};

export default PatientPage;
