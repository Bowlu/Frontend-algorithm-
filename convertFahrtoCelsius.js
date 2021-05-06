function convertFahrtoCelsius(temp) {
    if(typeof temp === "number") {
        let celsius = (temp - 32) * 5/9;
        return celsius.toFixed(4);
    } else {
        return `${temp} is not a valid number but a/an ${typeof temp}`;
    }
}

let temp= 400;
 console.log (convertFahrtoCelsius(temp))


