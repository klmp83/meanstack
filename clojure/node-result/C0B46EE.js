goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9010__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9011__i = 0, G__9011__a = new Array(arguments.length -  0);
while (G__9011__i < G__9011__a.length) {G__9011__a[G__9011__i] = arguments[G__9011__i + 0]; ++G__9011__i;}
  args = new cljs.core.IndexedSeq(G__9011__a,0);
} 
return G__9010__delegate.call(this,args);};
G__9010.cljs$lang$maxFixedArity = 0;
G__9010.cljs$lang$applyTo = (function (arglist__9012){
var args = cljs.core.seq(arglist__9012);
return G__9010__delegate(args);
});
G__9010.cljs$core$IFn$_invoke$arity$variadic = G__9010__delegate;
return G__9010;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9013__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9014__i = 0, G__9014__a = new Array(arguments.length -  0);
while (G__9014__i < G__9014__a.length) {G__9014__a[G__9014__i] = arguments[G__9014__i + 0]; ++G__9014__i;}
  args = new cljs.core.IndexedSeq(G__9014__a,0);
} 
return G__9013__delegate.call(this,args);};
G__9013.cljs$lang$maxFixedArity = 0;
G__9013.cljs$lang$applyTo = (function (arglist__9015){
var args = cljs.core.seq(arglist__9015);
return G__9013__delegate(args);
});
G__9013.cljs$core$IFn$_invoke$arity$variadic = G__9013__delegate;
return G__9013;
})()
;

return null;
});
