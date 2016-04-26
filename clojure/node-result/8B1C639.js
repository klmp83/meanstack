goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8750__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8751__i = 0, G__8751__a = new Array(arguments.length -  0);
while (G__8751__i < G__8751__a.length) {G__8751__a[G__8751__i] = arguments[G__8751__i + 0]; ++G__8751__i;}
  args = new cljs.core.IndexedSeq(G__8751__a,0);
} 
return G__8750__delegate.call(this,args);};
G__8750.cljs$lang$maxFixedArity = 0;
G__8750.cljs$lang$applyTo = (function (arglist__8752){
var args = cljs.core.seq(arglist__8752);
return G__8750__delegate(args);
});
G__8750.cljs$core$IFn$_invoke$arity$variadic = G__8750__delegate;
return G__8750;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8753__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8754__i = 0, G__8754__a = new Array(arguments.length -  0);
while (G__8754__i < G__8754__a.length) {G__8754__a[G__8754__i] = arguments[G__8754__i + 0]; ++G__8754__i;}
  args = new cljs.core.IndexedSeq(G__8754__a,0);
} 
return G__8753__delegate.call(this,args);};
G__8753.cljs$lang$maxFixedArity = 0;
G__8753.cljs$lang$applyTo = (function (arglist__8755){
var args = cljs.core.seq(arglist__8755);
return G__8753__delegate(args);
});
G__8753.cljs$core$IFn$_invoke$arity$variadic = G__8753__delegate;
return G__8753;
})()
;

return null;
});
