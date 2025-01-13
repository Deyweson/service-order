export interface IOrder {
  id: number
  userId: number
  clientId: number
  title: string
  date: Date
  local: string
  status: OrderStatus
}

enum OrderStatus {
  EM_ABERTO = 'EM_ABERTO',
  EM_ANDAMENTO = 'EM_ANDAMENTO',
  FINALIZADA = 'FINALIZADA',
  CANCELADA = 'CANCELADA'
}