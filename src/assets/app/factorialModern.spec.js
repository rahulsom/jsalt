describe("Factorial Util Modern Spec", function () {
    it("calls, values and instances match", function () {
        expect(FactorialUtilModern.getInstance().getFactorials(5).toString()).toBe([1, 2, 6, 24, 120].toString());
        expect(FactorialUtilModern.getInstance().getFactorials(3).toString()).toBe([1, 2, 6].toString());
        expect(FactorialUtilModern.instances()).toBe(1);
        expect(FactorialUtilModern.getInstance().timesCalled()).toBe(2);
    });
});