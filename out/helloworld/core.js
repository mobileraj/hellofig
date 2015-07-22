// Compiled by ClojureScript 0.0-3308 {:target :nodejs}
goog.provide('helloworld.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
if(typeof helloworld.core.express !== 'undefined'){
} else {
helloworld.core.express = cljs.nodejs.require.call(null,"express");
}
helloworld.core.say_hello2 = cljs.core.async.chan.call(null);
if(typeof helloworld.core.serve_static !== 'undefined'){
} else {
helloworld.core.serve_static = cljs.nodejs.require.call(null,"serve-static");
}
if(typeof helloworld.core.http !== 'undefined'){
} else {
helloworld.core.http = cljs.nodejs.require.call(null,"http");
}
helloworld.core.js_request = cljs.nodejs.require.call(null,"request");
helloworld.core.request = (function helloworld$core$request(url_or_opts,callback){
return helloworld.core.js_request.call(null,cljs.core.clj__GT_js.call(null,url_or_opts),callback);
});
helloworld.core.jsp_rows = (function helloworld$core$jsp_rows(str){
return JSON.parse(str).rows;
});
helloworld.core.cl_rows = (function helloworld$core$cl_rows(str){
return cljs.core.js__GT_clj.call(null,JSON.parse(str).rows,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
helloworld.core.app = helloworld.core.express.call(null);
helloworld.core.say_hello_BANG_ = (function helloworld$core$say_hello_BANG_(req,res){
return helloworld.core.request.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"https://mobileraj:p4ssw0rd@mobileraj.cloudant.com/sent_merchants/_design/SpatialView/_geo/merchants?radius=1800&lat=30.25685&lon=-97.76659&relation=contains&include_docs=true\n"], null),(function (error,response,body){
if((cljs.core.not.call(null,error)) && (cljs.core._EQ_.call(null,(200),response.statusCode))){
return res.send(cljs.core.mapv.call(null,(function (col){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(col);
}),helloworld.core.cl_rows.call(null,body)));
} else {
return null;
}
}));
});
helloworld.core.say_hello1_BANG_ = (function helloworld$core$say_hello1_BANG_(req,res){
var cld = cljs.core.async.chan.call(null);
helloworld.core.request.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"GET",new cljs.core.Keyword(null,"uri","uri",-774711847),"https://mobileraj:p4ssw0rd@mobileraj.cloudant.com/sent_merchants/_design/SpatialView/_geo/merchants?radius=1800&lat=30.25685&lon=-97.76659&relation=contains&include_docs=true\n"], null),((function (cld){
return (function (error,response,body){
if((cljs.core.not.call(null,error)) && (cljs.core._EQ_.call(null,(200),response.statusCode))){
var c__1328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto__,cld){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto__,cld){
return (function (state_3542){
var state_val_3543 = (state_3542[(1)]);
if((state_val_3543 === (1))){
var inst_3536 = (function (){return ((function (state_val_3543,c__1328__auto__,cld){
return (function (col){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(col));
});
;})(state_val_3543,c__1328__auto__,cld))
})();
var inst_3537 = helloworld.core.cl_rows.call(null,body);
var inst_3538 = cljs.core.mapv.call(null,inst_3536,inst_3537);
var state_3542__$1 = state_3542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3542__$1,(2),cld,inst_3538);
} else {
if((state_val_3543 === (2))){
var inst_3540 = (state_3542[(2)]);
var state_3542__$1 = state_3542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3542__$1,inst_3540);
} else {
return null;
}
}
});})(c__1328__auto__,cld))
;
return ((function (switch__1266__auto__,c__1328__auto__,cld){
return (function() {
var helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__ = null;
var helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____0 = (function (){
var statearr_3547 = [null,null,null,null,null,null,null];
(statearr_3547[(0)] = helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__);

(statearr_3547[(1)] = (1));

return statearr_3547;
});
var helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____1 = (function (state_3542){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_3542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e3548){if((e3548 instanceof Object)){
var ex__1270__auto__ = e3548;
var statearr_3549_3580 = state_3542;
(statearr_3549_3580[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3581 = state_3542;
state_3542 = G__3581;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__ = function(state_3542){
switch(arguments.length){
case 0:
return helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____0.call(this);
case 1:
return helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____1.call(this,state_3542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____0;
helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____1;
return helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto__,cld))
})();
var state__1330__auto__ = (function (){var statearr_3550 = f__1329__auto__.call(null);
(statearr_3550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto__);

return statearr_3550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto__,cld))
);

return c__1328__auto__;
} else {
return null;
}
});})(cld))
);

var c__1328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto__,cld){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto__,cld){
return (function (state_3564){
var state_val_3565 = (state_3564[(1)]);
if((state_val_3565 === (1))){
var state_3564__$1 = state_3564;
var statearr_3566_3582 = state_3564__$1;
(statearr_3566_3582[(2)] = null);

(statearr_3566_3582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3565 === (2))){
var state_3564__$1 = state_3564;
var statearr_3567_3583 = state_3564__$1;
(statearr_3567_3583[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3565 === (3))){
var inst_3562 = (state_3564[(2)]);
var state_3564__$1 = state_3564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3564__$1,inst_3562);
} else {
if((state_val_3565 === (4))){
var state_3564__$1 = state_3564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3564__$1,(7),cld);
} else {
if((state_val_3565 === (5))){
var state_3564__$1 = state_3564;
var statearr_3569_3584 = state_3564__$1;
(statearr_3569_3584[(2)] = null);

(statearr_3569_3584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3565 === (6))){
var inst_3560 = (state_3564[(2)]);
var state_3564__$1 = state_3564;
var statearr_3570_3585 = state_3564__$1;
(statearr_3570_3585[(2)] = inst_3560);

(statearr_3570_3585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3565 === (7))){
var inst_3554 = (state_3564[(2)]);
var inst_3555 = cljs.core.clj__GT_js.call(null,inst_3554);
var inst_3556 = res.send(inst_3555);
var state_3564__$1 = (function (){var statearr_3571 = state_3564;
(statearr_3571[(7)] = inst_3556);

return statearr_3571;
})();
var statearr_3572_3586 = state_3564__$1;
(statearr_3572_3586[(2)] = null);

(statearr_3572_3586[(1)] = (2));


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
});})(c__1328__auto__,cld))
;
return ((function (switch__1266__auto__,c__1328__auto__,cld){
return (function() {
var helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__ = null;
var helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____0 = (function (){
var statearr_3576 = [null,null,null,null,null,null,null,null];
(statearr_3576[(0)] = helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__);

(statearr_3576[(1)] = (1));

return statearr_3576;
});
var helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____1 = (function (state_3564){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_3564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e3577){if((e3577 instanceof Object)){
var ex__1270__auto__ = e3577;
var statearr_3578_3587 = state_3564;
(statearr_3578_3587[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3588 = state_3564;
state_3564 = G__3588;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__ = function(state_3564){
switch(arguments.length){
case 0:
return helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____0.call(this);
case 1:
return helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____1.call(this,state_3564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____0;
helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = helloworld$core$say_hello1_BANG__$_state_machine__1267__auto____1;
return helloworld$core$say_hello1_BANG__$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto__,cld))
})();
var state__1330__auto__ = (function (){var statearr_3579 = f__1329__auto__.call(null);
(statearr_3579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto__);

return statearr_3579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto__,cld))
);

return c__1328__auto__;
});
helloworld.core.hellow = (function helloworld$core$hellow(req,res){
var say_hello2 = cljs.core.async.chan.call(null);
var c__1328__auto___3681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto___3681,say_hello2){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto___3681,say_hello2){
return (function (state_3641){
var state_val_3642 = (state_3641[(1)]);
if((state_val_3642 === (1))){
var inst_3635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3636 = [req,res];
var inst_3637 = (new cljs.core.PersistentVector(null,2,(5),inst_3635,inst_3636,null));
var state_3641__$1 = state_3641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3641__$1,(2),say_hello2,inst_3637);
} else {
if((state_val_3642 === (2))){
var inst_3639 = (state_3641[(2)]);
var state_3641__$1 = state_3641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3641__$1,inst_3639);
} else {
return null;
}
}
});})(c__1328__auto___3681,say_hello2))
;
return ((function (switch__1266__auto__,c__1328__auto___3681,say_hello2){
return (function() {
var helloworld$core$hellow_$_state_machine__1267__auto__ = null;
var helloworld$core$hellow_$_state_machine__1267__auto____0 = (function (){
var statearr_3646 = [null,null,null,null,null,null,null];
(statearr_3646[(0)] = helloworld$core$hellow_$_state_machine__1267__auto__);

(statearr_3646[(1)] = (1));

return statearr_3646;
});
var helloworld$core$hellow_$_state_machine__1267__auto____1 = (function (state_3641){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_3641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e3647){if((e3647 instanceof Object)){
var ex__1270__auto__ = e3647;
var statearr_3648_3682 = state_3641;
(statearr_3648_3682[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3683 = state_3641;
state_3641 = G__3683;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
helloworld$core$hellow_$_state_machine__1267__auto__ = function(state_3641){
switch(arguments.length){
case 0:
return helloworld$core$hellow_$_state_machine__1267__auto____0.call(this);
case 1:
return helloworld$core$hellow_$_state_machine__1267__auto____1.call(this,state_3641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
helloworld$core$hellow_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = helloworld$core$hellow_$_state_machine__1267__auto____0;
helloworld$core$hellow_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = helloworld$core$hellow_$_state_machine__1267__auto____1;
return helloworld$core$hellow_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto___3681,say_hello2))
})();
var state__1330__auto__ = (function (){var statearr_3649 = f__1329__auto__.call(null);
(statearr_3649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto___3681);

return statearr_3649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto___3681,say_hello2))
);


var c__1328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__1328__auto__,say_hello2){
return (function (){
var f__1329__auto__ = (function (){var switch__1266__auto__ = ((function (c__1328__auto__,say_hello2){
return (function (state_3665){
var state_val_3666 = (state_3665[(1)]);
if((state_val_3666 === (1))){
var state_3665__$1 = state_3665;
var statearr_3667_3684 = state_3665__$1;
(statearr_3667_3684[(2)] = null);

(statearr_3667_3684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3666 === (2))){
var state_3665__$1 = state_3665;
var statearr_3668_3685 = state_3665__$1;
(statearr_3668_3685[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3666 === (3))){
var inst_3663 = (state_3665[(2)]);
var state_3665__$1 = state_3665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3665__$1,inst_3663);
} else {
if((state_val_3666 === (4))){
var state_3665__$1 = state_3665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3665__$1,(7),say_hello2);
} else {
if((state_val_3666 === (5))){
var state_3665__$1 = state_3665;
var statearr_3670_3686 = state_3665__$1;
(statearr_3670_3686[(2)] = null);

(statearr_3670_3686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3666 === (6))){
var inst_3661 = (state_3665[(2)]);
var state_3665__$1 = state_3665;
var statearr_3671_3687 = state_3665__$1;
(statearr_3671_3687[(2)] = inst_3661);

(statearr_3671_3687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3666 === (7))){
var inst_3654 = (state_3665[(2)]);
var inst_3655 = cljs.core.nth.call(null,inst_3654,(0),null);
var inst_3656 = cljs.core.nth.call(null,inst_3654,(1),null);
var inst_3657 = inst_3656.send("Hello sailor!!");
var state_3665__$1 = (function (){var statearr_3672 = state_3665;
(statearr_3672[(7)] = inst_3657);

(statearr_3672[(8)] = inst_3655);

return statearr_3672;
})();
var statearr_3673_3688 = state_3665__$1;
(statearr_3673_3688[(2)] = null);

(statearr_3673_3688[(1)] = (2));


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
});})(c__1328__auto__,say_hello2))
;
return ((function (switch__1266__auto__,c__1328__auto__,say_hello2){
return (function() {
var helloworld$core$hellow_$_state_machine__1267__auto__ = null;
var helloworld$core$hellow_$_state_machine__1267__auto____0 = (function (){
var statearr_3677 = [null,null,null,null,null,null,null,null,null];
(statearr_3677[(0)] = helloworld$core$hellow_$_state_machine__1267__auto__);

(statearr_3677[(1)] = (1));

return statearr_3677;
});
var helloworld$core$hellow_$_state_machine__1267__auto____1 = (function (state_3665){
while(true){
var ret_value__1268__auto__ = (function (){try{while(true){
var result__1269__auto__ = switch__1266__auto__.call(null,state_3665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__1269__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__1269__auto__;
}
break;
}
}catch (e3678){if((e3678 instanceof Object)){
var ex__1270__auto__ = e3678;
var statearr_3679_3689 = state_3665;
(statearr_3679_3689[(5)] = ex__1270__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__1268__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3690 = state_3665;
state_3665 = G__3690;
continue;
} else {
return ret_value__1268__auto__;
}
break;
}
});
helloworld$core$hellow_$_state_machine__1267__auto__ = function(state_3665){
switch(arguments.length){
case 0:
return helloworld$core$hellow_$_state_machine__1267__auto____0.call(this);
case 1:
return helloworld$core$hellow_$_state_machine__1267__auto____1.call(this,state_3665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
helloworld$core$hellow_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$0 = helloworld$core$hellow_$_state_machine__1267__auto____0;
helloworld$core$hellow_$_state_machine__1267__auto__.cljs$core$IFn$_invoke$arity$1 = helloworld$core$hellow_$_state_machine__1267__auto____1;
return helloworld$core$hellow_$_state_machine__1267__auto__;
})()
;})(switch__1266__auto__,c__1328__auto__,say_hello2))
})();
var state__1330__auto__ = (function (){var statearr_3680 = f__1329__auto__.call(null);
(statearr_3680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__1328__auto__);

return statearr_3680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__1330__auto__);
});})(c__1328__auto__,say_hello2))
);

return c__1328__auto__;
});
helloworld.core.app.get("/hello",helloworld.core.say_hello1_BANG_);
helloworld.core.app.use(helloworld.core.serve_static.call(null,"resources/public",{"index": "index.html"}));
helloworld.core._main = (function helloworld$core$_main(){
var G__3694 = helloworld.core.http.createServer((function (p1__3691_SHARP_,p2__3692_SHARP_){
return helloworld.core.app.call(null,p1__3691_SHARP_,p2__3692_SHARP_);
}));
G__3694.listen((3000));

return G__3694;
});
cljs.core._STAR_main_cli_fn_STAR_ = helloworld.core._main;

//# sourceMappingURL=core.js.map