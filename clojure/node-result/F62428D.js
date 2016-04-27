goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7595__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7596__i = 0, G__7596__a = new Array(arguments.length -  0);
while (G__7596__i < G__7596__a.length) {G__7596__a[G__7596__i] = arguments[G__7596__i + 0]; ++G__7596__i;}
  args = new cljs.core.IndexedSeq(G__7596__a,0);
} 
return G__7595__delegate.call(this,args);};
G__7595.cljs$lang$maxFixedArity = 0;
G__7595.cljs$lang$applyTo = (function (arglist__7597){
var args = cljs.core.seq(arglist__7597);
return G__7595__delegate(args);
});
G__7595.cljs$core$IFn$_invoke$arity$variadic = G__7595__delegate;
return G__7595;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7598__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7599__i = 0, G__7599__a = new Array(arguments.length -  0);
while (G__7599__i < G__7599__a.length) {G__7599__a[G__7599__i] = arguments[G__7599__i + 0]; ++G__7599__i;}
  args = new cljs.core.IndexedSeq(G__7599__a,0);
} 
return G__7598__delegate.call(this,args);};
G__7598.cljs$lang$maxFixedArity = 0;
G__7598.cljs$lang$applyTo = (function (arglist__7600){
var args = cljs.core.seq(arglist__7600);
return G__7598__delegate(args);
});
G__7598.cljs$core$IFn$_invoke$arity$variadic = G__7598__delegate;
return G__7598;
})()
;

return null;
});
