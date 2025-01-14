export interface IOrder {
  id: number
  user_id: number
  client_id: number
  title: string
  order_date: Date
  order_local: string
  status: OrderStatus
}

enum OrderStatus {
  EM_ABERTO = 'EM_ABERTO',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  FINALIZADA = 'FINALIZADA',
  CANCELADA = 'CANCELADA'
}