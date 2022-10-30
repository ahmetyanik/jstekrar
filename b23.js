
const expo = (num1,num2) =>{

    let num = "";

    if(typeof num1 !== "number" || typeof num2 !== "number"){
        console.log("Parameters must be number!");
    }else{
        for(let i=1;i<=num2;i++){
            num += Math.pow(num1,i) + " ";
        }
    }

    console.log(num);

}

expo(3,5)

