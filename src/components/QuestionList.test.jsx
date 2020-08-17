describe('The Question List Component', () => {
    beforeAll(() => {
        console.log('Before All...');
    });

    beforeEach(() => {
        console.log('Before Each...');
    });

    it.only('Should display a list of tems', () => {
        expect(2+2).toEqual(4);
    });

    it('Should display a list of tems again', () => {
        expect(2+1).toEqual(3);
    });

    afterEach(() => {
      console.log('After Each...');
    });

    afterAll(() => {
        console.log('After All...');
    });
});