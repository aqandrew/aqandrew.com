const appendSuffix = (n) => {
  var s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

module.exports = function (value) {
  const dateObject = new Date(value);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayWithSuffix = appendSuffix(dateObject.getUTCDate());

  return `${
    months[dateObject.getMonth()]
  } ${dayWithSuffix}, ${dateObject.getFullYear()}`;
};
