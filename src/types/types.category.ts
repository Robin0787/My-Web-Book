export interface TCategory {
  _id: string;
  name: string;
  icon: string;
  addedBy: string;
  canBeDeleted: boolean;
}

export interface TCreateCategory {
  name: string;
  icon: string;
  canBeDeleted: boolean;
}
