goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8017__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8018__i = 0, G__8018__a = new Array(arguments.length -  0);
while (G__8018__i < G__8018__a.length) {G__8018__a[G__8018__i] = arguments[G__8018__i + 0]; ++G__8018__i;}
  args = new cljs.core.IndexedSeq(G__8018__a,0);
} 
return G__8017__delegate.call(this,args);};
G__8017.cljs$lang$maxFixedArity = 0;
G__8017.cljs$lang$applyTo = (function (arglist__8019){
var args = cljs.core.seq(arglist__8019);
return G__8017__delegate(args);
});
G__8017.cljs$core$IFn$_invoke$arity$variadic = G__8017__delegate;
return G__8017;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8020__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8021__i = 0, G__8021__a = new Array(arguments.length -  0);
while (G__8021__i < G__8021__a.length) {G__8021__a[G__8021__i] = arguments[G__8021__i + 0]; ++G__8021__i;}
  args = new cljs.core.IndexedSeq(G__8021__a,0);
} 
return G__8020__delegate.call(this,args);};
G__8020.cljs$lang$maxFixedArity = 0;
G__8020.cljs$lang$applyTo = (function (arglist__8022){
var args = cljs.core.seq(arglist__8022);
return G__8020__delegate(args);
});
G__8020.cljs$core$IFn$_invoke$arity$variadic = G__8020__delegate;
return G__8020;
})()
;

return null;
});
