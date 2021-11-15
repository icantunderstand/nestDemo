export interface Item {
    projectName: number;
    teamId: number;
    teamSectionId: number;
    kimUrl: string;
    defaultOwnber: string;
    moduleList: Array<ModuleItem>
  }
  
  export interface ModuleItem {
    url: string;
    owner: string
  }