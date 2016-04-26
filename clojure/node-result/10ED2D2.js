goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7499__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7500__i = 0, G__7500__a = new Array(arguments.length -  0);
while (G__7500__i < G__7500__a.length) {G__7500__a[G__7500__i] = arguments[G__7500__i + 0]; ++G__7500__i;}
  args = new cljs.core.IndexedSeq(G__7500__a,0);
} 
return G__7499__delegate.call(this,args);};
G__7499.cljs$lang$maxFixedArity = 0;
G__7499.cljs$lang$applyTo = (function (arglist__7501){
var args = cljs.core.seq(arglist__7501);
return G__7499__delegate(args);
});
G__7499.cljs$core$IFn$_invoke$arity$variadic = G__7499__delegate;
return G__7499;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7502__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7503__i = 0, G__7503__a = new Array(arguments.length -  0);
while (G__7503__i < G__7503__a.length) {G__7503__a[G__7503__i] = arguments[G__7503__i + 0]; ++G__7503__i;}
  args = new cljs.core.IndexedSeq(G__7503__a,0);
} 
return G__7502__delegate.call(this,args);};
G__7502.cljs$lang$maxFixedArity = 0;
G__7502.cljs$lang$applyTo = (function (arglist__7504){
var args = cljs.core.seq(arglist__7504);
return G__7502__delegate(args);
});
G__7502.cljs$core$IFn$_invoke$arity$variadic = G__7502__delegate;
return G__7502;
})()
;

return null;
});
