describe('locating elements', async () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('https://selectors.webdriveruniversity.com/');
    })
    it('$ - locate element', async () => {
        await browser.$('//a[@href="#portfolio"]').click();
        await browser.pause(3000);

        const webdriverioButton = await browser.$('[data-target="#portfolioModal1"]');
        await webdriverioButton.click();
        await browser.pause(3000);
    });

    it('$$ - locate elements', async () => {
        const expectedTitle = [
            '#',
            'First',
            'Last',
            'Handle',
            '1',
            '2',
            '3',
            'Firstname',
            'Lastname',
            'Age'
        ];
        const actualTitle = [];
        const tableHeaderTitle = await $$('//table//th');

        for(const title of tableHeaderTitle) {
            //console.log(await title.getText());
            actualTitle.push(await title.getText())
        }

        await expect(expectedTitle).toEqual(actualTitle);
    });
});