goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7978__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7979__i = 0, G__7979__a = new Array(arguments.length -  0);
while (G__7979__i < G__7979__a.length) {G__7979__a[G__7979__i] = arguments[G__7979__i + 0]; ++G__7979__i;}
  args = new cljs.core.IndexedSeq(G__7979__a,0);
} 
return G__7978__delegate.call(this,args);};
G__7978.cljs$lang$maxFixedArity = 0;
G__7978.cljs$lang$applyTo = (function (arglist__7980){
var args = cljs.core.seq(arglist__7980);
return G__7978__delegate(args);
});
G__7978.cljs$core$IFn$_invoke$arity$variadic = G__7978__delegate;
return G__7978;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7981__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7982__i = 0, G__7982__a = new Array(arguments.length -  0);
while (G__7982__i < G__7982__a.length) {G__7982__a[G__7982__i] = arguments[G__7982__i + 0]; ++G__7982__i;}
  args = new cljs.core.IndexedSeq(G__7982__a,0);
} 
return G__7981__delegate.call(this,args);};
G__7981.cljs$lang$maxFixedArity = 0;
G__7981.cljs$lang$applyTo = (function (arglist__7983){
var args = cljs.core.seq(arglist__7983);
return G__7981__delegate(args);
});
G__7981.cljs$core$IFn$_invoke$arity$variadic = G__7981__delegate;
return G__7981;
})()
;

return null;
});
