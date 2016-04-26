goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7674__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7675__i = 0, G__7675__a = new Array(arguments.length -  0);
while (G__7675__i < G__7675__a.length) {G__7675__a[G__7675__i] = arguments[G__7675__i + 0]; ++G__7675__i;}
  args = new cljs.core.IndexedSeq(G__7675__a,0);
} 
return G__7674__delegate.call(this,args);};
G__7674.cljs$lang$maxFixedArity = 0;
G__7674.cljs$lang$applyTo = (function (arglist__7676){
var args = cljs.core.seq(arglist__7676);
return G__7674__delegate(args);
});
G__7674.cljs$core$IFn$_invoke$arity$variadic = G__7674__delegate;
return G__7674;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7677__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7678__i = 0, G__7678__a = new Array(arguments.length -  0);
while (G__7678__i < G__7678__a.length) {G__7678__a[G__7678__i] = arguments[G__7678__i + 0]; ++G__7678__i;}
  args = new cljs.core.IndexedSeq(G__7678__a,0);
} 
return G__7677__delegate.call(this,args);};
G__7677.cljs$lang$maxFixedArity = 0;
G__7677.cljs$lang$applyTo = (function (arglist__7679){
var args = cljs.core.seq(arglist__7679);
return G__7677__delegate(args);
});
G__7677.cljs$core$IFn$_invoke$arity$variadic = G__7677__delegate;
return G__7677;
})()
;

return null;
});
