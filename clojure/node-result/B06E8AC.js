goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8302__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8303__i = 0, G__8303__a = new Array(arguments.length -  0);
while (G__8303__i < G__8303__a.length) {G__8303__a[G__8303__i] = arguments[G__8303__i + 0]; ++G__8303__i;}
  args = new cljs.core.IndexedSeq(G__8303__a,0);
} 
return G__8302__delegate.call(this,args);};
G__8302.cljs$lang$maxFixedArity = 0;
G__8302.cljs$lang$applyTo = (function (arglist__8304){
var args = cljs.core.seq(arglist__8304);
return G__8302__delegate(args);
});
G__8302.cljs$core$IFn$_invoke$arity$variadic = G__8302__delegate;
return G__8302;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8305__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8306__i = 0, G__8306__a = new Array(arguments.length -  0);
while (G__8306__i < G__8306__a.length) {G__8306__a[G__8306__i] = arguments[G__8306__i + 0]; ++G__8306__i;}
  args = new cljs.core.IndexedSeq(G__8306__a,0);
} 
return G__8305__delegate.call(this,args);};
G__8305.cljs$lang$maxFixedArity = 0;
G__8305.cljs$lang$applyTo = (function (arglist__8307){
var args = cljs.core.seq(arglist__8307);
return G__8305__delegate(args);
});
G__8305.cljs$core$IFn$_invoke$arity$variadic = G__8305__delegate;
return G__8305;
})()
;

return null;
});
