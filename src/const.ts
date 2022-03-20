export enum TaskTypeEnum {
  INCOMING = 'incoming',
  UPCOMING = 'upcoming',
  TODAY = 'today',
}

export function checkDeadline(date: string | null = null): 'red' | 'green' {
  if (!date) return 'red';

  return new Date(date).getTime() < new Date().getTime() ? 'red' : 'green';
}
