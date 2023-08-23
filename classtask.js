function Vowele(str)
{
    const voweles = ['a','e','i','o','u'];
    let const = 0;
    for(let char of str.toLowerCase())
    if(voweles.includes(char))
    {count++;}
    return count;
} 
  let count = Voweles ("Front end bootcamp");
  console.log("number od vowels in the string")