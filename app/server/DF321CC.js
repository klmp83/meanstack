goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7353__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7354__i = 0, G__7354__a = new Array(arguments.length -  0);
while (G__7354__i < G__7354__a.length) {G__7354__a[G__7354__i] = arguments[G__7354__i + 0]; ++G__7354__i;}
  args = new cljs.core.IndexedSeq(G__7354__a,0);
} 
return G__7353__delegate.call(this,args);};
G__7353.cljs$lang$maxFixedArity = 0;
G__7353.cljs$lang$applyTo = (function (arglist__7355){
var args = cljs.core.seq(arglist__7355);
return G__7353__delegate(args);
});
G__7353.cljs$core$IFn$_invoke$arity$variadic = G__7353__delegate;
return G__7353;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7356__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7357__i = 0, G__7357__a = new Array(arguments.length -  0);
while (G__7357__i < G__7357__a.length) {G__7357__a[G__7357__i] = arguments[G__7357__i + 0]; ++G__7357__i;}
  args = new cljs.core.IndexedSeq(G__7357__a,0);
} 
return G__7356__delegate.call(this,args);};
G__7356.cljs$lang$maxFixedArity = 0;
G__7356.cljs$lang$applyTo = (function (arglist__7358){
var args = cljs.core.seq(arglist__7358);
return G__7356__delegate(args);
});
G__7356.cljs$core$IFn$_invoke$arity$variadic = G__7356__delegate;
return G__7356;
})()
;

return null;
});
