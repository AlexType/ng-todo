export interface IMark {
  id: string;
  title: string;
  icon?: IMarkIcon | null;
}

export interface IMarkIcon {
  type: string;
  color?: string | null;
}
