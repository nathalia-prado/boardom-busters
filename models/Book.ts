export interface BookData {
  name: string
  author: string
  activityLength: number
  activityGroup: number
}

export interface Book extends BookData {
  id: number
}
