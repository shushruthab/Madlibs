function addCommas(num) {
   let res = String(num).split('.');
   let mantissa;
   if (res.length > 1) {
    mantissa = String(res.pop());
   }
   
   res = res[0].split('');
   if (res[0] === "-") {
    res[1] = res[0]+ res[1];
    res.shift();
   }
   if (res.length === 1 ) {
    return String(num);
   } 

   let i=res.length -1;
   let characteristic = '';
   
    
   while(i>-1) {
    if (i === 1) {
        if (res.length > 2) {
            characteristic = res[i-1]+res[i]+ ',' + characteristic;
        } else {
            characteristic = res[i-1]+res[i]
        }
    } else if (i === 0) {
        characteristic = res[i] + ',' + characteristic;
     
    } else if (!characteristic) {
        characteristic = res[i-2]+res[i-1]+res[i];
    } else {
        characteristic = res[i-2]+res[i-1]+res[i] + ',' + characteristic;
    }
    i = i - 3;
   }
   
   if (mantissa) {
    return characteristic + '.' + mantissa; 
   } else return characteristic;
   
}

module.exports = addCommas;