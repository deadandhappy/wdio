export default class mainPage {
    constructor() {
        //title: 'My Title'
        //this.title = ('title')
    }

    async open (path) {
        await browser.url(path)
        await browser.maximizeWindow()
    }
}
