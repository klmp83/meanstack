goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7461__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7462__i = 0, G__7462__a = new Array(arguments.length -  0);
while (G__7462__i < G__7462__a.length) {G__7462__a[G__7462__i] = arguments[G__7462__i + 0]; ++G__7462__i;}
  args = new cljs.core.IndexedSeq(G__7462__a,0);
} 
return G__7461__delegate.call(this,args);};
G__7461.cljs$lang$maxFixedArity = 0;
G__7461.cljs$lang$applyTo = (function (arglist__7463){
var args = cljs.core.seq(arglist__7463);
return G__7461__delegate(args);
});
G__7461.cljs$core$IFn$_invoke$arity$variadic = G__7461__delegate;
return G__7461;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7464__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7465__i = 0, G__7465__a = new Array(arguments.length -  0);
while (G__7465__i < G__7465__a.length) {G__7465__a[G__7465__i] = arguments[G__7465__i + 0]; ++G__7465__i;}
  args = new cljs.core.IndexedSeq(G__7465__a,0);
} 
return G__7464__delegate.call(this,args);};
G__7464.cljs$lang$maxFixedArity = 0;
G__7464.cljs$lang$applyTo = (function (arglist__7466){
var args = cljs.core.seq(arglist__7466);
return G__7464__delegate(args);
});
G__7464.cljs$core$IFn$_invoke$arity$variadic = G__7464__delegate;
return G__7464;
})()
;

return null;
});
