goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7709__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7709 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7710__i = 0, G__7710__a = new Array(arguments.length -  0);
while (G__7710__i < G__7710__a.length) {G__7710__a[G__7710__i] = arguments[G__7710__i + 0]; ++G__7710__i;}
  args = new cljs.core.IndexedSeq(G__7710__a,0);
} 
return G__7709__delegate.call(this,args);};
G__7709.cljs$lang$maxFixedArity = 0;
G__7709.cljs$lang$applyTo = (function (arglist__7711){
var args = cljs.core.seq(arglist__7711);
return G__7709__delegate(args);
});
G__7709.cljs$core$IFn$_invoke$arity$variadic = G__7709__delegate;
return G__7709;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7712__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7712 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7713__i = 0, G__7713__a = new Array(arguments.length -  0);
while (G__7713__i < G__7713__a.length) {G__7713__a[G__7713__i] = arguments[G__7713__i + 0]; ++G__7713__i;}
  args = new cljs.core.IndexedSeq(G__7713__a,0);
} 
return G__7712__delegate.call(this,args);};
G__7712.cljs$lang$maxFixedArity = 0;
G__7712.cljs$lang$applyTo = (function (arglist__7714){
var args = cljs.core.seq(arglist__7714);
return G__7712__delegate(args);
});
G__7712.cljs$core$IFn$_invoke$arity$variadic = G__7712__delegate;
return G__7712;
})()
;

return null;
});
