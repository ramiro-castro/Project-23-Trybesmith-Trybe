export interface ProductInterface {
  id?: number // id e orderId são opcionais aqui na interface, pois sao preenchidos automaticamente no BD
  name: string
  amount: string
  orderId?: number
}
