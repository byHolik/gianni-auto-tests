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

    it('actions', async () => {
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

    it('handling window', async () => {
        await browser.url('https://www.webdriveruniversity.com/');
        await browser.newWindow('https://www.automationteststore.com/');
        
        let currentWindow_Title = await browser.getTitle();
        console.log(`>>Current Window Title: ${currentWindow_Title}`);
        await expect(browser).toHaveUrlContaining('automationteststore');
        await browser.pause(1000);

        await browser.switchWindow('webdriveruniversity.com');
        let parentWindow_Title = await browser.getTitle();
        console.log(`>>Current Window Title: ${parentWindow_Title}`);
        await expect(browser).toHaveUrlContaining('webdriveruniversity');
        await browser.pause(1000);

        await $('#contact-us').click();
        await browser.switchWindow('automationteststore');
        await browser.closeWindow();
        //await browser.pause(3000);

        await browser.switchWindow('contactus');
        await browser.closeWindow();

        await browser.switchWindow('webdriveruniversity');
        console.log(`>>Current Window Title: ${await browser.getTitle()}`);
        await browser.pause(3000);
    });

    it('IFrame', async () => {
        await browser.url('/IFrame/index.html');

        const iFrame = await $('#frame');
        await browser.switchToFrame(iFrame);
        await $('//*[text()="Our Products"]').click();
        await browser.switchToParentFrame();
        await browser.pause(3000);
    });

    it('alerts', async () => {
        await browser.url('/Popup-Alerts/index.html');

        await $('#button1').click();
        await browser.acceptAlert();
        await browser.pause(3000);

        const buton4 = await $('#button4')
        await buton4.click();
        const alertText = await browser.getAlertText();
        await expect(alertText).toEqual('Press a button!');

        await browser.acceptAlert();
        await expect($('#confirm-alert-text')).toHaveText('You pressed OK!');
        await browser.pause(3000);

        await buton4.dismissAlert();
        await expect($('#confirm-alert-text')).toHaveText('You pressed Cancel!');
    });

    it('file upload', async () => {    
        await browser.url('/File-Upload/index.html');
        await $('#myFile').addValue(`${process.cwd()}\\data\\dummy_file.txt`);
        await browser.pause(2000);
        await $('#submit-button').click();
        await browser.pause(2000);
        await expect(await browser.getAlertText()).toEqual('Your file has now been uploaded!');
        await browser.acceptAlert();
    });
});