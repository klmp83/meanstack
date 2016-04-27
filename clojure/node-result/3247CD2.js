goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7513__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7514__i = 0, G__7514__a = new Array(arguments.length -  0);
while (G__7514__i < G__7514__a.length) {G__7514__a[G__7514__i] = arguments[G__7514__i + 0]; ++G__7514__i;}
  args = new cljs.core.IndexedSeq(G__7514__a,0);
} 
return G__7513__delegate.call(this,args);};
G__7513.cljs$lang$maxFixedArity = 0;
G__7513.cljs$lang$applyTo = (function (arglist__7515){
var args = cljs.core.seq(arglist__7515);
return G__7513__delegate(args);
});
G__7513.cljs$core$IFn$_invoke$arity$variadic = G__7513__delegate;
return G__7513;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7516__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7517__i = 0, G__7517__a = new Array(arguments.length -  0);
while (G__7517__i < G__7517__a.length) {G__7517__a[G__7517__i] = arguments[G__7517__i + 0]; ++G__7517__i;}
  args = new cljs.core.IndexedSeq(G__7517__a,0);
} 
return G__7516__delegate.call(this,args);};
G__7516.cljs$lang$maxFixedArity = 0;
G__7516.cljs$lang$applyTo = (function (arglist__7518){
var args = cljs.core.seq(arglist__7518);
return G__7516__delegate(args);
});
G__7516.cljs$core$IFn$_invoke$arity$variadic = G__7516__delegate;
return G__7516;
})()
;

return null;
});
