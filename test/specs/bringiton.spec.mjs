import pastePage from "../../src/pastePage.mjs";

describe('New newpaste', () => {
    
    it('Should add a new newpaste', async () => {
        await pastePage.open()
        await pastePage.textArea.setValue('git config --global user.name "New Sheriff in Town" \n git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \n git push origin master --force')
        //await pastePage.textArea.addValue('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \n')
        //await pastePage.textArea.addValue('git push origin master --force')
        //await pastePage.dateExp.scrollIntoView({block: 'center'})
        //await pastePage.dateExp.click()
        await pastePage.dateNew.click()
        await pastePage.title.setValue('how to gain dominance among developers')
        await pastePage.syntax.click()
        await pastePage.submit()
        await browser.pause(3000)
        //console.log(pastePage.spanText)
        //await pastePage.saveScreen() 
        //const txt = await $('span:nth-child(1) > span:nth-child(2) > span');
        //console.log(txt.getText());
        await expect(pastePage.spanText).toHaveText('"New Sheriff in Town"')//"New Sheriff in Town" \n git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code") \n git push origin master --force')
        //await expect(pastePage.dateNew).toBeDisplayed()
        //await expect(pastePage.dateNew).toBeSelected()
        await expect(pastePage.titleText).toHaveValue('how to gain dominance among developers')
        await expect(pastePage.syntaxText).toHaveText(/Bash/)
        
    })
})
