goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8150__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8151__i = 0, G__8151__a = new Array(arguments.length -  0);
while (G__8151__i < G__8151__a.length) {G__8151__a[G__8151__i] = arguments[G__8151__i + 0]; ++G__8151__i;}
  args = new cljs.core.IndexedSeq(G__8151__a,0);
} 
return G__8150__delegate.call(this,args);};
G__8150.cljs$lang$maxFixedArity = 0;
G__8150.cljs$lang$applyTo = (function (arglist__8152){
var args = cljs.core.seq(arglist__8152);
return G__8150__delegate(args);
});
G__8150.cljs$core$IFn$_invoke$arity$variadic = G__8150__delegate;
return G__8150;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8153__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8154__i = 0, G__8154__a = new Array(arguments.length -  0);
while (G__8154__i < G__8154__a.length) {G__8154__a[G__8154__i] = arguments[G__8154__i + 0]; ++G__8154__i;}
  args = new cljs.core.IndexedSeq(G__8154__a,0);
} 
return G__8153__delegate.call(this,args);};
G__8153.cljs$lang$maxFixedArity = 0;
G__8153.cljs$lang$applyTo = (function (arglist__8155){
var args = cljs.core.seq(arglist__8155);
return G__8153__delegate(args);
});
G__8153.cljs$core$IFn$_invoke$arity$variadic = G__8153__delegate;
return G__8153;
})()
;

return null;
});
