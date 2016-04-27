goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7594__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7595__i = 0, G__7595__a = new Array(arguments.length -  0);
while (G__7595__i < G__7595__a.length) {G__7595__a[G__7595__i] = arguments[G__7595__i + 0]; ++G__7595__i;}
  args = new cljs.core.IndexedSeq(G__7595__a,0);
} 
return G__7594__delegate.call(this,args);};
G__7594.cljs$lang$maxFixedArity = 0;
G__7594.cljs$lang$applyTo = (function (arglist__7596){
var args = cljs.core.seq(arglist__7596);
return G__7594__delegate(args);
});
G__7594.cljs$core$IFn$_invoke$arity$variadic = G__7594__delegate;
return G__7594;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7597__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7598__i = 0, G__7598__a = new Array(arguments.length -  0);
while (G__7598__i < G__7598__a.length) {G__7598__a[G__7598__i] = arguments[G__7598__i + 0]; ++G__7598__i;}
  args = new cljs.core.IndexedSeq(G__7598__a,0);
} 
return G__7597__delegate.call(this,args);};
G__7597.cljs$lang$maxFixedArity = 0;
G__7597.cljs$lang$applyTo = (function (arglist__7599){
var args = cljs.core.seq(arglist__7599);
return G__7597__delegate(args);
});
G__7597.cljs$core$IFn$_invoke$arity$variadic = G__7597__delegate;
return G__7597;
})()
;

return null;
});
