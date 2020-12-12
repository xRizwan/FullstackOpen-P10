import React, { useState, useEffect } from "react";
import axios from "axios";
import { Patient } from '../../types';
import { apiBaseUrl } from "../../constants";
import AddEntryForm from './AddEntryForm';
import { Button } from "semantic-ui-react";
import { EntryFormValues } from './AddEntryForm';
import EntryFormModal from './EntryFormModal';

const Wrapper: React.FC<{ id: string, onSubmit: (values: EntryFormValues) => void; }> = ({ id, onSubmit }) => {
  const [patient, setPatient] = useState<Patient | undefined>();

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>();

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  return (
    <>
        <Button onClick={() => openModal()}>Add Health Check Entry</Button>
        <EntryFormModal modalOpen={modalOpen} onSubmit={onSubmit} onClose={closeModal} />
    </>
  );
};

export default Wrapper;
