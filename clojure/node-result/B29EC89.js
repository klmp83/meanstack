goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8513__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8513 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8514__i = 0, G__8514__a = new Array(arguments.length -  0);
while (G__8514__i < G__8514__a.length) {G__8514__a[G__8514__i] = arguments[G__8514__i + 0]; ++G__8514__i;}
  args = new cljs.core.IndexedSeq(G__8514__a,0);
} 
return G__8513__delegate.call(this,args);};
G__8513.cljs$lang$maxFixedArity = 0;
G__8513.cljs$lang$applyTo = (function (arglist__8515){
var args = cljs.core.seq(arglist__8515);
return G__8513__delegate(args);
});
G__8513.cljs$core$IFn$_invoke$arity$variadic = G__8513__delegate;
return G__8513;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8516__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8517__i = 0, G__8517__a = new Array(arguments.length -  0);
while (G__8517__i < G__8517__a.length) {G__8517__a[G__8517__i] = arguments[G__8517__i + 0]; ++G__8517__i;}
  args = new cljs.core.IndexedSeq(G__8517__a,0);
} 
return G__8516__delegate.call(this,args);};
G__8516.cljs$lang$maxFixedArity = 0;
G__8516.cljs$lang$applyTo = (function (arglist__8518){
var args = cljs.core.seq(arglist__8518);
return G__8516__delegate(args);
});
G__8516.cljs$core$IFn$_invoke$arity$variadic = G__8516__delegate;
return G__8516;
})()
;

return null;
});
