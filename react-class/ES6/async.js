//example
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a !== 'number' || typeof b !== 'number'){
                return reject('Arguments must be numbers');
            }
            resolve(a + b);
        }, 2000);
    });
};

const multiply =  async (a, b) => {
    
    try{
        const sum = await add(a, b);
        const result = sum * 2;
        return result;
    }
    catch(error){
        return error;
    }       
}
multiply(2, 3)
