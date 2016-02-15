import org.junit.runner.RunWith
import org.scalatest._
import org.scalatest.junit.JUnitRunner

// import scala.collection.immutable.List // <1>

@RunWith(classOf[JUnitRunner]) // <2>
class TaylorScalaSpec extends FunSuite {
  final val PI = 3.14159265359
  test("calls, values and instances match") {
    val taylor = TaylorScala.getInstance()
    assert(taylor.pow(2, -2) == 0.25) // <3>
    assert(taylor.pow(2, -1) == 0.5)
    assert(taylor.pow(2, 0) == 1)
    assert(taylor.pow(2, 1) == 2)
    assert(taylor.pow(2, 2) == 4)

    assert(taylor.fact(0) == 1)
    assert(taylor.fact(1) == 1)
    assert(taylor.fact(2) == 2)
    assert(taylor.fact(3) == 6)

    assert(taylor.sine(0) == 0.0)
    assert(taylor.sine(PI / 4) > 0.707)
    assert(taylor.sine(PI / 4) < 0.708)
    assert(taylor.sine(PI / 3) > 0.866)
    assert(taylor.sine(PI / 3) < 0.867)
    assert(taylor.sine(PI / 2) > 0.999)
    assert(taylor.sine(PI / 2) < 1.001)
    assert(taylor.sine(PI) > -0.001)
    assert(taylor.sine(PI) < 0.001)

  }
}
