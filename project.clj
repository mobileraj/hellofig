(defproject helloworld "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-beta3"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [figwheel "0.3.3"]]

  :node-dependencies [[source-map-support "0.2.8"]
                      [express "4.2.x"]
                      [serve-static "1.9.1"]
                      [body-parser "1.12.0"]
                      [request "2.57.x"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-npm "0.4.0"]
            [lein-figwheel "0.3.3"]]

  
  :source-paths ["src"]

  :clean-targets ["out.dev"
                  "out.prod"
                  "server.js"]

  :cljsbuild {
    :builds {:dev {
              :source-paths ["src" "src.dev"]
              :compiler {
                :output-to "out.dev/helloworld.js"
                :output-dir "out.dev"
                :target :nodejs
                :optimizations :none
                :source-map true}
                }
             :prod {
              :figwheel {}
              :main "helloworld.core"      
              :source-paths ["src"]
              :compiler {
                :output-to "server.js"
                :output-dir "out.prod"
                :target :nodejs
                :optimizations :simple
                }
              }}})
