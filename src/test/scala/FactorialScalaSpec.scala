import org.junit.runner.RunWith
import org.scalatest._
import org.scalatest.junit.JUnitRunner

// import scala.collection.immutable.List // <1>

@RunWith(classOf[JUnitRunner]) // <2>
class FactorialScalaSpec extends FunSuite {
  test("calls, values and instances match") {
    assert(FactorialScala.getInstance().getFactorials(5) == List(1, 2, 6, 24, 120)) // <3>
    assert(FactorialScala.getInstance().getFactorials(3) == List(1, 2, 6))
    assert(FactorialScala.instances == 1)
    assert(FactorialScala.getInstance().timesCalled() == 2)
  }
}
