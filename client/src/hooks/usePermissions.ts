import { useCallback, useEffect } from "react";
import { useFetch } from "./useFetch";
import { Permission } from "../types/be/permission";
import { getPermissions } from "../api/users";
import { prepareQueryParams } from "../utils/common";

interface UsePermissionsProps {
  permissions: Permission[] | null;
  getPermission: (query: string | number) => Permission | undefined;
  isError: boolean;
}
/* istanbul ignore next */
const usePermissions = (): UsePermissionsProps => {
  const { data: permissions, isError, run } = useFetch<Permission[]>();

  useEffect(() => {
    const params = prepareQueryParams("", {
      limit: 1000,
    })
    run(getPermissions(params));
  }, []);

  const getPermission = useCallback(
    (query: string | number): Permission | undefined =>
      permissions?.find((permission) =>
        [permission.name, permission.id, permission.code].includes(query)
      ),
    [permissions]
  );

  return {
    permissions,
    getPermission,
    isError,
  };
};

export default usePermissions;
