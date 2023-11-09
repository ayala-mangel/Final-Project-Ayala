export const checkPermissions = (permissions, userRoleTypes) => {
  return permissions?.includes(userRoleTypes);
};

export const checkAllPermissions = (permissions, userRoleTypes) => {
  if (!permissions) return false;
  for (var perm of userRoleTypes) {
    if (!permissions.includes(perm)) return false;
  }
  return true;
};
