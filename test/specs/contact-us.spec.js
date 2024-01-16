describe('webdriverunivercity - contact us page', () => {
    before(async() => {
        await browser.maximizeWindow();
    });

    it('valid submittion - submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html');
        //await browser.pause(5000);
        //first name
        const firstName = await $('//*[@name="first_name"]');
        //last name
        const lastName = await $('//*[@name="last_name"]');
        //email address
        const emailAddress = await $('//*[@name="email"]');
        //message
        const message = await $('//textarea[@name="message"]');
        //submit button
        const submitButton = await $('//*[@value="SUBMIT"]');

        await firstName.setValue('Joe');
        await lastName.setValue('Blogs');
        await emailAddress.setValue('mail@mail.com');
        await message.setValue('How are you?');
        await submitButton.click();


        const successfulSubmissionHeader = $('#contact_reply > h1');
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');
        await browser.pause(5000);
    });

    it.only('invalid submittion - dont submit all information', () => {
        //first name
        //last name
        //message
        //submit button
    });
});