import React from "react";
import { Entry } from '../types';
import DiagnosisPage from './DiagnosisPage';

const EntryPage: React.FC<{entry: Entry}> = ({ entry }) => {
  return (
    <>
      <h3>Entries</h3>
      <p>{entry.date} {entry.description}</p>
      <ul>
        {entry.diagnosisCodes?.map((code, index) => <DiagnosisPage key={index} code={code} />)}
      </ul>
    </>
  );
};

export default EntryPage;
