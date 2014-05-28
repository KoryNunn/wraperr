var test = require('grape'),
    wraperr = require('../');

test('success', function(t){
    t.plan(1);

    function success(data){
        t.equal(data, 1);
    }

    function error(){
        t.fail();
    }

    function doAThing(callback){
        callback(null, 1);
    }

    doAThing(wraperr(success,error));
});

test('error', function(t){
    t.plan(1);

    function success(data){
        t.fail();
    }

    function error(error){
        t.equal(error, 'error');
    }

    function doAThing(callback){
        callback('error', 1);
    }

    doAThing(wraperr(success,error));
});

test('success only', function(t){
    t.plan(1);

    function success(data){
        t.equal(data, 1);
    }

    function doAThing(callback){
        callback(null, 1);
    }

    doAThing(wraperr(success));
});

test('failing success only', function(t){
    t.plan(1);

    function success(data){
        t.equal(data, 1);
    }

    function doAThing(callback){
        callback('error', 1);
    }

    t.throws(function(){
        doAThing(wraperr(success));
    });
});

test('error only', function(t){
    t.plan(1);

    function error(error){
        t.equal(error, 'error');
    }

    function doAThing(callback){
        callback('error', 1);
    }

    doAThing(wraperr(null, error));
});