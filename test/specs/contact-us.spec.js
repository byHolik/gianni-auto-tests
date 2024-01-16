describe('webdriverunivercity - contact us page', () => {
    before(async() => {
        await browser.maximizeWindow();
    });

    it('valid submittion - submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html');
        const firstName = await $('//*[@name="first_name"]');
        const lastName = await $('//*[@name="last_name"]');
        const emailAddress = await $('//*[@name="email"]');
        const message = await $('//textarea[@name="message"]');
        const submitButton = await $('//*[@value="SUBMIT"]');

        await firstName.setValue('Joe');
        await lastName.setValue('Blogs');
        await emailAddress.setValue('mail@mail.com');
        await message.setValue('How are you?');
        await submitButton.click();


        const successfulSubmissionHeader = $('#contact_reply > h1');
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');
    });

    it('invalid submittion - dont submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html');
        const firstName = await $('//*[@name="first_name"]');
        const lastName = await $('//*[@name="last_name"]');
        const message = await $('//textarea[@name="message"]');
        const submitButton = await $('//*[@value="SUBMIT"]');

        await firstName.setValue('Joe');
        await lastName.setValue('Blogs');
        await message.setValue('How are you?');
        await submitButton.click();

        const successfulSubmissionHeader = $('//body');
        console.log(successfulSubmissionHeader);
        await expect(successfulSubmissionHeader).toHaveTextContaining(['Error: all fields are required'],['Error: Invalid email address']);
    });
});