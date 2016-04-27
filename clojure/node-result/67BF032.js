goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8762__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8763__i = 0, G__8763__a = new Array(arguments.length -  0);
while (G__8763__i < G__8763__a.length) {G__8763__a[G__8763__i] = arguments[G__8763__i + 0]; ++G__8763__i;}
  args = new cljs.core.IndexedSeq(G__8763__a,0);
} 
return G__8762__delegate.call(this,args);};
G__8762.cljs$lang$maxFixedArity = 0;
G__8762.cljs$lang$applyTo = (function (arglist__8764){
var args = cljs.core.seq(arglist__8764);
return G__8762__delegate(args);
});
G__8762.cljs$core$IFn$_invoke$arity$variadic = G__8762__delegate;
return G__8762;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8765__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8766__i = 0, G__8766__a = new Array(arguments.length -  0);
while (G__8766__i < G__8766__a.length) {G__8766__a[G__8766__i] = arguments[G__8766__i + 0]; ++G__8766__i;}
  args = new cljs.core.IndexedSeq(G__8766__a,0);
} 
return G__8765__delegate.call(this,args);};
G__8765.cljs$lang$maxFixedArity = 0;
G__8765.cljs$lang$applyTo = (function (arglist__8767){
var args = cljs.core.seq(arglist__8767);
return G__8765__delegate(args);
});
G__8765.cljs$core$IFn$_invoke$arity$variadic = G__8765__delegate;
return G__8765;
})()
;

return null;
});
