
export interface Skill {
  emoji: string;
  name: string;
  locked?: boolean;
}

export interface WorkItem {
  image: string;
  title: string;
  desc: string;
  ratio: 'portrait' | 'landscape';
}
