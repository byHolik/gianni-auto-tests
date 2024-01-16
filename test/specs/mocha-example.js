describe.skip('Description of test suit', () => {
    before(() => {
        console.log('Before first test');
    });

    after(() => {
        console.log('After last test');
    });

    beforeEach(() => {
        console.log('Before each test');
    });

    afterEach(() => {
        console.log('After each test');
    });

    it('Individual test 1', () => {
        console.log('Execute test: Individual test 1');
    });

    it('Individual test 2', () => {
        console.log('Execute test: Individual test 2');
    });
})