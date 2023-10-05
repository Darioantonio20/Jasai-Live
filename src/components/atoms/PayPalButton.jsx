import React, { useEffect } from 'react';

function PayPalButton() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.paypal.com/sdk/js?client-id=AdTMc7ncp1SLHERK8jtl_a7pple7jvIk_ljJBkwkXK724HueSDhXkoC0a8TW2kCqedgSEN_oGuGME14Y&currency=MXN';
        script.async = true;
        script.onload = initializePayPalButton;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    function initializePayPalButton() {
        window.paypal
            .Buttons({
                style: {
                    label: 'pay',
                },
                createOrder: function (data, actions) {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: 300,
                                },
                            },
                        ],
                    });
                },
                onApprove: function (data, actions) {
                    actions.order.capture().then(function (detalles) {
                        console.log(detalles);
                    });
                },
                onCancel: function (data) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Compra cancelada',
                        text: 'Asegurece que en la compra sea lo que usted desee',
                      })
                    console.log(data);
                },
            })
            .render('#paypal-button-container');
    }

    return <div id="paypal-button-container"></div>;
}

export default PayPalButton;
