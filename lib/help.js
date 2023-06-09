export const NGnaira = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
});

export function calculateSum(array) {
  let total = 0;

  for (const value of array) {
    total += value;
  }

  return total;
}
