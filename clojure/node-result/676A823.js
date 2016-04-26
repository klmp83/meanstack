goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8484__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8485__i = 0, G__8485__a = new Array(arguments.length -  0);
while (G__8485__i < G__8485__a.length) {G__8485__a[G__8485__i] = arguments[G__8485__i + 0]; ++G__8485__i;}
  args = new cljs.core.IndexedSeq(G__8485__a,0);
} 
return G__8484__delegate.call(this,args);};
G__8484.cljs$lang$maxFixedArity = 0;
G__8484.cljs$lang$applyTo = (function (arglist__8486){
var args = cljs.core.seq(arglist__8486);
return G__8484__delegate(args);
});
G__8484.cljs$core$IFn$_invoke$arity$variadic = G__8484__delegate;
return G__8484;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8487__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8488__i = 0, G__8488__a = new Array(arguments.length -  0);
while (G__8488__i < G__8488__a.length) {G__8488__a[G__8488__i] = arguments[G__8488__i + 0]; ++G__8488__i;}
  args = new cljs.core.IndexedSeq(G__8488__a,0);
} 
return G__8487__delegate.call(this,args);};
G__8487.cljs$lang$maxFixedArity = 0;
G__8487.cljs$lang$applyTo = (function (arglist__8489){
var args = cljs.core.seq(arglist__8489);
return G__8487__delegate(args);
});
G__8487.cljs$core$IFn$_invoke$arity$variadic = G__8487__delegate;
return G__8487;
})()
;

return null;
});
