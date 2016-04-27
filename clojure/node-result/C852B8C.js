goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8284__i = 0, G__8284__a = new Array(arguments.length -  0);
while (G__8284__i < G__8284__a.length) {G__8284__a[G__8284__i] = arguments[G__8284__i + 0]; ++G__8284__i;}
  args = new cljs.core.IndexedSeq(G__8284__a,0);
} 
return G__8283__delegate.call(this,args);};
G__8283.cljs$lang$maxFixedArity = 0;
G__8283.cljs$lang$applyTo = (function (arglist__8285){
var args = cljs.core.seq(arglist__8285);
return G__8283__delegate(args);
});
G__8283.cljs$core$IFn$_invoke$arity$variadic = G__8283__delegate;
return G__8283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8287__i = 0, G__8287__a = new Array(arguments.length -  0);
while (G__8287__i < G__8287__a.length) {G__8287__a[G__8287__i] = arguments[G__8287__i + 0]; ++G__8287__i;}
  args = new cljs.core.IndexedSeq(G__8287__a,0);
} 
return G__8286__delegate.call(this,args);};
G__8286.cljs$lang$maxFixedArity = 0;
G__8286.cljs$lang$applyTo = (function (arglist__8288){
var args = cljs.core.seq(arglist__8288);
return G__8286__delegate(args);
});
G__8286.cljs$core$IFn$_invoke$arity$variadic = G__8286__delegate;
return G__8286;
})()
;

return null;
});
