describe("Factorial Util Classic Spec", function () {
    it("calls, values and instances match", function () {
        expect(FactorialUtilClassic.getInstance().getFactorials(5).toString()).toBe([1, 2, 6, 24, 120].toString());
        expect(FactorialUtilClassic.getInstance().getFactorials(3).toString()).toBe([1, 2, 6].toString());
        expect(FactorialUtilClassic.instances()).toBe(1);
        expect(FactorialUtilClassic.getInstance().timesCalled()).toBe(2);
    });
});