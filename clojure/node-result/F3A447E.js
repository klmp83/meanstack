goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9124__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9125__i = 0, G__9125__a = new Array(arguments.length -  0);
while (G__9125__i < G__9125__a.length) {G__9125__a[G__9125__i] = arguments[G__9125__i + 0]; ++G__9125__i;}
  args = new cljs.core.IndexedSeq(G__9125__a,0);
} 
return G__9124__delegate.call(this,args);};
G__9124.cljs$lang$maxFixedArity = 0;
G__9124.cljs$lang$applyTo = (function (arglist__9126){
var args = cljs.core.seq(arglist__9126);
return G__9124__delegate(args);
});
G__9124.cljs$core$IFn$_invoke$arity$variadic = G__9124__delegate;
return G__9124;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9127__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9128__i = 0, G__9128__a = new Array(arguments.length -  0);
while (G__9128__i < G__9128__a.length) {G__9128__a[G__9128__i] = arguments[G__9128__i + 0]; ++G__9128__i;}
  args = new cljs.core.IndexedSeq(G__9128__a,0);
} 
return G__9127__delegate.call(this,args);};
G__9127.cljs$lang$maxFixedArity = 0;
G__9127.cljs$lang$applyTo = (function (arglist__9129){
var args = cljs.core.seq(arglist__9129);
return G__9127__delegate(args);
});
G__9127.cljs$core$IFn$_invoke$arity$variadic = G__9127__delegate;
return G__9127;
})()
;

return null;
});
