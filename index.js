// Code your solutions in this file
function printBadges(names){
  for(let i=0;i<names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names;
}

function tailsNeverFails(){
let i=1;
let times=0;
while (i>=0.5){ i=Math.random();times++;}
return `You got ${times-1} tails in a row!`
}
