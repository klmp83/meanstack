goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8839__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8839 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8840__i = 0, G__8840__a = new Array(arguments.length -  0);
while (G__8840__i < G__8840__a.length) {G__8840__a[G__8840__i] = arguments[G__8840__i + 0]; ++G__8840__i;}
  args = new cljs.core.IndexedSeq(G__8840__a,0);
} 
return G__8839__delegate.call(this,args);};
G__8839.cljs$lang$maxFixedArity = 0;
G__8839.cljs$lang$applyTo = (function (arglist__8841){
var args = cljs.core.seq(arglist__8841);
return G__8839__delegate(args);
});
G__8839.cljs$core$IFn$_invoke$arity$variadic = G__8839__delegate;
return G__8839;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8842__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8842 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8843__i = 0, G__8843__a = new Array(arguments.length -  0);
while (G__8843__i < G__8843__a.length) {G__8843__a[G__8843__i] = arguments[G__8843__i + 0]; ++G__8843__i;}
  args = new cljs.core.IndexedSeq(G__8843__a,0);
} 
return G__8842__delegate.call(this,args);};
G__8842.cljs$lang$maxFixedArity = 0;
G__8842.cljs$lang$applyTo = (function (arglist__8844){
var args = cljs.core.seq(arglist__8844);
return G__8842__delegate(args);
});
G__8842.cljs$core$IFn$_invoke$arity$variadic = G__8842__delegate;
return G__8842;
})()
;

return null;
});
