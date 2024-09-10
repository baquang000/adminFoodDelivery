export type TColor = {
  label: string;
  value: string;
};

export type TProduct = {
  id?: number;
  name: string;
  description: string;
  image: string;
  color: string;
  size: string;
  oldPrice: string;
  newPrice: string;
  sold: number;
  stock: number;
  categoryId: number | null;
  video?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export type TCart = {
  product: TProduct;
  quantity: number;
};

export type TCategory = {
  id?: number;
  name: string;
  productNumber: number;
  image: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export type TComment = {
  id?: number;
  productId: number;
  userId: number;
  content: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export type TUser = {
  id?: number;
  userName: string;
  email: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export type TOrder = {
  id?: number;
  userId: number;
  totalMoney: string;
  userNote: string;
  orderStatus: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export type TError = {
  error: string;
  statusCode: number;
  message: string;
};

export type TResult = {
  statusCode: number;
  message: string;
  data: any;
};

export type TChart = {
  labels?: string[];
  series?: number[];
};

export type TProductParams = {
  size?: string | null;
  color?: string | null;
  price?: string | null;
  categoryId?: string | null;
};
