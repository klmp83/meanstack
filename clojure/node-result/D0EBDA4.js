goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8648__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8649__i = 0, G__8649__a = new Array(arguments.length -  0);
while (G__8649__i < G__8649__a.length) {G__8649__a[G__8649__i] = arguments[G__8649__i + 0]; ++G__8649__i;}
  args = new cljs.core.IndexedSeq(G__8649__a,0);
} 
return G__8648__delegate.call(this,args);};
G__8648.cljs$lang$maxFixedArity = 0;
G__8648.cljs$lang$applyTo = (function (arglist__8650){
var args = cljs.core.seq(arglist__8650);
return G__8648__delegate(args);
});
G__8648.cljs$core$IFn$_invoke$arity$variadic = G__8648__delegate;
return G__8648;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8651__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8652__i = 0, G__8652__a = new Array(arguments.length -  0);
while (G__8652__i < G__8652__a.length) {G__8652__a[G__8652__i] = arguments[G__8652__i + 0]; ++G__8652__i;}
  args = new cljs.core.IndexedSeq(G__8652__a,0);
} 
return G__8651__delegate.call(this,args);};
G__8651.cljs$lang$maxFixedArity = 0;
G__8651.cljs$lang$applyTo = (function (arglist__8653){
var args = cljs.core.seq(arglist__8653);
return G__8651__delegate(args);
});
G__8651.cljs$core$IFn$_invoke$arity$variadic = G__8651__delegate;
return G__8651;
})()
;

return null;
});
