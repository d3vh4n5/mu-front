export type Column<T> = {
  header: string
  key: keyof T
  className?: string
}

export type MuTableProps<T> = {
  title?: string
  columns: Column<T>[]
  data: T[]
}

export type VipLevel ={
  soul: number,
  life: number,
  pk: number,
  resetLevel: number,
  resetPoints: number,
  plus: number,
  dinorant: number,
}
