goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8589__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8590__i = 0, G__8590__a = new Array(arguments.length -  0);
while (G__8590__i < G__8590__a.length) {G__8590__a[G__8590__i] = arguments[G__8590__i + 0]; ++G__8590__i;}
  args = new cljs.core.IndexedSeq(G__8590__a,0);
} 
return G__8589__delegate.call(this,args);};
G__8589.cljs$lang$maxFixedArity = 0;
G__8589.cljs$lang$applyTo = (function (arglist__8591){
var args = cljs.core.seq(arglist__8591);
return G__8589__delegate(args);
});
G__8589.cljs$core$IFn$_invoke$arity$variadic = G__8589__delegate;
return G__8589;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8592__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8593__i = 0, G__8593__a = new Array(arguments.length -  0);
while (G__8593__i < G__8593__a.length) {G__8593__a[G__8593__i] = arguments[G__8593__i + 0]; ++G__8593__i;}
  args = new cljs.core.IndexedSeq(G__8593__a,0);
} 
return G__8592__delegate.call(this,args);};
G__8592.cljs$lang$maxFixedArity = 0;
G__8592.cljs$lang$applyTo = (function (arglist__8594){
var args = cljs.core.seq(arglist__8594);
return G__8592__delegate(args);
});
G__8592.cljs$core$IFn$_invoke$arity$variadic = G__8592__delegate;
return G__8592;
})()
;

return null;
});
