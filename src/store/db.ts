export interface IBuilding {
  [name: string]: string[];
}

export const BuildingsProvided: IBuilding[] = [
  {'b1': ['school']},
  {'b2': ['gym']},
  {'b3': ['gym', 'school']},
  {'b4': ['school']},
  {'b5': ['school', 'store']}
];
