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
