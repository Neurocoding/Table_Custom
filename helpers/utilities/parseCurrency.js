export function parseCurrency(input) {
  // Remove ' kr.' and other non-numeric characters except digits, minus sign, and comma
  let numericValue = input.replace(/ kr\.?$/, "").replace(/[^0-9,-]/g, "");
  // Replace comma with dot for parseFloat compatibility
  numericValue = numericValue.replace(/,/g, ".");
  return parseFloat(numericValue) || 0;
}
