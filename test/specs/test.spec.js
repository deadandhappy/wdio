describe("Test suite", () => {

    it('First test', async() => {
        await browser.url('https://makaenka17med.by/');
        const pageTitle = await browser.getTitle();
        console.log(pageTitle);
        expect(pageTitle).toEqual('ГУ «Республиканский центр медицинской реабилитации и бальнеолечения» - Макаенка 17');
    })

    it('Second test',async() => {
        //await $('li[id="menu-item-257"]a[href*="patients"]').scrollIntoView();
        browser.maximizeWindow();
        //const elem = $('li[id="menu-item-257"]');
        await $('#menu-item-257').click();
        //browser.pause(15000);
        await $('[href="/patients/ask-question/"]').click();
        await $('#qname').setValue('Ivan Ivanov');
        await $('input[value="Отправить вопрос"]').click();

        const emailError = await $('span.wpcf7-not-valid-tip');
        expect(await emailError.getText()).toEqual('Важно заполнить это поле.');
    })
})
