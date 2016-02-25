import scala.scalajs.js.annotation.JSExport

class TaylorScala {

  def fact(x: Long): Long = if (x > 0) x * fact(x - 1) else 1 // <1><2><3>

  def pow(num: Double, p: Int): Double = { // <4>
    if (p == 0) 1
    else if (p > 0) num * pow(num, p - 1)
    else 1 / num * pow(num, p + 1)
  }

  def sine(x: Double) = Range(0, 10) // <5>
    .foldLeft(0.0)(
      (sum, i) => sum + pow(-1, i) * pow(x, i * 2 + 1) / fact(i * 2 + 1)
    )

}

@JSExport // <6>
object TaylorScala {
  private lazy val instance = new TaylorScala
  def getInstance = instance // <7>
}
