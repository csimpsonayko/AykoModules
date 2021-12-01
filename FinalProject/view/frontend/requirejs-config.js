var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/checkout-data': {
                'Ayko_FinalProject/js/checkout-data-mixin': true,
                'Ayko_FinalProject/js/action/set-xdebug-mixin': true
            },
            'Magento_Checkout/js/action/set-shipping-information': {
                'Ayko_FinalProject/js/action/set-shipping-information-mixin': true
            }
        }
    }
};

