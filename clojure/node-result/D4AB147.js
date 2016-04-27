goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7379__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7380__i = 0, G__7380__a = new Array(arguments.length -  0);
while (G__7380__i < G__7380__a.length) {G__7380__a[G__7380__i] = arguments[G__7380__i + 0]; ++G__7380__i;}
  args = new cljs.core.IndexedSeq(G__7380__a,0);
} 
return G__7379__delegate.call(this,args);};
G__7379.cljs$lang$maxFixedArity = 0;
G__7379.cljs$lang$applyTo = (function (arglist__7381){
var args = cljs.core.seq(arglist__7381);
return G__7379__delegate(args);
});
G__7379.cljs$core$IFn$_invoke$arity$variadic = G__7379__delegate;
return G__7379;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7382__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7383__i = 0, G__7383__a = new Array(arguments.length -  0);
while (G__7383__i < G__7383__a.length) {G__7383__a[G__7383__i] = arguments[G__7383__i + 0]; ++G__7383__i;}
  args = new cljs.core.IndexedSeq(G__7383__a,0);
} 
return G__7382__delegate.call(this,args);};
G__7382.cljs$lang$maxFixedArity = 0;
G__7382.cljs$lang$applyTo = (function (arglist__7384){
var args = cljs.core.seq(arglist__7384);
return G__7382__delegate(args);
});
G__7382.cljs$core$IFn$_invoke$arity$variadic = G__7382__delegate;
return G__7382;
})()
;

return null;
});