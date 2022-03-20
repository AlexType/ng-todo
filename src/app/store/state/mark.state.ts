import { IMark } from 'src/app/models/mark.interface';

export interface IMarkState {
  marks: IMark[];
  total: number;
}

export const initialMarkState: IMarkState = {
  marks: [],
  total: 0,
};
