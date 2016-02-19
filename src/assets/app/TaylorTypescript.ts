/// <reference path="../typings/lodash/lodash.d.ts" />  // <1>
/**
 * A factory that offers factorial methods
 */
class TaylorTypescript {

  pow(num:number, p:number):number { // <2>
    if (p == 0) return 1;
    else if (p > 0) return num * this.pow(num, p - 1);
    else return 1 / num * this.pow(num, p + 1);
  }

  fact(x:number):number {
    return x <= 0 ? 1 : x * this.fact(x - 1);
  }

  sine(x:number):number {
    /*
    return _.chain(_.range(0, 10))
        .reduce((sum, i) => sum + this.pow(-1, i) *
              this.pow(x, i * 2 + 1) / this.fact(i * 2 + 1), 0.0)
        .value(); // <3>
    */
    return _.reduce(
        _.range(0, 10),
        (sum, i) => sum + this.pow(-1, i) *
              this.pow(x, i * 2 + 1) / this.fact(i * 2 + 1),
        0.0
    );
  }

  static _instance:TaylorTypescript;

  static getInstance() {
    if (!this._instance) { // <4>
      this._instance = new TaylorTypescript();
    }
    return this._instance;
  }

}
