export interface MovieData {
    name: string
    director: string
    activityLength: number
    activityGroup: number
  }
  
  export interface Movie extends MovieData {
    id: number
  }
  