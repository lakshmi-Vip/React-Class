//simple promise
// const newPromis = () =>{
//     return new Promise((res,rej) =>{
//         const message = 'This is Promise';
//         setTimeout(() =>{
//             if(message) {
//             res('This is Promise')
//             } else {
//                 rej('This is not Promise')
//             }
//         },2000)
//     })
// }

// async function addPromise() {
//     console.log('Before Promise');
//     const result = await newPromis();
//     console.log(result);
//     console.log('After Promise');
// }

// addPromise();

//promise with try and catch
const fetchData = new Promise((res,rej) =>{
    setTimeout(() =>{
        const error = true;
        if(!error) {
            res('Data has been fetched');
        } else {
            rej('Data fetching failed');
        }
    })
})

const Errorhandling = async () =>{
    try{
    console.log('Before Fetching Data');
    const result = await fetchData;
    console.log(result);
    } catch{
        console.log('Data fetching failed');
    }
}
Errorhandling();

// api call

// const apiCall = async () =>{
//     try{
//     console.log('Hey api')
//     //const rsponse = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     const rsponse = await fetch('./data.json');
//    // const data = await rsponse.json();
//     console.log(data);
//     } catch{
//         console.log('Data fetching failed');
//     }
// }
// apiCall();

//parellel api call
// const apiCall1 = async () =>{
//     try{
//     console.log('Hey api')
//     const rsponse =  await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//     const rsponse1 =  await fetch('https://jsonplaceholder.typicode.com/comments?postId=2')    
//     const data = await rsponse.json();
//     const data1 = await rsponse1.json();
//     console.log(data);
//     console.log(data1);
//     } catch{
//         console.log('Data fetching failed');
//     }   
// }
//apiCall1();

//parellel api call with promise.all
// const apiCallParallel = async () => {
//     try {
//         console.log('Hey api');
        
//         // Run both API calls in parallel
//         const [response, response1] = await Promise.all([
//             fetch('https://jsonplaceholder.typicode.com/comments?postId=1'),
//             fetch('https://jsonplaceholder.typicode.com/comments?postId=2')
//         ]);

//         const data = await response.json();
//         const data1 = await response1.json();

//         console.log(data);
//         console.log(data1);
//     } catch (error) {
//         console.log('Data fetching failed:', error.message);
//     }   
// }


//apiCallParallel();


// import axios from "axios";

// const fetchData = async () => {
//   try {
//     console.log("Fetching data...");
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     console.log("Data received:", response.data); // Axios automatically parses JSON
//   } catch (error) {
//     console.error("Error fetching data:", error.message);
//   }
// };

// fetchData();
