

//Paypal

paypal.Buttons({


    createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.

        var totaalPrijs = document.getElementById("totaalPrijs").innerHTML;
        let firstName = document.forms["formOrders"]["first_name"].value;
        let lastName = document.forms["formOrders"]["last_name"].value;
        let email = document.forms["formOrders"]["email"].value;
        console.log(firstName);
        if(firstName){
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: totaalPrijs,
                    }
                }]
            });
        }else{
            alert('Vul de lege verplichte velden in');
        }


    },

    onApprove: function(data, actions) {
        // This function captures the funds from the transaction.


        return actions.order.capture().then(function(details) {
            // This function shows a transaction success message to your buyer.
            //location.replace("http://laraveleind.test/");

            document.getElementById("formOrder").submit();
        });

    },
    onCancel: function (data) {
        // Show a cancel page, or return to cart
        alert('Payment cancelled');
    }

}).render('#paypal-button-container');


