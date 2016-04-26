(defproject main "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.34"]
                 ;[com.novemberain/monger "3.0.2"]
                 ;[org.mongodb/mongodb-driver "3.2.2"]
                 ;[org.mongodb/mongo-java-driver "3.2.2"]
                ]
  ;:node-dependencies [[source-map-support "0.2.8"]
  ;                    [express "4.11.1"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-npm "0.6.1"][lein-cljsbuild "1.1.3"]]
  :npm {:dependencies [[source-map-support "0.4.0"]
                       [express "4.11.1"]
                       [mongodb "2.1.16"]]}
  ;:source-paths ["src" "target/classes"]
  ;:clean-targets ["out" "release"]
  ;:target-path "target"
  :cljsbuild {
               :builds {
                         :nodejs
                         {:source-paths ["clojure/node-source"]
                          :compiler {:main main.node-server
                                     :output-to "clojure/node-result/bootstrap.js"
                                     :output-dir "clojure/node-result"
                                     :target :nodejs
                                     }}

                         :web
                         {:source-paths ["clojure/web-source"]
                          :compiler {:output-to "clojure/web-result/bootstrap.js"
                                     :output-dir "clojure/web-result"
                                     ;:externs ["https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.26/system.js"]
                                     ;:foreign-libs [{:file "https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.26/system.js" :provides ["System"]}]
                                     }}
               }


  }
)
