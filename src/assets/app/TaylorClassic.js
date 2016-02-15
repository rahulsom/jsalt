"use strict"; // <1>

/**
 * A factory that offers factorial methods
 */
var TaylorClassic = (function () { // <2>
    function TaylorClassic() {} // <3>

    /**
     * Computes the p-th power of num
     * @param num {number} the number
     * @param p {int} the number
     * @return {number} the power
     */
    TaylorClassic.prototype.pow = function(num, p) { // <4>
        if (p === 0) {
            return 1;
        } else if (p > 0) {
            return num * this.pow(num, p - 1);
        } else {
            return 1 / num * this.pow(num, p + 1);
        }
    };

    /**
     * Computes the factorial of a number
     * @param x {int} the number // <5>
     * @return {int} the factorial
     */
    TaylorClassic.prototype.fact = function fact(x) {
        return x <= 0 ? 1 : x * this.fact(x - 1);
    };

    /**
     * Computes the sine of an angle
     * @param x {number} the angle
     * @return {number} the sine
     */
    TaylorClassic.prototype.sine = function(x) {
        var _this = this; // <6>
        return _.reduce(_.range(0, 10), function(sum, i) { // <7><8>
            return sum + _this.pow(-1, i) * _this.pow(x, i * 2 + 1) / _this.fact(i * 2 + 1); // <9>
        }, 0.0);
    };

    /**
     * Returns a singleton of the TaylorClassic
     * @return {TaylorClassic}
     */
    TaylorClassic.getInstance = function getInstance() { // <10>
        if (!this._instance) { // <11>
            this._instance = new TaylorClassic();
        }
        return this._instance;
    };

    return TaylorClassic; //<12>
})();
