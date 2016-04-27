goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7398__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7398 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7399__i = 0, G__7399__a = new Array(arguments.length -  0);
while (G__7399__i < G__7399__a.length) {G__7399__a[G__7399__i] = arguments[G__7399__i + 0]; ++G__7399__i;}
  args = new cljs.core.IndexedSeq(G__7399__a,0);
} 
return G__7398__delegate.call(this,args);};
G__7398.cljs$lang$maxFixedArity = 0;
G__7398.cljs$lang$applyTo = (function (arglist__7400){
var args = cljs.core.seq(arglist__7400);
return G__7398__delegate(args);
});
G__7398.cljs$core$IFn$_invoke$arity$variadic = G__7398__delegate;
return G__7398;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7401__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7401 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7402__i = 0, G__7402__a = new Array(arguments.length -  0);
while (G__7402__i < G__7402__a.length) {G__7402__a[G__7402__i] = arguments[G__7402__i + 0]; ++G__7402__i;}
  args = new cljs.core.IndexedSeq(G__7402__a,0);
} 
return G__7401__delegate.call(this,args);};
G__7401.cljs$lang$maxFixedArity = 0;
G__7401.cljs$lang$applyTo = (function (arglist__7403){
var args = cljs.core.seq(arglist__7403);
return G__7401__delegate(args);
});
G__7401.cljs$core$IFn$_invoke$arity$variadic = G__7401__delegate;
return G__7401;
})()
;

return null;
});
