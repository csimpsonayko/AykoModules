var config = {
    config: {
        /*  A mixin is a class whose methods are added to, or mixed in, with another class. ...
            This allows you to add to or augment the behavior of the base class by adding different mixins to it.

            This example adds the loaded mixin - on the point of 'proceed to checkout'  */
        mixins: {
            'Magento_Checkout/js/checkout-data': {
                'Ayko_DebugModule/js/loaded': true
            }
        }
    }
};

