// PersonaAnalysis
export interface PersonaUserChoice {
  user_id: number;
  question_id: number;
  choice_id: number;
}

export interface PersonaQuestion {
  uid: number;
  title: string;
  choices: Choice[];
  type_: boolean;
}

export interface Choice {
  uid: number;
  question_id: number;
  contents: string;
  category: number;
}

export interface Persona {
  type: string;
  description: string;
  recommended_place: string;
}

export interface Viewer {
  count: number;
}
