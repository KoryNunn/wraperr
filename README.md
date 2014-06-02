# wraperr

A light wrapper around the top level of [CPS](http://en.wikipedia.org/wiki/Continuation-passing_style) functions that calls either a success or error callback based on the arguments passed.

npm i wraperr

## EG:

    var wraperr = require('wraperr');

    ...

    function doSomeThing(callback){
        ...
        if(!worked){
            callback(error);
        }else{
            callback(null, result);
        }
    }

    ...

    "someRoute": function(request, response){

        // Assume some kind of setup of
        // respondWithOK and respondWithError here

        ...

        doSomeThing(wraperr(respondWithOK, respondWithError));
    }

## Warning

This function is intended only to be used when you have a distinct way to handle the error, not around all CPS functions.