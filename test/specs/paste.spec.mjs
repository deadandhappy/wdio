import addPage from "../../src/addPage.mjs";
import loginPage from "../../src/loginPage.mjs";

describe('New paste', () => {
    /**it('Should log in', async () => {
        await loginPage.open()
        await loginPage.loginBtn.click()
        await loginPage.username.setValue('helloweb')
        await loginPage.pass.setValue('123qwe123qwe')
        await loginPage.sabmitBtn.click()
    })*/

    it('Should add a new paste', async () => {
        await addPage.open()
        await addPage.textArea.setValue('Hello from WebDriver')
        //await addPage.dateExp.scrollIntoView({block: 'center'})
        //await addPage.dateExp.click()
        await addPage.dateNew.click()
        await addPage.title.setValue('helloweb')
        //await addPage.pause(6000)
        //await addPage.submit()
        //await expect(addPage.textArea).toHaveText('Hello from WebDriver')
        await expect(addPage.dateExp).toBeDisplayed()
        //await expect(addPage.dateNew).toBeSelected()
        //await expect(addPage.title).toHaveText('helloweb')
        await addPage.saveScreen()

    })
})
