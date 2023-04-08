export type Order = {
  id: string
  patrimony: string
  when: string
  closed?: string
  description?: string
  solution?: string
  status: 'open' | 'closed'
}
