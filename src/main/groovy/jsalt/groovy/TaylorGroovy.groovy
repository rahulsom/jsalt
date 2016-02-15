package jsalt.groovy

import groovy.transform.CompileStatic
import groovy.transform.Memoized
import groovy.transform.TypeChecked

/**
 * Utility to work with factorials
 */
@CompileStatic // <1>
@TypeChecked
class TaylorGroovy {

  double pow(double num, int p) { // <3>
    if (p == 0) 1
    else if (p > 0) num * pow(num, p - 1) // <4>
    else 1 / num * pow(num, p + 1)
  }

  long fact(long x) {
    x > 0 ? x * fact(x - 1) : 1
  }

  double sine(double x) {
    (0..10).inject(0.0) { sum, i ->
      sum + pow(-1, i) * pow(x, i * 2 + 1) / fact(i * 2 + 1)
    } as double
  }

  static TaylorGroovy instance = null // <2>

  /**
   * A poor man's singleton. This is not thread safe.
   * But the joke is on threads, because javascript has only one thread
   *
   * @return the singleton
   */
  static TaylorGroovy getInstance() { // <5>
    if (!instance) {
      instance = new TaylorGroovy()
    }
    instance
  }

}
