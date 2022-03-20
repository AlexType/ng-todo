import { EMarkActions, MarkActions } from '../actions/mark.actions';
import { IMarkState, initialMarkState } from '../state/mark.state';

export const markReducers = (
  state = initialMarkState,
  action: MarkActions
): IMarkState => {
  switch (action.type) {
    case EMarkActions.AddMark:
      return {
        ...state,
        marks: [...state.marks, action.payload.mark],
      };

    case EMarkActions.DeleteMark:
      return {
        ...state,
        marks: state.marks.filter((mark) => mark.id !== action.payload.id),
      };

    case EMarkActions.UpdateMark:
      return {
        ...state,
        marks: [
          ...state.marks.filter((mark) => mark.id !== action.payload.mark.id),
          action.payload.mark,
        ],
      };

    case EMarkActions.GetMarks:
      return {
        ...state,
        marks: action.payload.marks,
      };

    case EMarkActions.MarksGetTotal:
      return {
        ...state,
        total: action.payload.total,
      };

    default:
      return state;
  }
};
