goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8208__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8209__i = 0, G__8209__a = new Array(arguments.length -  0);
while (G__8209__i < G__8209__a.length) {G__8209__a[G__8209__i] = arguments[G__8209__i + 0]; ++G__8209__i;}
  args = new cljs.core.IndexedSeq(G__8209__a,0);
} 
return G__8208__delegate.call(this,args);};
G__8208.cljs$lang$maxFixedArity = 0;
G__8208.cljs$lang$applyTo = (function (arglist__8210){
var args = cljs.core.seq(arglist__8210);
return G__8208__delegate(args);
});
G__8208.cljs$core$IFn$_invoke$arity$variadic = G__8208__delegate;
return G__8208;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8211__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8212__i = 0, G__8212__a = new Array(arguments.length -  0);
while (G__8212__i < G__8212__a.length) {G__8212__a[G__8212__i] = arguments[G__8212__i + 0]; ++G__8212__i;}
  args = new cljs.core.IndexedSeq(G__8212__a,0);
} 
return G__8211__delegate.call(this,args);};
G__8211.cljs$lang$maxFixedArity = 0;
G__8211.cljs$lang$applyTo = (function (arglist__8213){
var args = cljs.core.seq(arglist__8213);
return G__8211__delegate(args);
});
G__8211.cljs$core$IFn$_invoke$arity$variadic = G__8211__delegate;
return G__8211;
})()
;

return null;
});
