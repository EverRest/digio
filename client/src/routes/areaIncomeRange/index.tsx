import React from "react";
import AuthGuard from "../../components/guards/AuthGuard";
import DashboardLayout from "../../layouts/dashboard";
import AreaIncomeRangeList from "../../components/areaIncomeRange/list";
import CreateOrEditAreaIncomeRange from "../../components/areaIncomeRange/addOrUpdate";

export default {
  path: "/area-income-range",
  element: (
    <AuthGuard>
      <DashboardLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "",
      element: <AreaIncomeRangeList />,
    },
    {
      path: "create",
      element: <CreateOrEditAreaIncomeRange />,
    },
    {
      path: "edit/:id",
      element: <CreateOrEditAreaIncomeRange />,
    },
  ],
};
