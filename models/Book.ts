export interface BookData {
  name: string
  description: string
}

export interface Book extends BookData {
  id: number
}
