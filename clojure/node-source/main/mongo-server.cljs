(ns main.mongo-server
  (:require [cljs.nodejs :as node]))

#_(node/enable-util-print!)

(def mongo (node/require "mongodb"))

; 1-1. insert one record
(defn insertUser [db, callback]
  (let [collection (.collection db "user")]
    ; insert one record
    (.insert collection #js {:id 1 :name "Yu" :age 30}
      (fn [err, result]
        (println "Insert 1 User")
        (println err)
        (println result)
        (callback);(.close db)
      ))))

; 1-2. insert many records
(defn insertUsers [db, callback]
  (let [collection (.collection db "user")]
    ;(println (array (js-obj :d 4) (js-obj :e 5) (js-obj :f 6)))

    ; insert many records
    (.insertMany collection #js [#js {:id 10 :name "Kim" :age 30}
                                 #js {:id 11 :name "Park" :age 31}
                                 #js {:id 12 :name "Lee" :age 32}]
      (fn [err, result]
        (println "Insert 3 Users")
        (println err)
        (println result)
        (callback);(.close db)
      ))))

; 2. select records
(defn findUsers [db, callback]
  (let [collection (.collection db "user")]
    (.toArray (.find collection #js {})
      (fn [err, docs]
        (println "find~")
        (print err)
        ;(let [docs (js->clj docsRaw)]
          (print (count docs))
          (print (get docs 0))
          (print (get (get docs 0) :id)) ; TODO: It is not working (need to find reason)
          (callback)
        ;)
        ;(print (js->clj docs))
      ))))

;3. update record
(defn saveUsers [db, callback]
  (let [collection (.collection db "user")]
    (.update collection #js {:age 31} #js {:$set #js {:name "JohnPark"}}
      (fn [err, result]
        (println "update~")
        (print err)
        (print docs)
        (callback)
      ))))

;4. remove record
(defn removeUsers [db, callback]
  (let [collection (.collection db "user")]
    (.remove collection #js {:age 32}
      (fn [err, result]
        (println "delete~")
        (print err)
        (print docs)
        (callback)
      ))))


(defn init []
  (println "Hello [init - mongo-server.cljs]!")

  (let [client (.-MongoClient mongo) url "mongodb://localhost:27017/test"]
    (.connect client url
      (fn [err, db]
        (println "Connected correctly to server.(3)")

        ; (X) It is what we expected but it does not work synchronisely
        ;(insertUser db (fn [] (.close db)))
        ;(insertUsers db (fn [] (.close db)))
        ;(findUsers db (fn [] (.close db)))
        ;(saveUsers db (fn [] (.close db)))
        ;(removeUsers db (fn [] (.close db)))

        ; Version 1. callback hell - a lot of nested callback - too much complecated
        (insertUser db
          (fn [] (insertUsers db
                   (fn [] (findUsers db
                            (fn [] (saveUsers db
                                     (fn [] (removeUsers db
                                              (fn [] (.close db)))))))))))

        ; Version 2. using promise - recommendation


        ))
  )
)