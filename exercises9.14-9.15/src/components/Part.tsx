import React from 'react';
import { CoursePart } from '../index';

const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

interface PartProps {
  part: CoursePart,
}

const Part: React.FC<PartProps> = ({ part }) => {

  switch(part.name){
    case "Fundamentals":
      return (
        <>
          <div>
            name: {part.name}
          </div>
          <div>
            exerciseCount: {part.exerciseCount}
          </div>
          <div>
            description: {part.description}
          </div>
        </>
      )
    case "Using props to pass data":
      return (
        <>
          <div>
            name: {part.name}
          </div>
          <div>
            groupProjectCount: {part.groupProjectCount}
          </div>
          <div>
            exerciseCount: {part.exerciseCount}
          </div>
          <div>
            description: {part.description}
          </div>
        </>
      )
    case "Deeper type usage":
      return (
        <>
          <div>
            name: {part.name}
          </div>
          <div>
            exerciseSubmissionLink: {part.exerciseSubmissionLink}
          </div>
          <div>
            exerciseCount: {part.exerciseCount}
          </div>
          <div>
            description: {part.description}
          </div>
        </>
      )
    case "Cool Name":
      return (
        <>
          <div>
            name: {part.name}
          </div>
          <div>
            exerciseCount: {part.exerciseCount}
          </div>
          <div>
            description: {part.description}
          </div>
        </>
      )
    default :
      return assertNever(part);
  }
}

export default Part;