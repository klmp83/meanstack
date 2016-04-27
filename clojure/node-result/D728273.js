goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8801__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8802__i = 0, G__8802__a = new Array(arguments.length -  0);
while (G__8802__i < G__8802__a.length) {G__8802__a[G__8802__i] = arguments[G__8802__i + 0]; ++G__8802__i;}
  args = new cljs.core.IndexedSeq(G__8802__a,0);
} 
return G__8801__delegate.call(this,args);};
G__8801.cljs$lang$maxFixedArity = 0;
G__8801.cljs$lang$applyTo = (function (arglist__8803){
var args = cljs.core.seq(arglist__8803);
return G__8801__delegate(args);
});
G__8801.cljs$core$IFn$_invoke$arity$variadic = G__8801__delegate;
return G__8801;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8804__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8805__i = 0, G__8805__a = new Array(arguments.length -  0);
while (G__8805__i < G__8805__a.length) {G__8805__a[G__8805__i] = arguments[G__8805__i + 0]; ++G__8805__i;}
  args = new cljs.core.IndexedSeq(G__8805__a,0);
} 
return G__8804__delegate.call(this,args);};
G__8804.cljs$lang$maxFixedArity = 0;
G__8804.cljs$lang$applyTo = (function (arglist__8806){
var args = cljs.core.seq(arglist__8806);
return G__8804__delegate(args);
});
G__8804.cljs$core$IFn$_invoke$arity$variadic = G__8804__delegate;
return G__8804;
})()
;

return null;
});