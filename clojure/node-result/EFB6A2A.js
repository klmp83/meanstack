goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8541__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8542__i = 0, G__8542__a = new Array(arguments.length -  0);
while (G__8542__i < G__8542__a.length) {G__8542__a[G__8542__i] = arguments[G__8542__i + 0]; ++G__8542__i;}
  args = new cljs.core.IndexedSeq(G__8542__a,0);
} 
return G__8541__delegate.call(this,args);};
G__8541.cljs$lang$maxFixedArity = 0;
G__8541.cljs$lang$applyTo = (function (arglist__8543){
var args = cljs.core.seq(arglist__8543);
return G__8541__delegate(args);
});
G__8541.cljs$core$IFn$_invoke$arity$variadic = G__8541__delegate;
return G__8541;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8544__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8545__i = 0, G__8545__a = new Array(arguments.length -  0);
while (G__8545__i < G__8545__a.length) {G__8545__a[G__8545__i] = arguments[G__8545__i + 0]; ++G__8545__i;}
  args = new cljs.core.IndexedSeq(G__8545__a,0);
} 
return G__8544__delegate.call(this,args);};
G__8544.cljs$lang$maxFixedArity = 0;
G__8544.cljs$lang$applyTo = (function (arglist__8546){
var args = cljs.core.seq(arglist__8546);
return G__8544__delegate(args);
});
G__8544.cljs$core$IFn$_invoke$arity$variadic = G__8544__delegate;
return G__8544;
})()
;

return null;
});
