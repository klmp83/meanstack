goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7636__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7637__i = 0, G__7637__a = new Array(arguments.length -  0);
while (G__7637__i < G__7637__a.length) {G__7637__a[G__7637__i] = arguments[G__7637__i + 0]; ++G__7637__i;}
  args = new cljs.core.IndexedSeq(G__7637__a,0);
} 
return G__7636__delegate.call(this,args);};
G__7636.cljs$lang$maxFixedArity = 0;
G__7636.cljs$lang$applyTo = (function (arglist__7638){
var args = cljs.core.seq(arglist__7638);
return G__7636__delegate(args);
});
G__7636.cljs$core$IFn$_invoke$arity$variadic = G__7636__delegate;
return G__7636;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7639__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7640__i = 0, G__7640__a = new Array(arguments.length -  0);
while (G__7640__i < G__7640__a.length) {G__7640__a[G__7640__i] = arguments[G__7640__i + 0]; ++G__7640__i;}
  args = new cljs.core.IndexedSeq(G__7640__a,0);
} 
return G__7639__delegate.call(this,args);};
G__7639.cljs$lang$maxFixedArity = 0;
G__7639.cljs$lang$applyTo = (function (arglist__7641){
var args = cljs.core.seq(arglist__7641);
return G__7639__delegate(args);
});
G__7639.cljs$core$IFn$_invoke$arity$variadic = G__7639__delegate;
return G__7639;
})()
;

return null;
});
