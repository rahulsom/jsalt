import scala.scalajs.js.annotation.JSExport

class FactorialScala {
  def factorial(x: Int): Int = if (x <= 0) 1 else x * factorial(x - 1) // <1><2><3>

  private var calls = 0 // <4>

  def getFactorials(len: Int) = { // <5><6>
    calls = calls + 1
    Range(1, len + 1).map(x => factorial(x))
  }

  def timesCalled() = calls
}

@JSExport // <7>
object FactorialScala {
  private var instanciations = 0
  private var instance: FactorialScala = null

  def getInstance() = { // <8>
    if (instance == null) {
      this.instanciations = this.instanciations + 1
      instance = new FactorialScala
    }
    instance
  }

  def instances = instanciations // <9>
}