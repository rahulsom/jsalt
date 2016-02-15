'use strict' # <1>

###* # <2>
# A factory that offers factorial methods
###
class TaylorCoffee # <3>

  ###*
  # Computes the p-th power of num
  # @param num {number} the number
  # @param p {int} the number
  # @return {number} the power
  ###
  pow: (num, p) ->
    if p == 0 then 1
    else if p > 0 then num * @pow(num, p - 1)
    else 1/num * @pow(num, p+1)

  ###*
  # Computes the factorial of a number
  # @param x {int} the number
  # @return {int} the factorial
  ###
  fact: (x) -> # <4>
    if x <= 0 then 1 else x * @fact(x - 1) # <5>

  ###*
  # Computes the sine of an angle
  # @param x {number} the angle
  # @return {number} the sine
  ###
  sine: (x) ->
    _this = @ # <6>
    reducer = (sum, i) -> sum + _this.pow(-1, i) * _this.pow(x, i * 2 + 1) / _this.fact(i * 2 + 1) # <7>
    _.reduce(_.range(0, 10), reducer, 0.0) # <8>

  ###*
  # Returns a singleton of the FactorialUtil
  # @return {FactorialUtil}
  ###
  @getInstance = ->
    if !@_instance
      @_instance = new TaylorCoffee
    @_instance # <9>

window.TaylorCoffee = TaylorCoffee # <9>