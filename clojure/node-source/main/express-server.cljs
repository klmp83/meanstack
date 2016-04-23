(ns main.express-server
  (:require [cljs.nodejs :as node]))

#_(enable-console-print!)

(node/enable-util-print!)

(def express (node/require "express"))

(defn say-hello! [req res]
  (.send res "Hello world!"))

(defn init []
  (println "Hello, World[NodeJs by Clojure - express.cljs]!")
  (let [app (express)]
    (.get app "/" say-hello!)
    (.listen app 3000 (fn []
                        (println "Server started on port 3000"))))
)

#_(set! *main-cli-fn* -main)