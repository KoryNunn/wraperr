module.exports = function wraperr(errorCallback, successCallback){
    return function(error){
        if(error){
            if(!errorCallback){
                throw error;
            }
            return errorCallback(error);
        }

        if(successCallback){
            successCallback.apply(null, Array.prototype.slice.call(arguments, 1));
        }
    };
};
