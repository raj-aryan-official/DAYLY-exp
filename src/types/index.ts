export interface Calendar {
  id: number;
  name: string;
  color: string;
  tasks: number;
  completed: number;
  favorite: boolean;
}

export interface Task {
  id: number;
  calendarId: number;
  title: string;
  time: string;
  status: 'completed' | 'pending' | 'next';
  date: string;
}

export interface AIResult {
  calendarsCreated: Calendar[];
  tasksCreated: Task[];
}

export type Screen = 'splash' | 'welcome' | 'dashboard' | 'profile' | 'tasks' | 'calendar' | 'store' | 'settings' | 'filter';


