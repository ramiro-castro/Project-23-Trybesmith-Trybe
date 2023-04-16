export interface ProductInterface {
  id?: number // id e orderId são opcionais aqui na interface, pois sao preenchidos automaticamente no BD
  name: string
  amount: string
  orderId?: number
}

export interface UserInterface {
  id?: number
  username: string
  vocation: string
  level: number
}

export interface UserConfidentialInterface extends UserInterface {
  password: string
}

export interface LoginInterface {
  username: string
  password: string
}

export interface OrderInterface {
  id: number
  userId: number
  productsId: number[]
}
