import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiBaseUrl } from '../constants';
import { Diagnosis } from '../types';

const EntryPage: React.FC<{code: string}> = ({ code }) => {
  const [info, setInfo] = useState<Diagnosis | undefined> ();

  useEffect(() => {
    axios.get<Diagnosis>(`${apiBaseUrl}/diagnosis/${code}`)
    .then(res => setInfo(res.data))
  }, [code])

  return (
    <>
      {info && (
        <li>{info.code} {info.name} </li>
      )}
    </>
  );
};

export default EntryPage;
