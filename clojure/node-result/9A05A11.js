goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8788__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8789__i = 0, G__8789__a = new Array(arguments.length -  0);
while (G__8789__i < G__8789__a.length) {G__8789__a[G__8789__i] = arguments[G__8789__i + 0]; ++G__8789__i;}
  args = new cljs.core.IndexedSeq(G__8789__a,0);
} 
return G__8788__delegate.call(this,args);};
G__8788.cljs$lang$maxFixedArity = 0;
G__8788.cljs$lang$applyTo = (function (arglist__8790){
var args = cljs.core.seq(arglist__8790);
return G__8788__delegate(args);
});
G__8788.cljs$core$IFn$_invoke$arity$variadic = G__8788__delegate;
return G__8788;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8791__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8792__i = 0, G__8792__a = new Array(arguments.length -  0);
while (G__8792__i < G__8792__a.length) {G__8792__a[G__8792__i] = arguments[G__8792__i + 0]; ++G__8792__i;}
  args = new cljs.core.IndexedSeq(G__8792__a,0);
} 
return G__8791__delegate.call(this,args);};
G__8791.cljs$lang$maxFixedArity = 0;
G__8791.cljs$lang$applyTo = (function (arglist__8793){
var args = cljs.core.seq(arglist__8793);
return G__8791__delegate(args);
});
G__8791.cljs$core$IFn$_invoke$arity$variadic = G__8791__delegate;
return G__8791;
})()
;

return null;
});
