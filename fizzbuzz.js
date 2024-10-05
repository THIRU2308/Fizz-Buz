let fs=prompt("Enter First Number");
let ls=prompt("Enter Second Number");
for(let i=fs;i<=ls;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else{
        console.log(i);
    }
}