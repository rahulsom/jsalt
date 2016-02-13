import spock.lang.Specification

class FactorialGroovySpec extends Specification { // <1>
  def "calls, values and instances match"() {
    FactorialGroovy.instance.getFactorials(5) == [1, 2, 6, 24, 120] // <2>
    FactorialGroovy.instance.getFactorials(3) == [1, 2, 6]
    FactorialGroovy.instances() == 1
    FactorialGroovy.instance.timesCalled() == 2
  }
}
