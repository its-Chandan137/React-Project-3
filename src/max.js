const str = "hello";

function sol(str)
{
    //empty string -----------------
    if(str.length == 0)
    {
        return "";
    }
    //recursion --------------------
    return str[str.length-1] + sol(str.slice(0, str.length-1));
}

var a = "hello";
console.log(str.slice(0,str.length-1));

console.log(sol(str));