describe('Taylor Modern Spec', function() {
  return it('calls, values and instances match', function() {
    var taylor = TaylorModern.getInstance();
    var PI = 3.14159265359;

    expect(taylor.pow(2, -2)).toBe(0.25);
    expect(taylor.pow(2, -1)).toBe(0.5);
    expect(taylor.pow(2, 0)).toBe(1);
    expect(taylor.pow(2, 1)).toBe(2);
    expect(taylor.pow(2, 2)).toBe(4);

    expect(taylor.fact(0)).toBe(1);
    expect(taylor.fact(1)).toBe(1);
    expect(taylor.fact(2)).toBe(2);
    expect(taylor.fact(3)).toBe(6);

    expect(taylor.sine(0)).toBeCloseTo(0.0, 3);
    expect(taylor.sine(PI / 4)).toBeCloseTo(0.707, 3);
    expect(taylor.sine(PI / 3)).toBeCloseTo(0.866, 3);
    expect(taylor.sine(PI / 2)).toBeCloseTo(1.0, 3);
    expect(taylor.sine(PI)).toBeCloseTo(0.0, 3);
  });
});
