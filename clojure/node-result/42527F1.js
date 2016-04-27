goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9428__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9429__i = 0, G__9429__a = new Array(arguments.length -  0);
while (G__9429__i < G__9429__a.length) {G__9429__a[G__9429__i] = arguments[G__9429__i + 0]; ++G__9429__i;}
  args = new cljs.core.IndexedSeq(G__9429__a,0);
} 
return G__9428__delegate.call(this,args);};
G__9428.cljs$lang$maxFixedArity = 0;
G__9428.cljs$lang$applyTo = (function (arglist__9430){
var args = cljs.core.seq(arglist__9430);
return G__9428__delegate(args);
});
G__9428.cljs$core$IFn$_invoke$arity$variadic = G__9428__delegate;
return G__9428;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9431__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9432__i = 0, G__9432__a = new Array(arguments.length -  0);
while (G__9432__i < G__9432__a.length) {G__9432__a[G__9432__i] = arguments[G__9432__i + 0]; ++G__9432__i;}
  args = new cljs.core.IndexedSeq(G__9432__a,0);
} 
return G__9431__delegate.call(this,args);};
G__9431.cljs$lang$maxFixedArity = 0;
G__9431.cljs$lang$applyTo = (function (arglist__9433){
var args = cljs.core.seq(arglist__9433);
return G__9431__delegate(args);
});
G__9431.cljs$core$IFn$_invoke$arity$variadic = G__9431__delegate;
return G__9431;
})()
;

return null;
});
