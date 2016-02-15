/**
 * A factory that offers factorial methods
 */
class TaylorModern { // <1>

    /**
     * Computes the p-th power of num
     * @param num {number} the number
     * @param p {int} the number
     * @return {number} the power
     */
    pow(num, p) {
        if (p == 0) return 1;
        else if (p > 0) return num * this.pow(num, p - 1);
        else return 1 / num * this.pow(num, p + 1);
    }

    /**
     * Computes the factorial of a number
     * @param x {int} the number
     * @return {int} the factorial
     */
    fact(x) {
        return x <= 0 ? 1 : x * this.fact(x - 1);
    }

    /**
     * Computes the sine of an angle
     * @param x {number} the angle
     * @return {number} the sine
     */

    sine(x) {
        return _
            .chain(_.range(0, 10))
            .reduce((sum, i) => sum + this.pow(-1, i) * this.pow(x, i * 2 + 1) / this.fact(i * 2 + 1), 0.0); // <2>
    };

    static _instance; // <3>

    /**
     * Returns a singleton of the TaylorModern
     * @return {TaylorModern}
     */
    static getInstance() {
        if (!this._instance) { // <4>
            this._instance = new TaylorModern();
        }
        return this._instance;
    }

}
