goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7537__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7538__i = 0, G__7538__a = new Array(arguments.length -  0);
while (G__7538__i < G__7538__a.length) {G__7538__a[G__7538__i] = arguments[G__7538__i + 0]; ++G__7538__i;}
  args = new cljs.core.IndexedSeq(G__7538__a,0);
} 
return G__7537__delegate.call(this,args);};
G__7537.cljs$lang$maxFixedArity = 0;
G__7537.cljs$lang$applyTo = (function (arglist__7539){
var args = cljs.core.seq(arglist__7539);
return G__7537__delegate(args);
});
G__7537.cljs$core$IFn$_invoke$arity$variadic = G__7537__delegate;
return G__7537;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7540__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7541__i = 0, G__7541__a = new Array(arguments.length -  0);
while (G__7541__i < G__7541__a.length) {G__7541__a[G__7541__i] = arguments[G__7541__i + 0]; ++G__7541__i;}
  args = new cljs.core.IndexedSeq(G__7541__a,0);
} 
return G__7540__delegate.call(this,args);};
G__7540.cljs$lang$maxFixedArity = 0;
G__7540.cljs$lang$applyTo = (function (arglist__7542){
var args = cljs.core.seq(arglist__7542);
return G__7540__delegate(args);
});
G__7540.cljs$core$IFn$_invoke$arity$variadic = G__7540__delegate;
return G__7540;
})()
;

return null;
});
