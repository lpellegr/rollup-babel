class Test {

    public async initialize(word: string) {
        await this.delay(3000);
        console.log('Hello ' + word);
    }

    private async delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}

new Test().initialize('world');