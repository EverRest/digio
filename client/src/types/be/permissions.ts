export interface PermissionsGroup {
  id: number;
  code: string;
  name: string;
  permissions: Permission[];
}

export interface Permission {
  id: number;
  code: string;
  name: string;
}

export interface PermissionsCategory {
  id: number;
  code: string;
  name: string;
  groups: PermissionsGroup[];
}
