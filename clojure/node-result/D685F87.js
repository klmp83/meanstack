goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7921__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7922__i = 0, G__7922__a = new Array(arguments.length -  0);
while (G__7922__i < G__7922__a.length) {G__7922__a[G__7922__i] = arguments[G__7922__i + 0]; ++G__7922__i;}
  args = new cljs.core.IndexedSeq(G__7922__a,0);
} 
return G__7921__delegate.call(this,args);};
G__7921.cljs$lang$maxFixedArity = 0;
G__7921.cljs$lang$applyTo = (function (arglist__7923){
var args = cljs.core.seq(arglist__7923);
return G__7921__delegate(args);
});
G__7921.cljs$core$IFn$_invoke$arity$variadic = G__7921__delegate;
return G__7921;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7924__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7925__i = 0, G__7925__a = new Array(arguments.length -  0);
while (G__7925__i < G__7925__a.length) {G__7925__a[G__7925__i] = arguments[G__7925__i + 0]; ++G__7925__i;}
  args = new cljs.core.IndexedSeq(G__7925__a,0);
} 
return G__7924__delegate.call(this,args);};
G__7924.cljs$lang$maxFixedArity = 0;
G__7924.cljs$lang$applyTo = (function (arglist__7926){
var args = cljs.core.seq(arglist__7926);
return G__7924__delegate(args);
});
G__7924.cljs$core$IFn$_invoke$arity$variadic = G__7924__delegate;
return G__7924;
})()
;

return null;
});
