goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7463__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7464__i = 0, G__7464__a = new Array(arguments.length -  0);
while (G__7464__i < G__7464__a.length) {G__7464__a[G__7464__i] = arguments[G__7464__i + 0]; ++G__7464__i;}
  args = new cljs.core.IndexedSeq(G__7464__a,0);
} 
return G__7463__delegate.call(this,args);};
G__7463.cljs$lang$maxFixedArity = 0;
G__7463.cljs$lang$applyTo = (function (arglist__7465){
var args = cljs.core.seq(arglist__7465);
return G__7463__delegate(args);
});
G__7463.cljs$core$IFn$_invoke$arity$variadic = G__7463__delegate;
return G__7463;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7466__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7467__i = 0, G__7467__a = new Array(arguments.length -  0);
while (G__7467__i < G__7467__a.length) {G__7467__a[G__7467__i] = arguments[G__7467__i + 0]; ++G__7467__i;}
  args = new cljs.core.IndexedSeq(G__7467__a,0);
} 
return G__7466__delegate.call(this,args);};
G__7466.cljs$lang$maxFixedArity = 0;
G__7466.cljs$lang$applyTo = (function (arglist__7468){
var args = cljs.core.seq(arglist__7468);
return G__7466__delegate(args);
});
G__7466.cljs$core$IFn$_invoke$arity$variadic = G__7466__delegate;
return G__7466;
})()
;

return null;
});
