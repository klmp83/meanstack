(ns main.node-server
  (:require [main.express-server :as express-server]
            [main.mongo-server :as mongo-server]
            ;[main.mongo-insert-test :as mi]
            ))

(enable-console-print!)

(defn init []
  (println "Hello, World[NodeJs by Clojure]!")
)

(defn -main [& args]

  (println "Hello, World in main function!")

  (init)

  (express-server/init)

  (mongo-server/init)
  ;(mi)

)

(set! *main-cli-fn* -main)