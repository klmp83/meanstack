goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9371__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9372__i = 0, G__9372__a = new Array(arguments.length -  0);
while (G__9372__i < G__9372__a.length) {G__9372__a[G__9372__i] = arguments[G__9372__i + 0]; ++G__9372__i;}
  args = new cljs.core.IndexedSeq(G__9372__a,0);
} 
return G__9371__delegate.call(this,args);};
G__9371.cljs$lang$maxFixedArity = 0;
G__9371.cljs$lang$applyTo = (function (arglist__9373){
var args = cljs.core.seq(arglist__9373);
return G__9371__delegate(args);
});
G__9371.cljs$core$IFn$_invoke$arity$variadic = G__9371__delegate;
return G__9371;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9374__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9374 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9375__i = 0, G__9375__a = new Array(arguments.length -  0);
while (G__9375__i < G__9375__a.length) {G__9375__a[G__9375__i] = arguments[G__9375__i + 0]; ++G__9375__i;}
  args = new cljs.core.IndexedSeq(G__9375__a,0);
} 
return G__9374__delegate.call(this,args);};
G__9374.cljs$lang$maxFixedArity = 0;
G__9374.cljs$lang$applyTo = (function (arglist__9376){
var args = cljs.core.seq(arglist__9376);
return G__9374__delegate(args);
});
G__9374.cljs$core$IFn$_invoke$arity$variadic = G__9374__delegate;
return G__9374;
})()
;

return null;
});
