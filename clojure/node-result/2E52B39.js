goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8820__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8821__i = 0, G__8821__a = new Array(arguments.length -  0);
while (G__8821__i < G__8821__a.length) {G__8821__a[G__8821__i] = arguments[G__8821__i + 0]; ++G__8821__i;}
  args = new cljs.core.IndexedSeq(G__8821__a,0);
} 
return G__8820__delegate.call(this,args);};
G__8820.cljs$lang$maxFixedArity = 0;
G__8820.cljs$lang$applyTo = (function (arglist__8822){
var args = cljs.core.seq(arglist__8822);
return G__8820__delegate(args);
});
G__8820.cljs$core$IFn$_invoke$arity$variadic = G__8820__delegate;
return G__8820;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8823__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8824__i = 0, G__8824__a = new Array(arguments.length -  0);
while (G__8824__i < G__8824__a.length) {G__8824__a[G__8824__i] = arguments[G__8824__i + 0]; ++G__8824__i;}
  args = new cljs.core.IndexedSeq(G__8824__a,0);
} 
return G__8823__delegate.call(this,args);};
G__8823.cljs$lang$maxFixedArity = 0;
G__8823.cljs$lang$applyTo = (function (arglist__8825){
var args = cljs.core.seq(arglist__8825);
return G__8823__delegate(args);
});
G__8823.cljs$core$IFn$_invoke$arity$variadic = G__8823__delegate;
return G__8823;
})()
;

return null;
});
