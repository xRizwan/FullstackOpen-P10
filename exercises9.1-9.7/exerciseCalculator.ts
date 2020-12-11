interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (param: Array<number>) : Result => {
    const target = param[0];
    const arr = param.slice(1);
    const periodLength = arr.length;
    const trainingDays = arr.filter(a => a > 0).length;
    const result = arr.reduce((acc, cur) => acc + cur, 0);
    const success = result >= 10 ? true : false;
    let ratingDescription;
    if (success) {
        ratingDescription = 'not too bad but could be better';
    } else {
        ratingDescription = 'bad';
    }
    const average = result / periodLength;
    let rating = 0;
    if (result >= 10) {
        rating = 3;
    } else if (result > 7) {
        rating = 2;
    } else if (result > 4) {
        rating = 1.5;
    }


    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};

// console.log(
//     calculateExercises(
//         process.argv.slice(2).map(val => Number(val))
//     )
// );

export default calculateExercises;