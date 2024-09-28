class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginButton = 'input[value="Log in"]';
    }

    async isLoginButtonVisible() {
        return await this.page.locator(this.loginButton).isVisible();
    }
}

module.exports = { LoginPage };
