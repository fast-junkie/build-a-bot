export default function currency(amount, symbol = '$') {
  return `${symbol}${parseFloat(amount).toFixed(2)}`;
}
