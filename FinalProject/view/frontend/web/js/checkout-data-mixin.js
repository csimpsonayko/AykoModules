define([
    'jquery',
    'uiComponent',
    'Magento_Customer/js/customer-data'
], function ($, Component, customerData) {
    'use strict';
    return Component.extend({
        /** @inheritdoc */
        initialize: function () {
            this._super();
            console.log('----- XDEBUG FUNCTION HERE -----');
            console.log(customerData.get()());
        }
    });
});
