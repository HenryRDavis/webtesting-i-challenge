module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return {
    ...item,
    enhancement:
      item.enhancement < 20 ? item.enhancement + 1 : item.enhancement,
  };
}

function fail(item) {
  const enhance = item.enhancement;
  const dura = item.durability;
  return {
    ...item,
    durability: enhance < 15 ? dura - 5 : dura - 10,
    enhancement: enhance > 16 ? enhance - 1 : enhance,
  };
}

function repair(item) {
  return {
    ...item,
    durability: 100,
  };
}

function get(item) {
  const enhance = item.enhancement;
  const name = item.name;

  return {
    ...item,
    name: enhance > 0 ? `[+${enhance}]${name}` : `${name}`,
  };
}
