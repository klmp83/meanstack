goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8667__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8668__i = 0, G__8668__a = new Array(arguments.length -  0);
while (G__8668__i < G__8668__a.length) {G__8668__a[G__8668__i] = arguments[G__8668__i + 0]; ++G__8668__i;}
  args = new cljs.core.IndexedSeq(G__8668__a,0);
} 
return G__8667__delegate.call(this,args);};
G__8667.cljs$lang$maxFixedArity = 0;
G__8667.cljs$lang$applyTo = (function (arglist__8669){
var args = cljs.core.seq(arglist__8669);
return G__8667__delegate(args);
});
G__8667.cljs$core$IFn$_invoke$arity$variadic = G__8667__delegate;
return G__8667;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8670__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8671__i = 0, G__8671__a = new Array(arguments.length -  0);
while (G__8671__i < G__8671__a.length) {G__8671__a[G__8671__i] = arguments[G__8671__i + 0]; ++G__8671__i;}
  args = new cljs.core.IndexedSeq(G__8671__a,0);
} 
return G__8670__delegate.call(this,args);};
G__8670.cljs$lang$maxFixedArity = 0;
G__8670.cljs$lang$applyTo = (function (arglist__8672){
var args = cljs.core.seq(arglist__8672);
return G__8670__delegate(args);
});
G__8670.cljs$core$IFn$_invoke$arity$variadic = G__8670__delegate;
return G__8670;
})()
;

return null;
});
