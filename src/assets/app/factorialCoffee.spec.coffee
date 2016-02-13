describe 'Factorial Util Coffee Spec', ->
  it 'calls, values and instances match', ->
    expect(FactorialUtilCoffee.getInstance().getFactorials(5).toString()).toBe [1, 2, 6, 24, 120].toString()
    expect(FactorialUtilCoffee.getInstance().getFactorials(3).toString()).toBe [1, 2, 6].toString()
    expect(FactorialUtilCoffee.instances()).toBe 1
    expect(FactorialUtilCoffee.getInstance().timesCalled()).toBe 2
