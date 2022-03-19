'use strict';

const events = require('../src/events')


let data = {
    store: 'NAKI',
    orderId: '6538989fjs-sddsfsdfdsf-428877878384d-a565-48c82be5',
    customer: 'Ahmad',
    address: 'NewYourk'
}


describe('Test events', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });


    afterAll(() => {
        consoleSpy.mockRestore();
    })



    it('pickup event ', async () => {
        events.emit('pickup', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    it('delieverd event ', async () => {
        events.emit('delieverd', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    
    it('in transit event ', async () => {
        events.emit('in-transit', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

})