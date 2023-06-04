import mainPage from './mainPage.mjs'

class pastePage extends mainPage {

    get textArea () {return $('#editor')}//#postform-text
    get dateExp () {return $('#create-paste-form > div:nth-child(5) > select')}//#w0 > div.post-form__bottom > div.post-form__left > div.form-group.field-postform-expiration > div
    get dateNew () {return $('#create-paste-form > div:nth-child(5) > select > option:nth-child(2)')}//#select2-postform-expiration-container
    get title () {return $('input.stretch-width')}//#postform-name
    get syntax () {return $('#create-paste-form > div:nth-child(3) > div:nth-child(1) > select > option:nth-child(18)')}
    get sabmitBtn () {return $('button[type="submit"]')}
    get copyBtn () {return $('//button[text()="Copy"]')}
    get spanText () {return $('body > article > pre > code > span:nth-child(1) > span:nth-child(2) > span')}
    get titleText () {return $('body > article > input')}
    get syntaxText () {return $('body > article > div > div:nth-child(1)')}

    async copy () {
        await this.copyBtn.click();
    }
    async open () {
        await super.open('https://paste.lcomrade.su/')//https://pastebin.com/ https://paste.lcomrade.su/
    }

    async submit () {
        await this.sabmitBtn.click()
    }

    /**async saveScreen () {
        await browser.saveScreenshot('./screenshots/screenshot.png')
    }*/
}

export default new pastePage()