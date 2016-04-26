goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8655__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8656__i = 0, G__8656__a = new Array(arguments.length -  0);
while (G__8656__i < G__8656__a.length) {G__8656__a[G__8656__i] = arguments[G__8656__i + 0]; ++G__8656__i;}
  args = new cljs.core.IndexedSeq(G__8656__a,0);
} 
return G__8655__delegate.call(this,args);};
G__8655.cljs$lang$maxFixedArity = 0;
G__8655.cljs$lang$applyTo = (function (arglist__8657){
var args = cljs.core.seq(arglist__8657);
return G__8655__delegate(args);
});
G__8655.cljs$core$IFn$_invoke$arity$variadic = G__8655__delegate;
return G__8655;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8658__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8659__i = 0, G__8659__a = new Array(arguments.length -  0);
while (G__8659__i < G__8659__a.length) {G__8659__a[G__8659__i] = arguments[G__8659__i + 0]; ++G__8659__i;}
  args = new cljs.core.IndexedSeq(G__8659__a,0);
} 
return G__8658__delegate.call(this,args);};
G__8658.cljs$lang$maxFixedArity = 0;
G__8658.cljs$lang$applyTo = (function (arglist__8660){
var args = cljs.core.seq(arglist__8660);
return G__8658__delegate(args);
});
G__8658.cljs$core$IFn$_invoke$arity$variadic = G__8658__delegate;
return G__8658;
})()
;

return null;
});
