const array = [1,2,2,3,5,3,6];

const newArray = [];


for(let i=0;i<array.length;i++){

    for(let j=i+1;j<array.length;j++){

        if(array[i] === array[j]){
            newArray.push(array[i]);
        }
    }

}

console.log(newArray);