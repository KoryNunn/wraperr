module.exports = function wraperr(successCallback, errorCallback){
    if(!successCallback){
        throw "You must provide a success callback";
    }

    return function(error){
        if(error){
            if(!errorCallback){
                throw error;
            }
            return errorCallback(error);
        }

        successCallback.apply(null, Array.prototype.slice.call(arguments, 1));
    };
}