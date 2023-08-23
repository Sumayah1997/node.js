function doSomething(callback) 
{
    console.log("Doing something...");
    setTimeout(function() 
    {
    console.log("Done with something.");
    callback();
    }, 1000);
    }
    function doSomethingElse() {
    console.log("Doing something else...");
    }
    doSomething(doSomethingElse);
