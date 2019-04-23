export const getIntegerList = state => {
  return state.ressource.ressourceList;
};

export const getContainsOneList = state => {
  return getIntegerList(state).filter(r => r.toString().indexOf("1") > -1);
};

export const getPrimeNumberList = state => {
  return getIntegerList(state).filter(r => isPrimeNumber(r));
};

const isPrimeNumber = value => {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};
