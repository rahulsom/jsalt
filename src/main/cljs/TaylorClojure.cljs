(ns jsalt.core)

(defn ^:export fact [x] ; <1>
  (if (<= x 1) 1 ; <2>
    (* x (fact (- x 1)))))
(defn ^:export pow [x n]
  (if (zero? n) 1
    (if (< n 0)
      (/ (pow x (inc n)) x)
      (* (pow x (dec n)) x)
    )))
(defn term [x i]
  (/
    (* (pow -1 i) (pow x (+ 1 (* i 2))))
    (fact (+ 1 (* i 2)))))
(defn ^:export sine [x]
  (reduce +
    (map (partial term x) (range 10)))); <3>
