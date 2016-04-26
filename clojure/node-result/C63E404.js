goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8094__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8094 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8095__i = 0, G__8095__a = new Array(arguments.length -  0);
while (G__8095__i < G__8095__a.length) {G__8095__a[G__8095__i] = arguments[G__8095__i + 0]; ++G__8095__i;}
  args = new cljs.core.IndexedSeq(G__8095__a,0);
} 
return G__8094__delegate.call(this,args);};
G__8094.cljs$lang$maxFixedArity = 0;
G__8094.cljs$lang$applyTo = (function (arglist__8096){
var args = cljs.core.seq(arglist__8096);
return G__8094__delegate(args);
});
G__8094.cljs$core$IFn$_invoke$arity$variadic = G__8094__delegate;
return G__8094;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8097__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8097 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8098__i = 0, G__8098__a = new Array(arguments.length -  0);
while (G__8098__i < G__8098__a.length) {G__8098__a[G__8098__i] = arguments[G__8098__i + 0]; ++G__8098__i;}
  args = new cljs.core.IndexedSeq(G__8098__a,0);
} 
return G__8097__delegate.call(this,args);};
G__8097.cljs$lang$maxFixedArity = 0;
G__8097.cljs$lang$applyTo = (function (arglist__8099){
var args = cljs.core.seq(arglist__8099);
return G__8097__delegate(args);
});
G__8097.cljs$core$IFn$_invoke$arity$variadic = G__8097__delegate;
return G__8097;
})()
;

return null;
});
