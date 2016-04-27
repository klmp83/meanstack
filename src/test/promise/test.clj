(defn funcOne [callback]
  (println "funcOne")
  (callback))
(defn funcTwo [callback]
  (println "funcTwo")
  (callback))
(defn funcThree [callback]
  (println "funcThree")
  (callback))
(defn funcFour [callback]
  (println "funcFour")
  (callback))

(let [a (fn [] (println "a"))]
  (a))

;(funcOne (funcTwo (fn [] (print "callback")))) ; wrong