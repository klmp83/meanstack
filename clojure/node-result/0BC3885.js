goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8972__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8973__i = 0, G__8973__a = new Array(arguments.length -  0);
while (G__8973__i < G__8973__a.length) {G__8973__a[G__8973__i] = arguments[G__8973__i + 0]; ++G__8973__i;}
  args = new cljs.core.IndexedSeq(G__8973__a,0);
} 
return G__8972__delegate.call(this,args);};
G__8972.cljs$lang$maxFixedArity = 0;
G__8972.cljs$lang$applyTo = (function (arglist__8974){
var args = cljs.core.seq(arglist__8974);
return G__8972__delegate(args);
});
G__8972.cljs$core$IFn$_invoke$arity$variadic = G__8972__delegate;
return G__8972;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8975__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8976__i = 0, G__8976__a = new Array(arguments.length -  0);
while (G__8976__i < G__8976__a.length) {G__8976__a[G__8976__i] = arguments[G__8976__i + 0]; ++G__8976__i;}
  args = new cljs.core.IndexedSeq(G__8976__a,0);
} 
return G__8975__delegate.call(this,args);};
G__8975.cljs$lang$maxFixedArity = 0;
G__8975.cljs$lang$applyTo = (function (arglist__8977){
var args = cljs.core.seq(arglist__8977);
return G__8975__delegate(args);
});
G__8975.cljs$core$IFn$_invoke$arity$variadic = G__8975__delegate;
return G__8975;
})()
;

return null;
});