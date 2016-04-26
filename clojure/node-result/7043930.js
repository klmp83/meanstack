goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7522__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7523__i = 0, G__7523__a = new Array(arguments.length -  0);
while (G__7523__i < G__7523__a.length) {G__7523__a[G__7523__i] = arguments[G__7523__i + 0]; ++G__7523__i;}
  args = new cljs.core.IndexedSeq(G__7523__a,0);
} 
return G__7522__delegate.call(this,args);};
G__7522.cljs$lang$maxFixedArity = 0;
G__7522.cljs$lang$applyTo = (function (arglist__7524){
var args = cljs.core.seq(arglist__7524);
return G__7522__delegate(args);
});
G__7522.cljs$core$IFn$_invoke$arity$variadic = G__7522__delegate;
return G__7522;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7525__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7526__i = 0, G__7526__a = new Array(arguments.length -  0);
while (G__7526__i < G__7526__a.length) {G__7526__a[G__7526__i] = arguments[G__7526__i + 0]; ++G__7526__i;}
  args = new cljs.core.IndexedSeq(G__7526__a,0);
} 
return G__7525__delegate.call(this,args);};
G__7525.cljs$lang$maxFixedArity = 0;
G__7525.cljs$lang$applyTo = (function (arglist__7527){
var args = cljs.core.seq(arglist__7527);
return G__7525__delegate(args);
});
G__7525.cljs$core$IFn$_invoke$arity$variadic = G__7525__delegate;
return G__7525;
})()
;

return null;
});
