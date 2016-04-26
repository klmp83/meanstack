goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7846__i = 0, G__7846__a = new Array(arguments.length -  0);
while (G__7846__i < G__7846__a.length) {G__7846__a[G__7846__i] = arguments[G__7846__i + 0]; ++G__7846__i;}
  args = new cljs.core.IndexedSeq(G__7846__a,0);
} 
return G__7845__delegate.call(this,args);};
G__7845.cljs$lang$maxFixedArity = 0;
G__7845.cljs$lang$applyTo = (function (arglist__7847){
var args = cljs.core.seq(arglist__7847);
return G__7845__delegate(args);
});
G__7845.cljs$core$IFn$_invoke$arity$variadic = G__7845__delegate;
return G__7845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7849__i = 0, G__7849__a = new Array(arguments.length -  0);
while (G__7849__i < G__7849__a.length) {G__7849__a[G__7849__i] = arguments[G__7849__i + 0]; ++G__7849__i;}
  args = new cljs.core.IndexedSeq(G__7849__a,0);
} 
return G__7848__delegate.call(this,args);};
G__7848.cljs$lang$maxFixedArity = 0;
G__7848.cljs$lang$applyTo = (function (arglist__7850){
var args = cljs.core.seq(arglist__7850);
return G__7848__delegate(args);
});
G__7848.cljs$core$IFn$_invoke$arity$variadic = G__7848__delegate;
return G__7848;
})()
;

return null;
});
