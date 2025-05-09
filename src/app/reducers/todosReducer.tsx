export interface ITodo {
  id: string;
  text: string;
  done: boolean;
}

export enum ITodoActionType {
  Added = "added",
  Changed = "changed",
  Deleted = "deleted",
}

export type ITodoActionAdded = Pick<ITodo, "id" | "text"> & {
  type: ITodoActionType.Added;
};

export type ITodoActionChanged = {
  todo: ITodo;
  type: ITodoActionType.Changed;
};

export type ITodoActionDeleted = Pick<ITodo, "id"> & {
  type: ITodoActionType.Deleted;
};

export type ITodoAction =
  | ITodoActionAdded
  | ITodoActionChanged
  | ITodoActionDeleted;

type ITodosReducer = (todos: ITodo[], action: ITodoAction) => ITodo[];

export const todosReducer: ITodosReducer = (
  todos: ITodo[],
  action: ITodoAction
) => {
  switch (action.type) {
    case ITodoActionType.Added: {
      console.log(action);
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case ITodoActionType.Changed: {
      return todos.map((t: ITodo) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case ITodoActionType.Deleted: {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
};
