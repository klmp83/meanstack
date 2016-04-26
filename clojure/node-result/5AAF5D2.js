goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8674__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8675__i = 0, G__8675__a = new Array(arguments.length -  0);
while (G__8675__i < G__8675__a.length) {G__8675__a[G__8675__i] = arguments[G__8675__i + 0]; ++G__8675__i;}
  args = new cljs.core.IndexedSeq(G__8675__a,0);
} 
return G__8674__delegate.call(this,args);};
G__8674.cljs$lang$maxFixedArity = 0;
G__8674.cljs$lang$applyTo = (function (arglist__8676){
var args = cljs.core.seq(arglist__8676);
return G__8674__delegate(args);
});
G__8674.cljs$core$IFn$_invoke$arity$variadic = G__8674__delegate;
return G__8674;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8677__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8678__i = 0, G__8678__a = new Array(arguments.length -  0);
while (G__8678__i < G__8678__a.length) {G__8678__a[G__8678__i] = arguments[G__8678__i + 0]; ++G__8678__i;}
  args = new cljs.core.IndexedSeq(G__8678__a,0);
} 
return G__8677__delegate.call(this,args);};
G__8677.cljs$lang$maxFixedArity = 0;
G__8677.cljs$lang$applyTo = (function (arglist__8679){
var args = cljs.core.seq(arglist__8679);
return G__8677__delegate(args);
});
G__8677.cljs$core$IFn$_invoke$arity$variadic = G__8677__delegate;
return G__8677;
})()
;

return null;
});
