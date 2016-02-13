/**
 * A factory that offers factorial methods
 */
class FactorialUtilModern { // <1>

    /**
     * Computes the factorial of a number
     * @param x {int} the number
     * @return {int} the factorial
     */
    factorial(x) {
        return x <= 0 ? 1 : x * this.factorial(x-1);
    }

    /**
     * Returns the first n factorials starting with 1
     * @param len {int} the number factorials to return
     * @return {Array<int>}the list of factorials
     */
    getFactorials(len) {
        this.calls ++;
        return _
                .range(1, len + 1)
                .map(x => this.factorial(x)); // <2>
    }

    timesCalled() {
        console.log(`Calls: ${this.calls}`); // <3>
        return this.calls;
    }


    static _instance; // <4>
    static instantiations;

    /**
     * Returns a singleton of the FactorialUtilModern
     * @return {FactorialUtilModern}
     */
    static getInstance() {
        if (!this._instance) { // <5>
            this._instance = new FactorialUtilModern();
            this.instantiations = this.instantiations ? this.instantiations + 1 : 1;
            this._instance.calls = 0;
        }
        return this._instance;
    }

    static instances() {
        console.log(`Instantiations: ${this.instantiations}`);
        return this.instantiations;
    }
}
