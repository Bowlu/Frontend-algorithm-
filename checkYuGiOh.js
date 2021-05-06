function checkYuGiOh (r) {
    let arr = []; 

    if (typeof r != "number") {
        return ` invalid r: "fizzbuzz is meh" `
    } 
    for (let n = 1; n <= r; ++n ) {
        arr.push (n)
    }
    for (let n = 0; n < arr.length; ++n ) {
        let temp = arr[n];
        if(temp % 2 === 0) {
           arr[n] = "yu" 
        }
        if(temp % 3 === 0) {
            if(temp % 2 === 0) {
                arr[n] = arr[n] + "-gi"; 
             } else {
                 arr[n] = "gi"
             }
        }
        if (temp % 5 === 0) {
            if(temp % 2 === 0 || temp % 3 === 0) {
                arr[n] = arr[n] + "-oh"; 
             } else {
                 arr[n] = "oh"
             }
        }
    }  

    return arr;
} 
  
    console.log (checkYuGiOh(40))