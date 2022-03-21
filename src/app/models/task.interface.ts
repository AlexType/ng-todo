export interface ITask {
  id: string;
  title: string;
  deadlineAt?: number | null;
  content?: string | null;
  checked: boolean;
  markId?: string | null;
  userId?: string;
  createdAt: number;
  updatedAt: number;
  sectionId?: string;
}
