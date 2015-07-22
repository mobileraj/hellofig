// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(){
var G__3708 = arguments.length;
switch (G__3708) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t3709 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3709 = (function (f,blockable,meta3710){
this.f = f;
this.blockable = blockable;
this.meta3710 = meta3710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3711,meta3710__$1){
var self__ = this;
var _3711__$1 = this;
return (new cljs.core.async.t3709(self__.f,self__.blockable,meta3710__$1));
});

cljs.core.async.t3709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3711){
var self__ = this;
var _3711__$1 = this;
return self__.meta3710;
});

cljs.core.async.t3709.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t3709.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t3709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t3709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3710","meta3710",1066666673,null)], null);
});

cljs.core.async.t3709.cljs$lang$type = true;

cljs.core.async.t3709.cljs$lang$ctorStr = "cljs.core.async/t3709";

cljs.core.async.t3709.cljs$lang$ctorPrWriter = (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t3709");
});

cljs.core.async.__GT_t3709 = (function cljs$core$async$__GT_t3709(f__$1,blockable__$1,meta3710){
return (new cljs.core.async.t3709(f__$1,blockable__$1,meta3710));
});

}

return (new cljs.core.async.t3709(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__3714 = buff;
if(G__3714){
var bit__3664__auto__ = null;
if(cljs.core.truth_((function (){var or__3370__auto__ = bit__3664__auto__;
if(cljs.core.truth_(or__3370__auto__)){
return or__3370__auto__;
} else {
return G__3714.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__3714.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__3714);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__3714);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__3716 = arguments.length;
switch (G__3716) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 * exception-handler. A promise channel can take exactly one value that consumers
 * will receive. Once full, puts complete but val is dropped (no transfer).
 * Consumers will block until either a value is placed in the channel or the
 * channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(){
var G__3719 = arguments.length;
switch (G__3719) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__3722 = arguments.length;
switch (G__3722) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3724 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3724);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3724,ret){
return (function (){
return fn1.call(null,val_3724);
});})(val_3724,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__3726 = arguments.length;
switch (G__3726) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__3791__auto___3728 = n;
var x_3729 = (0);
while(true){
if((x_3729 < n__3791__auto___3728)){
(a[x_3729] = (0));

var G__3730 = (x_3729 + (1));
x_3729 = G__3730;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__3731 = (i + (1));
i = G__3731;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t3735 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3735 = (function (alt_flag,flag,meta3736){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta3736 = meta3736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3737,meta3736__$1){
var self__ = this;
var _3737__$1 = this;
return (new cljs.core.async.t3735(self__.alt_flag,self__.flag,meta3736__$1));
});})(flag))
;

cljs.core.async.t3735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3737){
var self__ = this;
var _3737__$1 = this;
return self__.meta3736;
});})(flag))
;

cljs.core.async.t3735.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t3735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t3735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t3735.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3736","meta3736",1476900784,null)], null);
});})(flag))
;

cljs.core.async.t3735.cljs$lang$type = true;

cljs.core.async.t3735.cljs$lang$ctorStr = "cljs.core.async/t3735";

cljs.core.async.t3735.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t3735");
});})(flag))
;

cljs.core.async.__GT_t3735 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t3735(alt_flag__$1,flag__$1,meta3736){
return (new cljs.core.async.t3735(alt_flag__$1,flag__$1,meta3736));
});})(flag))
;

}

return (new cljs.core.async.t3735(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t3741 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t3741 = (function (alt_handler,flag,cb,meta3742){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta3742 = meta3742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t3741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3743,meta3742__$1){
var self__ = this;
var _3743__$1 = this;
return (new cljs.core.async.t3741(self__.alt_handler,self__.flag,self__.cb,meta3742__$1));
});

cljs.core.async.t3741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3743){
var self__ = this;
var _3743__$1 = this;
return self__.meta3742;
});

cljs.core.async.t3741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t3741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t3741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t3741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t3741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3742","meta3742",-1841985832,null)], null);
});

cljs.core.async.t3741.cljs$lang$type = true;

cljs.core.async.t3741.cljs$lang$ctorStr = "cljs.core.async/t3741";

cljs.core.async.t3741.cljs$lang$ctorPrWriter = (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t3741");
});

cljs.core.async.__GT_t3741 = (function cljs$core$async$alt_handler_$___GT_t3741(alt_handler__$1,flag__$1,cb__$1,meta3742){
return (new cljs.core.async.t3741(alt_handler__$1,flag__$1,cb__$1,meta3742));
});

}

return (new cljs.core.async.t3741(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3744_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3744_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3745_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3745_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3370__auto__ = wport;
if(cljs.core.truth_(or__3370__auto__)){
return or__3370__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3746 = (i + (1));
i = G__3746;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3370__auto__ = ret;
if(cljs.core.truth_(or__3370__auto__)){
return or__3370__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__3362__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3362__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3362__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__3882__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__3882__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3749){
var map__3750 = p__3749;
var map__3750__$1 = ((cljs.core.seq_QMARK_.call(null,map__3750))?cljs.core.apply.call(null,cljs.core.hash_map,map__3750):map__3750);
var opts = map__3750__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3747){
var G__3748 = cljs.core.first.call(null,seq3747);
var seq3747__$1 = cljs.core.next.call(null,seq3747);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__3748,seq3747__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 * nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 * Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__3752 = arguments.length;
switch (G__3752) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__1328__auto___3801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___3801){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___3801){
return (function (state_3776){
var state_val_3777 = (state_3776[(1)]);
if((state_val_3777 === (7))){
var inst_3772 = (state_3776[(2)]);
var state_3776__$1 = state_3776;
var statearr_3778_3802 = state_3776__$1;
(statearr_3778_3802[(2)] = inst_3772);

(statearr_3778_3802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (1))){
var state_3776__$1 = state_3776;
var statearr_3779_3803 = state_3776__$1;
(statearr_3779_3803[(2)] = null);

(statearr_3779_3803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (4))){
var inst_3755 = (state_3776[(7)]);
var inst_3755__$1 = (state_3776[(2)]);
var inst_3756 = (inst_3755__$1 == null);
var state_3776__$1 = (function (){var statearr_3780 = state_3776;
(statearr_3780[(7)] = inst_3755__$1);

return statearr_3780;
})();
if(cljs.core.truth_(inst_3756)){
var statearr_3781_3804 = state_3776__$1;
(statearr_3781_3804[(1)] = (5));

} else {
var statearr_3782_3805 = state_3776__$1;
(statearr_3782_3805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (13))){
var state_3776__$1 = state_3776;
var statearr_3783_3806 = state_3776__$1;
(statearr_3783_3806[(2)] = null);

(statearr_3783_3806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (6))){
var inst_3755 = (state_3776[(7)]);
var state_3776__$1 = state_3776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3776__$1,(11),to,inst_3755);
} else {
if((state_val_3777 === (3))){
var inst_3774 = (state_3776[(2)]);
var state_3776__$1 = state_3776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3776__$1,inst_3774);
} else {
if((state_val_3777 === (12))){
var state_3776__$1 = state_3776;
var statearr_3784_3807 = state_3776__$1;
(statearr_3784_3807[(2)] = null);

(statearr_3784_3807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (2))){
var state_3776__$1 = state_3776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3776__$1,(4),from);
} else {
if((state_val_3777 === (11))){
var inst_3765 = (state_3776[(2)]);
var state_3776__$1 = state_3776;
if(cljs.core.truth_(inst_3765)){
var statearr_3785_3808 = state_3776__$1;
(statearr_3785_3808[(1)] = (12));

} else {
var statearr_3786_3809 = state_3776__$1;
(statearr_3786_3809[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (9))){
var state_3776__$1 = state_3776;
var statearr_3787_3810 = state_3776__$1;
(statearr_3787_3810[(2)] = null);

(statearr_3787_3810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (5))){
var state_3776__$1 = state_3776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3788_3811 = state_3776__$1;
(statearr_3788_3811[(1)] = (8));

} else {
var statearr_3789_3812 = state_3776__$1;
(statearr_3789_3812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (14))){
var inst_3770 = (state_3776[(2)]);
var state_3776__$1 = state_3776;
var statearr_3790_3813 = state_3776__$1;
(statearr_3790_3813[(2)] = inst_3770);

(statearr_3790_3813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (10))){
var inst_3762 = (state_3776[(2)]);
var state_3776__$1 = state_3776;
var statearr_3791_3814 = state_3776__$1;
(statearr_3791_3814[(2)] = inst_3762);

(statearr_3791_3814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3777 === (8))){
var inst_3759 = cljs.core.async.close_BANG_.call(null,to);
var state_3776__$1 = state_3776;
var statearr_3792_3815 = state_3776__$1;
(statearr_3792_3815[(2)] = inst_3759);

(statearr_3792_3815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___3801))
;
return ((function (switch__1266__auto__,c__1328__auto___3801){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_3796 = [null,null,null,null,null,null,null,null];
(statearr_3796[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_3796[(1)] = (1));

return statearr_3796;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_3776){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_3776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e3797){if((e3797 instanceof Object)){
var ex__1270__auto__ = e3797;
var statearr_3798_3816 = state_3776;
(statearr_3798_3816[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3817 = state_3776;
state_3776 = G__3817;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_3776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_3776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___3801))
})();
var state__1330__auto__ = (function (){var statearr_3799 = f__1329__auto__.call(null);
(statearr_3799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___3801);

return statearr_3799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___3801))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__4001){
var vec__4002 = p__4001;
var v = cljs.core.nth.call(null,vec__4002,(0),null);
var p = cljs.core.nth.call(null,vec__4002,(1),null);
var job = vec__4002;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__1328__auto___4184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___4184,res,vec__4002,v,p,job,jobs,results){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___4184,res,vec__4002,v,p,job,jobs,results){
return (function (state_4007){
var state_val_4008 = (state_4007[(1)]);
if((state_val_4008 === (1))){
var state_4007__$1 = state_4007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4007__$1,(2),res,v);
} else {
if((state_val_4008 === (2))){
var inst_4004 = (state_4007[(2)]);
var inst_4005 = cljs.core.async.close_BANG_.call(null,res);
var state_4007__$1 = (function (){var statearr_4009 = state_4007;
(statearr_4009[(7)] = inst_4004);

return statearr_4009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4007__$1,inst_4005);
} else {
return null;
}
}
});})(c__1328__auto___4184,res,vec__4002,v,p,job,jobs,results))
;
return ((function (switch__1266__auto__,c__1328__auto___4184,res,vec__4002,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4013 = [null,null,null,null,null,null,null,null];
(statearr_4013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4013[(1)] = (1));

return statearr_4013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4007){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4014){if((e4014 instanceof Object)){
var ex__1270__auto__ = e4014;
var statearr_4015_4185 = state_4007;
(statearr_4015_4185[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4186 = state_4007;
state_4007 = G__4186;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___4184,res,vec__4002,v,p,job,jobs,results))
})();
var state__1330__auto__ = (function (){var statearr_4016 = f__1329__auto__.call(null);
(statearr_4016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___4184);

return statearr_4016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___4184,res,vec__4002,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__4017){
var vec__4018 = p__4017;
var v = cljs.core.nth.call(null,vec__4018,(0),null);
var p = cljs.core.nth.call(null,vec__4018,(1),null);
var job = vec__4018;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__3791__auto___4187 = n;
var __4188 = (0);
while(true){
if((__4188 < n__3791__auto___4187)){
var G__4019_4189 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__4019_4189) {
case "compute":
var c__1328__auto___4191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4188,c__1328__auto___4191,G__4019_4189,n__3791__auto___4187,jobs,results,process,async){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (__4188,c__1328__auto___4191,G__4019_4189,n__3791__auto___4187,jobs,results,process,async){
return (function (state_4032){
var state_val_4033 = (state_4032[(1)]);
if((state_val_4033 === (1))){
var state_4032__$1 = state_4032;
var statearr_4034_4192 = state_4032__$1;
(statearr_4034_4192[(2)] = null);

(statearr_4034_4192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4033 === (2))){
var state_4032__$1 = state_4032;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4032__$1,(4),jobs);
} else {
if((state_val_4033 === (3))){
var inst_4030 = (state_4032[(2)]);
var state_4032__$1 = state_4032;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4032__$1,inst_4030);
} else {
if((state_val_4033 === (4))){
var inst_4022 = (state_4032[(2)]);
var inst_4023 = process.call(null,inst_4022);
var state_4032__$1 = state_4032;
if(cljs.core.truth_(inst_4023)){
var statearr_4035_4193 = state_4032__$1;
(statearr_4035_4193[(1)] = (5));

} else {
var statearr_4036_4194 = state_4032__$1;
(statearr_4036_4194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4033 === (5))){
var state_4032__$1 = state_4032;
var statearr_4037_4195 = state_4032__$1;
(statearr_4037_4195[(2)] = null);

(statearr_4037_4195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4033 === (6))){
var state_4032__$1 = state_4032;
var statearr_4038_4196 = state_4032__$1;
(statearr_4038_4196[(2)] = null);

(statearr_4038_4196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4033 === (7))){
var inst_4028 = (state_4032[(2)]);
var state_4032__$1 = state_4032;
var statearr_4039_4197 = state_4032__$1;
(statearr_4039_4197[(2)] = inst_4028);

(statearr_4039_4197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4188,c__1328__auto___4191,G__4019_4189,n__3791__auto___4187,jobs,results,process,async))
;
return ((function (__4188,switch__1266__auto__,c__1328__auto___4191,G__4019_4189,n__3791__auto___4187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4043 = [null,null,null,null,null,null,null];
(statearr_4043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4043[(1)] = (1));

return statearr_4043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4032){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4044){if((e4044 instanceof Object)){
var ex__1270__auto__ = e4044;
var statearr_4045_4198 = state_4032;
(statearr_4045_4198[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4199 = state_4032;
state_4032 = G__4199;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(__4188,switch__1266__auto__,c__1328__auto___4191,G__4019_4189,n__3791__auto___4187,jobs,results,process,async))
})();
var state__1330__auto__ = (function (){var statearr_4046 = f__1329__auto__.call(null);
(statearr_4046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___4191);

return statearr_4046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(__4188,c__1328__auto___4191,G__4019_4189,n__3791__auto___4187,jobs,results,process,async))
);


break;
case "async":
var c__1328__auto___4200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__4188,c__1328__auto___4200,G__4019_4189,n__3791__auto___4187,jobs,results,process,async){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (__4188,c__1328__auto___4200,G__4019_4189,n__3791__auto___4187,jobs,results,process,async){
return (function (state_4059){
var state_val_4060 = (state_4059[(1)]);
if((state_val_4060 === (1))){
var state_4059__$1 = state_4059;
var statearr_4061_4201 = state_4059__$1;
(statearr_4061_4201[(2)] = null);

(statearr_4061_4201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4060 === (2))){
var state_4059__$1 = state_4059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4059__$1,(4),jobs);
} else {
if((state_val_4060 === (3))){
var inst_4057 = (state_4059[(2)]);
var state_4059__$1 = state_4059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4059__$1,inst_4057);
} else {
if((state_val_4060 === (4))){
var inst_4049 = (state_4059[(2)]);
var inst_4050 = async.call(null,inst_4049);
var state_4059__$1 = state_4059;
if(cljs.core.truth_(inst_4050)){
var statearr_4062_4202 = state_4059__$1;
(statearr_4062_4202[(1)] = (5));

} else {
var statearr_4063_4203 = state_4059__$1;
(statearr_4063_4203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4060 === (5))){
var state_4059__$1 = state_4059;
var statearr_4064_4204 = state_4059__$1;
(statearr_4064_4204[(2)] = null);

(statearr_4064_4204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4060 === (6))){
var state_4059__$1 = state_4059;
var statearr_4065_4205 = state_4059__$1;
(statearr_4065_4205[(2)] = null);

(statearr_4065_4205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4060 === (7))){
var inst_4055 = (state_4059[(2)]);
var state_4059__$1 = state_4059;
var statearr_4066_4206 = state_4059__$1;
(statearr_4066_4206[(2)] = inst_4055);

(statearr_4066_4206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__4188,c__1328__auto___4200,G__4019_4189,n__3791__auto___4187,jobs,results,process,async))
;
return ((function (__4188,switch__1266__auto__,c__1328__auto___4200,G__4019_4189,n__3791__auto___4187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4070 = [null,null,null,null,null,null,null];
(statearr_4070[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4070[(1)] = (1));

return statearr_4070;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4059){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4071){if((e4071 instanceof Object)){
var ex__1270__auto__ = e4071;
var statearr_4072_4207 = state_4059;
(statearr_4072_4207[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4208 = state_4059;
state_4059 = G__4208;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(__4188,switch__1266__auto__,c__1328__auto___4200,G__4019_4189,n__3791__auto___4187,jobs,results,process,async))
})();
var state__1330__auto__ = (function (){var statearr_4073 = f__1329__auto__.call(null);
(statearr_4073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___4200);

return statearr_4073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(__4188,c__1328__auto___4200,G__4019_4189,n__3791__auto___4187,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__4209 = (__4188 + (1));
__4188 = G__4209;
continue;
} else {
}
break;
}

var c__1328__auto___4210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___4210,jobs,results,process,async){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___4210,jobs,results,process,async){
return (function (state_4095){
var state_val_4096 = (state_4095[(1)]);
if((state_val_4096 === (1))){
var state_4095__$1 = state_4095;
var statearr_4097_4211 = state_4095__$1;
(statearr_4097_4211[(2)] = null);

(statearr_4097_4211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4096 === (2))){
var state_4095__$1 = state_4095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4095__$1,(4),from);
} else {
if((state_val_4096 === (3))){
var inst_4093 = (state_4095[(2)]);
var state_4095__$1 = state_4095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4095__$1,inst_4093);
} else {
if((state_val_4096 === (4))){
var inst_4076 = (state_4095[(7)]);
var inst_4076__$1 = (state_4095[(2)]);
var inst_4077 = (inst_4076__$1 == null);
var state_4095__$1 = (function (){var statearr_4098 = state_4095;
(statearr_4098[(7)] = inst_4076__$1);

return statearr_4098;
})();
if(cljs.core.truth_(inst_4077)){
var statearr_4099_4212 = state_4095__$1;
(statearr_4099_4212[(1)] = (5));

} else {
var statearr_4100_4213 = state_4095__$1;
(statearr_4100_4213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4096 === (5))){
var inst_4079 = cljs.core.async.close_BANG_.call(null,jobs);
var state_4095__$1 = state_4095;
var statearr_4101_4214 = state_4095__$1;
(statearr_4101_4214[(2)] = inst_4079);

(statearr_4101_4214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4096 === (6))){
var inst_4081 = (state_4095[(8)]);
var inst_4076 = (state_4095[(7)]);
var inst_4081__$1 = cljs.core.async.chan.call(null,(1));
var inst_4082 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_4083 = [inst_4076,inst_4081__$1];
var inst_4084 = (new cljs.core.PersistentVector(null,2,(5),inst_4082,inst_4083,null));
var state_4095__$1 = (function (){var statearr_4102 = state_4095;
(statearr_4102[(8)] = inst_4081__$1);

return statearr_4102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4095__$1,(8),jobs,inst_4084);
} else {
if((state_val_4096 === (7))){
var inst_4091 = (state_4095[(2)]);
var state_4095__$1 = state_4095;
var statearr_4103_4215 = state_4095__$1;
(statearr_4103_4215[(2)] = inst_4091);

(statearr_4103_4215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4096 === (8))){
var inst_4081 = (state_4095[(8)]);
var inst_4086 = (state_4095[(2)]);
var state_4095__$1 = (function (){var statearr_4104 = state_4095;
(statearr_4104[(9)] = inst_4086);

return statearr_4104;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4095__$1,(9),results,inst_4081);
} else {
if((state_val_4096 === (9))){
var inst_4088 = (state_4095[(2)]);
var state_4095__$1 = (function (){var statearr_4105 = state_4095;
(statearr_4105[(10)] = inst_4088);

return statearr_4105;
})();
var statearr_4106_4216 = state_4095__$1;
(statearr_4106_4216[(2)] = null);

(statearr_4106_4216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___4210,jobs,results,process,async))
;
return ((function (switch__1266__auto__,c__1328__auto___4210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4110[(1)] = (1));

return statearr_4110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4095){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4111){if((e4111 instanceof Object)){
var ex__1270__auto__ = e4111;
var statearr_4112_4217 = state_4095;
(statearr_4112_4217[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4218 = state_4095;
state_4095 = G__4218;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___4210,jobs,results,process,async))
})();
var state__1330__auto__ = (function (){var statearr_4113 = f__1329__auto__.call(null);
(statearr_4113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___4210);

return statearr_4113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___4210,jobs,results,process,async))
);


var c__1328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto__,jobs,results,process,async){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto__,jobs,results,process,async){
return (function (state_4151){
var state_val_4152 = (state_4151[(1)]);
if((state_val_4152 === (7))){
var inst_4147 = (state_4151[(2)]);
var state_4151__$1 = state_4151;
var statearr_4153_4219 = state_4151__$1;
(statearr_4153_4219[(2)] = inst_4147);

(statearr_4153_4219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (20))){
var state_4151__$1 = state_4151;
var statearr_4154_4220 = state_4151__$1;
(statearr_4154_4220[(2)] = null);

(statearr_4154_4220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (1))){
var state_4151__$1 = state_4151;
var statearr_4155_4221 = state_4151__$1;
(statearr_4155_4221[(2)] = null);

(statearr_4155_4221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (4))){
var inst_4116 = (state_4151[(7)]);
var inst_4116__$1 = (state_4151[(2)]);
var inst_4117 = (inst_4116__$1 == null);
var state_4151__$1 = (function (){var statearr_4156 = state_4151;
(statearr_4156[(7)] = inst_4116__$1);

return statearr_4156;
})();
if(cljs.core.truth_(inst_4117)){
var statearr_4157_4222 = state_4151__$1;
(statearr_4157_4222[(1)] = (5));

} else {
var statearr_4158_4223 = state_4151__$1;
(statearr_4158_4223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (15))){
var inst_4129 = (state_4151[(8)]);
var state_4151__$1 = state_4151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4151__$1,(18),to,inst_4129);
} else {
if((state_val_4152 === (21))){
var inst_4142 = (state_4151[(2)]);
var state_4151__$1 = state_4151;
var statearr_4159_4224 = state_4151__$1;
(statearr_4159_4224[(2)] = inst_4142);

(statearr_4159_4224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (13))){
var inst_4144 = (state_4151[(2)]);
var state_4151__$1 = (function (){var statearr_4160 = state_4151;
(statearr_4160[(9)] = inst_4144);

return statearr_4160;
})();
var statearr_4161_4225 = state_4151__$1;
(statearr_4161_4225[(2)] = null);

(statearr_4161_4225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (6))){
var inst_4116 = (state_4151[(7)]);
var state_4151__$1 = state_4151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4151__$1,(11),inst_4116);
} else {
if((state_val_4152 === (17))){
var inst_4137 = (state_4151[(2)]);
var state_4151__$1 = state_4151;
if(cljs.core.truth_(inst_4137)){
var statearr_4162_4226 = state_4151__$1;
(statearr_4162_4226[(1)] = (19));

} else {
var statearr_4163_4227 = state_4151__$1;
(statearr_4163_4227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (3))){
var inst_4149 = (state_4151[(2)]);
var state_4151__$1 = state_4151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4151__$1,inst_4149);
} else {
if((state_val_4152 === (12))){
var inst_4126 = (state_4151[(10)]);
var state_4151__$1 = state_4151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4151__$1,(14),inst_4126);
} else {
if((state_val_4152 === (2))){
var state_4151__$1 = state_4151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4151__$1,(4),results);
} else {
if((state_val_4152 === (19))){
var state_4151__$1 = state_4151;
var statearr_4164_4228 = state_4151__$1;
(statearr_4164_4228[(2)] = null);

(statearr_4164_4228[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (11))){
var inst_4126 = (state_4151[(2)]);
var state_4151__$1 = (function (){var statearr_4165 = state_4151;
(statearr_4165[(10)] = inst_4126);

return statearr_4165;
})();
var statearr_4166_4229 = state_4151__$1;
(statearr_4166_4229[(2)] = null);

(statearr_4166_4229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (9))){
var state_4151__$1 = state_4151;
var statearr_4167_4230 = state_4151__$1;
(statearr_4167_4230[(2)] = null);

(statearr_4167_4230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (5))){
var state_4151__$1 = state_4151;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4168_4231 = state_4151__$1;
(statearr_4168_4231[(1)] = (8));

} else {
var statearr_4169_4232 = state_4151__$1;
(statearr_4169_4232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (14))){
var inst_4129 = (state_4151[(8)]);
var inst_4131 = (state_4151[(11)]);
var inst_4129__$1 = (state_4151[(2)]);
var inst_4130 = (inst_4129__$1 == null);
var inst_4131__$1 = cljs.core.not.call(null,inst_4130);
var state_4151__$1 = (function (){var statearr_4170 = state_4151;
(statearr_4170[(8)] = inst_4129__$1);

(statearr_4170[(11)] = inst_4131__$1);

return statearr_4170;
})();
if(inst_4131__$1){
var statearr_4171_4233 = state_4151__$1;
(statearr_4171_4233[(1)] = (15));

} else {
var statearr_4172_4234 = state_4151__$1;
(statearr_4172_4234[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (16))){
var inst_4131 = (state_4151[(11)]);
var state_4151__$1 = state_4151;
var statearr_4173_4235 = state_4151__$1;
(statearr_4173_4235[(2)] = inst_4131);

(statearr_4173_4235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (10))){
var inst_4123 = (state_4151[(2)]);
var state_4151__$1 = state_4151;
var statearr_4174_4236 = state_4151__$1;
(statearr_4174_4236[(2)] = inst_4123);

(statearr_4174_4236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (18))){
var inst_4134 = (state_4151[(2)]);
var state_4151__$1 = state_4151;
var statearr_4175_4237 = state_4151__$1;
(statearr_4175_4237[(2)] = inst_4134);

(statearr_4175_4237[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4152 === (8))){
var inst_4120 = cljs.core.async.close_BANG_.call(null,to);
var state_4151__$1 = state_4151;
var statearr_4176_4238 = state_4151__$1;
(statearr_4176_4238[(2)] = inst_4120);

(statearr_4176_4238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto__,jobs,results,process,async))
;
return ((function (switch__1266__auto__,c__1328__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_4180 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4180[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__);

(statearr_4180[(1)] = (1));

return statearr_4180;
});
var cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1 = (function (state_4151){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4181){if((e4181 instanceof Object)){
var ex__1270__auto__ = e4181;
var statearr_4182_4239 = state_4151;
(statearr_4182_4239[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4240 = state_4151;
state_4151 = G__4240;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__ = function(state_4151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1.call(this,state_4151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto__,jobs,results,process,async))
})();
var state__1330__auto__ = (function (){var statearr_4183 = f__1329__auto__.call(null);
(statearr_4183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto__);

return statearr_4183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto__,jobs,results,process,async))
);

return c__1328__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__4242 = arguments.length;
switch (G__4242) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__4245 = arguments.length;
switch (G__4245) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__4248 = arguments.length;
switch (G__4248) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__1328__auto___4300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___4300,tc,fc){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___4300,tc,fc){
return (function (state_4274){
var state_val_4275 = (state_4274[(1)]);
if((state_val_4275 === (7))){
var inst_4270 = (state_4274[(2)]);
var state_4274__$1 = state_4274;
var statearr_4276_4301 = state_4274__$1;
(statearr_4276_4301[(2)] = inst_4270);

(statearr_4276_4301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (1))){
var state_4274__$1 = state_4274;
var statearr_4277_4302 = state_4274__$1;
(statearr_4277_4302[(2)] = null);

(statearr_4277_4302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (4))){
var inst_4251 = (state_4274[(7)]);
var inst_4251__$1 = (state_4274[(2)]);
var inst_4252 = (inst_4251__$1 == null);
var state_4274__$1 = (function (){var statearr_4278 = state_4274;
(statearr_4278[(7)] = inst_4251__$1);

return statearr_4278;
})();
if(cljs.core.truth_(inst_4252)){
var statearr_4279_4303 = state_4274__$1;
(statearr_4279_4303[(1)] = (5));

} else {
var statearr_4280_4304 = state_4274__$1;
(statearr_4280_4304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (13))){
var state_4274__$1 = state_4274;
var statearr_4281_4305 = state_4274__$1;
(statearr_4281_4305[(2)] = null);

(statearr_4281_4305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (6))){
var inst_4251 = (state_4274[(7)]);
var inst_4257 = p.call(null,inst_4251);
var state_4274__$1 = state_4274;
if(cljs.core.truth_(inst_4257)){
var statearr_4282_4306 = state_4274__$1;
(statearr_4282_4306[(1)] = (9));

} else {
var statearr_4283_4307 = state_4274__$1;
(statearr_4283_4307[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (3))){
var inst_4272 = (state_4274[(2)]);
var state_4274__$1 = state_4274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4274__$1,inst_4272);
} else {
if((state_val_4275 === (12))){
var state_4274__$1 = state_4274;
var statearr_4284_4308 = state_4274__$1;
(statearr_4284_4308[(2)] = null);

(statearr_4284_4308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (2))){
var state_4274__$1 = state_4274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4274__$1,(4),ch);
} else {
if((state_val_4275 === (11))){
var inst_4251 = (state_4274[(7)]);
var inst_4261 = (state_4274[(2)]);
var state_4274__$1 = state_4274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4274__$1,(8),inst_4261,inst_4251);
} else {
if((state_val_4275 === (9))){
var state_4274__$1 = state_4274;
var statearr_4285_4309 = state_4274__$1;
(statearr_4285_4309[(2)] = tc);

(statearr_4285_4309[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (5))){
var inst_4254 = cljs.core.async.close_BANG_.call(null,tc);
var inst_4255 = cljs.core.async.close_BANG_.call(null,fc);
var state_4274__$1 = (function (){var statearr_4286 = state_4274;
(statearr_4286[(8)] = inst_4254);

return statearr_4286;
})();
var statearr_4287_4310 = state_4274__$1;
(statearr_4287_4310[(2)] = inst_4255);

(statearr_4287_4310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (14))){
var inst_4268 = (state_4274[(2)]);
var state_4274__$1 = state_4274;
var statearr_4288_4311 = state_4274__$1;
(statearr_4288_4311[(2)] = inst_4268);

(statearr_4288_4311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (10))){
var state_4274__$1 = state_4274;
var statearr_4289_4312 = state_4274__$1;
(statearr_4289_4312[(2)] = fc);

(statearr_4289_4312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4275 === (8))){
var inst_4263 = (state_4274[(2)]);
var state_4274__$1 = state_4274;
if(cljs.core.truth_(inst_4263)){
var statearr_4290_4313 = state_4274__$1;
(statearr_4290_4313[(1)] = (12));

} else {
var statearr_4291_4314 = state_4274__$1;
(statearr_4291_4314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___4300,tc,fc))
;
return ((function (switch__1266__auto__,c__1328__auto___4300,tc,fc){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_4295 = [null,null,null,null,null,null,null,null,null];
(statearr_4295[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_4295[(1)] = (1));

return statearr_4295;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_4274){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4296){if((e4296 instanceof Object)){
var ex__1270__auto__ = e4296;
var statearr_4297_4315 = state_4274;
(statearr_4297_4315[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4316 = state_4274;
state_4274 = G__4316;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_4274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_4274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___4300,tc,fc))
})();
var state__1330__auto__ = (function (){var statearr_4298 = f__1329__auto__.call(null);
(statearr_4298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___4300);

return statearr_4298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___4300,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__1328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto__){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto__){
return (function (state_4380){
var state_val_4381 = (state_4380[(1)]);
if((state_val_4381 === (7))){
var inst_4376 = (state_4380[(2)]);
var state_4380__$1 = state_4380;
var statearr_4382_4403 = state_4380__$1;
(statearr_4382_4403[(2)] = inst_4376);

(statearr_4382_4403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4381 === (1))){
var inst_4360 = init;
var state_4380__$1 = (function (){var statearr_4383 = state_4380;
(statearr_4383[(7)] = inst_4360);

return statearr_4383;
})();
var statearr_4384_4404 = state_4380__$1;
(statearr_4384_4404[(2)] = null);

(statearr_4384_4404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4381 === (4))){
var inst_4363 = (state_4380[(8)]);
var inst_4363__$1 = (state_4380[(2)]);
var inst_4364 = (inst_4363__$1 == null);
var state_4380__$1 = (function (){var statearr_4385 = state_4380;
(statearr_4385[(8)] = inst_4363__$1);

return statearr_4385;
})();
if(cljs.core.truth_(inst_4364)){
var statearr_4386_4405 = state_4380__$1;
(statearr_4386_4405[(1)] = (5));

} else {
var statearr_4387_4406 = state_4380__$1;
(statearr_4387_4406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4381 === (6))){
var inst_4360 = (state_4380[(7)]);
var inst_4367 = (state_4380[(9)]);
var inst_4363 = (state_4380[(8)]);
var inst_4367__$1 = f.call(null,inst_4360,inst_4363);
var inst_4368 = cljs.core.reduced_QMARK_.call(null,inst_4367__$1);
var state_4380__$1 = (function (){var statearr_4388 = state_4380;
(statearr_4388[(9)] = inst_4367__$1);

return statearr_4388;
})();
if(inst_4368){
var statearr_4389_4407 = state_4380__$1;
(statearr_4389_4407[(1)] = (8));

} else {
var statearr_4390_4408 = state_4380__$1;
(statearr_4390_4408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4381 === (3))){
var inst_4378 = (state_4380[(2)]);
var state_4380__$1 = state_4380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4380__$1,inst_4378);
} else {
if((state_val_4381 === (2))){
var state_4380__$1 = state_4380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4380__$1,(4),ch);
} else {
if((state_val_4381 === (9))){
var inst_4367 = (state_4380[(9)]);
var inst_4360 = inst_4367;
var state_4380__$1 = (function (){var statearr_4391 = state_4380;
(statearr_4391[(7)] = inst_4360);

return statearr_4391;
})();
var statearr_4392_4409 = state_4380__$1;
(statearr_4392_4409[(2)] = null);

(statearr_4392_4409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4381 === (5))){
var inst_4360 = (state_4380[(7)]);
var state_4380__$1 = state_4380;
var statearr_4393_4410 = state_4380__$1;
(statearr_4393_4410[(2)] = inst_4360);

(statearr_4393_4410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4381 === (10))){
var inst_4374 = (state_4380[(2)]);
var state_4380__$1 = state_4380;
var statearr_4394_4411 = state_4380__$1;
(statearr_4394_4411[(2)] = inst_4374);

(statearr_4394_4411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4381 === (8))){
var inst_4367 = (state_4380[(9)]);
var inst_4370 = cljs.core.deref.call(null,inst_4367);
var state_4380__$1 = state_4380;
var statearr_4395_4412 = state_4380__$1;
(statearr_4395_4412[(2)] = inst_4370);

(statearr_4395_4412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto__))
;
return ((function (switch__1266__auto__,c__1328__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__1267__auto__ = null;
var cljs$core$async$reduce_$_state_machine__1267__auto____0 = (function (){
var statearr_4399 = [null,null,null,null,null,null,null,null,null,null];
(statearr_4399[(0)] = cljs$core$async$reduce_$_state_machine__1267__auto__);

(statearr_4399[(1)] = (1));

return statearr_4399;
});
var cljs$core$async$reduce_$_state_machine__1267__auto____1 = (function (state_4380){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4400){if((e4400 instanceof Object)){
var ex__1270__auto__ = e4400;
var statearr_4401_4413 = state_4380;
(statearr_4401_4413[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4414 = state_4380;
state_4380 = G__4414;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__1267__auto__ = function(state_4380){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__1267__auto____1.call(this,state_4380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__1267__auto____0;
cljs$core$async$reduce_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__1267__auto____1;
return cljs$core$async$reduce_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto__))
})();
var state__1330__auto__ = (function (){var statearr_4402 = f__1329__auto__.call(null);
(statearr_4402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto__);

return statearr_4402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto__))
);

return c__1328__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__4416 = arguments.length;
switch (G__4416) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__1328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto__){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto__){
return (function (state_4441){
var state_val_4442 = (state_4441[(1)]);
if((state_val_4442 === (7))){
var inst_4423 = (state_4441[(2)]);
var state_4441__$1 = state_4441;
var statearr_4443_4467 = state_4441__$1;
(statearr_4443_4467[(2)] = inst_4423);

(statearr_4443_4467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (1))){
var inst_4417 = cljs.core.seq.call(null,coll);
var inst_4418 = inst_4417;
var state_4441__$1 = (function (){var statearr_4444 = state_4441;
(statearr_4444[(7)] = inst_4418);

return statearr_4444;
})();
var statearr_4445_4468 = state_4441__$1;
(statearr_4445_4468[(2)] = null);

(statearr_4445_4468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (4))){
var inst_4418 = (state_4441[(7)]);
var inst_4421 = cljs.core.first.call(null,inst_4418);
var state_4441__$1 = state_4441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4441__$1,(7),ch,inst_4421);
} else {
if((state_val_4442 === (13))){
var inst_4435 = (state_4441[(2)]);
var state_4441__$1 = state_4441;
var statearr_4446_4469 = state_4441__$1;
(statearr_4446_4469[(2)] = inst_4435);

(statearr_4446_4469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (6))){
var inst_4426 = (state_4441[(2)]);
var state_4441__$1 = state_4441;
if(cljs.core.truth_(inst_4426)){
var statearr_4447_4470 = state_4441__$1;
(statearr_4447_4470[(1)] = (8));

} else {
var statearr_4448_4471 = state_4441__$1;
(statearr_4448_4471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (3))){
var inst_4439 = (state_4441[(2)]);
var state_4441__$1 = state_4441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4441__$1,inst_4439);
} else {
if((state_val_4442 === (12))){
var state_4441__$1 = state_4441;
var statearr_4449_4472 = state_4441__$1;
(statearr_4449_4472[(2)] = null);

(statearr_4449_4472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (2))){
var inst_4418 = (state_4441[(7)]);
var state_4441__$1 = state_4441;
if(cljs.core.truth_(inst_4418)){
var statearr_4450_4473 = state_4441__$1;
(statearr_4450_4473[(1)] = (4));

} else {
var statearr_4451_4474 = state_4441__$1;
(statearr_4451_4474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (11))){
var inst_4432 = cljs.core.async.close_BANG_.call(null,ch);
var state_4441__$1 = state_4441;
var statearr_4452_4475 = state_4441__$1;
(statearr_4452_4475[(2)] = inst_4432);

(statearr_4452_4475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (9))){
var state_4441__$1 = state_4441;
if(cljs.core.truth_(close_QMARK_)){
var statearr_4453_4476 = state_4441__$1;
(statearr_4453_4476[(1)] = (11));

} else {
var statearr_4454_4477 = state_4441__$1;
(statearr_4454_4477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (5))){
var inst_4418 = (state_4441[(7)]);
var state_4441__$1 = state_4441;
var statearr_4455_4478 = state_4441__$1;
(statearr_4455_4478[(2)] = inst_4418);

(statearr_4455_4478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (10))){
var inst_4437 = (state_4441[(2)]);
var state_4441__$1 = state_4441;
var statearr_4456_4479 = state_4441__$1;
(statearr_4456_4479[(2)] = inst_4437);

(statearr_4456_4479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4442 === (8))){
var inst_4418 = (state_4441[(7)]);
var inst_4428 = cljs.core.next.call(null,inst_4418);
var inst_4418__$1 = inst_4428;
var state_4441__$1 = (function (){var statearr_4457 = state_4441;
(statearr_4457[(7)] = inst_4418__$1);

return statearr_4457;
})();
var statearr_4458_4480 = state_4441__$1;
(statearr_4458_4480[(2)] = null);

(statearr_4458_4480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto__))
;
return ((function (switch__1266__auto__,c__1328__auto__){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_4462 = [null,null,null,null,null,null,null,null];
(statearr_4462[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_4462[(1)] = (1));

return statearr_4462;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_4441){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4463){if((e4463 instanceof Object)){
var ex__1270__auto__ = e4463;
var statearr_4464_4481 = state_4441;
(statearr_4464_4481[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4482 = state_4441;
state_4441 = G__4482;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_4441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_4441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto__))
})();
var state__1330__auto__ = (function (){var statearr_4465 = f__1329__auto__.call(null);
(statearr_4465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto__);

return statearr_4465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto__))
);

return c__1328__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj4484 = {};
return obj4484;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__3362__auto__ = _;
if(and__3362__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3362__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3634__auto__ = (((_ == null))?null:_);
return (function (){var or__3370__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj4486 = {};
return obj4486;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3362__auto__ = m;
if(and__3362__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3362__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3634__auto__ = (((m == null))?null:m);
return (function (){var or__3370__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__3362__auto__ = m;
if(and__3362__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3362__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3634__auto__ = (((m == null))?null:m);
return (function (){var or__3370__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__3362__auto__ = m;
if(and__3362__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3362__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3634__auto__ = (((m == null))?null:m);
return (function (){var or__3370__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t4708 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t4708 = (function (mult,ch,cs,meta4709){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta4709 = meta4709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t4708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_4710,meta4709__$1){
var self__ = this;
var _4710__$1 = this;
return (new cljs.core.async.t4708(self__.mult,self__.ch,self__.cs,meta4709__$1));
});})(cs))
;

cljs.core.async.t4708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_4710){
var self__ = this;
var _4710__$1 = this;
return self__.meta4709;
});})(cs))
;

cljs.core.async.t4708.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t4708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t4708.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t4708.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t4708.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t4708.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t4708.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta4709","meta4709",-410970500,null)], null);
});})(cs))
;

cljs.core.async.t4708.cljs$lang$type = true;

cljs.core.async.t4708.cljs$lang$ctorStr = "cljs.core.async/t4708";

cljs.core.async.t4708.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t4708");
});})(cs))
;

cljs.core.async.__GT_t4708 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t4708(mult__$1,ch__$1,cs__$1,meta4709){
return (new cljs.core.async.t4708(mult__$1,ch__$1,cs__$1,meta4709));
});})(cs))
;

}

return (new cljs.core.async.t4708(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__1328__auto___4929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___4929,cs,m,dchan,dctr,done){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___4929,cs,m,dchan,dctr,done){
return (function (state_4841){
var state_val_4842 = (state_4841[(1)]);
if((state_val_4842 === (7))){
var inst_4837 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4843_4930 = state_4841__$1;
(statearr_4843_4930[(2)] = inst_4837);

(statearr_4843_4930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (20))){
var inst_4742 = (state_4841[(7)]);
var inst_4752 = cljs.core.first.call(null,inst_4742);
var inst_4753 = cljs.core.nth.call(null,inst_4752,(0),null);
var inst_4754 = cljs.core.nth.call(null,inst_4752,(1),null);
var state_4841__$1 = (function (){var statearr_4844 = state_4841;
(statearr_4844[(8)] = inst_4753);

return statearr_4844;
})();
if(cljs.core.truth_(inst_4754)){
var statearr_4845_4931 = state_4841__$1;
(statearr_4845_4931[(1)] = (22));

} else {
var statearr_4846_4932 = state_4841__$1;
(statearr_4846_4932[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (27))){
var inst_4713 = (state_4841[(9)]);
var inst_4789 = (state_4841[(10)]);
var inst_4782 = (state_4841[(11)]);
var inst_4784 = (state_4841[(12)]);
var inst_4789__$1 = cljs.core._nth.call(null,inst_4782,inst_4784);
var inst_4790 = cljs.core.async.put_BANG_.call(null,inst_4789__$1,inst_4713,done);
var state_4841__$1 = (function (){var statearr_4847 = state_4841;
(statearr_4847[(10)] = inst_4789__$1);

return statearr_4847;
})();
if(cljs.core.truth_(inst_4790)){
var statearr_4848_4933 = state_4841__$1;
(statearr_4848_4933[(1)] = (30));

} else {
var statearr_4849_4934 = state_4841__$1;
(statearr_4849_4934[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (1))){
var state_4841__$1 = state_4841;
var statearr_4850_4935 = state_4841__$1;
(statearr_4850_4935[(2)] = null);

(statearr_4850_4935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (24))){
var inst_4742 = (state_4841[(7)]);
var inst_4759 = (state_4841[(2)]);
var inst_4760 = cljs.core.next.call(null,inst_4742);
var inst_4722 = inst_4760;
var inst_4723 = null;
var inst_4724 = (0);
var inst_4725 = (0);
var state_4841__$1 = (function (){var statearr_4851 = state_4841;
(statearr_4851[(13)] = inst_4725);

(statearr_4851[(14)] = inst_4724);

(statearr_4851[(15)] = inst_4722);

(statearr_4851[(16)] = inst_4723);

(statearr_4851[(17)] = inst_4759);

return statearr_4851;
})();
var statearr_4852_4936 = state_4841__$1;
(statearr_4852_4936[(2)] = null);

(statearr_4852_4936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (39))){
var state_4841__$1 = state_4841;
var statearr_4856_4937 = state_4841__$1;
(statearr_4856_4937[(2)] = null);

(statearr_4856_4937[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (4))){
var inst_4713 = (state_4841[(9)]);
var inst_4713__$1 = (state_4841[(2)]);
var inst_4714 = (inst_4713__$1 == null);
var state_4841__$1 = (function (){var statearr_4857 = state_4841;
(statearr_4857[(9)] = inst_4713__$1);

return statearr_4857;
})();
if(cljs.core.truth_(inst_4714)){
var statearr_4858_4938 = state_4841__$1;
(statearr_4858_4938[(1)] = (5));

} else {
var statearr_4859_4939 = state_4841__$1;
(statearr_4859_4939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (15))){
var inst_4725 = (state_4841[(13)]);
var inst_4724 = (state_4841[(14)]);
var inst_4722 = (state_4841[(15)]);
var inst_4723 = (state_4841[(16)]);
var inst_4738 = (state_4841[(2)]);
var inst_4739 = (inst_4725 + (1));
var tmp4853 = inst_4724;
var tmp4854 = inst_4722;
var tmp4855 = inst_4723;
var inst_4722__$1 = tmp4854;
var inst_4723__$1 = tmp4855;
var inst_4724__$1 = tmp4853;
var inst_4725__$1 = inst_4739;
var state_4841__$1 = (function (){var statearr_4860 = state_4841;
(statearr_4860[(13)] = inst_4725__$1);

(statearr_4860[(14)] = inst_4724__$1);

(statearr_4860[(15)] = inst_4722__$1);

(statearr_4860[(18)] = inst_4738);

(statearr_4860[(16)] = inst_4723__$1);

return statearr_4860;
})();
var statearr_4861_4940 = state_4841__$1;
(statearr_4861_4940[(2)] = null);

(statearr_4861_4940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (21))){
var inst_4763 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4865_4941 = state_4841__$1;
(statearr_4865_4941[(2)] = inst_4763);

(statearr_4865_4941[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (31))){
var inst_4789 = (state_4841[(10)]);
var inst_4793 = done.call(null,null);
var inst_4794 = cljs.core.async.untap_STAR_.call(null,m,inst_4789);
var state_4841__$1 = (function (){var statearr_4866 = state_4841;
(statearr_4866[(19)] = inst_4793);

return statearr_4866;
})();
var statearr_4867_4942 = state_4841__$1;
(statearr_4867_4942[(2)] = inst_4794);

(statearr_4867_4942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (32))){
var inst_4782 = (state_4841[(11)]);
var inst_4783 = (state_4841[(20)]);
var inst_4781 = (state_4841[(21)]);
var inst_4784 = (state_4841[(12)]);
var inst_4796 = (state_4841[(2)]);
var inst_4797 = (inst_4784 + (1));
var tmp4862 = inst_4782;
var tmp4863 = inst_4783;
var tmp4864 = inst_4781;
var inst_4781__$1 = tmp4864;
var inst_4782__$1 = tmp4862;
var inst_4783__$1 = tmp4863;
var inst_4784__$1 = inst_4797;
var state_4841__$1 = (function (){var statearr_4868 = state_4841;
(statearr_4868[(11)] = inst_4782__$1);

(statearr_4868[(22)] = inst_4796);

(statearr_4868[(20)] = inst_4783__$1);

(statearr_4868[(21)] = inst_4781__$1);

(statearr_4868[(12)] = inst_4784__$1);

return statearr_4868;
})();
var statearr_4869_4943 = state_4841__$1;
(statearr_4869_4943[(2)] = null);

(statearr_4869_4943[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (40))){
var inst_4809 = (state_4841[(23)]);
var inst_4813 = done.call(null,null);
var inst_4814 = cljs.core.async.untap_STAR_.call(null,m,inst_4809);
var state_4841__$1 = (function (){var statearr_4870 = state_4841;
(statearr_4870[(24)] = inst_4813);

return statearr_4870;
})();
var statearr_4871_4944 = state_4841__$1;
(statearr_4871_4944[(2)] = inst_4814);

(statearr_4871_4944[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (33))){
var inst_4800 = (state_4841[(25)]);
var inst_4802 = cljs.core.chunked_seq_QMARK_.call(null,inst_4800);
var state_4841__$1 = state_4841;
if(inst_4802){
var statearr_4872_4945 = state_4841__$1;
(statearr_4872_4945[(1)] = (36));

} else {
var statearr_4873_4946 = state_4841__$1;
(statearr_4873_4946[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (13))){
var inst_4732 = (state_4841[(26)]);
var inst_4735 = cljs.core.async.close_BANG_.call(null,inst_4732);
var state_4841__$1 = state_4841;
var statearr_4874_4947 = state_4841__$1;
(statearr_4874_4947[(2)] = inst_4735);

(statearr_4874_4947[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (22))){
var inst_4753 = (state_4841[(8)]);
var inst_4756 = cljs.core.async.close_BANG_.call(null,inst_4753);
var state_4841__$1 = state_4841;
var statearr_4875_4948 = state_4841__$1;
(statearr_4875_4948[(2)] = inst_4756);

(statearr_4875_4948[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (36))){
var inst_4800 = (state_4841[(25)]);
var inst_4804 = cljs.core.chunk_first.call(null,inst_4800);
var inst_4805 = cljs.core.chunk_rest.call(null,inst_4800);
var inst_4806 = cljs.core.count.call(null,inst_4804);
var inst_4781 = inst_4805;
var inst_4782 = inst_4804;
var inst_4783 = inst_4806;
var inst_4784 = (0);
var state_4841__$1 = (function (){var statearr_4876 = state_4841;
(statearr_4876[(11)] = inst_4782);

(statearr_4876[(20)] = inst_4783);

(statearr_4876[(21)] = inst_4781);

(statearr_4876[(12)] = inst_4784);

return statearr_4876;
})();
var statearr_4877_4949 = state_4841__$1;
(statearr_4877_4949[(2)] = null);

(statearr_4877_4949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (41))){
var inst_4800 = (state_4841[(25)]);
var inst_4816 = (state_4841[(2)]);
var inst_4817 = cljs.core.next.call(null,inst_4800);
var inst_4781 = inst_4817;
var inst_4782 = null;
var inst_4783 = (0);
var inst_4784 = (0);
var state_4841__$1 = (function (){var statearr_4878 = state_4841;
(statearr_4878[(11)] = inst_4782);

(statearr_4878[(27)] = inst_4816);

(statearr_4878[(20)] = inst_4783);

(statearr_4878[(21)] = inst_4781);

(statearr_4878[(12)] = inst_4784);

return statearr_4878;
})();
var statearr_4879_4950 = state_4841__$1;
(statearr_4879_4950[(2)] = null);

(statearr_4879_4950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (43))){
var state_4841__$1 = state_4841;
var statearr_4880_4951 = state_4841__$1;
(statearr_4880_4951[(2)] = null);

(statearr_4880_4951[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (29))){
var inst_4825 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4881_4952 = state_4841__$1;
(statearr_4881_4952[(2)] = inst_4825);

(statearr_4881_4952[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (44))){
var inst_4834 = (state_4841[(2)]);
var state_4841__$1 = (function (){var statearr_4882 = state_4841;
(statearr_4882[(28)] = inst_4834);

return statearr_4882;
})();
var statearr_4883_4953 = state_4841__$1;
(statearr_4883_4953[(2)] = null);

(statearr_4883_4953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (6))){
var inst_4773 = (state_4841[(29)]);
var inst_4772 = cljs.core.deref.call(null,cs);
var inst_4773__$1 = cljs.core.keys.call(null,inst_4772);
var inst_4774 = cljs.core.count.call(null,inst_4773__$1);
var inst_4775 = cljs.core.reset_BANG_.call(null,dctr,inst_4774);
var inst_4780 = cljs.core.seq.call(null,inst_4773__$1);
var inst_4781 = inst_4780;
var inst_4782 = null;
var inst_4783 = (0);
var inst_4784 = (0);
var state_4841__$1 = (function (){var statearr_4884 = state_4841;
(statearr_4884[(29)] = inst_4773__$1);

(statearr_4884[(11)] = inst_4782);

(statearr_4884[(30)] = inst_4775);

(statearr_4884[(20)] = inst_4783);

(statearr_4884[(21)] = inst_4781);

(statearr_4884[(12)] = inst_4784);

return statearr_4884;
})();
var statearr_4885_4954 = state_4841__$1;
(statearr_4885_4954[(2)] = null);

(statearr_4885_4954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (28))){
var inst_4800 = (state_4841[(25)]);
var inst_4781 = (state_4841[(21)]);
var inst_4800__$1 = cljs.core.seq.call(null,inst_4781);
var state_4841__$1 = (function (){var statearr_4886 = state_4841;
(statearr_4886[(25)] = inst_4800__$1);

return statearr_4886;
})();
if(inst_4800__$1){
var statearr_4887_4955 = state_4841__$1;
(statearr_4887_4955[(1)] = (33));

} else {
var statearr_4888_4956 = state_4841__$1;
(statearr_4888_4956[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (25))){
var inst_4783 = (state_4841[(20)]);
var inst_4784 = (state_4841[(12)]);
var inst_4786 = (inst_4784 < inst_4783);
var inst_4787 = inst_4786;
var state_4841__$1 = state_4841;
if(cljs.core.truth_(inst_4787)){
var statearr_4889_4957 = state_4841__$1;
(statearr_4889_4957[(1)] = (27));

} else {
var statearr_4890_4958 = state_4841__$1;
(statearr_4890_4958[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (34))){
var state_4841__$1 = state_4841;
var statearr_4891_4959 = state_4841__$1;
(statearr_4891_4959[(2)] = null);

(statearr_4891_4959[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (17))){
var state_4841__$1 = state_4841;
var statearr_4892_4960 = state_4841__$1;
(statearr_4892_4960[(2)] = null);

(statearr_4892_4960[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (3))){
var inst_4839 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4841__$1,inst_4839);
} else {
if((state_val_4842 === (12))){
var inst_4768 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4893_4961 = state_4841__$1;
(statearr_4893_4961[(2)] = inst_4768);

(statearr_4893_4961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (2))){
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4841__$1,(4),ch);
} else {
if((state_val_4842 === (23))){
var state_4841__$1 = state_4841;
var statearr_4894_4962 = state_4841__$1;
(statearr_4894_4962[(2)] = null);

(statearr_4894_4962[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (35))){
var inst_4823 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4895_4963 = state_4841__$1;
(statearr_4895_4963[(2)] = inst_4823);

(statearr_4895_4963[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (19))){
var inst_4742 = (state_4841[(7)]);
var inst_4746 = cljs.core.chunk_first.call(null,inst_4742);
var inst_4747 = cljs.core.chunk_rest.call(null,inst_4742);
var inst_4748 = cljs.core.count.call(null,inst_4746);
var inst_4722 = inst_4747;
var inst_4723 = inst_4746;
var inst_4724 = inst_4748;
var inst_4725 = (0);
var state_4841__$1 = (function (){var statearr_4896 = state_4841;
(statearr_4896[(13)] = inst_4725);

(statearr_4896[(14)] = inst_4724);

(statearr_4896[(15)] = inst_4722);

(statearr_4896[(16)] = inst_4723);

return statearr_4896;
})();
var statearr_4897_4964 = state_4841__$1;
(statearr_4897_4964[(2)] = null);

(statearr_4897_4964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (11))){
var inst_4722 = (state_4841[(15)]);
var inst_4742 = (state_4841[(7)]);
var inst_4742__$1 = cljs.core.seq.call(null,inst_4722);
var state_4841__$1 = (function (){var statearr_4898 = state_4841;
(statearr_4898[(7)] = inst_4742__$1);

return statearr_4898;
})();
if(inst_4742__$1){
var statearr_4899_4965 = state_4841__$1;
(statearr_4899_4965[(1)] = (16));

} else {
var statearr_4900_4966 = state_4841__$1;
(statearr_4900_4966[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (9))){
var inst_4770 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4901_4967 = state_4841__$1;
(statearr_4901_4967[(2)] = inst_4770);

(statearr_4901_4967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (5))){
var inst_4720 = cljs.core.deref.call(null,cs);
var inst_4721 = cljs.core.seq.call(null,inst_4720);
var inst_4722 = inst_4721;
var inst_4723 = null;
var inst_4724 = (0);
var inst_4725 = (0);
var state_4841__$1 = (function (){var statearr_4902 = state_4841;
(statearr_4902[(13)] = inst_4725);

(statearr_4902[(14)] = inst_4724);

(statearr_4902[(15)] = inst_4722);

(statearr_4902[(16)] = inst_4723);

return statearr_4902;
})();
var statearr_4903_4968 = state_4841__$1;
(statearr_4903_4968[(2)] = null);

(statearr_4903_4968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (14))){
var state_4841__$1 = state_4841;
var statearr_4904_4969 = state_4841__$1;
(statearr_4904_4969[(2)] = null);

(statearr_4904_4969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (45))){
var inst_4831 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4905_4970 = state_4841__$1;
(statearr_4905_4970[(2)] = inst_4831);

(statearr_4905_4970[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (26))){
var inst_4773 = (state_4841[(29)]);
var inst_4827 = (state_4841[(2)]);
var inst_4828 = cljs.core.seq.call(null,inst_4773);
var state_4841__$1 = (function (){var statearr_4906 = state_4841;
(statearr_4906[(31)] = inst_4827);

return statearr_4906;
})();
if(inst_4828){
var statearr_4907_4971 = state_4841__$1;
(statearr_4907_4971[(1)] = (42));

} else {
var statearr_4908_4972 = state_4841__$1;
(statearr_4908_4972[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (16))){
var inst_4742 = (state_4841[(7)]);
var inst_4744 = cljs.core.chunked_seq_QMARK_.call(null,inst_4742);
var state_4841__$1 = state_4841;
if(inst_4744){
var statearr_4909_4973 = state_4841__$1;
(statearr_4909_4973[(1)] = (19));

} else {
var statearr_4910_4974 = state_4841__$1;
(statearr_4910_4974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (38))){
var inst_4820 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4911_4975 = state_4841__$1;
(statearr_4911_4975[(2)] = inst_4820);

(statearr_4911_4975[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (30))){
var state_4841__$1 = state_4841;
var statearr_4912_4976 = state_4841__$1;
(statearr_4912_4976[(2)] = null);

(statearr_4912_4976[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (10))){
var inst_4725 = (state_4841[(13)]);
var inst_4723 = (state_4841[(16)]);
var inst_4731 = cljs.core._nth.call(null,inst_4723,inst_4725);
var inst_4732 = cljs.core.nth.call(null,inst_4731,(0),null);
var inst_4733 = cljs.core.nth.call(null,inst_4731,(1),null);
var state_4841__$1 = (function (){var statearr_4913 = state_4841;
(statearr_4913[(26)] = inst_4732);

return statearr_4913;
})();
if(cljs.core.truth_(inst_4733)){
var statearr_4914_4977 = state_4841__$1;
(statearr_4914_4977[(1)] = (13));

} else {
var statearr_4915_4978 = state_4841__$1;
(statearr_4915_4978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (18))){
var inst_4766 = (state_4841[(2)]);
var state_4841__$1 = state_4841;
var statearr_4916_4979 = state_4841__$1;
(statearr_4916_4979[(2)] = inst_4766);

(statearr_4916_4979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (42))){
var state_4841__$1 = state_4841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4841__$1,(45),dchan);
} else {
if((state_val_4842 === (37))){
var inst_4713 = (state_4841[(9)]);
var inst_4800 = (state_4841[(25)]);
var inst_4809 = (state_4841[(23)]);
var inst_4809__$1 = cljs.core.first.call(null,inst_4800);
var inst_4810 = cljs.core.async.put_BANG_.call(null,inst_4809__$1,inst_4713,done);
var state_4841__$1 = (function (){var statearr_4917 = state_4841;
(statearr_4917[(23)] = inst_4809__$1);

return statearr_4917;
})();
if(cljs.core.truth_(inst_4810)){
var statearr_4918_4980 = state_4841__$1;
(statearr_4918_4980[(1)] = (39));

} else {
var statearr_4919_4981 = state_4841__$1;
(statearr_4919_4981[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4842 === (8))){
var inst_4725 = (state_4841[(13)]);
var inst_4724 = (state_4841[(14)]);
var inst_4727 = (inst_4725 < inst_4724);
var inst_4728 = inst_4727;
var state_4841__$1 = state_4841;
if(cljs.core.truth_(inst_4728)){
var statearr_4920_4982 = state_4841__$1;
(statearr_4920_4982[(1)] = (10));

} else {
var statearr_4921_4983 = state_4841__$1;
(statearr_4921_4983[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___4929,cs,m,dchan,dctr,done))
;
return ((function (switch__1266__auto__,c__1328__auto___4929,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__1267__auto__ = null;
var cljs$core$async$mult_$_state_machine__1267__auto____0 = (function (){
var statearr_4925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4925[(0)] = cljs$core$async$mult_$_state_machine__1267__auto__);

(statearr_4925[(1)] = (1));

return statearr_4925;
});
var cljs$core$async$mult_$_state_machine__1267__auto____1 = (function (state_4841){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_4841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e4926){if((e4926 instanceof Object)){
var ex__1270__auto__ = e4926;
var statearr_4927_4984 = state_4841;
(statearr_4927_4984[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4985 = state_4841;
state_4841 = G__4985;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__1267__auto__ = function(state_4841){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__1267__auto____1.call(this,state_4841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__1267__auto____0;
cljs$core$async$mult_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__1267__auto____1;
return cljs$core$async$mult_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___4929,cs,m,dchan,dctr,done))
})();
var state__1330__auto__ = (function (){var statearr_4928 = f__1329__auto__.call(null);
(statearr_4928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___4929);

return statearr_4928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___4929,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__4987 = arguments.length;
switch (G__4987) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj4990 = {};
return obj4990;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__3362__auto__ = m;
if(and__3362__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3362__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3634__auto__ = (((m == null))?null:m);
return (function (){var or__3370__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__3362__auto__ = m;
if(and__3362__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3362__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3634__auto__ = (((m == null))?null:m);
return (function (){var or__3370__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__3362__auto__ = m;
if(and__3362__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3362__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3634__auto__ = (((m == null))?null:m);
return (function (){var or__3370__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__3362__auto__ = m;
if(and__3362__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3362__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3634__auto__ = (((m == null))?null:m);
return (function (){var or__3370__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__3362__auto__ = m;
if(and__3362__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3362__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3634__auto__ = (((m == null))?null:m);
return (function (){var or__3370__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__3882__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__3882__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4995){
var map__4996 = p__4995;
var map__4996__$1 = ((cljs.core.seq_QMARK_.call(null,map__4996))?cljs.core.apply.call(null,cljs.core.hash_map,map__4996):map__4996);
var opts = map__4996__$1;
var statearr_4997_5000 = state;
(statearr_4997_5000[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__4996,map__4996__$1,opts){
return (function (val){
var statearr_4998_5001 = state;
(statearr_4998_5001[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4996,map__4996__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_4999_5002 = state;
(statearr_4999_5002[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4991){
var G__4992 = cljs.core.first.call(null,seq4991);
var seq4991__$1 = cljs.core.next.call(null,seq4991);
var G__4993 = cljs.core.first.call(null,seq4991__$1);
var seq4991__$2 = cljs.core.next.call(null,seq4991__$1);
var G__4994 = cljs.core.first.call(null,seq4991__$2);
var seq4991__$3 = cljs.core.next.call(null,seq4991__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__4992,G__4993,G__4994,seq4991__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t5122 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5122 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta5123){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta5123 = meta5123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5124,meta5123__$1){
var self__ = this;
var _5124__$1 = this;
return (new cljs.core.async.t5122(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta5123__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_5124){
var self__ = this;
var _5124__$1 = this;
return self__.meta5123;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t5122.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta5123","meta5123",-2054197978,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t5122.cljs$lang$type = true;

cljs.core.async.t5122.cljs$lang$ctorStr = "cljs.core.async/t5122";

cljs.core.async.t5122.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t5122");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t5122 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t5122(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5123){
return (new cljs.core.async.t5122(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta5123));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t5122(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1328__auto___5241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___5241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___5241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_5194){
var state_val_5195 = (state_5194[(1)]);
if((state_val_5195 === (7))){
var inst_5138 = (state_5194[(7)]);
var inst_5143 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5138);
var state_5194__$1 = state_5194;
var statearr_5196_5242 = state_5194__$1;
(statearr_5196_5242[(2)] = inst_5143);

(statearr_5196_5242[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (20))){
var inst_5153 = (state_5194[(8)]);
var state_5194__$1 = state_5194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5194__$1,(23),out,inst_5153);
} else {
if((state_val_5195 === (1))){
var inst_5128 = (state_5194[(9)]);
var inst_5128__$1 = calc_state.call(null);
var inst_5129 = cljs.core.seq_QMARK_.call(null,inst_5128__$1);
var state_5194__$1 = (function (){var statearr_5197 = state_5194;
(statearr_5197[(9)] = inst_5128__$1);

return statearr_5197;
})();
if(inst_5129){
var statearr_5198_5243 = state_5194__$1;
(statearr_5198_5243[(1)] = (2));

} else {
var statearr_5199_5244 = state_5194__$1;
(statearr_5199_5244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (24))){
var inst_5146 = (state_5194[(10)]);
var inst_5138 = inst_5146;
var state_5194__$1 = (function (){var statearr_5200 = state_5194;
(statearr_5200[(7)] = inst_5138);

return statearr_5200;
})();
var statearr_5201_5245 = state_5194__$1;
(statearr_5201_5245[(2)] = null);

(statearr_5201_5245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (4))){
var inst_5128 = (state_5194[(9)]);
var inst_5134 = (state_5194[(2)]);
var inst_5135 = cljs.core.get.call(null,inst_5134,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5136 = cljs.core.get.call(null,inst_5134,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5137 = cljs.core.get.call(null,inst_5134,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_5138 = inst_5128;
var state_5194__$1 = (function (){var statearr_5202 = state_5194;
(statearr_5202[(7)] = inst_5138);

(statearr_5202[(11)] = inst_5137);

(statearr_5202[(12)] = inst_5135);

(statearr_5202[(13)] = inst_5136);

return statearr_5202;
})();
var statearr_5203_5246 = state_5194__$1;
(statearr_5203_5246[(2)] = null);

(statearr_5203_5246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (15))){
var state_5194__$1 = state_5194;
var statearr_5204_5247 = state_5194__$1;
(statearr_5204_5247[(2)] = null);

(statearr_5204_5247[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (21))){
var inst_5146 = (state_5194[(10)]);
var inst_5138 = inst_5146;
var state_5194__$1 = (function (){var statearr_5205 = state_5194;
(statearr_5205[(7)] = inst_5138);

return statearr_5205;
})();
var statearr_5206_5248 = state_5194__$1;
(statearr_5206_5248[(2)] = null);

(statearr_5206_5248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (13))){
var inst_5190 = (state_5194[(2)]);
var state_5194__$1 = state_5194;
var statearr_5207_5249 = state_5194__$1;
(statearr_5207_5249[(2)] = inst_5190);

(statearr_5207_5249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (22))){
var inst_5188 = (state_5194[(2)]);
var state_5194__$1 = state_5194;
var statearr_5208_5250 = state_5194__$1;
(statearr_5208_5250[(2)] = inst_5188);

(statearr_5208_5250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (6))){
var inst_5192 = (state_5194[(2)]);
var state_5194__$1 = state_5194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5194__$1,inst_5192);
} else {
if((state_val_5195 === (25))){
var state_5194__$1 = state_5194;
var statearr_5209_5251 = state_5194__$1;
(statearr_5209_5251[(2)] = null);

(statearr_5209_5251[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (17))){
var inst_5168 = (state_5194[(14)]);
var state_5194__$1 = state_5194;
var statearr_5210_5252 = state_5194__$1;
(statearr_5210_5252[(2)] = inst_5168);

(statearr_5210_5252[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (3))){
var inst_5128 = (state_5194[(9)]);
var state_5194__$1 = state_5194;
var statearr_5211_5253 = state_5194__$1;
(statearr_5211_5253[(2)] = inst_5128);

(statearr_5211_5253[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (12))){
var inst_5147 = (state_5194[(15)]);
var inst_5154 = (state_5194[(16)]);
var inst_5168 = (state_5194[(14)]);
var inst_5168__$1 = inst_5147.call(null,inst_5154);
var state_5194__$1 = (function (){var statearr_5212 = state_5194;
(statearr_5212[(14)] = inst_5168__$1);

return statearr_5212;
})();
if(cljs.core.truth_(inst_5168__$1)){
var statearr_5213_5254 = state_5194__$1;
(statearr_5213_5254[(1)] = (17));

} else {
var statearr_5214_5255 = state_5194__$1;
(statearr_5214_5255[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (2))){
var inst_5128 = (state_5194[(9)]);
var inst_5131 = cljs.core.apply.call(null,cljs.core.hash_map,inst_5128);
var state_5194__$1 = state_5194;
var statearr_5215_5256 = state_5194__$1;
(statearr_5215_5256[(2)] = inst_5131);

(statearr_5215_5256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (23))){
var inst_5179 = (state_5194[(2)]);
var state_5194__$1 = state_5194;
if(cljs.core.truth_(inst_5179)){
var statearr_5216_5257 = state_5194__$1;
(statearr_5216_5257[(1)] = (24));

} else {
var statearr_5217_5258 = state_5194__$1;
(statearr_5217_5258[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (19))){
var inst_5176 = (state_5194[(2)]);
var state_5194__$1 = state_5194;
if(cljs.core.truth_(inst_5176)){
var statearr_5218_5259 = state_5194__$1;
(statearr_5218_5259[(1)] = (20));

} else {
var statearr_5219_5260 = state_5194__$1;
(statearr_5219_5260[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (11))){
var inst_5153 = (state_5194[(8)]);
var inst_5159 = (inst_5153 == null);
var state_5194__$1 = state_5194;
if(cljs.core.truth_(inst_5159)){
var statearr_5220_5261 = state_5194__$1;
(statearr_5220_5261[(1)] = (14));

} else {
var statearr_5221_5262 = state_5194__$1;
(statearr_5221_5262[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (9))){
var inst_5146 = (state_5194[(10)]);
var inst_5146__$1 = (state_5194[(2)]);
var inst_5147 = cljs.core.get.call(null,inst_5146__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_5148 = cljs.core.get.call(null,inst_5146__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_5149 = cljs.core.get.call(null,inst_5146__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_5194__$1 = (function (){var statearr_5222 = state_5194;
(statearr_5222[(10)] = inst_5146__$1);

(statearr_5222[(15)] = inst_5147);

(statearr_5222[(17)] = inst_5148);

return statearr_5222;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_5194__$1,(10),inst_5149);
} else {
if((state_val_5195 === (5))){
var inst_5138 = (state_5194[(7)]);
var inst_5141 = cljs.core.seq_QMARK_.call(null,inst_5138);
var state_5194__$1 = state_5194;
if(inst_5141){
var statearr_5223_5263 = state_5194__$1;
(statearr_5223_5263[(1)] = (7));

} else {
var statearr_5224_5264 = state_5194__$1;
(statearr_5224_5264[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (14))){
var inst_5154 = (state_5194[(16)]);
var inst_5161 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_5154);
var state_5194__$1 = state_5194;
var statearr_5225_5265 = state_5194__$1;
(statearr_5225_5265[(2)] = inst_5161);

(statearr_5225_5265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (26))){
var inst_5184 = (state_5194[(2)]);
var state_5194__$1 = state_5194;
var statearr_5226_5266 = state_5194__$1;
(statearr_5226_5266[(2)] = inst_5184);

(statearr_5226_5266[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (16))){
var inst_5164 = (state_5194[(2)]);
var inst_5165 = calc_state.call(null);
var inst_5138 = inst_5165;
var state_5194__$1 = (function (){var statearr_5227 = state_5194;
(statearr_5227[(7)] = inst_5138);

(statearr_5227[(18)] = inst_5164);

return statearr_5227;
})();
var statearr_5228_5267 = state_5194__$1;
(statearr_5228_5267[(2)] = null);

(statearr_5228_5267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (10))){
var inst_5154 = (state_5194[(16)]);
var inst_5153 = (state_5194[(8)]);
var inst_5152 = (state_5194[(2)]);
var inst_5153__$1 = cljs.core.nth.call(null,inst_5152,(0),null);
var inst_5154__$1 = cljs.core.nth.call(null,inst_5152,(1),null);
var inst_5155 = (inst_5153__$1 == null);
var inst_5156 = cljs.core._EQ_.call(null,inst_5154__$1,change);
var inst_5157 = (inst_5155) || (inst_5156);
var state_5194__$1 = (function (){var statearr_5229 = state_5194;
(statearr_5229[(16)] = inst_5154__$1);

(statearr_5229[(8)] = inst_5153__$1);

return statearr_5229;
})();
if(cljs.core.truth_(inst_5157)){
var statearr_5230_5268 = state_5194__$1;
(statearr_5230_5268[(1)] = (11));

} else {
var statearr_5231_5269 = state_5194__$1;
(statearr_5231_5269[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (18))){
var inst_5147 = (state_5194[(15)]);
var inst_5148 = (state_5194[(17)]);
var inst_5154 = (state_5194[(16)]);
var inst_5171 = cljs.core.empty_QMARK_.call(null,inst_5147);
var inst_5172 = inst_5148.call(null,inst_5154);
var inst_5173 = cljs.core.not.call(null,inst_5172);
var inst_5174 = (inst_5171) && (inst_5173);
var state_5194__$1 = state_5194;
var statearr_5232_5270 = state_5194__$1;
(statearr_5232_5270[(2)] = inst_5174);

(statearr_5232_5270[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5195 === (8))){
var inst_5138 = (state_5194[(7)]);
var state_5194__$1 = state_5194;
var statearr_5233_5271 = state_5194__$1;
(statearr_5233_5271[(2)] = inst_5138);

(statearr_5233_5271[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___5241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__1266__auto__,c__1328__auto___5241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__1267__auto__ = null;
var cljs$core$async$mix_$_state_machine__1267__auto____0 = (function (){
var statearr_5237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5237[(0)] = cljs$core$async$mix_$_state_machine__1267__auto__);

(statearr_5237[(1)] = (1));

return statearr_5237;
});
var cljs$core$async$mix_$_state_machine__1267__auto____1 = (function (state_5194){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5238){if((e5238 instanceof Object)){
var ex__1270__auto__ = e5238;
var statearr_5239_5272 = state_5194;
(statearr_5239_5272[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5273 = state_5194;
state_5194 = G__5273;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__1267__auto__ = function(state_5194){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__1267__auto____1.call(this,state_5194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__1267__auto____0;
cljs$core$async$mix_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__1267__auto____1;
return cljs$core$async$mix_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___5241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__1330__auto__ = (function (){var statearr_5240 = f__1329__auto__.call(null);
(statearr_5240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___5241);

return statearr_5240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___5241,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj5275 = {};
return obj5275;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3362__auto__ = p;
if(and__3362__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3362__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3634__auto__ = (((p == null))?null:p);
return (function (){var or__3370__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__3362__auto__ = p;
if(and__3362__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3362__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3634__auto__ = (((p == null))?null:p);
return (function (){var or__3370__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__5277 = arguments.length;
switch (G__5277) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__3362__auto__ = p;
if(and__3362__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3362__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3634__auto__ = (((p == null))?null:p);
return (function (){var or__3370__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__3362__auto__ = p;
if(and__3362__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3362__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3634__auto__ = (((p == null))?null:p);
return (function (){var or__3370__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3634__auto__)]);
if(or__3370__auto__){
return or__3370__auto__;
} else {
var or__3370__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3370__auto____$1){
return or__3370__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__5281 = arguments.length;
switch (G__5281) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3370__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3370__auto__)){
return or__3370__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3370__auto__,mults){
return (function (p1__5279_SHARP_){
if(cljs.core.truth_(p1__5279_SHARP_.call(null,topic))){
return p1__5279_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__5279_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t5282 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5282 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta5283){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta5283 = meta5283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_5284,meta5283__$1){
var self__ = this;
var _5284__$1 = this;
return (new cljs.core.async.t5282(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta5283__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t5282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_5284){
var self__ = this;
var _5284__$1 = this;
return self__.meta5283;
});})(mults,ensure_mult))
;

cljs.core.async.t5282.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t5282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t5282.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t5282.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t5282.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t5282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t5282.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t5282.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta5283","meta5283",1136367098,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t5282.cljs$lang$type = true;

cljs.core.async.t5282.cljs$lang$ctorStr = "cljs.core.async/t5282";

cljs.core.async.t5282.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t5282");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t5282 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t5282(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5283){
return (new cljs.core.async.t5282(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta5283));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t5282(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__1328__auto___5405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___5405,mults,ensure_mult,p){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___5405,mults,ensure_mult,p){
return (function (state_5356){
var state_val_5357 = (state_5356[(1)]);
if((state_val_5357 === (7))){
var inst_5352 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5358_5406 = state_5356__$1;
(statearr_5358_5406[(2)] = inst_5352);

(statearr_5358_5406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (20))){
var state_5356__$1 = state_5356;
var statearr_5359_5407 = state_5356__$1;
(statearr_5359_5407[(2)] = null);

(statearr_5359_5407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (1))){
var state_5356__$1 = state_5356;
var statearr_5360_5408 = state_5356__$1;
(statearr_5360_5408[(2)] = null);

(statearr_5360_5408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (24))){
var inst_5335 = (state_5356[(7)]);
var inst_5344 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_5335);
var state_5356__$1 = state_5356;
var statearr_5361_5409 = state_5356__$1;
(statearr_5361_5409[(2)] = inst_5344);

(statearr_5361_5409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (4))){
var inst_5287 = (state_5356[(8)]);
var inst_5287__$1 = (state_5356[(2)]);
var inst_5288 = (inst_5287__$1 == null);
var state_5356__$1 = (function (){var statearr_5362 = state_5356;
(statearr_5362[(8)] = inst_5287__$1);

return statearr_5362;
})();
if(cljs.core.truth_(inst_5288)){
var statearr_5363_5410 = state_5356__$1;
(statearr_5363_5410[(1)] = (5));

} else {
var statearr_5364_5411 = state_5356__$1;
(statearr_5364_5411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (15))){
var inst_5329 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5365_5412 = state_5356__$1;
(statearr_5365_5412[(2)] = inst_5329);

(statearr_5365_5412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (21))){
var inst_5349 = (state_5356[(2)]);
var state_5356__$1 = (function (){var statearr_5366 = state_5356;
(statearr_5366[(9)] = inst_5349);

return statearr_5366;
})();
var statearr_5367_5413 = state_5356__$1;
(statearr_5367_5413[(2)] = null);

(statearr_5367_5413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (13))){
var inst_5311 = (state_5356[(10)]);
var inst_5313 = cljs.core.chunked_seq_QMARK_.call(null,inst_5311);
var state_5356__$1 = state_5356;
if(inst_5313){
var statearr_5368_5414 = state_5356__$1;
(statearr_5368_5414[(1)] = (16));

} else {
var statearr_5369_5415 = state_5356__$1;
(statearr_5369_5415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (22))){
var inst_5341 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
if(cljs.core.truth_(inst_5341)){
var statearr_5370_5416 = state_5356__$1;
(statearr_5370_5416[(1)] = (23));

} else {
var statearr_5371_5417 = state_5356__$1;
(statearr_5371_5417[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (6))){
var inst_5287 = (state_5356[(8)]);
var inst_5335 = (state_5356[(7)]);
var inst_5337 = (state_5356[(11)]);
var inst_5335__$1 = topic_fn.call(null,inst_5287);
var inst_5336 = cljs.core.deref.call(null,mults);
var inst_5337__$1 = cljs.core.get.call(null,inst_5336,inst_5335__$1);
var state_5356__$1 = (function (){var statearr_5372 = state_5356;
(statearr_5372[(7)] = inst_5335__$1);

(statearr_5372[(11)] = inst_5337__$1);

return statearr_5372;
})();
if(cljs.core.truth_(inst_5337__$1)){
var statearr_5373_5418 = state_5356__$1;
(statearr_5373_5418[(1)] = (19));

} else {
var statearr_5374_5419 = state_5356__$1;
(statearr_5374_5419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (25))){
var inst_5346 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5375_5420 = state_5356__$1;
(statearr_5375_5420[(2)] = inst_5346);

(statearr_5375_5420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (17))){
var inst_5311 = (state_5356[(10)]);
var inst_5320 = cljs.core.first.call(null,inst_5311);
var inst_5321 = cljs.core.async.muxch_STAR_.call(null,inst_5320);
var inst_5322 = cljs.core.async.close_BANG_.call(null,inst_5321);
var inst_5323 = cljs.core.next.call(null,inst_5311);
var inst_5297 = inst_5323;
var inst_5298 = null;
var inst_5299 = (0);
var inst_5300 = (0);
var state_5356__$1 = (function (){var statearr_5376 = state_5356;
(statearr_5376[(12)] = inst_5298);

(statearr_5376[(13)] = inst_5299);

(statearr_5376[(14)] = inst_5322);

(statearr_5376[(15)] = inst_5300);

(statearr_5376[(16)] = inst_5297);

return statearr_5376;
})();
var statearr_5377_5421 = state_5356__$1;
(statearr_5377_5421[(2)] = null);

(statearr_5377_5421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (3))){
var inst_5354 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5356__$1,inst_5354);
} else {
if((state_val_5357 === (12))){
var inst_5331 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5378_5422 = state_5356__$1;
(statearr_5378_5422[(2)] = inst_5331);

(statearr_5378_5422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (2))){
var state_5356__$1 = state_5356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5356__$1,(4),ch);
} else {
if((state_val_5357 === (23))){
var state_5356__$1 = state_5356;
var statearr_5379_5423 = state_5356__$1;
(statearr_5379_5423[(2)] = null);

(statearr_5379_5423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (19))){
var inst_5287 = (state_5356[(8)]);
var inst_5337 = (state_5356[(11)]);
var inst_5339 = cljs.core.async.muxch_STAR_.call(null,inst_5337);
var state_5356__$1 = state_5356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5356__$1,(22),inst_5339,inst_5287);
} else {
if((state_val_5357 === (11))){
var inst_5311 = (state_5356[(10)]);
var inst_5297 = (state_5356[(16)]);
var inst_5311__$1 = cljs.core.seq.call(null,inst_5297);
var state_5356__$1 = (function (){var statearr_5380 = state_5356;
(statearr_5380[(10)] = inst_5311__$1);

return statearr_5380;
})();
if(inst_5311__$1){
var statearr_5381_5424 = state_5356__$1;
(statearr_5381_5424[(1)] = (13));

} else {
var statearr_5382_5425 = state_5356__$1;
(statearr_5382_5425[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (9))){
var inst_5333 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5383_5426 = state_5356__$1;
(statearr_5383_5426[(2)] = inst_5333);

(statearr_5383_5426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (5))){
var inst_5294 = cljs.core.deref.call(null,mults);
var inst_5295 = cljs.core.vals.call(null,inst_5294);
var inst_5296 = cljs.core.seq.call(null,inst_5295);
var inst_5297 = inst_5296;
var inst_5298 = null;
var inst_5299 = (0);
var inst_5300 = (0);
var state_5356__$1 = (function (){var statearr_5384 = state_5356;
(statearr_5384[(12)] = inst_5298);

(statearr_5384[(13)] = inst_5299);

(statearr_5384[(15)] = inst_5300);

(statearr_5384[(16)] = inst_5297);

return statearr_5384;
})();
var statearr_5385_5427 = state_5356__$1;
(statearr_5385_5427[(2)] = null);

(statearr_5385_5427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (14))){
var state_5356__$1 = state_5356;
var statearr_5389_5428 = state_5356__$1;
(statearr_5389_5428[(2)] = null);

(statearr_5389_5428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (16))){
var inst_5311 = (state_5356[(10)]);
var inst_5315 = cljs.core.chunk_first.call(null,inst_5311);
var inst_5316 = cljs.core.chunk_rest.call(null,inst_5311);
var inst_5317 = cljs.core.count.call(null,inst_5315);
var inst_5297 = inst_5316;
var inst_5298 = inst_5315;
var inst_5299 = inst_5317;
var inst_5300 = (0);
var state_5356__$1 = (function (){var statearr_5390 = state_5356;
(statearr_5390[(12)] = inst_5298);

(statearr_5390[(13)] = inst_5299);

(statearr_5390[(15)] = inst_5300);

(statearr_5390[(16)] = inst_5297);

return statearr_5390;
})();
var statearr_5391_5429 = state_5356__$1;
(statearr_5391_5429[(2)] = null);

(statearr_5391_5429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (10))){
var inst_5298 = (state_5356[(12)]);
var inst_5299 = (state_5356[(13)]);
var inst_5300 = (state_5356[(15)]);
var inst_5297 = (state_5356[(16)]);
var inst_5305 = cljs.core._nth.call(null,inst_5298,inst_5300);
var inst_5306 = cljs.core.async.muxch_STAR_.call(null,inst_5305);
var inst_5307 = cljs.core.async.close_BANG_.call(null,inst_5306);
var inst_5308 = (inst_5300 + (1));
var tmp5386 = inst_5298;
var tmp5387 = inst_5299;
var tmp5388 = inst_5297;
var inst_5297__$1 = tmp5388;
var inst_5298__$1 = tmp5386;
var inst_5299__$1 = tmp5387;
var inst_5300__$1 = inst_5308;
var state_5356__$1 = (function (){var statearr_5392 = state_5356;
(statearr_5392[(17)] = inst_5307);

(statearr_5392[(12)] = inst_5298__$1);

(statearr_5392[(13)] = inst_5299__$1);

(statearr_5392[(15)] = inst_5300__$1);

(statearr_5392[(16)] = inst_5297__$1);

return statearr_5392;
})();
var statearr_5393_5430 = state_5356__$1;
(statearr_5393_5430[(2)] = null);

(statearr_5393_5430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (18))){
var inst_5326 = (state_5356[(2)]);
var state_5356__$1 = state_5356;
var statearr_5394_5431 = state_5356__$1;
(statearr_5394_5431[(2)] = inst_5326);

(statearr_5394_5431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5357 === (8))){
var inst_5299 = (state_5356[(13)]);
var inst_5300 = (state_5356[(15)]);
var inst_5302 = (inst_5300 < inst_5299);
var inst_5303 = inst_5302;
var state_5356__$1 = state_5356;
if(cljs.core.truth_(inst_5303)){
var statearr_5395_5432 = state_5356__$1;
(statearr_5395_5432[(1)] = (10));

} else {
var statearr_5396_5433 = state_5356__$1;
(statearr_5396_5433[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___5405,mults,ensure_mult,p))
;
return ((function (switch__1266__auto__,c__1328__auto___5405,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_5400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5400[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_5400[(1)] = (1));

return statearr_5400;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_5356){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5401){if((e5401 instanceof Object)){
var ex__1270__auto__ = e5401;
var statearr_5402_5434 = state_5356;
(statearr_5402_5434[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5435 = state_5356;
state_5356 = G__5435;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_5356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_5356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___5405,mults,ensure_mult,p))
})();
var state__1330__auto__ = (function (){var statearr_5403 = f__1329__auto__.call(null);
(statearr_5403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___5405);

return statearr_5403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___5405,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__5437 = arguments.length;
switch (G__5437) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__5440 = arguments.length;
switch (G__5440) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__5443 = arguments.length;
switch (G__5443) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__1328__auto___5513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___5513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___5513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_5482){
var state_val_5483 = (state_5482[(1)]);
if((state_val_5483 === (7))){
var state_5482__$1 = state_5482;
var statearr_5484_5514 = state_5482__$1;
(statearr_5484_5514[(2)] = null);

(statearr_5484_5514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (1))){
var state_5482__$1 = state_5482;
var statearr_5485_5515 = state_5482__$1;
(statearr_5485_5515[(2)] = null);

(statearr_5485_5515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (4))){
var inst_5446 = (state_5482[(7)]);
var inst_5448 = (inst_5446 < cnt);
var state_5482__$1 = state_5482;
if(cljs.core.truth_(inst_5448)){
var statearr_5486_5516 = state_5482__$1;
(statearr_5486_5516[(1)] = (6));

} else {
var statearr_5487_5517 = state_5482__$1;
(statearr_5487_5517[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (15))){
var inst_5478 = (state_5482[(2)]);
var state_5482__$1 = state_5482;
var statearr_5488_5518 = state_5482__$1;
(statearr_5488_5518[(2)] = inst_5478);

(statearr_5488_5518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (13))){
var inst_5471 = cljs.core.async.close_BANG_.call(null,out);
var state_5482__$1 = state_5482;
var statearr_5489_5519 = state_5482__$1;
(statearr_5489_5519[(2)] = inst_5471);

(statearr_5489_5519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (6))){
var state_5482__$1 = state_5482;
var statearr_5490_5520 = state_5482__$1;
(statearr_5490_5520[(2)] = null);

(statearr_5490_5520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (3))){
var inst_5480 = (state_5482[(2)]);
var state_5482__$1 = state_5482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5482__$1,inst_5480);
} else {
if((state_val_5483 === (12))){
var inst_5468 = (state_5482[(8)]);
var inst_5468__$1 = (state_5482[(2)]);
var inst_5469 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_5468__$1);
var state_5482__$1 = (function (){var statearr_5491 = state_5482;
(statearr_5491[(8)] = inst_5468__$1);

return statearr_5491;
})();
if(cljs.core.truth_(inst_5469)){
var statearr_5492_5521 = state_5482__$1;
(statearr_5492_5521[(1)] = (13));

} else {
var statearr_5493_5522 = state_5482__$1;
(statearr_5493_5522[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (2))){
var inst_5445 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_5446 = (0);
var state_5482__$1 = (function (){var statearr_5494 = state_5482;
(statearr_5494[(9)] = inst_5445);

(statearr_5494[(7)] = inst_5446);

return statearr_5494;
})();
var statearr_5495_5523 = state_5482__$1;
(statearr_5495_5523[(2)] = null);

(statearr_5495_5523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (11))){
var inst_5446 = (state_5482[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_5482,(10),Object,null,(9));
var inst_5455 = chs__$1.call(null,inst_5446);
var inst_5456 = done.call(null,inst_5446);
var inst_5457 = cljs.core.async.take_BANG_.call(null,inst_5455,inst_5456);
var state_5482__$1 = state_5482;
var statearr_5496_5524 = state_5482__$1;
(statearr_5496_5524[(2)] = inst_5457);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5482__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (9))){
var inst_5446 = (state_5482[(7)]);
var inst_5459 = (state_5482[(2)]);
var inst_5460 = (inst_5446 + (1));
var inst_5446__$1 = inst_5460;
var state_5482__$1 = (function (){var statearr_5497 = state_5482;
(statearr_5497[(10)] = inst_5459);

(statearr_5497[(7)] = inst_5446__$1);

return statearr_5497;
})();
var statearr_5498_5525 = state_5482__$1;
(statearr_5498_5525[(2)] = null);

(statearr_5498_5525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (5))){
var inst_5466 = (state_5482[(2)]);
var state_5482__$1 = (function (){var statearr_5499 = state_5482;
(statearr_5499[(11)] = inst_5466);

return statearr_5499;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5482__$1,(12),dchan);
} else {
if((state_val_5483 === (14))){
var inst_5468 = (state_5482[(8)]);
var inst_5473 = cljs.core.apply.call(null,f,inst_5468);
var state_5482__$1 = state_5482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5482__$1,(16),out,inst_5473);
} else {
if((state_val_5483 === (16))){
var inst_5475 = (state_5482[(2)]);
var state_5482__$1 = (function (){var statearr_5500 = state_5482;
(statearr_5500[(12)] = inst_5475);

return statearr_5500;
})();
var statearr_5501_5526 = state_5482__$1;
(statearr_5501_5526[(2)] = null);

(statearr_5501_5526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (10))){
var inst_5450 = (state_5482[(2)]);
var inst_5451 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_5482__$1 = (function (){var statearr_5502 = state_5482;
(statearr_5502[(13)] = inst_5450);

return statearr_5502;
})();
var statearr_5503_5527 = state_5482__$1;
(statearr_5503_5527[(2)] = inst_5451);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5482__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5483 === (8))){
var inst_5464 = (state_5482[(2)]);
var state_5482__$1 = state_5482;
var statearr_5504_5528 = state_5482__$1;
(statearr_5504_5528[(2)] = inst_5464);

(statearr_5504_5528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___5513,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__1266__auto__,c__1328__auto___5513,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_5508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5508[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_5508[(1)] = (1));

return statearr_5508;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_5482){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5509){if((e5509 instanceof Object)){
var ex__1270__auto__ = e5509;
var statearr_5510_5529 = state_5482;
(statearr_5510_5529[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5530 = state_5482;
state_5482 = G__5530;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_5482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_5482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___5513,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__1330__auto__ = (function (){var statearr_5511 = f__1329__auto__.call(null);
(statearr_5511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___5513);

return statearr_5511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___5513,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__5533 = arguments.length;
switch (G__5533) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1328__auto___5588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___5588,out){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___5588,out){
return (function (state_5563){
var state_val_5564 = (state_5563[(1)]);
if((state_val_5564 === (7))){
var inst_5543 = (state_5563[(7)]);
var inst_5542 = (state_5563[(8)]);
var inst_5542__$1 = (state_5563[(2)]);
var inst_5543__$1 = cljs.core.nth.call(null,inst_5542__$1,(0),null);
var inst_5544 = cljs.core.nth.call(null,inst_5542__$1,(1),null);
var inst_5545 = (inst_5543__$1 == null);
var state_5563__$1 = (function (){var statearr_5565 = state_5563;
(statearr_5565[(9)] = inst_5544);

(statearr_5565[(7)] = inst_5543__$1);

(statearr_5565[(8)] = inst_5542__$1);

return statearr_5565;
})();
if(cljs.core.truth_(inst_5545)){
var statearr_5566_5589 = state_5563__$1;
(statearr_5566_5589[(1)] = (8));

} else {
var statearr_5567_5590 = state_5563__$1;
(statearr_5567_5590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5564 === (1))){
var inst_5534 = cljs.core.vec.call(null,chs);
var inst_5535 = inst_5534;
var state_5563__$1 = (function (){var statearr_5568 = state_5563;
(statearr_5568[(10)] = inst_5535);

return statearr_5568;
})();
var statearr_5569_5591 = state_5563__$1;
(statearr_5569_5591[(2)] = null);

(statearr_5569_5591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5564 === (4))){
var inst_5535 = (state_5563[(10)]);
var state_5563__$1 = state_5563;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5563__$1,(7),inst_5535);
} else {
if((state_val_5564 === (6))){
var inst_5559 = (state_5563[(2)]);
var state_5563__$1 = state_5563;
var statearr_5570_5592 = state_5563__$1;
(statearr_5570_5592[(2)] = inst_5559);

(statearr_5570_5592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5564 === (3))){
var inst_5561 = (state_5563[(2)]);
var state_5563__$1 = state_5563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5563__$1,inst_5561);
} else {
if((state_val_5564 === (2))){
var inst_5535 = (state_5563[(10)]);
var inst_5537 = cljs.core.count.call(null,inst_5535);
var inst_5538 = (inst_5537 > (0));
var state_5563__$1 = state_5563;
if(cljs.core.truth_(inst_5538)){
var statearr_5572_5593 = state_5563__$1;
(statearr_5572_5593[(1)] = (4));

} else {
var statearr_5573_5594 = state_5563__$1;
(statearr_5573_5594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5564 === (11))){
var inst_5535 = (state_5563[(10)]);
var inst_5552 = (state_5563[(2)]);
var tmp5571 = inst_5535;
var inst_5535__$1 = tmp5571;
var state_5563__$1 = (function (){var statearr_5574 = state_5563;
(statearr_5574[(11)] = inst_5552);

(statearr_5574[(10)] = inst_5535__$1);

return statearr_5574;
})();
var statearr_5575_5595 = state_5563__$1;
(statearr_5575_5595[(2)] = null);

(statearr_5575_5595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5564 === (9))){
var inst_5543 = (state_5563[(7)]);
var state_5563__$1 = state_5563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5563__$1,(11),out,inst_5543);
} else {
if((state_val_5564 === (5))){
var inst_5557 = cljs.core.async.close_BANG_.call(null,out);
var state_5563__$1 = state_5563;
var statearr_5576_5596 = state_5563__$1;
(statearr_5576_5596[(2)] = inst_5557);

(statearr_5576_5596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5564 === (10))){
var inst_5555 = (state_5563[(2)]);
var state_5563__$1 = state_5563;
var statearr_5577_5597 = state_5563__$1;
(statearr_5577_5597[(2)] = inst_5555);

(statearr_5577_5597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5564 === (8))){
var inst_5544 = (state_5563[(9)]);
var inst_5535 = (state_5563[(10)]);
var inst_5543 = (state_5563[(7)]);
var inst_5542 = (state_5563[(8)]);
var inst_5547 = (function (){var cs = inst_5535;
var vec__5540 = inst_5542;
var v = inst_5543;
var c = inst_5544;
return ((function (cs,vec__5540,v,c,inst_5544,inst_5535,inst_5543,inst_5542,state_val_5564,c__1328__auto___5588,out){
return (function (p1__5531_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__5531_SHARP_);
});
;})(cs,vec__5540,v,c,inst_5544,inst_5535,inst_5543,inst_5542,state_val_5564,c__1328__auto___5588,out))
})();
var inst_5548 = cljs.core.filterv.call(null,inst_5547,inst_5535);
var inst_5535__$1 = inst_5548;
var state_5563__$1 = (function (){var statearr_5578 = state_5563;
(statearr_5578[(10)] = inst_5535__$1);

return statearr_5578;
})();
var statearr_5579_5598 = state_5563__$1;
(statearr_5579_5598[(2)] = null);

(statearr_5579_5598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___5588,out))
;
return ((function (switch__1266__auto__,c__1328__auto___5588,out){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_5583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5583[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_5583[(1)] = (1));

return statearr_5583;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_5563){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5584){if((e5584 instanceof Object)){
var ex__1270__auto__ = e5584;
var statearr_5585_5599 = state_5563;
(statearr_5585_5599[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5600 = state_5563;
state_5563 = G__5600;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_5563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_5563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___5588,out))
})();
var state__1330__auto__ = (function (){var statearr_5586 = f__1329__auto__.call(null);
(statearr_5586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___5588);

return statearr_5586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___5588,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__5602 = arguments.length;
switch (G__5602) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1328__auto___5650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___5650,out){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___5650,out){
return (function (state_5626){
var state_val_5627 = (state_5626[(1)]);
if((state_val_5627 === (7))){
var inst_5608 = (state_5626[(7)]);
var inst_5608__$1 = (state_5626[(2)]);
var inst_5609 = (inst_5608__$1 == null);
var inst_5610 = cljs.core.not.call(null,inst_5609);
var state_5626__$1 = (function (){var statearr_5628 = state_5626;
(statearr_5628[(7)] = inst_5608__$1);

return statearr_5628;
})();
if(inst_5610){
var statearr_5629_5651 = state_5626__$1;
(statearr_5629_5651[(1)] = (8));

} else {
var statearr_5630_5652 = state_5626__$1;
(statearr_5630_5652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5627 === (1))){
var inst_5603 = (0);
var state_5626__$1 = (function (){var statearr_5631 = state_5626;
(statearr_5631[(8)] = inst_5603);

return statearr_5631;
})();
var statearr_5632_5653 = state_5626__$1;
(statearr_5632_5653[(2)] = null);

(statearr_5632_5653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5627 === (4))){
var state_5626__$1 = state_5626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5626__$1,(7),ch);
} else {
if((state_val_5627 === (6))){
var inst_5621 = (state_5626[(2)]);
var state_5626__$1 = state_5626;
var statearr_5633_5654 = state_5626__$1;
(statearr_5633_5654[(2)] = inst_5621);

(statearr_5633_5654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5627 === (3))){
var inst_5623 = (state_5626[(2)]);
var inst_5624 = cljs.core.async.close_BANG_.call(null,out);
var state_5626__$1 = (function (){var statearr_5634 = state_5626;
(statearr_5634[(9)] = inst_5623);

return statearr_5634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5626__$1,inst_5624);
} else {
if((state_val_5627 === (2))){
var inst_5603 = (state_5626[(8)]);
var inst_5605 = (inst_5603 < n);
var state_5626__$1 = state_5626;
if(cljs.core.truth_(inst_5605)){
var statearr_5635_5655 = state_5626__$1;
(statearr_5635_5655[(1)] = (4));

} else {
var statearr_5636_5656 = state_5626__$1;
(statearr_5636_5656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5627 === (11))){
var inst_5603 = (state_5626[(8)]);
var inst_5613 = (state_5626[(2)]);
var inst_5614 = (inst_5603 + (1));
var inst_5603__$1 = inst_5614;
var state_5626__$1 = (function (){var statearr_5637 = state_5626;
(statearr_5637[(8)] = inst_5603__$1);

(statearr_5637[(10)] = inst_5613);

return statearr_5637;
})();
var statearr_5638_5657 = state_5626__$1;
(statearr_5638_5657[(2)] = null);

(statearr_5638_5657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5627 === (9))){
var state_5626__$1 = state_5626;
var statearr_5639_5658 = state_5626__$1;
(statearr_5639_5658[(2)] = null);

(statearr_5639_5658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5627 === (5))){
var state_5626__$1 = state_5626;
var statearr_5640_5659 = state_5626__$1;
(statearr_5640_5659[(2)] = null);

(statearr_5640_5659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5627 === (10))){
var inst_5618 = (state_5626[(2)]);
var state_5626__$1 = state_5626;
var statearr_5641_5660 = state_5626__$1;
(statearr_5641_5660[(2)] = inst_5618);

(statearr_5641_5660[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5627 === (8))){
var inst_5608 = (state_5626[(7)]);
var state_5626__$1 = state_5626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5626__$1,(11),out,inst_5608);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___5650,out))
;
return ((function (switch__1266__auto__,c__1328__auto___5650,out){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_5645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5645[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_5645[(1)] = (1));

return statearr_5645;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_5626){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5646){if((e5646 instanceof Object)){
var ex__1270__auto__ = e5646;
var statearr_5647_5661 = state_5626;
(statearr_5647_5661[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5662 = state_5626;
state_5626 = G__5662;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_5626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_5626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___5650,out))
})();
var state__1330__auto__ = (function (){var statearr_5648 = f__1329__auto__.call(null);
(statearr_5648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___5650);

return statearr_5648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___5650,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t5670 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5670 = (function (map_LT_,f,ch,meta5671){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta5671 = meta5671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5672,meta5671__$1){
var self__ = this;
var _5672__$1 = this;
return (new cljs.core.async.t5670(self__.map_LT_,self__.f,self__.ch,meta5671__$1));
});

cljs.core.async.t5670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5672){
var self__ = this;
var _5672__$1 = this;
return self__.meta5671;
});

cljs.core.async.t5670.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t5670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t5670.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t5670.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t5670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t5673 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5673 = (function (map_LT_,f,ch,meta5671,_,fn1,meta5674){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta5671 = meta5671;
this._ = _;
this.fn1 = fn1;
this.meta5674 = meta5674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_5675,meta5674__$1){
var self__ = this;
var _5675__$1 = this;
return (new cljs.core.async.t5673(self__.map_LT_,self__.f,self__.ch,self__.meta5671,self__._,self__.fn1,meta5674__$1));
});})(___$1))
;

cljs.core.async.t5673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_5675){
var self__ = this;
var _5675__$1 = this;
return self__.meta5674;
});})(___$1))
;

cljs.core.async.t5673.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t5673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t5673.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t5673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__5663_SHARP_){
return f1.call(null,(((p1__5663_SHARP_ == null))?null:self__.f.call(null,p1__5663_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t5673.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5671","meta5671",534349574,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta5674","meta5674",974531605,null)], null);
});})(___$1))
;

cljs.core.async.t5673.cljs$lang$type = true;

cljs.core.async.t5673.cljs$lang$ctorStr = "cljs.core.async/t5673";

cljs.core.async.t5673.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t5673");
});})(___$1))
;

cljs.core.async.__GT_t5673 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t5673(map_LT___$1,f__$1,ch__$1,meta5671__$1,___$2,fn1__$1,meta5674){
return (new cljs.core.async.t5673(map_LT___$1,f__$1,ch__$1,meta5671__$1,___$2,fn1__$1,meta5674));
});})(___$1))
;

}

return (new cljs.core.async.t5673(self__.map_LT_,self__.f,self__.ch,self__.meta5671,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3362__auto__ = ret;
if(cljs.core.truth_(and__3362__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3362__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t5670.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t5670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t5670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5671","meta5671",534349574,null)], null);
});

cljs.core.async.t5670.cljs$lang$type = true;

cljs.core.async.t5670.cljs$lang$ctorStr = "cljs.core.async/t5670";

cljs.core.async.t5670.cljs$lang$ctorPrWriter = (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t5670");
});

cljs.core.async.__GT_t5670 = (function cljs$core$async$map_LT__$___GT_t5670(map_LT___$1,f__$1,ch__$1,meta5671){
return (new cljs.core.async.t5670(map_LT___$1,f__$1,ch__$1,meta5671));
});

}

return (new cljs.core.async.t5670(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t5679 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5679 = (function (map_GT_,f,ch,meta5680){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta5680 = meta5680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5681,meta5680__$1){
var self__ = this;
var _5681__$1 = this;
return (new cljs.core.async.t5679(self__.map_GT_,self__.f,self__.ch,meta5680__$1));
});

cljs.core.async.t5679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5681){
var self__ = this;
var _5681__$1 = this;
return self__.meta5680;
});

cljs.core.async.t5679.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t5679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t5679.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t5679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t5679.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t5679.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t5679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5680","meta5680",1664767521,null)], null);
});

cljs.core.async.t5679.cljs$lang$type = true;

cljs.core.async.t5679.cljs$lang$ctorStr = "cljs.core.async/t5679";

cljs.core.async.t5679.cljs$lang$ctorPrWriter = (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t5679");
});

cljs.core.async.__GT_t5679 = (function cljs$core$async$map_GT__$___GT_t5679(map_GT___$1,f__$1,ch__$1,meta5680){
return (new cljs.core.async.t5679(map_GT___$1,f__$1,ch__$1,meta5680));
});

}

return (new cljs.core.async.t5679(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t5685 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t5685 = (function (filter_GT_,p,ch,meta5686){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta5686 = meta5686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t5685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5687,meta5686__$1){
var self__ = this;
var _5687__$1 = this;
return (new cljs.core.async.t5685(self__.filter_GT_,self__.p,self__.ch,meta5686__$1));
});

cljs.core.async.t5685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5687){
var self__ = this;
var _5687__$1 = this;
return self__.meta5686;
});

cljs.core.async.t5685.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t5685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t5685.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t5685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t5685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t5685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t5685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t5685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta5686","meta5686",2093556565,null)], null);
});

cljs.core.async.t5685.cljs$lang$type = true;

cljs.core.async.t5685.cljs$lang$ctorStr = "cljs.core.async/t5685";

cljs.core.async.t5685.cljs$lang$ctorPrWriter = (function (this__3585__auto__,writer__3586__auto__,opt__3587__auto__){
return cljs.core._write.call(null,writer__3586__auto__,"cljs.core.async/t5685");
});

cljs.core.async.__GT_t5685 = (function cljs$core$async$filter_GT__$___GT_t5685(filter_GT___$1,p__$1,ch__$1,meta5686){
return (new cljs.core.async.t5685(filter_GT___$1,p__$1,ch__$1,meta5686));
});

}

return (new cljs.core.async.t5685(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__5689 = arguments.length;
switch (G__5689) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1328__auto___5732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___5732,out){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___5732,out){
return (function (state_5710){
var state_val_5711 = (state_5710[(1)]);
if((state_val_5711 === (7))){
var inst_5706 = (state_5710[(2)]);
var state_5710__$1 = state_5710;
var statearr_5712_5733 = state_5710__$1;
(statearr_5712_5733[(2)] = inst_5706);

(statearr_5712_5733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5711 === (1))){
var state_5710__$1 = state_5710;
var statearr_5713_5734 = state_5710__$1;
(statearr_5713_5734[(2)] = null);

(statearr_5713_5734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5711 === (4))){
var inst_5692 = (state_5710[(7)]);
var inst_5692__$1 = (state_5710[(2)]);
var inst_5693 = (inst_5692__$1 == null);
var state_5710__$1 = (function (){var statearr_5714 = state_5710;
(statearr_5714[(7)] = inst_5692__$1);

return statearr_5714;
})();
if(cljs.core.truth_(inst_5693)){
var statearr_5715_5735 = state_5710__$1;
(statearr_5715_5735[(1)] = (5));

} else {
var statearr_5716_5736 = state_5710__$1;
(statearr_5716_5736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5711 === (6))){
var inst_5692 = (state_5710[(7)]);
var inst_5697 = p.call(null,inst_5692);
var state_5710__$1 = state_5710;
if(cljs.core.truth_(inst_5697)){
var statearr_5717_5737 = state_5710__$1;
(statearr_5717_5737[(1)] = (8));

} else {
var statearr_5718_5738 = state_5710__$1;
(statearr_5718_5738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5711 === (3))){
var inst_5708 = (state_5710[(2)]);
var state_5710__$1 = state_5710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5710__$1,inst_5708);
} else {
if((state_val_5711 === (2))){
var state_5710__$1 = state_5710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5710__$1,(4),ch);
} else {
if((state_val_5711 === (11))){
var inst_5700 = (state_5710[(2)]);
var state_5710__$1 = state_5710;
var statearr_5719_5739 = state_5710__$1;
(statearr_5719_5739[(2)] = inst_5700);

(statearr_5719_5739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5711 === (9))){
var state_5710__$1 = state_5710;
var statearr_5720_5740 = state_5710__$1;
(statearr_5720_5740[(2)] = null);

(statearr_5720_5740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5711 === (5))){
var inst_5695 = cljs.core.async.close_BANG_.call(null,out);
var state_5710__$1 = state_5710;
var statearr_5721_5741 = state_5710__$1;
(statearr_5721_5741[(2)] = inst_5695);

(statearr_5721_5741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5711 === (10))){
var inst_5703 = (state_5710[(2)]);
var state_5710__$1 = (function (){var statearr_5722 = state_5710;
(statearr_5722[(8)] = inst_5703);

return statearr_5722;
})();
var statearr_5723_5742 = state_5710__$1;
(statearr_5723_5742[(2)] = null);

(statearr_5723_5742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5711 === (8))){
var inst_5692 = (state_5710[(7)]);
var state_5710__$1 = state_5710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5710__$1,(11),out,inst_5692);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___5732,out))
;
return ((function (switch__1266__auto__,c__1328__auto___5732,out){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_5727 = [null,null,null,null,null,null,null,null,null];
(statearr_5727[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_5727[(1)] = (1));

return statearr_5727;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_5710){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5728){if((e5728 instanceof Object)){
var ex__1270__auto__ = e5728;
var statearr_5729_5743 = state_5710;
(statearr_5729_5743[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5744 = state_5710;
state_5710 = G__5744;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_5710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_5710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___5732,out))
})();
var state__1330__auto__ = (function (){var statearr_5730 = f__1329__auto__.call(null);
(statearr_5730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___5732);

return statearr_5730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___5732,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__5746 = arguments.length;
switch (G__5746) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__1328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto__){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto__){
return (function (state_5913){
var state_val_5914 = (state_5913[(1)]);
if((state_val_5914 === (7))){
var inst_5909 = (state_5913[(2)]);
var state_5913__$1 = state_5913;
var statearr_5915_5956 = state_5913__$1;
(statearr_5915_5956[(2)] = inst_5909);

(statearr_5915_5956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (20))){
var inst_5879 = (state_5913[(7)]);
var inst_5890 = (state_5913[(2)]);
var inst_5891 = cljs.core.next.call(null,inst_5879);
var inst_5865 = inst_5891;
var inst_5866 = null;
var inst_5867 = (0);
var inst_5868 = (0);
var state_5913__$1 = (function (){var statearr_5916 = state_5913;
(statearr_5916[(8)] = inst_5867);

(statearr_5916[(9)] = inst_5890);

(statearr_5916[(10)] = inst_5868);

(statearr_5916[(11)] = inst_5866);

(statearr_5916[(12)] = inst_5865);

return statearr_5916;
})();
var statearr_5917_5957 = state_5913__$1;
(statearr_5917_5957[(2)] = null);

(statearr_5917_5957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (1))){
var state_5913__$1 = state_5913;
var statearr_5918_5958 = state_5913__$1;
(statearr_5918_5958[(2)] = null);

(statearr_5918_5958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (4))){
var inst_5854 = (state_5913[(13)]);
var inst_5854__$1 = (state_5913[(2)]);
var inst_5855 = (inst_5854__$1 == null);
var state_5913__$1 = (function (){var statearr_5919 = state_5913;
(statearr_5919[(13)] = inst_5854__$1);

return statearr_5919;
})();
if(cljs.core.truth_(inst_5855)){
var statearr_5920_5959 = state_5913__$1;
(statearr_5920_5959[(1)] = (5));

} else {
var statearr_5921_5960 = state_5913__$1;
(statearr_5921_5960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (15))){
var state_5913__$1 = state_5913;
var statearr_5925_5961 = state_5913__$1;
(statearr_5925_5961[(2)] = null);

(statearr_5925_5961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (21))){
var state_5913__$1 = state_5913;
var statearr_5926_5962 = state_5913__$1;
(statearr_5926_5962[(2)] = null);

(statearr_5926_5962[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (13))){
var inst_5867 = (state_5913[(8)]);
var inst_5868 = (state_5913[(10)]);
var inst_5866 = (state_5913[(11)]);
var inst_5865 = (state_5913[(12)]);
var inst_5875 = (state_5913[(2)]);
var inst_5876 = (inst_5868 + (1));
var tmp5922 = inst_5867;
var tmp5923 = inst_5866;
var tmp5924 = inst_5865;
var inst_5865__$1 = tmp5924;
var inst_5866__$1 = tmp5923;
var inst_5867__$1 = tmp5922;
var inst_5868__$1 = inst_5876;
var state_5913__$1 = (function (){var statearr_5927 = state_5913;
(statearr_5927[(8)] = inst_5867__$1);

(statearr_5927[(14)] = inst_5875);

(statearr_5927[(10)] = inst_5868__$1);

(statearr_5927[(11)] = inst_5866__$1);

(statearr_5927[(12)] = inst_5865__$1);

return statearr_5927;
})();
var statearr_5928_5963 = state_5913__$1;
(statearr_5928_5963[(2)] = null);

(statearr_5928_5963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (22))){
var state_5913__$1 = state_5913;
var statearr_5929_5964 = state_5913__$1;
(statearr_5929_5964[(2)] = null);

(statearr_5929_5964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (6))){
var inst_5854 = (state_5913[(13)]);
var inst_5863 = f.call(null,inst_5854);
var inst_5864 = cljs.core.seq.call(null,inst_5863);
var inst_5865 = inst_5864;
var inst_5866 = null;
var inst_5867 = (0);
var inst_5868 = (0);
var state_5913__$1 = (function (){var statearr_5930 = state_5913;
(statearr_5930[(8)] = inst_5867);

(statearr_5930[(10)] = inst_5868);

(statearr_5930[(11)] = inst_5866);

(statearr_5930[(12)] = inst_5865);

return statearr_5930;
})();
var statearr_5931_5965 = state_5913__$1;
(statearr_5931_5965[(2)] = null);

(statearr_5931_5965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (17))){
var inst_5879 = (state_5913[(7)]);
var inst_5883 = cljs.core.chunk_first.call(null,inst_5879);
var inst_5884 = cljs.core.chunk_rest.call(null,inst_5879);
var inst_5885 = cljs.core.count.call(null,inst_5883);
var inst_5865 = inst_5884;
var inst_5866 = inst_5883;
var inst_5867 = inst_5885;
var inst_5868 = (0);
var state_5913__$1 = (function (){var statearr_5932 = state_5913;
(statearr_5932[(8)] = inst_5867);

(statearr_5932[(10)] = inst_5868);

(statearr_5932[(11)] = inst_5866);

(statearr_5932[(12)] = inst_5865);

return statearr_5932;
})();
var statearr_5933_5966 = state_5913__$1;
(statearr_5933_5966[(2)] = null);

(statearr_5933_5966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (3))){
var inst_5911 = (state_5913[(2)]);
var state_5913__$1 = state_5913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5913__$1,inst_5911);
} else {
if((state_val_5914 === (12))){
var inst_5899 = (state_5913[(2)]);
var state_5913__$1 = state_5913;
var statearr_5934_5967 = state_5913__$1;
(statearr_5934_5967[(2)] = inst_5899);

(statearr_5934_5967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (2))){
var state_5913__$1 = state_5913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5913__$1,(4),in$);
} else {
if((state_val_5914 === (23))){
var inst_5907 = (state_5913[(2)]);
var state_5913__$1 = state_5913;
var statearr_5935_5968 = state_5913__$1;
(statearr_5935_5968[(2)] = inst_5907);

(statearr_5935_5968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (19))){
var inst_5894 = (state_5913[(2)]);
var state_5913__$1 = state_5913;
var statearr_5936_5969 = state_5913__$1;
(statearr_5936_5969[(2)] = inst_5894);

(statearr_5936_5969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (11))){
var inst_5879 = (state_5913[(7)]);
var inst_5865 = (state_5913[(12)]);
var inst_5879__$1 = cljs.core.seq.call(null,inst_5865);
var state_5913__$1 = (function (){var statearr_5937 = state_5913;
(statearr_5937[(7)] = inst_5879__$1);

return statearr_5937;
})();
if(inst_5879__$1){
var statearr_5938_5970 = state_5913__$1;
(statearr_5938_5970[(1)] = (14));

} else {
var statearr_5939_5971 = state_5913__$1;
(statearr_5939_5971[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (9))){
var inst_5901 = (state_5913[(2)]);
var inst_5902 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_5913__$1 = (function (){var statearr_5940 = state_5913;
(statearr_5940[(15)] = inst_5901);

return statearr_5940;
})();
if(cljs.core.truth_(inst_5902)){
var statearr_5941_5972 = state_5913__$1;
(statearr_5941_5972[(1)] = (21));

} else {
var statearr_5942_5973 = state_5913__$1;
(statearr_5942_5973[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (5))){
var inst_5857 = cljs.core.async.close_BANG_.call(null,out);
var state_5913__$1 = state_5913;
var statearr_5943_5974 = state_5913__$1;
(statearr_5943_5974[(2)] = inst_5857);

(statearr_5943_5974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (14))){
var inst_5879 = (state_5913[(7)]);
var inst_5881 = cljs.core.chunked_seq_QMARK_.call(null,inst_5879);
var state_5913__$1 = state_5913;
if(inst_5881){
var statearr_5944_5975 = state_5913__$1;
(statearr_5944_5975[(1)] = (17));

} else {
var statearr_5945_5976 = state_5913__$1;
(statearr_5945_5976[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (16))){
var inst_5897 = (state_5913[(2)]);
var state_5913__$1 = state_5913;
var statearr_5946_5977 = state_5913__$1;
(statearr_5946_5977[(2)] = inst_5897);

(statearr_5946_5977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5914 === (10))){
var inst_5868 = (state_5913[(10)]);
var inst_5866 = (state_5913[(11)]);
var inst_5873 = cljs.core._nth.call(null,inst_5866,inst_5868);
var state_5913__$1 = state_5913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5913__$1,(13),out,inst_5873);
} else {
if((state_val_5914 === (18))){
var inst_5879 = (state_5913[(7)]);
var inst_5888 = cljs.core.first.call(null,inst_5879);
var state_5913__$1 = state_5913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5913__$1,(20),out,inst_5888);
} else {
if((state_val_5914 === (8))){
var inst_5867 = (state_5913[(8)]);
var inst_5868 = (state_5913[(10)]);
var inst_5870 = (inst_5868 < inst_5867);
var inst_5871 = inst_5870;
var state_5913__$1 = state_5913;
if(cljs.core.truth_(inst_5871)){
var statearr_5947_5978 = state_5913__$1;
(statearr_5947_5978[(1)] = (10));

} else {
var statearr_5948_5979 = state_5913__$1;
(statearr_5948_5979[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto__))
;
return ((function (switch__1266__auto__,c__1328__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____0 = (function (){
var statearr_5952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5952[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__);

(statearr_5952[(1)] = (1));

return statearr_5952;
});
var cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____1 = (function (state_5913){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_5913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e5953){if((e5953 instanceof Object)){
var ex__1270__auto__ = e5953;
var statearr_5954_5980 = state_5913;
(statearr_5954_5980[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5981 = state_5913;
state_5913 = G__5981;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__ = function(state_5913){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____1.call(this,state_5913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__1267__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto__))
})();
var state__1330__auto__ = (function (){var statearr_5955 = f__1329__auto__.call(null);
(statearr_5955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto__);

return statearr_5955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto__))
);

return c__1328__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__5983 = arguments.length;
switch (G__5983) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__5986 = arguments.length;
switch (G__5986) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__5989 = arguments.length;
switch (G__5989) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1328__auto___6039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___6039,out){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___6039,out){
return (function (state_6013){
var state_val_6014 = (state_6013[(1)]);
if((state_val_6014 === (7))){
var inst_6008 = (state_6013[(2)]);
var state_6013__$1 = state_6013;
var statearr_6015_6040 = state_6013__$1;
(statearr_6015_6040[(2)] = inst_6008);

(statearr_6015_6040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6014 === (1))){
var inst_5990 = null;
var state_6013__$1 = (function (){var statearr_6016 = state_6013;
(statearr_6016[(7)] = inst_5990);

return statearr_6016;
})();
var statearr_6017_6041 = state_6013__$1;
(statearr_6017_6041[(2)] = null);

(statearr_6017_6041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6014 === (4))){
var inst_5993 = (state_6013[(8)]);
var inst_5993__$1 = (state_6013[(2)]);
var inst_5994 = (inst_5993__$1 == null);
var inst_5995 = cljs.core.not.call(null,inst_5994);
var state_6013__$1 = (function (){var statearr_6018 = state_6013;
(statearr_6018[(8)] = inst_5993__$1);

return statearr_6018;
})();
if(inst_5995){
var statearr_6019_6042 = state_6013__$1;
(statearr_6019_6042[(1)] = (5));

} else {
var statearr_6020_6043 = state_6013__$1;
(statearr_6020_6043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6014 === (6))){
var state_6013__$1 = state_6013;
var statearr_6021_6044 = state_6013__$1;
(statearr_6021_6044[(2)] = null);

(statearr_6021_6044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6014 === (3))){
var inst_6010 = (state_6013[(2)]);
var inst_6011 = cljs.core.async.close_BANG_.call(null,out);
var state_6013__$1 = (function (){var statearr_6022 = state_6013;
(statearr_6022[(9)] = inst_6010);

return statearr_6022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6013__$1,inst_6011);
} else {
if((state_val_6014 === (2))){
var state_6013__$1 = state_6013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6013__$1,(4),ch);
} else {
if((state_val_6014 === (11))){
var inst_5993 = (state_6013[(8)]);
var inst_6002 = (state_6013[(2)]);
var inst_5990 = inst_5993;
var state_6013__$1 = (function (){var statearr_6023 = state_6013;
(statearr_6023[(10)] = inst_6002);

(statearr_6023[(7)] = inst_5990);

return statearr_6023;
})();
var statearr_6024_6045 = state_6013__$1;
(statearr_6024_6045[(2)] = null);

(statearr_6024_6045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6014 === (9))){
var inst_5993 = (state_6013[(8)]);
var state_6013__$1 = state_6013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6013__$1,(11),out,inst_5993);
} else {
if((state_val_6014 === (5))){
var inst_5993 = (state_6013[(8)]);
var inst_5990 = (state_6013[(7)]);
var inst_5997 = cljs.core._EQ_.call(null,inst_5993,inst_5990);
var state_6013__$1 = state_6013;
if(inst_5997){
var statearr_6026_6046 = state_6013__$1;
(statearr_6026_6046[(1)] = (8));

} else {
var statearr_6027_6047 = state_6013__$1;
(statearr_6027_6047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6014 === (10))){
var inst_6005 = (state_6013[(2)]);
var state_6013__$1 = state_6013;
var statearr_6028_6048 = state_6013__$1;
(statearr_6028_6048[(2)] = inst_6005);

(statearr_6028_6048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6014 === (8))){
var inst_5990 = (state_6013[(7)]);
var tmp6025 = inst_5990;
var inst_5990__$1 = tmp6025;
var state_6013__$1 = (function (){var statearr_6029 = state_6013;
(statearr_6029[(7)] = inst_5990__$1);

return statearr_6029;
})();
var statearr_6030_6049 = state_6013__$1;
(statearr_6030_6049[(2)] = null);

(statearr_6030_6049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___6039,out))
;
return ((function (switch__1266__auto__,c__1328__auto___6039,out){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_6034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_6034[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_6034[(1)] = (1));

return statearr_6034;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_6013){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6035){if((e6035 instanceof Object)){
var ex__1270__auto__ = e6035;
var statearr_6036_6050 = state_6013;
(statearr_6036_6050[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6051 = state_6013;
state_6013 = G__6051;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_6013){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_6013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___6039,out))
})();
var state__1330__auto__ = (function (){var statearr_6037 = f__1329__auto__.call(null);
(statearr_6037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___6039);

return statearr_6037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___6039,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__6053 = arguments.length;
switch (G__6053) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1328__auto___6122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___6122,out){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___6122,out){
return (function (state_6091){
var state_val_6092 = (state_6091[(1)]);
if((state_val_6092 === (7))){
var inst_6087 = (state_6091[(2)]);
var state_6091__$1 = state_6091;
var statearr_6093_6123 = state_6091__$1;
(statearr_6093_6123[(2)] = inst_6087);

(statearr_6093_6123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (1))){
var inst_6054 = (new Array(n));
var inst_6055 = inst_6054;
var inst_6056 = (0);
var state_6091__$1 = (function (){var statearr_6094 = state_6091;
(statearr_6094[(7)] = inst_6055);

(statearr_6094[(8)] = inst_6056);

return statearr_6094;
})();
var statearr_6095_6124 = state_6091__$1;
(statearr_6095_6124[(2)] = null);

(statearr_6095_6124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (4))){
var inst_6059 = (state_6091[(9)]);
var inst_6059__$1 = (state_6091[(2)]);
var inst_6060 = (inst_6059__$1 == null);
var inst_6061 = cljs.core.not.call(null,inst_6060);
var state_6091__$1 = (function (){var statearr_6096 = state_6091;
(statearr_6096[(9)] = inst_6059__$1);

return statearr_6096;
})();
if(inst_6061){
var statearr_6097_6125 = state_6091__$1;
(statearr_6097_6125[(1)] = (5));

} else {
var statearr_6098_6126 = state_6091__$1;
(statearr_6098_6126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (15))){
var inst_6081 = (state_6091[(2)]);
var state_6091__$1 = state_6091;
var statearr_6099_6127 = state_6091__$1;
(statearr_6099_6127[(2)] = inst_6081);

(statearr_6099_6127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (13))){
var state_6091__$1 = state_6091;
var statearr_6100_6128 = state_6091__$1;
(statearr_6100_6128[(2)] = null);

(statearr_6100_6128[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (6))){
var inst_6056 = (state_6091[(8)]);
var inst_6077 = (inst_6056 > (0));
var state_6091__$1 = state_6091;
if(cljs.core.truth_(inst_6077)){
var statearr_6101_6129 = state_6091__$1;
(statearr_6101_6129[(1)] = (12));

} else {
var statearr_6102_6130 = state_6091__$1;
(statearr_6102_6130[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (3))){
var inst_6089 = (state_6091[(2)]);
var state_6091__$1 = state_6091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6091__$1,inst_6089);
} else {
if((state_val_6092 === (12))){
var inst_6055 = (state_6091[(7)]);
var inst_6079 = cljs.core.vec.call(null,inst_6055);
var state_6091__$1 = state_6091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6091__$1,(15),out,inst_6079);
} else {
if((state_val_6092 === (2))){
var state_6091__$1 = state_6091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6091__$1,(4),ch);
} else {
if((state_val_6092 === (11))){
var inst_6071 = (state_6091[(2)]);
var inst_6072 = (new Array(n));
var inst_6055 = inst_6072;
var inst_6056 = (0);
var state_6091__$1 = (function (){var statearr_6103 = state_6091;
(statearr_6103[(7)] = inst_6055);

(statearr_6103[(10)] = inst_6071);

(statearr_6103[(8)] = inst_6056);

return statearr_6103;
})();
var statearr_6104_6131 = state_6091__$1;
(statearr_6104_6131[(2)] = null);

(statearr_6104_6131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (9))){
var inst_6055 = (state_6091[(7)]);
var inst_6069 = cljs.core.vec.call(null,inst_6055);
var state_6091__$1 = state_6091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6091__$1,(11),out,inst_6069);
} else {
if((state_val_6092 === (5))){
var inst_6055 = (state_6091[(7)]);
var inst_6059 = (state_6091[(9)]);
var inst_6064 = (state_6091[(11)]);
var inst_6056 = (state_6091[(8)]);
var inst_6063 = (inst_6055[inst_6056] = inst_6059);
var inst_6064__$1 = (inst_6056 + (1));
var inst_6065 = (inst_6064__$1 < n);
var state_6091__$1 = (function (){var statearr_6105 = state_6091;
(statearr_6105[(11)] = inst_6064__$1);

(statearr_6105[(12)] = inst_6063);

return statearr_6105;
})();
if(cljs.core.truth_(inst_6065)){
var statearr_6106_6132 = state_6091__$1;
(statearr_6106_6132[(1)] = (8));

} else {
var statearr_6107_6133 = state_6091__$1;
(statearr_6107_6133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (14))){
var inst_6084 = (state_6091[(2)]);
var inst_6085 = cljs.core.async.close_BANG_.call(null,out);
var state_6091__$1 = (function (){var statearr_6109 = state_6091;
(statearr_6109[(13)] = inst_6084);

return statearr_6109;
})();
var statearr_6110_6134 = state_6091__$1;
(statearr_6110_6134[(2)] = inst_6085);

(statearr_6110_6134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (10))){
var inst_6075 = (state_6091[(2)]);
var state_6091__$1 = state_6091;
var statearr_6111_6135 = state_6091__$1;
(statearr_6111_6135[(2)] = inst_6075);

(statearr_6111_6135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6092 === (8))){
var inst_6055 = (state_6091[(7)]);
var inst_6064 = (state_6091[(11)]);
var tmp6108 = inst_6055;
var inst_6055__$1 = tmp6108;
var inst_6056 = inst_6064;
var state_6091__$1 = (function (){var statearr_6112 = state_6091;
(statearr_6112[(7)] = inst_6055__$1);

(statearr_6112[(8)] = inst_6056);

return statearr_6112;
})();
var statearr_6113_6136 = state_6091__$1;
(statearr_6113_6136[(2)] = null);

(statearr_6113_6136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___6122,out))
;
return ((function (switch__1266__auto__,c__1328__auto___6122,out){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_6117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6117[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_6117[(1)] = (1));

return statearr_6117;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_6091){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6118){if((e6118 instanceof Object)){
var ex__1270__auto__ = e6118;
var statearr_6119_6137 = state_6091;
(statearr_6119_6137[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6138 = state_6091;
state_6091 = G__6138;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_6091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_6091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___6122,out))
})();
var state__1330__auto__ = (function (){var statearr_6120 = f__1329__auto__.call(null);
(statearr_6120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___6122);

return statearr_6120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___6122,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__6140 = arguments.length;
switch (G__6140) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__1328__auto___6213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___6213,out){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___6213,out){
return (function (state_6182){
var state_val_6183 = (state_6182[(1)]);
if((state_val_6183 === (7))){
var inst_6178 = (state_6182[(2)]);
var state_6182__$1 = state_6182;
var statearr_6184_6214 = state_6182__$1;
(statearr_6184_6214[(2)] = inst_6178);

(statearr_6184_6214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (1))){
var inst_6141 = [];
var inst_6142 = inst_6141;
var inst_6143 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_6182__$1 = (function (){var statearr_6185 = state_6182;
(statearr_6185[(7)] = inst_6143);

(statearr_6185[(8)] = inst_6142);

return statearr_6185;
})();
var statearr_6186_6215 = state_6182__$1;
(statearr_6186_6215[(2)] = null);

(statearr_6186_6215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (4))){
var inst_6146 = (state_6182[(9)]);
var inst_6146__$1 = (state_6182[(2)]);
var inst_6147 = (inst_6146__$1 == null);
var inst_6148 = cljs.core.not.call(null,inst_6147);
var state_6182__$1 = (function (){var statearr_6187 = state_6182;
(statearr_6187[(9)] = inst_6146__$1);

return statearr_6187;
})();
if(inst_6148){
var statearr_6188_6216 = state_6182__$1;
(statearr_6188_6216[(1)] = (5));

} else {
var statearr_6189_6217 = state_6182__$1;
(statearr_6189_6217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (15))){
var inst_6172 = (state_6182[(2)]);
var state_6182__$1 = state_6182;
var statearr_6190_6218 = state_6182__$1;
(statearr_6190_6218[(2)] = inst_6172);

(statearr_6190_6218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (13))){
var state_6182__$1 = state_6182;
var statearr_6191_6219 = state_6182__$1;
(statearr_6191_6219[(2)] = null);

(statearr_6191_6219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (6))){
var inst_6142 = (state_6182[(8)]);
var inst_6167 = inst_6142.length;
var inst_6168 = (inst_6167 > (0));
var state_6182__$1 = state_6182;
if(cljs.core.truth_(inst_6168)){
var statearr_6192_6220 = state_6182__$1;
(statearr_6192_6220[(1)] = (12));

} else {
var statearr_6193_6221 = state_6182__$1;
(statearr_6193_6221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (3))){
var inst_6180 = (state_6182[(2)]);
var state_6182__$1 = state_6182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6182__$1,inst_6180);
} else {
if((state_val_6183 === (12))){
var inst_6142 = (state_6182[(8)]);
var inst_6170 = cljs.core.vec.call(null,inst_6142);
var state_6182__$1 = state_6182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6182__$1,(15),out,inst_6170);
} else {
if((state_val_6183 === (2))){
var state_6182__$1 = state_6182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6182__$1,(4),ch);
} else {
if((state_val_6183 === (11))){
var inst_6146 = (state_6182[(9)]);
var inst_6150 = (state_6182[(10)]);
var inst_6160 = (state_6182[(2)]);
var inst_6161 = [];
var inst_6162 = inst_6161.push(inst_6146);
var inst_6142 = inst_6161;
var inst_6143 = inst_6150;
var state_6182__$1 = (function (){var statearr_6194 = state_6182;
(statearr_6194[(11)] = inst_6162);

(statearr_6194[(7)] = inst_6143);

(statearr_6194[(8)] = inst_6142);

(statearr_6194[(12)] = inst_6160);

return statearr_6194;
})();
var statearr_6195_6222 = state_6182__$1;
(statearr_6195_6222[(2)] = null);

(statearr_6195_6222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (9))){
var inst_6142 = (state_6182[(8)]);
var inst_6158 = cljs.core.vec.call(null,inst_6142);
var state_6182__$1 = state_6182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6182__$1,(11),out,inst_6158);
} else {
if((state_val_6183 === (5))){
var inst_6146 = (state_6182[(9)]);
var inst_6150 = (state_6182[(10)]);
var inst_6143 = (state_6182[(7)]);
var inst_6150__$1 = f.call(null,inst_6146);
var inst_6151 = cljs.core._EQ_.call(null,inst_6150__$1,inst_6143);
var inst_6152 = cljs.core.keyword_identical_QMARK_.call(null,inst_6143,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_6153 = (inst_6151) || (inst_6152);
var state_6182__$1 = (function (){var statearr_6196 = state_6182;
(statearr_6196[(10)] = inst_6150__$1);

return statearr_6196;
})();
if(cljs.core.truth_(inst_6153)){
var statearr_6197_6223 = state_6182__$1;
(statearr_6197_6223[(1)] = (8));

} else {
var statearr_6198_6224 = state_6182__$1;
(statearr_6198_6224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (14))){
var inst_6175 = (state_6182[(2)]);
var inst_6176 = cljs.core.async.close_BANG_.call(null,out);
var state_6182__$1 = (function (){var statearr_6200 = state_6182;
(statearr_6200[(13)] = inst_6175);

return statearr_6200;
})();
var statearr_6201_6225 = state_6182__$1;
(statearr_6201_6225[(2)] = inst_6176);

(statearr_6201_6225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (10))){
var inst_6165 = (state_6182[(2)]);
var state_6182__$1 = state_6182;
var statearr_6202_6226 = state_6182__$1;
(statearr_6202_6226[(2)] = inst_6165);

(statearr_6202_6226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6183 === (8))){
var inst_6146 = (state_6182[(9)]);
var inst_6150 = (state_6182[(10)]);
var inst_6142 = (state_6182[(8)]);
var inst_6155 = inst_6142.push(inst_6146);
var tmp6199 = inst_6142;
var inst_6142__$1 = tmp6199;
var inst_6143 = inst_6150;
var state_6182__$1 = (function (){var statearr_6203 = state_6182;
(statearr_6203[(14)] = inst_6155);

(statearr_6203[(7)] = inst_6143);

(statearr_6203[(8)] = inst_6142__$1);

return statearr_6203;
})();
var statearr_6204_6227 = state_6182__$1;
(statearr_6204_6227[(2)] = null);

(statearr_6204_6227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__1328__auto___6213,out))
;
return ((function (switch__1266__auto__,c__1328__auto___6213,out){
return (function() {
var cljs$core$async$state_machine__1267__auto__ = null;
var cljs$core$async$state_machine__1267__auto____0 = (function (){
var statearr_6208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6208[(0)] = cljs$core$async$state_machine__1267__auto__);

(statearr_6208[(1)] = (1));

return statearr_6208;
});
var cljs$core$async$state_machine__1267__auto____1 = (function (state_6182){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_6182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e6209){if((e6209 instanceof Object)){
var ex__1270__auto__ = e6209;
var statearr_6210_6228 = state_6182;
(statearr_6210_6228[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6229 = state_6182;
state_6182 = G__6229;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
cljs$core$async$state_machine__1267__auto__ = function(state_6182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__1267__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__1267__auto____1.call(this,state_6182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__1267__auto____0;
cljs$core$async$state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__1267__auto____1;
return cljs$core$async$state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___6213,out))
})();
var state__1330__auto__ = (function (){var statearr_6211 = f__1329__auto__.call(null);
(statearr_6211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___6213);

return statearr_6211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___6213,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map