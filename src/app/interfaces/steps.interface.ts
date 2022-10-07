import { TeacherRs } from './teachers.interface';

export interface SummaryOfSteps {
  image?: {
    name?: string;
    src?: string;
    status?: 'SUCCESS' | 'FAILED' | 'WARN';
  };
  information?: {
    name: string;
    height: number;
    relationShipStatus: { status: string };
    availableDay: Date;
  };

  teacher?: TeacherRs;
}
