(ns main.other-module
  (:require [clojure.browser.repl :as repl]
            [goog.dom :as dom]))

(defn run-other []
  (println "other module called")
)