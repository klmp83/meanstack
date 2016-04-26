goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7362__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7363__i = 0, G__7363__a = new Array(arguments.length -  0);
while (G__7363__i < G__7363__a.length) {G__7363__a[G__7363__i] = arguments[G__7363__i + 0]; ++G__7363__i;}
  args = new cljs.core.IndexedSeq(G__7363__a,0);
} 
return G__7362__delegate.call(this,args);};
G__7362.cljs$lang$maxFixedArity = 0;
G__7362.cljs$lang$applyTo = (function (arglist__7364){
var args = cljs.core.seq(arglist__7364);
return G__7362__delegate(args);
});
G__7362.cljs$core$IFn$_invoke$arity$variadic = G__7362__delegate;
return G__7362;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7365__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7366__i = 0, G__7366__a = new Array(arguments.length -  0);
while (G__7366__i < G__7366__a.length) {G__7366__a[G__7366__i] = arguments[G__7366__i + 0]; ++G__7366__i;}
  args = new cljs.core.IndexedSeq(G__7366__a,0);
} 
return G__7365__delegate.call(this,args);};
G__7365.cljs$lang$maxFixedArity = 0;
G__7365.cljs$lang$applyTo = (function (arglist__7367){
var args = cljs.core.seq(arglist__7367);
return G__7365__delegate(args);
});
G__7365.cljs$core$IFn$_invoke$arity$variadic = G__7365__delegate;
return G__7365;
})()
;

return null;
});
