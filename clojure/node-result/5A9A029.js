goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9200__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9201__i = 0, G__9201__a = new Array(arguments.length -  0);
while (G__9201__i < G__9201__a.length) {G__9201__a[G__9201__i] = arguments[G__9201__i + 0]; ++G__9201__i;}
  args = new cljs.core.IndexedSeq(G__9201__a,0);
} 
return G__9200__delegate.call(this,args);};
G__9200.cljs$lang$maxFixedArity = 0;
G__9200.cljs$lang$applyTo = (function (arglist__9202){
var args = cljs.core.seq(arglist__9202);
return G__9200__delegate(args);
});
G__9200.cljs$core$IFn$_invoke$arity$variadic = G__9200__delegate;
return G__9200;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9203__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9204__i = 0, G__9204__a = new Array(arguments.length -  0);
while (G__9204__i < G__9204__a.length) {G__9204__a[G__9204__i] = arguments[G__9204__i + 0]; ++G__9204__i;}
  args = new cljs.core.IndexedSeq(G__9204__a,0);
} 
return G__9203__delegate.call(this,args);};
G__9203.cljs$lang$maxFixedArity = 0;
G__9203.cljs$lang$applyTo = (function (arglist__9205){
var args = cljs.core.seq(arglist__9205);
return G__9203__delegate(args);
});
G__9203.cljs$core$IFn$_invoke$arity$variadic = G__9203__delegate;
return G__9203;
})()
;

return null;
});
