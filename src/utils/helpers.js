export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = () => {};
