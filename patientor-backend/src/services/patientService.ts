import patientData from '../data/patients';
import { Patient, PublicPatient, NewPatient } from '../types/';

const patients: Patient[] = patientData;

const getEntries = () : Patient[]  => {
  return patients;
};

const findById = (id: string): Patient | undefined => {
    const entry = patients.find(p => p.id === id);
    console.log(entry);
    return entry;
  };

const getEntriesWithoutSsn = () : PublicPatient[] => {
    return patients.map(({ id, dateOfBirth, occupation, name, gender }) => ({
        id,
        dateOfBirth,
        occupation,
        gender,
        name,
    }));
  };

const addEntry = ( entry: NewPatient ): Patient => {
  const newPaitentEntry = {
      id: String(patients.length + 1),
      ...entry,
      entries: [],
  };

  patients.push(newPaitentEntry);
  return newPaitentEntry;
};


export default {
  getEntries,
  addEntry,
  getEntriesWithoutSsn,
  findById
};