goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8532__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8532 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8533__i = 0, G__8533__a = new Array(arguments.length -  0);
while (G__8533__i < G__8533__a.length) {G__8533__a[G__8533__i] = arguments[G__8533__i + 0]; ++G__8533__i;}
  args = new cljs.core.IndexedSeq(G__8533__a,0);
} 
return G__8532__delegate.call(this,args);};
G__8532.cljs$lang$maxFixedArity = 0;
G__8532.cljs$lang$applyTo = (function (arglist__8534){
var args = cljs.core.seq(arglist__8534);
return G__8532__delegate(args);
});
G__8532.cljs$core$IFn$_invoke$arity$variadic = G__8532__delegate;
return G__8532;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8535__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8536__i = 0, G__8536__a = new Array(arguments.length -  0);
while (G__8536__i < G__8536__a.length) {G__8536__a[G__8536__i] = arguments[G__8536__i + 0]; ++G__8536__i;}
  args = new cljs.core.IndexedSeq(G__8536__a,0);
} 
return G__8535__delegate.call(this,args);};
G__8535.cljs$lang$maxFixedArity = 0;
G__8535.cljs$lang$applyTo = (function (arglist__8537){
var args = cljs.core.seq(arglist__8537);
return G__8535__delegate(args);
});
G__8535.cljs$core$IFn$_invoke$arity$variadic = G__8535__delegate;
return G__8535;
})()
;

return null;
});
