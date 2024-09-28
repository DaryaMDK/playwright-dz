class MainPage {
    constructor(page) {
        this.page = page;
        this.searchInput = '#small-searchterms';
        this.searchButton = '[value="Search"]';
        this.pollAnswer = '#pollanswers-2';
        this.pollVoteButton = '#vote-poll-1';
        this.pollVoteError = '.poll-vote-error';
        this.newsletterEmail = '#newsletter-email';
        this.newsletterSubscribeButton = '#newsletter-subscribe-button';
        this.newsletterResult = '#newsletter-result-block';
        this.baseUrl = 'https://demowebshop.tricentis.com'
    }

    async goto() {
        await this.page.goto('https://demowebshop.tricentis.com');
    }

    async searchForProduct(productName) {
        await this.page.locator(this.searchInput).click();
        await this.page.locator(this.searchInput).fill(productName);
        await this.page.locator(this.searchButton).click();
    }

    async voteInPoll() {
        await this.page.locator(this.pollAnswer).click();
        await this.page.locator(this.pollVoteButton).click();
    }

    async subscribeToNewsletter(email) {
        await this.page.locator(this.newsletterEmail).fill(email);
        await this.page.locator(this.newsletterSubscribeButton).click();
    }
}

module.exports = { MainPage };
