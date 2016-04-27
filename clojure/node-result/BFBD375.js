goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8456__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8456 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8457__i = 0, G__8457__a = new Array(arguments.length -  0);
while (G__8457__i < G__8457__a.length) {G__8457__a[G__8457__i] = arguments[G__8457__i + 0]; ++G__8457__i;}
  args = new cljs.core.IndexedSeq(G__8457__a,0);
} 
return G__8456__delegate.call(this,args);};
G__8456.cljs$lang$maxFixedArity = 0;
G__8456.cljs$lang$applyTo = (function (arglist__8458){
var args = cljs.core.seq(arglist__8458);
return G__8456__delegate(args);
});
G__8456.cljs$core$IFn$_invoke$arity$variadic = G__8456__delegate;
return G__8456;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8459__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8459 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8460__i = 0, G__8460__a = new Array(arguments.length -  0);
while (G__8460__i < G__8460__a.length) {G__8460__a[G__8460__i] = arguments[G__8460__i + 0]; ++G__8460__i;}
  args = new cljs.core.IndexedSeq(G__8460__a,0);
} 
return G__8459__delegate.call(this,args);};
G__8459.cljs$lang$maxFixedArity = 0;
G__8459.cljs$lang$applyTo = (function (arglist__8461){
var args = cljs.core.seq(arglist__8461);
return G__8459__delegate(args);
});
G__8459.cljs$core$IFn$_invoke$arity$variadic = G__8459__delegate;
return G__8459;
})()
;

return null;
});
