export const formatSalary = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MYR",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 0,
  }).format(amount);
