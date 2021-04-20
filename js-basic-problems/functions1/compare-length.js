const compareByLength = (a, b) => {
  if (a.length > b.length) {
    console.log('1');
  } else if (a.length < b.length) {
    console.log('-1');
  } else {
    console.log('0');
  };
};
compareByLength('test', 'test');