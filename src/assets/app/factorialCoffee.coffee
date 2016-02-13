'use strict' # <1>

###* # <2>
# A factory that offers factorial methods
###
class FactorialUtilCoffee # <3>
  ###*
  # Computes the factorial of a number
  # @param x {int} the number
  # @return {int} the factorial
  ###
  factorial: (x) -> # <4>
    if x <= 0 then 1 else x * @factorial(x - 1) # <5>

  ###*
  # Returns the first n factorials starting with 1
  # @param len {int} the number factorials to return
  # @return {Array<int>}the list of factorials
  ###
  getFactorials: (len) ->
    _this = @ # <6>
    @calls++
    _.range(1, len + 1).map (x) -> # <7>
      _this.factorial x

  timesCalled: ->
    console.log "Calls: #{@calls}" # <8>
    @calls

  ###*
  # Returns a singleton of the FactorialUtil
  # @return {FactorialUtil}
  ###
  @getInstance = ->
    if !@_instance
      @_instance = new FactorialUtilCoffee
      @instantiations = if @instantiations then @instantiations + 1 else 1
      @_instance.calls = 0
    @_instance # <9>

  @instances = ->
    console.log "Instantiations: #{@instantiations}"
    @instantiations

window.FactorialUtilCoffee = FactorialUtilCoffee # <10>