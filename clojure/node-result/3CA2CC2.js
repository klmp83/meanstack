goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8378__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8378 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8379__i = 0, G__8379__a = new Array(arguments.length -  0);
while (G__8379__i < G__8379__a.length) {G__8379__a[G__8379__i] = arguments[G__8379__i + 0]; ++G__8379__i;}
  args = new cljs.core.IndexedSeq(G__8379__a,0);
} 
return G__8378__delegate.call(this,args);};
G__8378.cljs$lang$maxFixedArity = 0;
G__8378.cljs$lang$applyTo = (function (arglist__8380){
var args = cljs.core.seq(arglist__8380);
return G__8378__delegate(args);
});
G__8378.cljs$core$IFn$_invoke$arity$variadic = G__8378__delegate;
return G__8378;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8381__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8381 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8382__i = 0, G__8382__a = new Array(arguments.length -  0);
while (G__8382__i < G__8382__a.length) {G__8382__a[G__8382__i] = arguments[G__8382__i + 0]; ++G__8382__i;}
  args = new cljs.core.IndexedSeq(G__8382__a,0);
} 
return G__8381__delegate.call(this,args);};
G__8381.cljs$lang$maxFixedArity = 0;
G__8381.cljs$lang$applyTo = (function (arglist__8383){
var args = cljs.core.seq(arglist__8383);
return G__8381__delegate(args);
});
G__8381.cljs$core$IFn$_invoke$arity$variadic = G__8381__delegate;
return G__8381;
})()
;

return null;
});
