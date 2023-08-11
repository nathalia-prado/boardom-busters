export interface BoardGameData {
    name: string
    difficult: string
    activityLength: number
    activityGroup: number
  }
  
  export interface BoardGame extends BoardGameData {
    id: number
  }
  