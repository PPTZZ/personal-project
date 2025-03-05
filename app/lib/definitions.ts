export type ButtonProps = {
  text: string;
  variant: "btn-normal" | "btn-outline" | "btn-calculator";
  action?: (e?: React.FormEvent) => void;
};

export type TProducts = {
  categories: string;
  weight: number;
  title: string;
  calories: number;
  groupBloodNotAllowed: [{}];
};

export type TUsers = {
  name: string;
  email: string;
  password: string;
};

export type TModalProps = {
  text?: string;
  calories?: number;
  onClick?: () => void;
};
