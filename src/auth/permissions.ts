export enum Permissions {
  None = 0,
  ViewRoles = 1,
  ManageRoles = 2,
  ViewUsers = 4,
  ManageUsers = 8,
  ConfigureAccessControl = 16,
  Counter = 32,
  Forecast = 64,
  ViewAccessControl = 128,
  All = ~None,
}

export const PermissionDict: { [key: string]: number } = {
  None: Permissions.None,
  ViewRoles: Permissions.ViewRoles,
  ManageRoles: Permissions.ManageRoles,
  ViewUsers: Permissions.ViewUsers,
  ManageUsers: Permissions.ManageUsers,
  ConfigureAccessControl: Permissions.ConfigureAccessControl,
  Counter: Permissions.Counter,
  Forecast: Permissions.Forecast,
  ViewAccessControl: Permissions.ViewAccessControl,
  All: Permissions.All,
};
