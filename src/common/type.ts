export type TColor = {
    label: string,
    value: string
}

export type TProduct = {
    id?: number,
    name: string,
    description: string,
    image: string,
    color: string,
    oldPrice: string,
    newPrice: string,
    sold: number,
    stock: number,
    categoryId: number | null,
    video?: string,
    status?: string,
    createdAt?: string,
    updatedAt?: string,
    deletedAt?: string
}

export type TCategory = {
    id?: number,
    name: string,
    productNumber: number,
    image: string,
    status?: string,
    createdAt?: string,
    updatedAt?: string,
    deletedAt?: string
}

export type TError = {
    error: string,
    statusCode: number,
    message: string
}

export type TResult = {
    statusCode: number,
    message: string,
    data: any
}