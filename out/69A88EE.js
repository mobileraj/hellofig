goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__3697__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__3697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3698__i = 0, G__3698__a = new Array(arguments.length -  0);
while (G__3698__i < G__3698__a.length) {G__3698__a[G__3698__i] = arguments[G__3698__i + 0]; ++G__3698__i;}
  args = new cljs.core.IndexedSeq(G__3698__a,0);
} 
return G__3697__delegate.call(this,args);};
G__3697.cljs$lang$maxFixedArity = 0;
G__3697.cljs$lang$applyTo = (function (arglist__3699){
var args = cljs.core.seq(arglist__3699);
return G__3697__delegate(args);
});
G__3697.cljs$core$IFn$_invoke$arity$variadic = G__3697__delegate;
return G__3697;
})()
;
});
