goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7747__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7748__i = 0, G__7748__a = new Array(arguments.length -  0);
while (G__7748__i < G__7748__a.length) {G__7748__a[G__7748__i] = arguments[G__7748__i + 0]; ++G__7748__i;}
  args = new cljs.core.IndexedSeq(G__7748__a,0);
} 
return G__7747__delegate.call(this,args);};
G__7747.cljs$lang$maxFixedArity = 0;
G__7747.cljs$lang$applyTo = (function (arglist__7749){
var args = cljs.core.seq(arglist__7749);
return G__7747__delegate(args);
});
G__7747.cljs$core$IFn$_invoke$arity$variadic = G__7747__delegate;
return G__7747;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7750__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7751__i = 0, G__7751__a = new Array(arguments.length -  0);
while (G__7751__i < G__7751__a.length) {G__7751__a[G__7751__i] = arguments[G__7751__i + 0]; ++G__7751__i;}
  args = new cljs.core.IndexedSeq(G__7751__a,0);
} 
return G__7750__delegate.call(this,args);};
G__7750.cljs$lang$maxFixedArity = 0;
G__7750.cljs$lang$applyTo = (function (arglist__7752){
var args = cljs.core.seq(arglist__7752);
return G__7750__delegate(args);
});
G__7750.cljs$core$IFn$_invoke$arity$variadic = G__7750__delegate;
return G__7750;
})()
;

return null;
});
