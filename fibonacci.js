function fibs(n) {
  
  let fibList = [],
      x = 1,
      y = 0,
      temp;

  switch (n){
    case 1:
      fibList.push(y);
      break;
    default:
      fibList.push(y);
      fibList.push(x);
  }
  
  while (n >= 3) {
    temp = x;
    x = x + y;
    y = temp;
    fibList.push(x);
    n--;
    }

  return fibList;
}


function fibsRec(n) {
  let fibList = [];
  
  function fibonacci(num) {
    if (num <= 1) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
  
  for (let i = 0; i < n; i++) {
    fibList.push(fibonacci(i));
  }
  
  return fibList;
}


console.log(fibs(10));

console.log(fibsRec(4));