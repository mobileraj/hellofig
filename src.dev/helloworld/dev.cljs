(ns helloworld.dev
  (:require [figwheel.client]
            [helloworld.core]))

(defn -main []
  (figwheel.client/start)
  (helloworld.core/-main))

(set! *main-cli-fn* -main)
