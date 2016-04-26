;; below code can not be used in node js since it is impossible to get library from jvm
(ns main.mongo-insert-test
  (:require [monger.core :as mg]
            [monger.collection :as mc])
  (:import [org.bson.types ObjectId]
           [com.mongodb DB WriteConcern]))

;; localhost, default port
(let [conn (mg/connect)
      db   (mg/get-db conn "monger-test")]
  ;; with a generated document id, returns the complete
  ;; inserted document
  (mc/insert-and-return db "documents" {:name "John" :age 30})

  ;; with explicit document id (recommended)
  (mc/insert db "documents" { :_id (ObjectId.) :first_name "John" :last_name "Lennon" })

  ;; multiple documents at once
  (mc/insert-batch db "documents" [{ :first_name "John" :last_name "Lennon" }
                                   { :first_name "Paul" :last_name "McCartney" }])

  ;; without document id (when you don't need to use it after storing the document)
  (mc/insert db "documents" { :first_name "John" :last_name "Lennon" })

  ;; with a different write concern
  (mc/insert db "documents" { :_id (ObjectId.) :first_name "John" :last_name "Lennon" } WriteConcern/JOURNAL_SAFE))