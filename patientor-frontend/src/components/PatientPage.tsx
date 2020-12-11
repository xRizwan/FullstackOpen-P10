import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { Patient } from '../types';
import { Card } from 'semantic-ui-react'
import { apiBaseUrl } from "../constants";
import EntryPage from './EntryPage';

const PatientPage: React.FC = () => {
  const params = useParams<{id: string}>();
  const [patient, setPatient] = useState<Patient | undefined>();

  useEffect(() => {
    axios.get<Patient>(`${apiBaseUrl}/patients/${params.id}`)
    .then(val => setPatient(val.data));
  }, [params.id])

  return (
    <div className="App">
        {patient && (
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
        )}
    </div>
  );
};

export default PatientPage;
