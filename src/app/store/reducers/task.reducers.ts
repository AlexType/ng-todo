import { ETaskActions, TaskActions } from '../actions/task.actions';
import { initialTaskState, ITaskState } from '../state/task.state';

export const taskReducers = (
  state = initialTaskState,
  action: TaskActions
): ITaskState => {
  switch (action.type) {
    case ETaskActions.AddTask:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case ETaskActions.RemoveTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case ETaskActions.UpdateTask:
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.payload.id),
          action.payload,
        ],
      };

    case ETaskActions.GetTasks:
      return {
        ...state,
        tasks: action.payload,
      };

    case ETaskActions.TasksGetTotal:
      return {
        ...state,
        total: action.payload.total,
      };

    default:
      return state;
  }
};
