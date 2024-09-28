class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerButton = '#register-button';
    }

    async isRegisterButtonVisible() {
        return await this.page.locator(this.registerButton).isVisible();
    }
}

module.exports = { RegisterPage };
