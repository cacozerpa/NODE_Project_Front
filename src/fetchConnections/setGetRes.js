let res = '';

const setRes = (response) => {
  res = response;
};

const getRes = () => {
  return res;
};

module.exports = { setRes, getRes };