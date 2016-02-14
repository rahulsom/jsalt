package jsalt.groovy
import groovy.transform.CompileStatic
import groovy.transform.TypeChecked

/**
 * Utility to work with factorials
 */
@CompileStatic // <1>
@TypeChecked
class FactorialGroovy {

  int calls = 0 // <2>

  /**
   * Computes the factorial of a number
   * @param x the number
   * @return the factorial
   */
  int factorial(int x) { // <3>
    x <= 0 ? 1 : x * factorial(x - 1) // <4>
  }

  /**
   * Gets a list of len factorials
   * @param len the length of the sequence beginning at 1
   * @return the sequence
   */
  List<Integer> getFactorials(int len) {
    calls++
    (1..len).collect { factorial(it) }
  }

  int timesCalled() {
    println "Calls: $calls"
    calls
  }

  static FactorialGroovy instance = null
  static int instantiations = 0

  /**
   * A poor man's singleton. This is not thread safe.
   * But the joke is on threads, because javascript has only one thread
   *
   * @return the singleton
   */
  static FactorialGroovy getInstance() { // <5>
    if (!instance) {
      instance = new FactorialGroovy()
      instantiations++
    }
    instance
  }

  static int instances() {
    instantiations
  }
}
