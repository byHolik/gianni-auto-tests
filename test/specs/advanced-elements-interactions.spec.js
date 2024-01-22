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

    it('dropdowns', async () => {
        await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');

        const programmingLanguage = 'python';
        const programmingLanguage_DropDownList = await $('#dropdowm-menu-1');
        await programmingLanguage_DropDownList.selectByAttribute('value', programmingLanguage);
        await expect(programmingLanguage_DropDownList).toHaveValue(programmingLanguage);
        await browser.pause(1500);

        const tech_DropDownList = await $('#dropdowm-menu-2');
        await tech_DropDownList.selectByIndex(3);
        await expect(tech_DropDownList).toHaveValueContaining('JUnit', {ignoreCase: true});
        //await expect(tech_DropDownList).toHaveValue(expect.stringContaining('junit'));
        await browser.pause(1500);

        const frontendLanguage_DropDownList = await $('#dropdowm-menu-3');
        await frontendLanguage_DropDownList .selectByVisibleText('CSS');
        await expect(frontendLanguage_DropDownList ).toHaveValueContaining('CSS', {ignoreCase: true});
        await browser.pause(1500);
    });
});