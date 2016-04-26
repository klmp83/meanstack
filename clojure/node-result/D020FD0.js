goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7788__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7789__i = 0, G__7789__a = new Array(arguments.length -  0);
while (G__7789__i < G__7789__a.length) {G__7789__a[G__7789__i] = arguments[G__7789__i + 0]; ++G__7789__i;}
  args = new cljs.core.IndexedSeq(G__7789__a,0);
} 
return G__7788__delegate.call(this,args);};
G__7788.cljs$lang$maxFixedArity = 0;
G__7788.cljs$lang$applyTo = (function (arglist__7790){
var args = cljs.core.seq(arglist__7790);
return G__7788__delegate(args);
});
G__7788.cljs$core$IFn$_invoke$arity$variadic = G__7788__delegate;
return G__7788;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7791__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7792__i = 0, G__7792__a = new Array(arguments.length -  0);
while (G__7792__i < G__7792__a.length) {G__7792__a[G__7792__i] = arguments[G__7792__i + 0]; ++G__7792__i;}
  args = new cljs.core.IndexedSeq(G__7792__a,0);
} 
return G__7791__delegate.call(this,args);};
G__7791.cljs$lang$maxFixedArity = 0;
G__7791.cljs$lang$applyTo = (function (arglist__7793){
var args = cljs.core.seq(arglist__7793);
return G__7791__delegate(args);
});
G__7791.cljs$core$IFn$_invoke$arity$variadic = G__7791__delegate;
return G__7791;
})()
;

return null;
});
