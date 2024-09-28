class ProductPage {
    constructor(page) {
        this.page = page;
        this.firstProductTitle = '.product-title';
    }

    async getFirstProductText() {
        return await this.page.locator(this.firstProductTitle).textContent();
    }
}

module.exports = { ProductPage };
