

Function.prototype.apply_ = function (context = window, args){
    if (typeof this !== "function"){
        throw new TypeError('type erro');
    }
    const fn = Symbol('fn');
    context[fn] = this;
    const res = context[fn](...args);
    delete context[fn];
    return res;
}

