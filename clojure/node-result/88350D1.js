goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7807__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7808__i = 0, G__7808__a = new Array(arguments.length -  0);
while (G__7808__i < G__7808__a.length) {G__7808__a[G__7808__i] = arguments[G__7808__i + 0]; ++G__7808__i;}
  args = new cljs.core.IndexedSeq(G__7808__a,0);
} 
return G__7807__delegate.call(this,args);};
G__7807.cljs$lang$maxFixedArity = 0;
G__7807.cljs$lang$applyTo = (function (arglist__7809){
var args = cljs.core.seq(arglist__7809);
return G__7807__delegate(args);
});
G__7807.cljs$core$IFn$_invoke$arity$variadic = G__7807__delegate;
return G__7807;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7810__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7811__i = 0, G__7811__a = new Array(arguments.length -  0);
while (G__7811__i < G__7811__a.length) {G__7811__a[G__7811__i] = arguments[G__7811__i + 0]; ++G__7811__i;}
  args = new cljs.core.IndexedSeq(G__7811__a,0);
} 
return G__7810__delegate.call(this,args);};
G__7810.cljs$lang$maxFixedArity = 0;
G__7810.cljs$lang$applyTo = (function (arglist__7812){
var args = cljs.core.seq(arglist__7812);
return G__7810__delegate(args);
});
G__7810.cljs$core$IFn$_invoke$arity$variadic = G__7810__delegate;
return G__7810;
})()
;

return null;
});
