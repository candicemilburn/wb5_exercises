let cart = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Giant Chewy Nerds", price: 6.00},
    {product: "Snickers Bar", price: 1.89},
    {product: "Mounds Bar", price: 1.50},
    {product: "Sour Patch Kids", price: 3.79},
    {product: "Everlasting Gobstopper", price: .99},
    {product: "Ring Pop", price: 1.79}
 ];

 
 let fishy = cart.find((snack)=>{
    if(snack.product === "Swedish Fish"){
        return true
    }
        return false
 });

 if(fishy){
    console.log("yes we do")
 }else{
    console.log("nah bruh");
 }

 console.log(fishy);

let candyM = cart.filter((candy)=>{
    if(candy.product.indexOf("M&M") !== -1){
        return true
    }
    return false
})
console.log(candyM);


let lessThan = cart.filter( (product) => product.price < 4 );
console.log(lessThan);

 let under4 = cart.filter((product)=> {

if(product.price <= 4){
    return true;
}
    return false;
 });

 console.log(under4)
