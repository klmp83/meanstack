goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7494__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7495__i = 0, G__7495__a = new Array(arguments.length -  0);
while (G__7495__i < G__7495__a.length) {G__7495__a[G__7495__i] = arguments[G__7495__i + 0]; ++G__7495__i;}
  args = new cljs.core.IndexedSeq(G__7495__a,0);
} 
return G__7494__delegate.call(this,args);};
G__7494.cljs$lang$maxFixedArity = 0;
G__7494.cljs$lang$applyTo = (function (arglist__7496){
var args = cljs.core.seq(arglist__7496);
return G__7494__delegate(args);
});
G__7494.cljs$core$IFn$_invoke$arity$variadic = G__7494__delegate;
return G__7494;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7497__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7498__i = 0, G__7498__a = new Array(arguments.length -  0);
while (G__7498__i < G__7498__a.length) {G__7498__a[G__7498__i] = arguments[G__7498__i + 0]; ++G__7498__i;}
  args = new cljs.core.IndexedSeq(G__7498__a,0);
} 
return G__7497__delegate.call(this,args);};
G__7497.cljs$lang$maxFixedArity = 0;
G__7497.cljs$lang$applyTo = (function (arglist__7499){
var args = cljs.core.seq(arglist__7499);
return G__7497__delegate(args);
});
G__7497.cljs$core$IFn$_invoke$arity$variadic = G__7497__delegate;
return G__7497;
})()
;

return null;
});
