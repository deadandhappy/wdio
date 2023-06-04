import pastePage from "../../src/pastePage.mjs";
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
        await pastePage.open()
        await pastePage.textArea.setValue('Hello from WebDriver')
        //await pastePage.dateExp.scrollIntoView({block: 'center'})
        //await pastePage.dateExp.click()
        await pastePage.dateNew.click()
        await pastePage.title.setValue('helloweb')
        //await pastePage.pause(6000)
        //await pastePage.submit()
        //await expect(pastePage.textArea).toHaveText('Hello from WebDriver')
        await expect(pastePage.dateNew).toBeDisplayed()
        //await expect(pastePage.dateNew).toBeSelected()
        //await expect(pastePage.title).toHaveText('helloweb')
        //await pastePage.saveScreen()

    })
})
