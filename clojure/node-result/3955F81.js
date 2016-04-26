goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8246__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8247__i = 0, G__8247__a = new Array(arguments.length -  0);
while (G__8247__i < G__8247__a.length) {G__8247__a[G__8247__i] = arguments[G__8247__i + 0]; ++G__8247__i;}
  args = new cljs.core.IndexedSeq(G__8247__a,0);
} 
return G__8246__delegate.call(this,args);};
G__8246.cljs$lang$maxFixedArity = 0;
G__8246.cljs$lang$applyTo = (function (arglist__8248){
var args = cljs.core.seq(arglist__8248);
return G__8246__delegate(args);
});
G__8246.cljs$core$IFn$_invoke$arity$variadic = G__8246__delegate;
return G__8246;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8249__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8249 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8250__i = 0, G__8250__a = new Array(arguments.length -  0);
while (G__8250__i < G__8250__a.length) {G__8250__a[G__8250__i] = arguments[G__8250__i + 0]; ++G__8250__i;}
  args = new cljs.core.IndexedSeq(G__8250__a,0);
} 
return G__8249__delegate.call(this,args);};
G__8249.cljs$lang$maxFixedArity = 0;
G__8249.cljs$lang$applyTo = (function (arglist__8251){
var args = cljs.core.seq(arglist__8251);
return G__8249__delegate(args);
});
G__8249.cljs$core$IFn$_invoke$arity$variadic = G__8249__delegate;
return G__8249;
})()
;

return null;
});