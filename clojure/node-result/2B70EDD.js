goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8388__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8389__i = 0, G__8389__a = new Array(arguments.length -  0);
while (G__8389__i < G__8389__a.length) {G__8389__a[G__8389__i] = arguments[G__8389__i + 0]; ++G__8389__i;}
  args = new cljs.core.IndexedSeq(G__8389__a,0);
} 
return G__8388__delegate.call(this,args);};
G__8388.cljs$lang$maxFixedArity = 0;
G__8388.cljs$lang$applyTo = (function (arglist__8390){
var args = cljs.core.seq(arglist__8390);
return G__8388__delegate(args);
});
G__8388.cljs$core$IFn$_invoke$arity$variadic = G__8388__delegate;
return G__8388;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8391__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8391 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8392__i = 0, G__8392__a = new Array(arguments.length -  0);
while (G__8392__i < G__8392__a.length) {G__8392__a[G__8392__i] = arguments[G__8392__i + 0]; ++G__8392__i;}
  args = new cljs.core.IndexedSeq(G__8392__a,0);
} 
return G__8391__delegate.call(this,args);};
G__8391.cljs$lang$maxFixedArity = 0;
G__8391.cljs$lang$applyTo = (function (arglist__8393){
var args = cljs.core.seq(arglist__8393);
return G__8391__delegate(args);
});
G__8391.cljs$core$IFn$_invoke$arity$variadic = G__8391__delegate;
return G__8391;
})()
;

return null;
});
