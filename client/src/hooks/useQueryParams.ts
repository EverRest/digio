import { useLocation } from "react-router-dom";
import React from "react";
/* istanbul ignore next */
const useQueryParams = (): any => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};

export default useQueryParams;
