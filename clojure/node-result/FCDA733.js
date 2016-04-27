goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7575__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7576__i = 0, G__7576__a = new Array(arguments.length -  0);
while (G__7576__i < G__7576__a.length) {G__7576__a[G__7576__i] = arguments[G__7576__i + 0]; ++G__7576__i;}
  args = new cljs.core.IndexedSeq(G__7576__a,0);
} 
return G__7575__delegate.call(this,args);};
G__7575.cljs$lang$maxFixedArity = 0;
G__7575.cljs$lang$applyTo = (function (arglist__7577){
var args = cljs.core.seq(arglist__7577);
return G__7575__delegate(args);
});
G__7575.cljs$core$IFn$_invoke$arity$variadic = G__7575__delegate;
return G__7575;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7578__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7579__i = 0, G__7579__a = new Array(arguments.length -  0);
while (G__7579__i < G__7579__a.length) {G__7579__a[G__7579__i] = arguments[G__7579__i + 0]; ++G__7579__i;}
  args = new cljs.core.IndexedSeq(G__7579__a,0);
} 
return G__7578__delegate.call(this,args);};
G__7578.cljs$lang$maxFixedArity = 0;
G__7578.cljs$lang$applyTo = (function (arglist__7580){
var args = cljs.core.seq(arglist__7580);
return G__7578__delegate(args);
});
G__7578.cljs$core$IFn$_invoke$arity$variadic = G__7578__delegate;
return G__7578;
})()
;

return null;
});
