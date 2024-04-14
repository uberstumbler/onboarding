export type Gender = 'male' | 'female';

export interface User {
  gender: Gender;
  firstName: string;
  lastName: string;
  dateOfBirth: {
    day: number;
    month: number;
    year: number;
  };
  nationality: string;
}
