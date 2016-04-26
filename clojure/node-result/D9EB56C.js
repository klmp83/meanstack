goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8598__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8599__i = 0, G__8599__a = new Array(arguments.length -  0);
while (G__8599__i < G__8599__a.length) {G__8599__a[G__8599__i] = arguments[G__8599__i + 0]; ++G__8599__i;}
  args = new cljs.core.IndexedSeq(G__8599__a,0);
} 
return G__8598__delegate.call(this,args);};
G__8598.cljs$lang$maxFixedArity = 0;
G__8598.cljs$lang$applyTo = (function (arglist__8600){
var args = cljs.core.seq(arglist__8600);
return G__8598__delegate(args);
});
G__8598.cljs$core$IFn$_invoke$arity$variadic = G__8598__delegate;
return G__8598;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8601__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8602__i = 0, G__8602__a = new Array(arguments.length -  0);
while (G__8602__i < G__8602__a.length) {G__8602__a[G__8602__i] = arguments[G__8602__i + 0]; ++G__8602__i;}
  args = new cljs.core.IndexedSeq(G__8602__a,0);
} 
return G__8601__delegate.call(this,args);};
G__8601.cljs$lang$maxFixedArity = 0;
G__8601.cljs$lang$applyTo = (function (arglist__8603){
var args = cljs.core.seq(arglist__8603);
return G__8601__delegate(args);
});
G__8601.cljs$core$IFn$_invoke$arity$variadic = G__8601__delegate;
return G__8601;
})()
;

return null;
});
