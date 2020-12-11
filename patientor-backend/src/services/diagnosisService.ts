import diagnosisData from '../data/diagnosis.json';
import { Diagnosis } from '../types/';

const diagnosis: Diagnosis[] = diagnosisData;

const getEntries = () : Diagnosis[]  => {
  return diagnosis;
};

const addEntry = () => {
  return null;
};

const findByCode = (code: string): Diagnosis | undefined => {
  const entry = diagnosis.find(p => p.code === code);
  console.log(entry);
  return entry;
};

export default {
  getEntries,
  addEntry,
  findByCode
};