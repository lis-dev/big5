import { Result } from '../types';

export const calculationFunction = (score: number, count: number): Result => {
  const average = score / count;
  let result: Result = 'neutral';
  if (average > 3) {
    result = 'high';
  } else if (average < 3) {
    result = 'low';
  }
  return result;
};
