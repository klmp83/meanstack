goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7823__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7824__i = 0, G__7824__a = new Array(arguments.length -  0);
while (G__7824__i < G__7824__a.length) {G__7824__a[G__7824__i] = arguments[G__7824__i + 0]; ++G__7824__i;}
  args = new cljs.core.IndexedSeq(G__7824__a,0);
} 
return G__7823__delegate.call(this,args);};
G__7823.cljs$lang$maxFixedArity = 0;
G__7823.cljs$lang$applyTo = (function (arglist__7825){
var args = cljs.core.seq(arglist__7825);
return G__7823__delegate(args);
});
G__7823.cljs$core$IFn$_invoke$arity$variadic = G__7823__delegate;
return G__7823;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7826__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7827__i = 0, G__7827__a = new Array(arguments.length -  0);
while (G__7827__i < G__7827__a.length) {G__7827__a[G__7827__i] = arguments[G__7827__i + 0]; ++G__7827__i;}
  args = new cljs.core.IndexedSeq(G__7827__a,0);
} 
return G__7826__delegate.call(this,args);};
G__7826.cljs$lang$maxFixedArity = 0;
G__7826.cljs$lang$applyTo = (function (arglist__7828){
var args = cljs.core.seq(arglist__7828);
return G__7826__delegate(args);
});
G__7826.cljs$core$IFn$_invoke$arity$variadic = G__7826__delegate;
return G__7826;
})()
;

return null;
});
