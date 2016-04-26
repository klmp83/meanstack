goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8579__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8580__i = 0, G__8580__a = new Array(arguments.length -  0);
while (G__8580__i < G__8580__a.length) {G__8580__a[G__8580__i] = arguments[G__8580__i + 0]; ++G__8580__i;}
  args = new cljs.core.IndexedSeq(G__8580__a,0);
} 
return G__8579__delegate.call(this,args);};
G__8579.cljs$lang$maxFixedArity = 0;
G__8579.cljs$lang$applyTo = (function (arglist__8581){
var args = cljs.core.seq(arglist__8581);
return G__8579__delegate(args);
});
G__8579.cljs$core$IFn$_invoke$arity$variadic = G__8579__delegate;
return G__8579;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8582__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8583__i = 0, G__8583__a = new Array(arguments.length -  0);
while (G__8583__i < G__8583__a.length) {G__8583__a[G__8583__i] = arguments[G__8583__i + 0]; ++G__8583__i;}
  args = new cljs.core.IndexedSeq(G__8583__a,0);
} 
return G__8582__delegate.call(this,args);};
G__8582.cljs$lang$maxFixedArity = 0;
G__8582.cljs$lang$applyTo = (function (arglist__8584){
var args = cljs.core.seq(arglist__8584);
return G__8582__delegate(args);
});
G__8582.cljs$core$IFn$_invoke$arity$variadic = G__8582__delegate;
return G__8582;
})()
;

return null;
});
