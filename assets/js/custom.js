
    $(document).ready(function(){
        
        $(".addToCartBtn").click(function(){
            
            var url = "lib/cart_db.php";
            var data = {
                p : "addToCart",
                product_id : $(this).attr("product-id")
            }

            $.post(url, data, function(response){
                console.log(response);
            })

        })
    })