const formatSalary = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MYR",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(amount);

export const getCurrencyRangeString = (
  min: number | null,
  max: number | null,
) => {
  if (!min || !max) {
    return "";
  }

  if (min === max) {
    return formatSalary(min);
  }

  return `${formatSalary(min)} - ${formatSalary(max)}`;
};
