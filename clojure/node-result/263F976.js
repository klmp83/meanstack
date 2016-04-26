goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7518__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7519__i = 0, G__7519__a = new Array(arguments.length -  0);
while (G__7519__i < G__7519__a.length) {G__7519__a[G__7519__i] = arguments[G__7519__i + 0]; ++G__7519__i;}
  args = new cljs.core.IndexedSeq(G__7519__a,0);
} 
return G__7518__delegate.call(this,args);};
G__7518.cljs$lang$maxFixedArity = 0;
G__7518.cljs$lang$applyTo = (function (arglist__7520){
var args = cljs.core.seq(arglist__7520);
return G__7518__delegate(args);
});
G__7518.cljs$core$IFn$_invoke$arity$variadic = G__7518__delegate;
return G__7518;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7521__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7521 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7522__i = 0, G__7522__a = new Array(arguments.length -  0);
while (G__7522__i < G__7522__a.length) {G__7522__a[G__7522__i] = arguments[G__7522__i + 0]; ++G__7522__i;}
  args = new cljs.core.IndexedSeq(G__7522__a,0);
} 
return G__7521__delegate.call(this,args);};
G__7521.cljs$lang$maxFixedArity = 0;
G__7521.cljs$lang$applyTo = (function (arglist__7523){
var args = cljs.core.seq(arglist__7523);
return G__7521__delegate(args);
});
G__7521.cljs$core$IFn$_invoke$arity$variadic = G__7521__delegate;
return G__7521;
})()
;

return null;
});
