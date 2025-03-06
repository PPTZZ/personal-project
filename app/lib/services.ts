import bcryptjs from "bcryptjs";

export const hashPassword = (password: string): string => {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
};

export const calorieCalculator = ( 
  height: number,
  age: number,
  currentWeight: number,
  desiredWeight: number
): number => {
  return (
    10 * currentWeight +
    6.25 * height -
    5 * age -
    161 -
    10 * (currentWeight - desiredWeight)
  );
};
