goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8340__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8341__i = 0, G__8341__a = new Array(arguments.length -  0);
while (G__8341__i < G__8341__a.length) {G__8341__a[G__8341__i] = arguments[G__8341__i + 0]; ++G__8341__i;}
  args = new cljs.core.IndexedSeq(G__8341__a,0);
} 
return G__8340__delegate.call(this,args);};
G__8340.cljs$lang$maxFixedArity = 0;
G__8340.cljs$lang$applyTo = (function (arglist__8342){
var args = cljs.core.seq(arglist__8342);
return G__8340__delegate(args);
});
G__8340.cljs$core$IFn$_invoke$arity$variadic = G__8340__delegate;
return G__8340;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8343__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8344__i = 0, G__8344__a = new Array(arguments.length -  0);
while (G__8344__i < G__8344__a.length) {G__8344__a[G__8344__i] = arguments[G__8344__i + 0]; ++G__8344__i;}
  args = new cljs.core.IndexedSeq(G__8344__a,0);
} 
return G__8343__delegate.call(this,args);};
G__8343.cljs$lang$maxFixedArity = 0;
G__8343.cljs$lang$applyTo = (function (arglist__8345){
var args = cljs.core.seq(arglist__8345);
return G__8343__delegate(args);
});
G__8343.cljs$core$IFn$_invoke$arity$variadic = G__8343__delegate;
return G__8343;
})()
;

return null;
});
