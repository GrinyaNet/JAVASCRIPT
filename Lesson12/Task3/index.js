const cleanTransactionsList = transactions => {
  const result = transactions.filter(tr => isFinite(tr)).map(tr => `$${Number.parseFloat(tr).toFixed(2)}`);
  return result;
};

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));