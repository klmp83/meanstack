goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9143__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9144__i = 0, G__9144__a = new Array(arguments.length -  0);
while (G__9144__i < G__9144__a.length) {G__9144__a[G__9144__i] = arguments[G__9144__i + 0]; ++G__9144__i;}
  args = new cljs.core.IndexedSeq(G__9144__a,0);
} 
return G__9143__delegate.call(this,args);};
G__9143.cljs$lang$maxFixedArity = 0;
G__9143.cljs$lang$applyTo = (function (arglist__9145){
var args = cljs.core.seq(arglist__9145);
return G__9143__delegate(args);
});
G__9143.cljs$core$IFn$_invoke$arity$variadic = G__9143__delegate;
return G__9143;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9146__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9147__i = 0, G__9147__a = new Array(arguments.length -  0);
while (G__9147__i < G__9147__a.length) {G__9147__a[G__9147__i] = arguments[G__9147__i + 0]; ++G__9147__i;}
  args = new cljs.core.IndexedSeq(G__9147__a,0);
} 
return G__9146__delegate.call(this,args);};
G__9146.cljs$lang$maxFixedArity = 0;
G__9146.cljs$lang$applyTo = (function (arglist__9148){
var args = cljs.core.seq(arglist__9148);
return G__9146__delegate(args);
});
G__9146.cljs$core$IFn$_invoke$arity$variadic = G__9146__delegate;
return G__9146;
})()
;

return null;
});
