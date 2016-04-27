goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9105__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9105 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9106__i = 0, G__9106__a = new Array(arguments.length -  0);
while (G__9106__i < G__9106__a.length) {G__9106__a[G__9106__i] = arguments[G__9106__i + 0]; ++G__9106__i;}
  args = new cljs.core.IndexedSeq(G__9106__a,0);
} 
return G__9105__delegate.call(this,args);};
G__9105.cljs$lang$maxFixedArity = 0;
G__9105.cljs$lang$applyTo = (function (arglist__9107){
var args = cljs.core.seq(arglist__9107);
return G__9105__delegate(args);
});
G__9105.cljs$core$IFn$_invoke$arity$variadic = G__9105__delegate;
return G__9105;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9108__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9109__i = 0, G__9109__a = new Array(arguments.length -  0);
while (G__9109__i < G__9109__a.length) {G__9109__a[G__9109__i] = arguments[G__9109__i + 0]; ++G__9109__i;}
  args = new cljs.core.IndexedSeq(G__9109__a,0);
} 
return G__9108__delegate.call(this,args);};
G__9108.cljs$lang$maxFixedArity = 0;
G__9108.cljs$lang$applyTo = (function (arglist__9110){
var args = cljs.core.seq(arglist__9110);
return G__9108__delegate(args);
});
G__9108.cljs$core$IFn$_invoke$arity$variadic = G__9108__delegate;
return G__9108;
})()
;

return null;
});
