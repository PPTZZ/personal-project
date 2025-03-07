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
  groupBloodNotAllowed: [boolean];
};

export type TUsers = {
  name: string;
  email: string;
  password: string;
};

export type TModalProps = {
  text?: string;
  calories?: number;
  onClose?: () => void;
  onOK?: () => void;
};

export type RootState = {
  products: {
    products: TProducts[];
    bannedProducts: TProducts[];
    isLoading: boolean;
    error: string;
  };
};
