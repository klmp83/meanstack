goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9086__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9087__i = 0, G__9087__a = new Array(arguments.length -  0);
while (G__9087__i < G__9087__a.length) {G__9087__a[G__9087__i] = arguments[G__9087__i + 0]; ++G__9087__i;}
  args = new cljs.core.IndexedSeq(G__9087__a,0);
} 
return G__9086__delegate.call(this,args);};
G__9086.cljs$lang$maxFixedArity = 0;
G__9086.cljs$lang$applyTo = (function (arglist__9088){
var args = cljs.core.seq(arglist__9088);
return G__9086__delegate(args);
});
G__9086.cljs$core$IFn$_invoke$arity$variadic = G__9086__delegate;
return G__9086;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9089__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9090__i = 0, G__9090__a = new Array(arguments.length -  0);
while (G__9090__i < G__9090__a.length) {G__9090__a[G__9090__i] = arguments[G__9090__i + 0]; ++G__9090__i;}
  args = new cljs.core.IndexedSeq(G__9090__a,0);
} 
return G__9089__delegate.call(this,args);};
G__9089.cljs$lang$maxFixedArity = 0;
G__9089.cljs$lang$applyTo = (function (arglist__9091){
var args = cljs.core.seq(arglist__9091);
return G__9089__delegate(args);
});
G__9089.cljs$core$IFn$_invoke$arity$variadic = G__9089__delegate;
return G__9089;
})()
;

return null;
});
