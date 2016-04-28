(ns main.core
  (:require [clojure.browser.repl :as repl]
            ;[goog.dom :as dom]
            [main.other-module :as om]
  ))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(defn init []
  (def m {:transpiler "typescript"
              :typescriptOptions [:emitDecoratorMetadata true]
              :packages [:app [:defaultExtension "ts"] ]})
  ;System.config({   transpiler: 'typescript',
  ;                  typescriptOptions: { emitDecoratorMetadata: true },
  ;                  packages: {'app': {defaultExtension: 'ts'}}});
  ;System.import('app/main').then(null, console.error.bind(console));


  (. js/System config #js {:transpiler "typescript"
                           :typescriptOptions #js {:emitDecoratorMetadata true}
                           :packages #js {:app #js {:defaultExtension "ts"}}})

  (. (. js/System import "app/main") then nil (. js/console.error bind js/console) )

  (println "Hello, World[init3]!"))(init)



#_(. Object (function))

#_(
     (om/run-other)

     (println "Hello world!")

     (println "Test code~~") ;

     (println "Test code two~~") ;

     ;(dom/createDom "div" "some-class" "Hello, Fantastic World!")


     (defn javaMain []
       (println "Hello, World[javaMain]!")
     )

     (defn set-html! [el content]
       (set! (.-innerHTML el) content))

     (defn -main [& args]
       (println "Hello, World!")
       (javaMain)

       (let [content "Hello World from ClojureScript"
             element (aget (js/document.getElementsByTagName "main") 0)]
         (set-html! element content)))
)