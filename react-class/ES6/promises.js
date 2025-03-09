//normal promise
const newProm = () =>{
    return new Promise((res,rej) =>{
        const even = Math.floor(Math.random() * 10) % 2 === 0;
        if(even) {
            setTimeout(() =>{
                res('This is Even Number');

            },2000)        
         } else {
            setTimeout(() =>{
                rej('This is Odd Number');
            },2000)
        }
    })
}

const addProm = () =>{
   return new Promise((res,rej) =>{
    const message = 'This is a promise';
    res(message);
   })
}
//chaining promise
addProm()
.then((result) => {
    console.log('hi',result);
    return newProm();// chaining the promise
})
.then((result) => {
    console.log('result',result);
})
.catch((error) => {
    console.log('error',error);
})  

//promise.all
const promiseOne = new Promise((res) => {
    setTimeout(() => {
        res('Promise One');
    }, 1000);
});

const promiseTwo = new Promise((res) => {
    setTimeout(() => {
        res('Promise Two');
    }, 2000);
});

const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        rej('Promise Three Failed');
    }, 3000);
});

Promise.all([promiseOne, promiseTwo, promiseThree])
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.log('One of the promises rejected:', error);
    });

    //promise.allSettled
    Promise.allSettled([promiseOne, promiseTwo, promiseThree])
    .then((results) => {
        console.log('All promises settled:', results);
    })
    .catch((error) => {
        console.log('One of the promises rejected:', error);
    })

//promise.raace

const person = new Promise((res) =>{
    setTimeout(() =>{
        res('Person')
    },1000)
})

const car = new Promise((res) =>{   
    setTimeout(() =>{
        res('Car')
    },2000)
})

const bike = new Promise((res) =>{
    setTimeout(() =>{
        res('Bike')
    },3000)
} )

Promise.race([person,car,bike])
.then(res => console.log(res))
.catch(error => console.log(error))

//promise.allSettled

//async and await
async function asaw() {
    try{
    const result = await newProm();
    console.log(result);
    console.log('make to wait newProm');
    

    const result1 = await addProm();
    console.log('make to wait addProm');
    console
    .log(result1);
    }
    catch(error){
        console.log(error);
    }

}
asaw()
// .then(() => console.log('All done'))
// .catch((error) => console.log('error', error));