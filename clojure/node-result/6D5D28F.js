goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8112__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8113__i = 0, G__8113__a = new Array(arguments.length -  0);
while (G__8113__i < G__8113__a.length) {G__8113__a[G__8113__i] = arguments[G__8113__i + 0]; ++G__8113__i;}
  args = new cljs.core.IndexedSeq(G__8113__a,0);
} 
return G__8112__delegate.call(this,args);};
G__8112.cljs$lang$maxFixedArity = 0;
G__8112.cljs$lang$applyTo = (function (arglist__8114){
var args = cljs.core.seq(arglist__8114);
return G__8112__delegate(args);
});
G__8112.cljs$core$IFn$_invoke$arity$variadic = G__8112__delegate;
return G__8112;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8115__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8116__i = 0, G__8116__a = new Array(arguments.length -  0);
while (G__8116__i < G__8116__a.length) {G__8116__a[G__8116__i] = arguments[G__8116__i + 0]; ++G__8116__i;}
  args = new cljs.core.IndexedSeq(G__8116__a,0);
} 
return G__8115__delegate.call(this,args);};
G__8115.cljs$lang$maxFixedArity = 0;
G__8115.cljs$lang$applyTo = (function (arglist__8117){
var args = cljs.core.seq(arglist__8117);
return G__8115__delegate(args);
});
G__8115.cljs$core$IFn$_invoke$arity$variadic = G__8115__delegate;
return G__8115;
})()
;

return null;
});
