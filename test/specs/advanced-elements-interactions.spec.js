describe('advance element interactions - example', () => {
beforeEach(async () => {
    await browser.maximizeWindow();
});

    it('inputs', async () => {
        await browser.url('/Contact-Us/contactus.html');
        const firstNamrTextField = $('[name="first_name"]');

        await firstNamrTextField.addValue('Add your text here ');
        await firstNamrTextField.addValue('My added text');
        //await browser.pause(2000);

        await (await firstNamrTextField).clearValue();
        //await browser.pause(2000);
        
    });
});