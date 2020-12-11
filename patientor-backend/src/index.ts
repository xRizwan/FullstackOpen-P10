import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnosis';
import patientRouter from './routes/patient';
const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/diagnosis', diagnosisRouter)
app.use('/api/patients', patientRouter)


app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});