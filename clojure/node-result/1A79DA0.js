goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7979__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7980__i = 0, G__7980__a = new Array(arguments.length -  0);
while (G__7980__i < G__7980__a.length) {G__7980__a[G__7980__i] = arguments[G__7980__i + 0]; ++G__7980__i;}
  args = new cljs.core.IndexedSeq(G__7980__a,0);
} 
return G__7979__delegate.call(this,args);};
G__7979.cljs$lang$maxFixedArity = 0;
G__7979.cljs$lang$applyTo = (function (arglist__7981){
var args = cljs.core.seq(arglist__7981);
return G__7979__delegate(args);
});
G__7979.cljs$core$IFn$_invoke$arity$variadic = G__7979__delegate;
return G__7979;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7982__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7983__i = 0, G__7983__a = new Array(arguments.length -  0);
while (G__7983__i < G__7983__a.length) {G__7983__a[G__7983__i] = arguments[G__7983__i + 0]; ++G__7983__i;}
  args = new cljs.core.IndexedSeq(G__7983__a,0);
} 
return G__7982__delegate.call(this,args);};
G__7982.cljs$lang$maxFixedArity = 0;
G__7982.cljs$lang$applyTo = (function (arglist__7984){
var args = cljs.core.seq(arglist__7984);
return G__7982__delegate(args);
});
G__7982.cljs$core$IFn$_invoke$arity$variadic = G__7982__delegate;
return G__7982;
})()
;

return null;
});
