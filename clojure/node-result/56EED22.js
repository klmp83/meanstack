goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8131__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8132__i = 0, G__8132__a = new Array(arguments.length -  0);
while (G__8132__i < G__8132__a.length) {G__8132__a[G__8132__i] = arguments[G__8132__i + 0]; ++G__8132__i;}
  args = new cljs.core.IndexedSeq(G__8132__a,0);
} 
return G__8131__delegate.call(this,args);};
G__8131.cljs$lang$maxFixedArity = 0;
G__8131.cljs$lang$applyTo = (function (arglist__8133){
var args = cljs.core.seq(arglist__8133);
return G__8131__delegate(args);
});
G__8131.cljs$core$IFn$_invoke$arity$variadic = G__8131__delegate;
return G__8131;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8134__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8134 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8135__i = 0, G__8135__a = new Array(arguments.length -  0);
while (G__8135__i < G__8135__a.length) {G__8135__a[G__8135__i] = arguments[G__8135__i + 0]; ++G__8135__i;}
  args = new cljs.core.IndexedSeq(G__8135__a,0);
} 
return G__8134__delegate.call(this,args);};
G__8134.cljs$lang$maxFixedArity = 0;
G__8134.cljs$lang$applyTo = (function (arglist__8136){
var args = cljs.core.seq(arglist__8136);
return G__8134__delegate(args);
});
G__8134.cljs$core$IFn$_invoke$arity$variadic = G__8134__delegate;
return G__8134;
})()
;

return null;
});
