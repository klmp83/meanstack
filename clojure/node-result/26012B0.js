goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8731__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8732__i = 0, G__8732__a = new Array(arguments.length -  0);
while (G__8732__i < G__8732__a.length) {G__8732__a[G__8732__i] = arguments[G__8732__i + 0]; ++G__8732__i;}
  args = new cljs.core.IndexedSeq(G__8732__a,0);
} 
return G__8731__delegate.call(this,args);};
G__8731.cljs$lang$maxFixedArity = 0;
G__8731.cljs$lang$applyTo = (function (arglist__8733){
var args = cljs.core.seq(arglist__8733);
return G__8731__delegate(args);
});
G__8731.cljs$core$IFn$_invoke$arity$variadic = G__8731__delegate;
return G__8731;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8734__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8735__i = 0, G__8735__a = new Array(arguments.length -  0);
while (G__8735__i < G__8735__a.length) {G__8735__a[G__8735__i] = arguments[G__8735__i + 0]; ++G__8735__i;}
  args = new cljs.core.IndexedSeq(G__8735__a,0);
} 
return G__8734__delegate.call(this,args);};
G__8734.cljs$lang$maxFixedArity = 0;
G__8734.cljs$lang$applyTo = (function (arglist__8736){
var args = cljs.core.seq(arglist__8736);
return G__8734__delegate(args);
});
G__8734.cljs$core$IFn$_invoke$arity$variadic = G__8734__delegate;
return G__8734;
})()
;

return null;
});
