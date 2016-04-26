goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7423__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7424__i = 0, G__7424__a = new Array(arguments.length -  0);
while (G__7424__i < G__7424__a.length) {G__7424__a[G__7424__i] = arguments[G__7424__i + 0]; ++G__7424__i;}
  args = new cljs.core.IndexedSeq(G__7424__a,0);
} 
return G__7423__delegate.call(this,args);};
G__7423.cljs$lang$maxFixedArity = 0;
G__7423.cljs$lang$applyTo = (function (arglist__7425){
var args = cljs.core.seq(arglist__7425);
return G__7423__delegate(args);
});
G__7423.cljs$core$IFn$_invoke$arity$variadic = G__7423__delegate;
return G__7423;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7426__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7426 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7427__i = 0, G__7427__a = new Array(arguments.length -  0);
while (G__7427__i < G__7427__a.length) {G__7427__a[G__7427__i] = arguments[G__7427__i + 0]; ++G__7427__i;}
  args = new cljs.core.IndexedSeq(G__7427__a,0);
} 
return G__7426__delegate.call(this,args);};
G__7426.cljs$lang$maxFixedArity = 0;
G__7426.cljs$lang$applyTo = (function (arglist__7428){
var args = cljs.core.seq(arglist__7428);
return G__7426__delegate(args);
});
G__7426.cljs$core$IFn$_invoke$arity$variadic = G__7426__delegate;
return G__7426;
})()
;

return null;
});
