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

    it('stait commands', async () => {
        await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');

        const lattuceRadioButton = await $('[value="lettuce"]');
        const lattuceRadioButton_isDisplayed = await lattuceRadioButton.isDisplayed();
        await expect(lattuceRadioButton_isDisplayed).toEqual(true);
        await expect(lattuceRadioButton).toBeEnabled();

        const lattuceRadioButton_isDClickable = await lattuceRadioButton.isClickable();
        await expect(lattuceRadioButton_isDClickable).toEqual(true);

        const cabbageRadioButton = await $('[value="cabbage"]');
        const cabbageRadioButton_isEnabled= await cabbageRadioButton.isEnabled();
        await expect(cabbageRadioButton_isEnabled).toEqual(false);
        await expect(cabbageRadioButton).toBeDisabled();
        await expect(cabbageRadioButton).not.toBeEnabled();
    });

    it.only('actions', async () => {
        await browser.url('/Actions/index.html');

        const elem = await $('#draggable');
        const target = await $('#droppable');
        await elem.dragAndDrop(target);
        await browser.pause(3000);

        const doubleClick_Button = await $('#double-click');
        await doubleClick_Button.doubleClick();
        await browser.pause(3000);

        const firstList_Locator = "//*[text()='Hover Over Me First!']";
        await $(firstList_Locator).moveTo();
        const firstLink = await $(firstList_Locator + "/..//*[text() = 'Link 1']");
        await firstLink.isClickable();
        await firstLink.click();
        await browser.pause(3000);
    });
});