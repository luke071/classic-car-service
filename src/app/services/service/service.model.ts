export interface Service {
  id: string;
  carId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewServiceData {
  title: string;
  summary: string;
  date: string;
}
