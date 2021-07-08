
export type validateFilter =  'all' | 'complete' | 'pending';

export interface todoText{
  text: string
}

export interface todoID{
  id: number
}

export interface todoEdit{
  id: number
  text: string
}

export interface todoComplete{
  complete: boolean
}

export interface  todoFilter{
  filter: validateFilter,
}


