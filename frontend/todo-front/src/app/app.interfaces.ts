export interface Task {
  id: number;
  title: string;
  description: string;
  is_completed: boolean;
  due_date?: string;
  created_at: string;
  updated_at: string;
}
