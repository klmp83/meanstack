goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8189__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8190__i = 0, G__8190__a = new Array(arguments.length -  0);
while (G__8190__i < G__8190__a.length) {G__8190__a[G__8190__i] = arguments[G__8190__i + 0]; ++G__8190__i;}
  args = new cljs.core.IndexedSeq(G__8190__a,0);
} 
return G__8189__delegate.call(this,args);};
G__8189.cljs$lang$maxFixedArity = 0;
G__8189.cljs$lang$applyTo = (function (arglist__8191){
var args = cljs.core.seq(arglist__8191);
return G__8189__delegate(args);
});
G__8189.cljs$core$IFn$_invoke$arity$variadic = G__8189__delegate;
return G__8189;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8192__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8193__i = 0, G__8193__a = new Array(arguments.length -  0);
while (G__8193__i < G__8193__a.length) {G__8193__a[G__8193__i] = arguments[G__8193__i + 0]; ++G__8193__i;}
  args = new cljs.core.IndexedSeq(G__8193__a,0);
} 
return G__8192__delegate.call(this,args);};
G__8192.cljs$lang$maxFixedArity = 0;
G__8192.cljs$lang$applyTo = (function (arglist__8194){
var args = cljs.core.seq(arglist__8194);
return G__8192__delegate(args);
});
G__8192.cljs$core$IFn$_invoke$arity$variadic = G__8192__delegate;
return G__8192;
})()
;

return null;
});
