/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import bmiCalculator from './bmiCalculator';
import exerciseCalculator from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
    const height = req.query.height;
    const weight = req.query.weight;
    if (!weight || !height) {
        return res.status(400).json({
            error: "malformatted parameters"
          }).end();
    }
    const BMI = bmiCalculator(Number(height), Number(weight));
    res.json({
        height,
        weight,
        BMI
    }).end();
});

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let { target, daily_exercises } = req.body;
    if (!req.body || !daily_exercises || !target) {
        return res.status(400).json({"error": "malformatted parameters"});
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    daily_exercises = daily_exercises.map((val: any) => Number(val));
    target = [Number(target)];
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const paramArr = [...target, ...daily_exercises];
    const result = exerciseCalculator(paramArr);
    return res.json(result);
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});