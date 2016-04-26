goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8712__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8713__i = 0, G__8713__a = new Array(arguments.length -  0);
while (G__8713__i < G__8713__a.length) {G__8713__a[G__8713__i] = arguments[G__8713__i + 0]; ++G__8713__i;}
  args = new cljs.core.IndexedSeq(G__8713__a,0);
} 
return G__8712__delegate.call(this,args);};
G__8712.cljs$lang$maxFixedArity = 0;
G__8712.cljs$lang$applyTo = (function (arglist__8714){
var args = cljs.core.seq(arglist__8714);
return G__8712__delegate(args);
});
G__8712.cljs$core$IFn$_invoke$arity$variadic = G__8712__delegate;
return G__8712;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8715__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8716__i = 0, G__8716__a = new Array(arguments.length -  0);
while (G__8716__i < G__8716__a.length) {G__8716__a[G__8716__i] = arguments[G__8716__i + 0]; ++G__8716__i;}
  args = new cljs.core.IndexedSeq(G__8716__a,0);
} 
return G__8715__delegate.call(this,args);};
G__8715.cljs$lang$maxFixedArity = 0;
G__8715.cljs$lang$applyTo = (function (arglist__8717){
var args = cljs.core.seq(arglist__8717);
return G__8715__delegate(args);
});
G__8715.cljs$core$IFn$_invoke$arity$variadic = G__8715__delegate;
return G__8715;
})()
;

return null;
});
