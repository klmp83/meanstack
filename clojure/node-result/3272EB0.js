goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7402__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7403__i = 0, G__7403__a = new Array(arguments.length -  0);
while (G__7403__i < G__7403__a.length) {G__7403__a[G__7403__i] = arguments[G__7403__i + 0]; ++G__7403__i;}
  args = new cljs.core.IndexedSeq(G__7403__a,0);
} 
return G__7402__delegate.call(this,args);};
G__7402.cljs$lang$maxFixedArity = 0;
G__7402.cljs$lang$applyTo = (function (arglist__7404){
var args = cljs.core.seq(arglist__7404);
return G__7402__delegate(args);
});
G__7402.cljs$core$IFn$_invoke$arity$variadic = G__7402__delegate;
return G__7402;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7405__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7405 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7406__i = 0, G__7406__a = new Array(arguments.length -  0);
while (G__7406__i < G__7406__a.length) {G__7406__a[G__7406__i] = arguments[G__7406__i + 0]; ++G__7406__i;}
  args = new cljs.core.IndexedSeq(G__7406__a,0);
} 
return G__7405__delegate.call(this,args);};
G__7405.cljs$lang$maxFixedArity = 0;
G__7405.cljs$lang$applyTo = (function (arglist__7407){
var args = cljs.core.seq(arglist__7407);
return G__7405__delegate(args);
});
G__7405.cljs$core$IFn$_invoke$arity$variadic = G__7405__delegate;
return G__7405;
})()
;

return null;
});
