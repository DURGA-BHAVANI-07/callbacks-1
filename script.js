// function bhavani(){
//     console.log("bhavani")
// }
// bhavani()

// function a(x,y){
//     console.log(x*y)
// }
// a(5,4)


// function a(t) {
//   console.log("a function")
//   t()
// }

// a(function b() {
//   console.log("b function")
// })


// console.log("coffee order")
// setTimeout(function(){
//     console.log("coffee ready !!!")
// },1000)
// console.log("meanwhile having samosa with my friend with my friends money")

// var promise=new Promise((resolve,reject)=>{
//    if(true){
//     resolve("successful")
//    }else{
//     reject("reject")
//    }
// })
// console.log(promise)
var product=["watch","bike","belt","earbuds","laptops","mobiles"]
function addTocart(){
   var input=prompt("enter your product")

   if(input){
    for(elem of product){
        var itemFound=false;
        if(input == elem){
            console.log(`you have added ${input} item to the cart`)
        itemFound=true;
        break;
        }
    }
}
    if (!itemFound) {
      alert(`we dont have ${input} item in our basket`);
    } 
}