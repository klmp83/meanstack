goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8504__i = 0, G__8504__a = new Array(arguments.length -  0);
while (G__8504__i < G__8504__a.length) {G__8504__a[G__8504__i] = arguments[G__8504__i + 0]; ++G__8504__i;}
  args = new cljs.core.IndexedSeq(G__8504__a,0);
} 
return G__8503__delegate.call(this,args);};
G__8503.cljs$lang$maxFixedArity = 0;
G__8503.cljs$lang$applyTo = (function (arglist__8505){
var args = cljs.core.seq(arglist__8505);
return G__8503__delegate(args);
});
G__8503.cljs$core$IFn$_invoke$arity$variadic = G__8503__delegate;
return G__8503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8507__i = 0, G__8507__a = new Array(arguments.length -  0);
while (G__8507__i < G__8507__a.length) {G__8507__a[G__8507__i] = arguments[G__8507__i + 0]; ++G__8507__i;}
  args = new cljs.core.IndexedSeq(G__8507__a,0);
} 
return G__8506__delegate.call(this,args);};
G__8506.cljs$lang$maxFixedArity = 0;
G__8506.cljs$lang$applyTo = (function (arglist__8508){
var args = cljs.core.seq(arglist__8508);
return G__8506__delegate(args);
});
G__8506.cljs$core$IFn$_invoke$arity$variadic = G__8506__delegate;
return G__8506;
})()
;

return null;
});
