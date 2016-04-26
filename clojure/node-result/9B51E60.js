goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8016__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8017__i = 0, G__8017__a = new Array(arguments.length -  0);
while (G__8017__i < G__8017__a.length) {G__8017__a[G__8017__i] = arguments[G__8017__i + 0]; ++G__8017__i;}
  args = new cljs.core.IndexedSeq(G__8017__a,0);
} 
return G__8016__delegate.call(this,args);};
G__8016.cljs$lang$maxFixedArity = 0;
G__8016.cljs$lang$applyTo = (function (arglist__8018){
var args = cljs.core.seq(arglist__8018);
return G__8016__delegate(args);
});
G__8016.cljs$core$IFn$_invoke$arity$variadic = G__8016__delegate;
return G__8016;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8019__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8020__i = 0, G__8020__a = new Array(arguments.length -  0);
while (G__8020__i < G__8020__a.length) {G__8020__a[G__8020__i] = arguments[G__8020__i + 0]; ++G__8020__i;}
  args = new cljs.core.IndexedSeq(G__8020__a,0);
} 
return G__8019__delegate.call(this,args);};
G__8019.cljs$lang$maxFixedArity = 0;
G__8019.cljs$lang$applyTo = (function (arglist__8021){
var args = cljs.core.seq(arglist__8021);
return G__8019__delegate(args);
});
G__8019.cljs$core$IFn$_invoke$arity$variadic = G__8019__delegate;
return G__8019;
})()
;

return null;
});
