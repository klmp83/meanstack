goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7541__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7542__i = 0, G__7542__a = new Array(arguments.length -  0);
while (G__7542__i < G__7542__a.length) {G__7542__a[G__7542__i] = arguments[G__7542__i + 0]; ++G__7542__i;}
  args = new cljs.core.IndexedSeq(G__7542__a,0);
} 
return G__7541__delegate.call(this,args);};
G__7541.cljs$lang$maxFixedArity = 0;
G__7541.cljs$lang$applyTo = (function (arglist__7543){
var args = cljs.core.seq(arglist__7543);
return G__7541__delegate(args);
});
G__7541.cljs$core$IFn$_invoke$arity$variadic = G__7541__delegate;
return G__7541;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7544__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7545__i = 0, G__7545__a = new Array(arguments.length -  0);
while (G__7545__i < G__7545__a.length) {G__7545__a[G__7545__i] = arguments[G__7545__i + 0]; ++G__7545__i;}
  args = new cljs.core.IndexedSeq(G__7545__a,0);
} 
return G__7544__delegate.call(this,args);};
G__7544.cljs$lang$maxFixedArity = 0;
G__7544.cljs$lang$applyTo = (function (arglist__7546){
var args = cljs.core.seq(arglist__7546);
return G__7544__delegate(args);
});
G__7544.cljs$core$IFn$_invoke$arity$variadic = G__7544__delegate;
return G__7544;
})()
;

return null;
});
