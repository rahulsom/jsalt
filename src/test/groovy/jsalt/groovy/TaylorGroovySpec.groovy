package jsalt.groovy

import spock.lang.Specification

class TaylorGroovySpec extends Specification { // <1>

  public static final BigDecimal PI = 3.14159265359

  def "calls, values and instances match"() {
    def taylor = TaylorGroovy.instance
    expect:
    taylor.pow(2, -2) == 0.25 // <2>
    taylor.pow(2, -1) == 0.5
    taylor.pow(2, 0) == 1
    taylor.pow(2, 1) == 2
    taylor.pow(2, 2) == 4

    taylor.fact(0) == 1
    taylor.fact(1) == 1
    taylor.fact(2) == 2
    taylor.fact(3) == 6

    taylor.sine(0) == 0.0
    taylor.sine(PI / 4) > 0.707 && taylor.sine(PI / 4) < 0.708 // <3>
    taylor.sine(PI / 3) > 0.866 && taylor.sine(PI / 3) < 0.867
    taylor.sine(PI / 2) > 0.999 && taylor.sine(PI / 2) < 1.001
    taylor.sine(PI) > -0.001 && taylor.sine(PI) < 0.001

  }
}
