goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8226__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8227__i = 0, G__8227__a = new Array(arguments.length -  0);
while (G__8227__i < G__8227__a.length) {G__8227__a[G__8227__i] = arguments[G__8227__i + 0]; ++G__8227__i;}
  args = new cljs.core.IndexedSeq(G__8227__a,0);
} 
return G__8226__delegate.call(this,args);};
G__8226.cljs$lang$maxFixedArity = 0;
G__8226.cljs$lang$applyTo = (function (arglist__8228){
var args = cljs.core.seq(arglist__8228);
return G__8226__delegate(args);
});
G__8226.cljs$core$IFn$_invoke$arity$variadic = G__8226__delegate;
return G__8226;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8229__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8229 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8230__i = 0, G__8230__a = new Array(arguments.length -  0);
while (G__8230__i < G__8230__a.length) {G__8230__a[G__8230__i] = arguments[G__8230__i + 0]; ++G__8230__i;}
  args = new cljs.core.IndexedSeq(G__8230__a,0);
} 
return G__8229__delegate.call(this,args);};
G__8229.cljs$lang$maxFixedArity = 0;
G__8229.cljs$lang$applyTo = (function (arglist__8231){
var args = cljs.core.seq(arglist__8231);
return G__8229__delegate(args);
});
G__8229.cljs$core$IFn$_invoke$arity$variadic = G__8229__delegate;
return G__8229;
})()
;

return null;
});
