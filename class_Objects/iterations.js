let salesData = [
    {product: "Laptop", price: 3000},
    {product: "Mobile", price: 7000},
    {product: "Phone", price: 1000},
    {product: "Tv", price: 12000},
]

let initialValue = 0;
let totalSales = salesData.reduce((acc, sale) => acc + sale.price, initialValue)
console.log(totalSales);
