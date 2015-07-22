(defproject helloworld "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-beta3"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-3269"]
                 [figwheel "0.3.3"]]

  
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-npm "0.4.0"]
            [lein-figwheel "0.3.3"]]

  :source-paths ["src"]

  :clean-targets ["out.dev"
                  "out.prod"
                  "server.js"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src" "src.dev"]
              :compiler {
                :output-to "out.dev/helloworld.js"
                :output-dir "out.dev"
                :target :nodejs
                :optimizations :none
                :source-map true}}
             {:id "prod"
              
              :source-paths ["src" "src.dev"]
              :compiler {
                :output-to "server.js"
                :output-dir "out.prod"
                :target :nodejs
                :optimizations :simple}}]})
