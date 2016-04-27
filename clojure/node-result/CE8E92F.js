goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9295__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9295 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9296__i = 0, G__9296__a = new Array(arguments.length -  0);
while (G__9296__i < G__9296__a.length) {G__9296__a[G__9296__i] = arguments[G__9296__i + 0]; ++G__9296__i;}
  args = new cljs.core.IndexedSeq(G__9296__a,0);
} 
return G__9295__delegate.call(this,args);};
G__9295.cljs$lang$maxFixedArity = 0;
G__9295.cljs$lang$applyTo = (function (arglist__9297){
var args = cljs.core.seq(arglist__9297);
return G__9295__delegate(args);
});
G__9295.cljs$core$IFn$_invoke$arity$variadic = G__9295__delegate;
return G__9295;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9298__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9299__i = 0, G__9299__a = new Array(arguments.length -  0);
while (G__9299__i < G__9299__a.length) {G__9299__a[G__9299__i] = arguments[G__9299__i + 0]; ++G__9299__i;}
  args = new cljs.core.IndexedSeq(G__9299__a,0);
} 
return G__9298__delegate.call(this,args);};
G__9298.cljs$lang$maxFixedArity = 0;
G__9298.cljs$lang$applyTo = (function (arglist__9300){
var args = cljs.core.seq(arglist__9300);
return G__9298__delegate(args);
});
G__9298.cljs$core$IFn$_invoke$arity$variadic = G__9298__delegate;
return G__9298;
})()
;

return null;
});
