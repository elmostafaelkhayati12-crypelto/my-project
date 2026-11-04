let products = [
 {
    id: 1,
    name: "produit 1 ",
    price: 50,
    image: "images/p1.webp"
},{
    id: 2,
    name: "produit 2",
    price: 9950,
    image: "images/p2.webp"
},{
    id: 3,
    name: "produit 3",
    price: 3150,
    image: "images/p3.webp"
},{
    id: 4,
    name: "produit 4 ",
    price: 450,
    image: "images/p4.webp"
},{
    id: 5,
    name: "produit 5",
    price: 150,
    image: "images/p5.webp"
},{
    id: 6,
    name: "produit 6",
    price: 300,
    image: "images/p6.webp"
}
];

        function displayProducts(){
               let divPro = document.getElementById("products") ;
               divPro.innerHTML = "" ; 
               products.forEach((pro,index)=>{
                divPro.innerHTML += `
                <div class="divCard">
                <img src="${pro.image}" class="img">
                <h2> ${pro.name}</h2>
                <h3> ${pro.price} DH</h4>
                <button class="btn" onclick="addToCart(${index})" > Ajouter au panier</button>
                </div>
                
                `})
               
   
        } 
        displayProducts()

        // ============================================================================
        var cart = [];
            function addToCart(index) {
                let produit = products[index]
                let  exist = cart.find((pro)=> pro.id===produit.id)  ;
                if (exist){
                      exist.quantity += 1   
                }else {
                    cart.push({...produit,quantity:1})


                }       displayCart() 

            }         
        // ================================================================================= 
                
            function displayCart(){
                let cartDiv = document.getElementById("cart") ;
                cartDiv.innerHTML = "" ;
                let Total = 0 ;
                cart.forEach((pro,index)=>{
                    let souTotal = pro.price * pro.quantity
                    Total += souTotal
                    cartDiv.innerHTML += `
                    <div class="cartPanier">
                    <img  src="${pro.image}" class="imgPanier" >
                    <p>${pro.name}</p>
                    <p>${pro.price}</p>
                    <p>sous total : ${souTotal}</p>
                    <button onclick="increaseQuantity(${index})" class="plus">+</button>
                    <p> quantity :${pro.quantity}</p>
                    <button onclick="decreaseQuantity(${index})" class="moins">-</button>
                    <button onclick="removeFromCart(${index})" class="btnS">supprimer</button>
                    
                    </div>
                    `
                })
                document.getElementById("total").innerHTML= Total
            }    
          


            
            function increaseQuantity(index){
                cart[index].quantity +=1 ;
                displayCart() ;

            }

            function decreaseQuantity(index){
                cart[index].quantity-=1 ;
                 if(cart[index].quantity <= 0){
                    removeFromCart(index)
                    displayCart()
                }
               
                
                 displayCart() ;
            }

            function removeFromCart(index){
                cart.splice(index,1) ;
                
            }

              

                    
                    
                    


                
                
                               


