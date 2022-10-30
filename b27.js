const hindernisseLaufen = (runde, hindernisse) => {
  for (let i = 1; i <= runde * hindernisse; i++) {
    if (i % hindernisse !== 0) {
      console.log("Hindernis");
    }else if(i%4===0){
        console.log("Wassergraben");
    }
     else {
      console.log(`Du bist ${i / hindernisse} Runde gelaufen!`);
    }
  }
};


hindernisseLaufen(5,4)