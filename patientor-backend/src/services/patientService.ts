import patientData from '../data/patients';
import { Patient, PublicPatient, NewPatient, Entry } from '../types/';

const patients: Patient[] = patientData;

const getEntries = () : Patient[]  => {
  return patients;
};

const findById = (id: string): Patient | undefined => {
    const entry = patients.find(p => p.id === id);
    console.log(entry);
    return entry;
  };

const findByIdAndUpdate = (id: string, entry: Entry): Patient | undefined => {
    const patient = patients.find(p => p.id === id);
    if (patient) {
      const newPatient = {...patient , entries: patient.entries.concat(entry)};
      patients.map(p => p.id === id ? newPatient : p);
      return newPatient;
    } else {
      return patient;
    }
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
  findById,
  findByIdAndUpdate
};