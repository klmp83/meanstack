goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7341__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7341 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7342__i = 0, G__7342__a = new Array(arguments.length -  0);
while (G__7342__i < G__7342__a.length) {G__7342__a[G__7342__i] = arguments[G__7342__i + 0]; ++G__7342__i;}
  args = new cljs.core.IndexedSeq(G__7342__a,0);
} 
return G__7341__delegate.call(this,args);};
G__7341.cljs$lang$maxFixedArity = 0;
G__7341.cljs$lang$applyTo = (function (arglist__7343){
var args = cljs.core.seq(arglist__7343);
return G__7341__delegate(args);
});
G__7341.cljs$core$IFn$_invoke$arity$variadic = G__7341__delegate;
return G__7341;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7344__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7345__i = 0, G__7345__a = new Array(arguments.length -  0);
while (G__7345__i < G__7345__a.length) {G__7345__a[G__7345__i] = arguments[G__7345__i + 0]; ++G__7345__i;}
  args = new cljs.core.IndexedSeq(G__7345__a,0);
} 
return G__7344__delegate.call(this,args);};
G__7344.cljs$lang$maxFixedArity = 0;
G__7344.cljs$lang$applyTo = (function (arglist__7346){
var args = cljs.core.seq(arglist__7346);
return G__7344__delegate(args);
});
G__7344.cljs$core$IFn$_invoke$arity$variadic = G__7344__delegate;
return G__7344;
})()
;

return null;
});
