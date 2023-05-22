import mainPage from "./mainPage.mjs";

class loginPage extends mainPage {
    get loginBtn () {return $('a.btn-sign.sign-in')}
    get username () {return $('#loginform-username')}
    get pass () {return $('#loginform-password')}
    get sabmitBtn () {return $('type = "submit"')}

    async open () {
        await super.open('https://paste.lcomrade.su/')//https://www.toptal.com/developers/hastebin https://pastebin.com/
    }

    async submit () {
        await this.sabmitBtn.click()
    }
}

export default new loginPage()