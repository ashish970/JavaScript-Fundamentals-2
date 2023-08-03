function sumOfAllParameters()
{
    let sum = 0;
    for(var i=0; i<arguments.length;i++)
    sum = sum + arguments[i];
    return sum;
}
let result = sumOfAllParameters(1,2,3,4,5,6,7,8,9,10);
console.log(result);