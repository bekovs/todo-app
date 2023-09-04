export interface Todo {
  id?: number,
  title: string,
  status: boolean,
  date: number,
}

export interface TodoState {
  todos: Todo[],
}
