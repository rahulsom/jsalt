"use strict"; // <1>

/**
 * A factory that offers factorial methods
 */
var FactorialUtilClassic = (function () { // <2>
    function FactorialUtilClassic() { // <3>
    }

    /**
     * Computes the factorial of a number
     * @param x {int} the number
     * @return {int} the factorial
     */
    FactorialUtilClassic.prototype.factorial = function factorial(x) { // <4>
        return x <= 0 ? 1 : x * this.factorial(x - 1);
    };

    /**
     * Returns the first n factorials starting with 1
     * @param len {int} the number factorials to return // <5>
     * @return {Array<int>}the list of factorials
     */
    FactorialUtilClassic.prototype.getFactorials = function getFactorials(len) {
        var _this = this; // <6>

        this.calls++;
        return _ // <7>
            .range(1, len + 1)
            .map(function (x) { // <8>
                return _this.factorial(x); // <9>
            });
    };

    FactorialUtilClassic.prototype.timesCalled = function timesCalled() {
        console.log("Calls: " + this.calls); // <10>
        return this.calls;
    };

    /**
     * Returns a singleton of the FactorialUtilClassic
     * @return {FactorialUtilClassic}
     */
    FactorialUtilClassic.getInstance = function getInstance() { // <11>
        if (!this._instance) { // <12>
            this._instance = new FactorialUtilClassic();
            this.instantiations = this.instantiations ? this.instantiations + 1 : 1;
            this._instance.calls = 0;
        }
        return this._instance;
    };

    FactorialUtilClassic.instances = function instances() {
        console.log("Instantiations: " + this.instantiations);
        return this.instantiations;
    };

    return FactorialUtilClassic; //<13>
})();
