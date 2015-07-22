try {
    require("source-map-support").install();
} catch(err) {
}
require("./out.dev/goog/bootstrap/nodejs.js");
require("./out.dev/helloworld.js");
goog.require("helloworld.dev");
goog.require("cljs.nodejscli");
