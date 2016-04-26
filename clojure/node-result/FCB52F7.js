goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7598__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
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

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7601__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7602__i = 0, G__7602__a = new Array(arguments.length -  0);
while (G__7602__i < G__7602__a.length) {G__7602__a[G__7602__i] = arguments[G__7602__i + 0]; ++G__7602__i;}
  args = new cljs.core.IndexedSeq(G__7602__a,0);
} 
return G__7601__delegate.call(this,args);};
G__7601.cljs$lang$maxFixedArity = 0;
G__7601.cljs$lang$applyTo = (function (arglist__7603){
var args = cljs.core.seq(arglist__7603);
return G__7601__delegate(args);
});
G__7601.cljs$core$IFn$_invoke$arity$variadic = G__7601__delegate;
return G__7601;
})()
;

return null;
});
