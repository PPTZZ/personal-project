export type ButtonProps = {
  text: string;
  variant: "btn-normal" | "btn-outline" | "btn-calculator";
};

export type TProducts = {
  categories: string;
  weight: number;
  title: string;
  calories: number;
  groupBloodNotAllowed: number[];
};
