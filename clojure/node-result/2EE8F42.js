goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8636__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8637__i = 0, G__8637__a = new Array(arguments.length -  0);
while (G__8637__i < G__8637__a.length) {G__8637__a[G__8637__i] = arguments[G__8637__i + 0]; ++G__8637__i;}
  args = new cljs.core.IndexedSeq(G__8637__a,0);
} 
return G__8636__delegate.call(this,args);};
G__8636.cljs$lang$maxFixedArity = 0;
G__8636.cljs$lang$applyTo = (function (arglist__8638){
var args = cljs.core.seq(arglist__8638);
return G__8636__delegate(args);
});
G__8636.cljs$core$IFn$_invoke$arity$variadic = G__8636__delegate;
return G__8636;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8639__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8640__i = 0, G__8640__a = new Array(arguments.length -  0);
while (G__8640__i < G__8640__a.length) {G__8640__a[G__8640__i] = arguments[G__8640__i + 0]; ++G__8640__i;}
  args = new cljs.core.IndexedSeq(G__8640__a,0);
} 
return G__8639__delegate.call(this,args);};
G__8639.cljs$lang$maxFixedArity = 0;
G__8639.cljs$lang$applyTo = (function (arglist__8641){
var args = cljs.core.seq(arglist__8641);
return G__8639__delegate(args);
});
G__8639.cljs$core$IFn$_invoke$arity$variadic = G__8639__delegate;
return G__8639;
})()
;

return null;
});
