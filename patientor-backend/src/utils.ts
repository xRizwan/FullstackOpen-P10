/* eslint-disable @typescript-eslint/no-explicit-any */
import { NewPatient, Gender } from './types';

const toNewPatientEntry = (object: any): NewPatient => {
  const newEntry: NewPatient = {
    name: parseName(object.name),
    occupation: parseOccupation(object.occupation),
    gender: parseGender(object.gender),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseSsn(object.ssn),
    entries: [],
  };

  return newEntry;
};

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
  
const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + String(date));
  }
  return date;
};
  
const parseName = (Name: any): string => {
  if (!Name || !isString(Name)) {
    throw new Error('Incorrect or missing name: ' + String(Name));
  }
  return Name;
};
  
const parseOccupation = (Occupation: any): string => {
  if (!Occupation || !isString(Occupation)) {
    throw new Error('Incorrect or missing occupation: ' + String(Occupation));
  }
  return Occupation;
};
  
const parseSsn = (Ssn: any): string => {
  if (!Ssn || !isString(Ssn)) {
    throw new Error('Incorrect or missing SSN: ' + String(Ssn));
  }
  return Ssn;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + String(gender));
  }
  return gender;
};

export default toNewPatientEntry;