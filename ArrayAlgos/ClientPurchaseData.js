// Write a function that takes in the purchase data in the format provided STRING and returns the top n customers by total revenue. 
// The function should take two arguments: the purchase data as a string, and n as an integer.
// return a sorted (sort by revenue) array of objects

//INPUT
// Order Number,Customer Name,Item Name,Quantity,Price,Date
// 1,John Smith,Shirt,2,20,2022-03-01
// 2,John Smith,Shoes,1,50,2022-03-01
// 3,Jane Doe,Shirt,1,20,2022-03-02
// 4,John Smith,Jeans,2,30,2022-03-03
// 5,Jane Doe,Shoes,1,50,2022-03-04

// "Order Number,Customer Name,Item Name,Quantity,Price,Date\n1,John Smith,Shirt,2,20,2022-03-01\n2,John Smith,Shoes,1,50,2022-03-01\n3,Jane Doe,Shirt,1,20,2022-03-02\n4,John Smith,Jeans,2,30,2022-03-03\n5,Jane Doe,Shoes,1,50,2022-03-04\n"

// EXPECTED OUTPUT 
// 
// [
//   { customerName: 'John Smith', totalRevenue: 150 },
//   { customerName: 'Jane Doe', totalRevenue: 70 }
// ]


const totalRevenue = (clientData, n) => {
    let recordPurchase = {}
    let clientDataArray = clientData.split("\n")
    let result = []

    for (let i = 1; i < clientDataArray.length - 1; i++){
        let currData = clientDataArray[i].split(",")
        let name = currData[1]
        let quantity = parseInt(currData[3])
        let price = parseInt(currData[4])
        let total =  price * quantity

        if(!recordPurchase[name]){
            recordPurchase[name] = total
        } else {
          recordPurchase[name] += total
        }
    }
    
    const arrayOfClients = Object.entries(recordPurchase) 
    const sortedArrayOfClients = arrayOfClients.sort(function (a, b) { return b[1] - a[1]});

    
    for (let j = 0; j < n; j++){
      let object = {"customerName": sortedArrayOfClients[j][0], "totalRevenue": sortedArrayOfClients[j][1]}
      result.push(object)
    }
    
    return result
}

console.log(totalRevenue("Order Number,Customer Name,Item Name,Quantity,Price,Date\n1,John Smith,Shirt,2,20,2022-03-01\n2,John Smith,Shoes,1,50,2022-03-01\n3,Jane Doe,Shirt,1,20,2022-03-02\n4,John Smith,Jeans,2,30,2022-03-03\n5,Jane Doe,Shoes,1,50,2022-03-04\n", 2))