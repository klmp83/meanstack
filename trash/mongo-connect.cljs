;; below code can not be used in node js since it is impossible to get library from jvm
(ns main.mongo-connect
  (:require [monger.core :as mg])
  (:import [com.mongodb MongoOptions ServerAddress]))

;; localhost, default port
(let [conn (mg/connect)])

;; given host, default port
(let [conn (mg/connect {:host "db.megacorp.internal"})])


;; given host, given port
(let [conn (mg/connect {:host "db.megacorp.internal" :port 7878})])

;; using MongoOptions allows fine-tuning connection parameters,
;; like automatic reconnection (highly recommended for production environment)
(let [^MongoOptions opts (mg/mongo-options {:threads-allowed-to-block-for-connection-multiplier 300})
      ^ServerAddress sa  (mg/server-address "127.0.0.1" 27017)
      conn               (mg/connect sa opts)]
  )

#_(ns my.service.server
  (:require [monger.core :as mg]))

(let [conn (mg/connect)
      db   (mg/get-db conn "test")]
      ;u    "username"
      ;p    (.toCharArray "password")]
      ;(mg/authenticate db u p)
  )