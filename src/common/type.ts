export type TColor = {
    label: string,
    value: string
}

export type TProduct = {
    name: string,
    description: string,
    video: string,
    image: string,
    color: string,
    oldPrice: string,
    newPrice: string,
    sold: number,
    stock: number,
    categoryId: number,
    createdAt: string,
    updatedAt: string,
    deletedAt: string
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