//   function greet (hello) {
//     console.log('Hello!')
//     hello()
//   }

//   function callMe (callback) {
//     console.log('I am callback function')
//     callback()
//   }

//   function add(nextCallback) {
//     console.log('I am add function')
//     nextCallback()
//   }

//   greet(callMe)
  
function fetchUser(userId, callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}
function fetchOrders(user, callback) {
    setTimeout(() => {
        console.log(`Orders fetched for ${user.name}`);
        callback(["order1", "order2", "order3"]);
    }, 1000);
}
function fetchOrderDetails(order, callback) {
    setTimeout(() => {
        console.log(`Details fetched for ${order}`);
        callback({ orderId: order, price: 100 });
    }, 1000);
}
function processPayment(orderDetails, callback) {
    setTimeout(() => {
        console.log(`Payment processed for order ${orderDetails.orderId}, amount: $${orderDetails.price}`);
        callback("Payment Successful");
    }, 1000);
}
// Callback Hell: Too many nested callbacks
fetchUser(1, (user) => {
    fetchOrders(user, (orders) => {
        fetchOrderDetails(orders[0], (orderDetails) => {
            processPayment(orderDetails, (status) => {
                console.log("Transaction status:", status);
            });
        });
    });
});