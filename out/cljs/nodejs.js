// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3702__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3703__i = 0, G__3703__a = new Array(arguments.length -  0);
while (G__3703__i < G__3703__a.length) {G__3703__a[G__3703__i] = arguments[G__3703__i + 0]; ++G__3703__i;}
  args = new cljs.core.IndexedSeq(G__3703__a,0);
} 
return G__3702__delegate.call(this,args);};
G__3702.cljs$lang$maxFixedArity = 0;
G__3702.cljs$lang$applyTo = (function (arglist__3704){
var args = cljs.core.seq(arglist__3704);
return G__3702__delegate(args);
});
G__3702.cljs$core$IFn$_invoke$arity$variadic = G__3702__delegate;
return G__3702;
})()
;
});

//# sourceMappingURL=nodejs.js.map