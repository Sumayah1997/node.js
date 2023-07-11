function a()

{
    c();
    console.log("hi from funation a");
}
function b()
{
    a();
    console.log("hi from function b");
}
function c()
{
    console.log("hi from funtion c");
}
b();