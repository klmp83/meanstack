goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9162__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9163__i = 0, G__9163__a = new Array(arguments.length -  0);
while (G__9163__i < G__9163__a.length) {G__9163__a[G__9163__i] = arguments[G__9163__i + 0]; ++G__9163__i;}
  args = new cljs.core.IndexedSeq(G__9163__a,0);
} 
return G__9162__delegate.call(this,args);};
G__9162.cljs$lang$maxFixedArity = 0;
G__9162.cljs$lang$applyTo = (function (arglist__9164){
var args = cljs.core.seq(arglist__9164);
return G__9162__delegate(args);
});
G__9162.cljs$core$IFn$_invoke$arity$variadic = G__9162__delegate;
return G__9162;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9165__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9166__i = 0, G__9166__a = new Array(arguments.length -  0);
while (G__9166__i < G__9166__a.length) {G__9166__a[G__9166__i] = arguments[G__9166__i + 0]; ++G__9166__i;}
  args = new cljs.core.IndexedSeq(G__9166__a,0);
} 
return G__9165__delegate.call(this,args);};
G__9165.cljs$lang$maxFixedArity = 0;
G__9165.cljs$lang$applyTo = (function (arglist__9167){
var args = cljs.core.seq(arglist__9167);
return G__9165__delegate(args);
});
G__9165.cljs$core$IFn$_invoke$arity$variadic = G__9165__delegate;
return G__9165;
})()
;

return null;
});
