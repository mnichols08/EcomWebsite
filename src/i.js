const checkCashRegister = (price, cash, cid) => {

    const money = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
    ];
    
    let result = { status: null, change: [] };
    let diff = cash - price;
  
    const register = cid.reduce((acc, curr) => {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    }, { total: 0 });
  
    if (register.total === diff) {
      result.status = 'CLOSED';
      result.change = cid;
      return result;
    }
  
    if (register.total < diff) {
      result.status = 'INSUFFICIENT_FUNDS';
      return result;
    }
  
    const change = money.reduce((acc, curr) => {
      let value = 0;
      while (register[curr.name] > 0 && diff >= curr.val) {
        diff -= curr.val;
        register[curr.name] -= curr.val;
        value += curr.val;
  
        diff = Math.round(diff * 100) / 100;
      }
  
      if (value > 0) {
          acc.push([ curr.name, value ]);
      }
      return acc;
    }, []); 
  
    if (change.length < 1 || diff > 0) {
      result.status = 'INSUFFICIENT_FUNDS';
      return result;
    }
  
    result.status = 'OPEN';
    result.change = change;
    return result;
  }
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);