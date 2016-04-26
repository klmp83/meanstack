goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8769__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8769 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8770__i = 0, G__8770__a = new Array(arguments.length -  0);
while (G__8770__i < G__8770__a.length) {G__8770__a[G__8770__i] = arguments[G__8770__i + 0]; ++G__8770__i;}
  args = new cljs.core.IndexedSeq(G__8770__a,0);
} 
return G__8769__delegate.call(this,args);};
G__8769.cljs$lang$maxFixedArity = 0;
G__8769.cljs$lang$applyTo = (function (arglist__8771){
var args = cljs.core.seq(arglist__8771);
return G__8769__delegate(args);
});
G__8769.cljs$core$IFn$_invoke$arity$variadic = G__8769__delegate;
return G__8769;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8772__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8772 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8773__i = 0, G__8773__a = new Array(arguments.length -  0);
while (G__8773__i < G__8773__a.length) {G__8773__a[G__8773__i] = arguments[G__8773__i + 0]; ++G__8773__i;}
  args = new cljs.core.IndexedSeq(G__8773__a,0);
} 
return G__8772__delegate.call(this,args);};
G__8772.cljs$lang$maxFixedArity = 0;
G__8772.cljs$lang$applyTo = (function (arglist__8774){
var args = cljs.core.seq(arglist__8774);
return G__8772__delegate(args);
});
G__8772.cljs$core$IFn$_invoke$arity$variadic = G__8772__delegate;
return G__8772;
})()
;

return null;
});
