function Order(name, size, topping, crust,delivery,qty, fee, location){
    this.Name = name;
    this.Size = size;
    this.Topping = topping;
    this.Crust = crust;
    this.Delivery = delivery;
    this.Location = delivery;
    this.Qty = qty;
    this.DeliveryFee = fee;
}
var order = new Order();
var sizePrice;
var topPrice;

$("#location").hide();
$(document).ready(function () {
    $("#chickenPizza").click(function () {
        $("#pizzaOptions").modal('show');
        order.Name = "Chicken Pizza";
    });
});

$(document).ready(function () {
    $("#beefPizza").click(function () {
        $("#pizzaOptions").modal('show');
        order.Name = "Beef Pizza";
    });
});

$(document).ready(function () {
    $("#veggiePizza").click(function () {
        $("#pizzaOptions").modal('show');
        order.Name = "Veggie Pizza";
    });
});
$(document).ready(function () {
    $("#pepperoniPizza").click(function () {
        $("#pizzaOptions").modal('show');
        order.Name = "Pepperoni Pizza";
    });
});

$(document).ready(function () {
    $("#buffaloPizza").click(function () {
        $("#pizzaOptions").modal('show');
    });
});

$(document).ready(function () {
    $("#hawaiianPizza").click(function () {
        $("#pizzaOptions").modal('show');
    });
});
$(document).ready(function () {
    $("#margheritaPizza").click(function () {
        $("#pizzaOptions").modal('show');
    });
});
$(document).ready(function () {
    $("#cheesePizza").click(function () {
        $("#pizzaOptions").modal('show');
    });
});



$(document).ready(function () {
    $("#veggiePizza").click(function () {
        $("#pizzaOptions").modal('show');
    });
});
$(document).ready(function () {
    $("#submitButton").click(function () { 

        
        var size = $("#sizes").val();
        var topping = $("#toppings").val();
        var crust = $("#crust").val();


        console.log(size);
        if(size==""|| topping==""|| crust==""){
            alert("ensure all fields are closed")
        }else{
            var text = parseInt($("#cartNumber").val());
        var x = text + 1;
        document.getElementById("cartNumber").value = x;
        //go to checkout 
        }
      
    });

});

// var btn = document.getElementById("myBtn");
$(document).ready(function () {
    $("#optionSubmit").click(function(){
        var sizes=$("#Sizes").val();
        var toppings=$("#Toppings").val();
        var crust=$("#Crust").val();
        var delivery=$("#delivery").val();
        var qty=$("#qty").val();

        if(sizes == "Large"){
            sizePrice = 1000;
        }else if(sizes == "Small"){
            sizePrice = 600;
        }else{
            sizePrice = 800;
        }
        topPrice = 150;

        order.Size = sizes;
        order.Topping = toppings;
        order.Crust = crust;
        order.Delivery = delivery;
        order.Qty = qty;

       if(delivery=="yes"){
           $("#pizzaOptions").modal("hide")
           $("#locationModal").modal("show")
       }else{           
            order.DeliveryFee = 0;
            finalOrder();
            $("#pizzaOptions").modal("hide")
            $("#cashOutModal").modal('show');
       }

    });
});

$(document).ready(function () {
    $("#locationSubmit").click(function () {
        if($("locationText").val()==""){
            alert("Location must be filled");
        }else{
            order.DeliveryFee = 100;
            finalOrder();
            $("#locationModal").modal("hide")
            $("#cashOutModal").modal('show');
        }
        order.Location = $("#locationText").val();
    });
});


function finalOrder(){    
    console.log(order);
    $("#pizza-label").text(order.Name);
    $("#size-label").text(order.Size);
    $("#top-label").text(order.Topping);
    $("#crust-label").text(order.Crust);
    $("#qty-label").text(order.Qty);
    $("#del-label").text(order.DeliveryFee);
    $("#net-label").text(getNetPrice);
    $("#total-label").text(getTotalPrice);
}

function getNetPrice(){
return sizePrice+topPrice;
}
function getTotalPrice(){
    return (sizePrice+topPrice)*order.Qty+order.DeliveryFee;
}

$(document).ready(function () {
    $("#checkOutSubmit").click(function () {
        $("#cashOutModal").modal("hide");
        if(order.Delivery=="No"){
            alert("We have received your order, we will notify you for pickup.")
        }else{
            alert("We have received your order and it will be delivered at "+order.Location);
        }

    });
});