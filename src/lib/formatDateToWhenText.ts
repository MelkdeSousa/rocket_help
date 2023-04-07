export const formatDateToWhenText = (value: number | string | Date): string => {
  const date = new Date(value)

  const day = date.toLocaleDateString('pt-BR')
  const hour = date.toLocaleTimeString('pt-BR').slice(0, 5)

  return `${day} às ${hour}`
}
