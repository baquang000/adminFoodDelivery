import type { ORDER_STATUS, ORDER_TYPE } from "./enum";

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

export type TPropsCart = {
  size?: string;
  color?: string;
};

export type TCategory = {
  id?: number;
  name: string;
  imagePath: string;
};

export type TComment = {
  id: number;
  idShop: number;
  idUser: number;
  idFood?: number;
  idOrder: number;
  content: string;
  imagePath: string;
  rating: string;
  time: string;
};

export type TUser = {
  id?: number;
  email?: string;
  role?: string;
};

export type TRegister = {
  userName: string;
  email: string;
  password: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TOrder = {
  id?: number;
  sumPrice: string;
  noteOrder: string;
  idUser: string;
  idShop: string;
  rewardForDriver: number;
  deliverytoDoor: Boolean;
  diningSubtances: Boolean;
  time: String;
  orderStatus?: string;
  orderDetails?: [
    {
      id?: number;
      idOrder?: number;
      idFood?: number;
      quantity?: number;
      price?: number;
      title?: string;
      imagePath?: string;
    }
  ];
  user?: {
    email?: string;
    name?: string;
    id?: number;
    address?: string;
    numberPhone?: string;
    dateOfBirth?: string;
  };
  shop?: {
    id?: number;
    address?: string;
    email?: string;
    name?: string;
    imageUrl?: string;
    phoneNumber?: string;
    starShop?: string;
    titleShop?: string;
  };
};

export type TParamsOrder = {
  statusOrder: ORDER_STATUS;
};

export type TOrderDetails = {
  id?: number;
  orderId: number;
  productId: number;
  quantity: number;
  color: string;
  size: string;
  orderStatus?: string;
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

export type TSuccess = {
  statusCode: number;
  message: string;
};

export type TChart = {
  labels?: string[];
  series?: number[];
};

export type TProductParams = {
  q?: string | null;
  size?: string | null;
  color?: string | null;
  price?: string | null;
  categoryId?: string | null;
};

export type TFoodParams = {
  q?: string | null;
};

export type TUserInfo = {
  userName?: string;
  address?: string;
  phoneNumber?: string;
};

export type TStatus = {
  orderStatus: string;
};

export type TAllAccount = {
  id: string;
  email: string;
  role: string;
};

export type TFood = {
  id?: number;
  bestFood: boolean;
  idCategory: number;
  description: string;
  imagePath: string;
  idPrice: number;
  star: string;
  idTime: number;
  title: string;
  idShop: number | null;
  showFood: boolean;
  timeValue: string;
  price: {
    id: number;
    price: string;
  };
  time: {
    id: number;
    time: string;
  };
};

export type CreateFood = {
  title: string;
  description: string;
  price: string;
  idCategory: number;
  imagePath: string;
  timeValue: string;
  idShop: number;
  bestFood: boolean;
  showFood: boolean;
  star: string;
};
