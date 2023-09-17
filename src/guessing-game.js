class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.search;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.search = this.binarySerach();
        return this.search;
    }

    lower() {
        this.max = this.search;
    }

    greater() {
        this.min = this.search;
    }

    binarySerach() {
        return Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
