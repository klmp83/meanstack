goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8560__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8560 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8561__i = 0, G__8561__a = new Array(arguments.length -  0);
while (G__8561__i < G__8561__a.length) {G__8561__a[G__8561__i] = arguments[G__8561__i + 0]; ++G__8561__i;}
  args = new cljs.core.IndexedSeq(G__8561__a,0);
} 
return G__8560__delegate.call(this,args);};
G__8560.cljs$lang$maxFixedArity = 0;
G__8560.cljs$lang$applyTo = (function (arglist__8562){
var args = cljs.core.seq(arglist__8562);
return G__8560__delegate(args);
});
G__8560.cljs$core$IFn$_invoke$arity$variadic = G__8560__delegate;
return G__8560;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8563__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8564__i = 0, G__8564__a = new Array(arguments.length -  0);
while (G__8564__i < G__8564__a.length) {G__8564__a[G__8564__i] = arguments[G__8564__i + 0]; ++G__8564__i;}
  args = new cljs.core.IndexedSeq(G__8564__a,0);
} 
return G__8563__delegate.call(this,args);};
G__8563.cljs$lang$maxFixedArity = 0;
G__8563.cljs$lang$applyTo = (function (arglist__8565){
var args = cljs.core.seq(arglist__8565);
return G__8563__delegate(args);
});
G__8563.cljs$core$IFn$_invoke$arity$variadic = G__8563__delegate;
return G__8563;
})()
;

return null;
});
