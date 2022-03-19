'use strict';

const events = require('../events');

let { faker } = require('@faker-js/faker');


let phonyData = {
    "store": "Qaisi STORE",
    "orderId": faker.phone.phoneNumber(),
    "customer": faker.name.findName(),
    "address": faker.address.streetAddress()
}

events.on('deliveredVendor', deliveredVendor);

function deliveredVendor(payload) {

    console.log('VENDOR:', payload.phonyData.orderId);
    events.emit('deliveredEvent', { phonyData: payload.phonyData });

}


setInterval(() => {
    events.emit('create-order', { phonyData });
}, 1000);


