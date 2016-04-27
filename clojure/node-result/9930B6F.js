goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8570__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8571__i = 0, G__8571__a = new Array(arguments.length -  0);
while (G__8571__i < G__8571__a.length) {G__8571__a[G__8571__i] = arguments[G__8571__i + 0]; ++G__8571__i;}
  args = new cljs.core.IndexedSeq(G__8571__a,0);
} 
return G__8570__delegate.call(this,args);};
G__8570.cljs$lang$maxFixedArity = 0;
G__8570.cljs$lang$applyTo = (function (arglist__8572){
var args = cljs.core.seq(arglist__8572);
return G__8570__delegate(args);
});
G__8570.cljs$core$IFn$_invoke$arity$variadic = G__8570__delegate;
return G__8570;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8573__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8574__i = 0, G__8574__a = new Array(arguments.length -  0);
while (G__8574__i < G__8574__a.length) {G__8574__a[G__8574__i] = arguments[G__8574__i + 0]; ++G__8574__i;}
  args = new cljs.core.IndexedSeq(G__8574__a,0);
} 
return G__8573__delegate.call(this,args);};
G__8573.cljs$lang$maxFixedArity = 0;
G__8573.cljs$lang$applyTo = (function (arglist__8575){
var args = cljs.core.seq(arglist__8575);
return G__8573__delegate(args);
});
G__8573.cljs$core$IFn$_invoke$arity$variadic = G__8573__delegate;
return G__8573;
})()
;

return null;
});
