export interface Todo {
  id: number,
  title: string,
  status: boolean
}

export interface TodoState {
  todos: Todo[],
}
