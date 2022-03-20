import { TaskTypeEnum } from 'src/const';

export interface ITask {
  id: string;
  title: string;
  deadlineAt?: number | null;
  content?: string | null;
  checked: boolean;
  type?: TaskTypeEnum | null;
  userId?: string;
  createdAt: number;
  updatedAt: number;
}
