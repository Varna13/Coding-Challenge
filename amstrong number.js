const num = prompt("Enter the number");
let lastdigit
while(num > 0){
  lastdigit = num % 10;
  let rev = (rev * 10) + lastdigit;
  num = num / 10;  
}
console.log("reverse is",rev);
