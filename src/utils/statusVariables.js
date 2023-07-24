export const statusVariables = (status) => {
  const violet = {backgroundColor: '#EDEDFE', color: '#605DEC'};
  const green = {backgroundColor: '#EBF6EB', color: '#31AA27'};
  const orange = {backgroundColor: '#FFF4E4', color: '#E99518'};
  const red = {backgroundColor: '#E4E4EF', color: '#F93232'};

  if (status === 'onHold') {
    return orange;
  }

  if (status === 'sold') {
    return red;
  }

  if (status === 'booked') {
    return violet;
  }

  return green;
};
