goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8188__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8188 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8189__i = 0, G__8189__a = new Array(arguments.length -  0);
while (G__8189__i < G__8189__a.length) {G__8189__a[G__8189__i] = arguments[G__8189__i + 0]; ++G__8189__i;}
  args = new cljs.core.IndexedSeq(G__8189__a,0);
} 
return G__8188__delegate.call(this,args);};
G__8188.cljs$lang$maxFixedArity = 0;
G__8188.cljs$lang$applyTo = (function (arglist__8190){
var args = cljs.core.seq(arglist__8190);
return G__8188__delegate(args);
});
G__8188.cljs$core$IFn$_invoke$arity$variadic = G__8188__delegate;
return G__8188;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8191__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8192__i = 0, G__8192__a = new Array(arguments.length -  0);
while (G__8192__i < G__8192__a.length) {G__8192__a[G__8192__i] = arguments[G__8192__i + 0]; ++G__8192__i;}
  args = new cljs.core.IndexedSeq(G__8192__a,0);
} 
return G__8191__delegate.call(this,args);};
G__8191.cljs$lang$maxFixedArity = 0;
G__8191.cljs$lang$applyTo = (function (arglist__8193){
var args = cljs.core.seq(arglist__8193);
return G__8191__delegate(args);
});
G__8191.cljs$core$IFn$_invoke$arity$variadic = G__8191__delegate;
return G__8191;
})()
;

return null;
});
