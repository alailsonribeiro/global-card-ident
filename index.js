/**
 * @ Author: Aailson Barbosa Ribeiro <ribeiro@alailson.com.br>
 * @ Create Time: 2020-12-23 13:20:41
 * @ I love do this ♡ Enlightened by God
 * @ Modified by: Your name
 * @ Modified time: 2021-01-18 13:29:14
 */
/*
JavaScript identifier for the Credit Card number for Global Issuers/Brands.
 */

'use strict';

/**
 * 
 * @param (cardnumber) string or number of card to identify 
 * @return {object} defutl is use module for br
 * 
 */

const issuers = require('./issuers')


module.exports = (cardnumber = '0000000000000000') => {

    cardnumber = cardnumber.toString().replace(/\D/g, '')

    if (cardnumber.length > 2) {
        return issuers[cardnumber.charAt(0)](cardnumber)
    }
}

