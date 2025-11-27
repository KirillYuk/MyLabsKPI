const sum = (...args) =>{
    let res = 0;
    for(let i =0; i<args.length; i++){
        res = res + args[i];
    }
    return res;
}

console.log(sum(1, 2, 3));
