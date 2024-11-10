import React from "react";

import { formatSalary } from "~/utils";

export function SalaryDisplay({
  min,
  max,
}: {
  min: number | null;
  max: number | null;
}) {
  if (!min || !max) {
    return null;
  }

  if (min === max) {
    return <p className="text-sm">{formatSalary(min)}</p>;
  }

  return (
    <div className="flex items-center space-x-1 text-right">
      <p className="text-sm">{formatSalary(min)}</p>
      <span>-</span>
      <p className="text-sm">{formatSalary(max)}</p>
    </div>
  );
}
