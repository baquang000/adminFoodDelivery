export enum SCREEN_ENUM {
  PRODUCT = "product",
  CATEGORY = "category",
  ORDER = "order",
  COMMENT = "comment",
  DASHBOARD = "dashboard",
}

export enum ACTION_ENUM {
  CREATE = "create",
  UPDATE = "update",
}

export enum ORDER_STATUS {
  PENDING = "PENDING",
  DELIVERY = "DELIVERY",
  SUCCESS = "SUCCESS",
  CANCEL = "CANCEL",
  FOODBACK = "FOODBACK",
}

export enum ORDER_TYPE {
  NORMAL = "normal",
  ONLINE = "paypal",
}
