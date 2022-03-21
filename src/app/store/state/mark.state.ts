import { IMark } from 'src/app/models/mark.interface';
import { ISection } from 'src/app/models/section.interface';

export interface IMarkState {
  sections: ISection[];
  marks: IMark[];
  total: number;
}

export const initialMarkState: IMarkState = {
  sections: [],
  marks: [],
  total: 0,
};
