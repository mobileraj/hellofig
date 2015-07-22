(ns helloworld.core
  (:require
   [cljs.nodejs :as nodejs]
  ;; [figwheel.client :as fw]
   [cljs.core.async :as async :refer [<! >! chan close! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
   )

(nodejs/enable-util-print!)

(defonce express (nodejs/require "express"))
(def say-hello2 (chan))
(defonce serve-static (nodejs/require "serve-static"))
(defonce http (nodejs/require "http"))
(def js-request (nodejs/require "request"))

(defn request [url-or-opts callback]
  (js-request (clj->js url-or-opts) callback))


(defn jsp-rows [str] (.-rows (.parse js/JSON str)))
(defn cl-rows [str]
  (js->clj (.-rows (.parse js/JSON str)) :keywordize-keys true))


;; app gets redefined on reload
(def app (express))
(defn say-hello! [req res]
  (request {:method "GET" :uri "https://mobileraj:p4ssw0rd@mobileraj.cloudant.com/sent_merchants/_design/SpatialView/_geo/merchants?radius=1800&lat=30.25685&lon=-97.76659&relation=contains&include_docs=true
"}
         (fn [error response body]
           (when (and (not error) (= 200 (.-statusCode response)))
           ;;(println
               (.send res (mapv (fn [col] (:id col)) (cl-rows body)))
               ))))


(defn say-hello1! [req res]
 (let [cld (chan)]
  (request {:method "GET" :uri "https://mobileraj:p4ssw0rd@mobileraj.cloudant.com/sent_merchants/_design/SpatialView/_geo/merchants?radius=1800&lat=30.25685&lon=-97.76659&relation=contains&include_docs=true
"}
        (fn [error response body]
          (when (and (not error) (= 200 (.-statusCode response)))
            ;;println
              (go (>! cld (mapv (fn [col] (:name (:doc col))) (cl-rows body))))
              )))
   (go
     (while true
       (.send res (clj->js (<! cld)))
       ))))



(defn hellow [req res]
  (let [say-hello2 (chan)]
  (go (>! say-hello2 [req res]))
  (go
       (while true
         (let [[_ res] (<! say-hello2)]
           (.send res "Hello sailor!!")))))
  )

;; routes get redefined on each reload


(. app (get "/hello" say-hello1!))

(. app (use (serve-static "resources/public" #js {:index "index.html"})))

(def -main
  (fn []
    ;; This is the secret sauce. you want to capture a reference to
    ;; the app function (don't use it directly) this allows it to be redefined on each reload
    ;; this allows you to change routes and have them hot loaded as you
    ;; code.
  (doto (.createServer http #(app %1 %2))
      (.listen 3000))))

(set! *main-cli-fn* -main)

;;(fw/start { })
