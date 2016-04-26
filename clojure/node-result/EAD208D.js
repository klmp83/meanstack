goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8522__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8523__i = 0, G__8523__a = new Array(arguments.length -  0);
while (G__8523__i < G__8523__a.length) {G__8523__a[G__8523__i] = arguments[G__8523__i + 0]; ++G__8523__i;}
  args = new cljs.core.IndexedSeq(G__8523__a,0);
} 
return G__8522__delegate.call(this,args);};
G__8522.cljs$lang$maxFixedArity = 0;
G__8522.cljs$lang$applyTo = (function (arglist__8524){
var args = cljs.core.seq(arglist__8524);
return G__8522__delegate(args);
});
G__8522.cljs$core$IFn$_invoke$arity$variadic = G__8522__delegate;
return G__8522;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8525__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8526__i = 0, G__8526__a = new Array(arguments.length -  0);
while (G__8526__i < G__8526__a.length) {G__8526__a[G__8526__i] = arguments[G__8526__i + 0]; ++G__8526__i;}
  args = new cljs.core.IndexedSeq(G__8526__a,0);
} 
return G__8525__delegate.call(this,args);};
G__8525.cljs$lang$maxFixedArity = 0;
G__8525.cljs$lang$applyTo = (function (arglist__8527){
var args = cljs.core.seq(arglist__8527);
return G__8525__delegate(args);
});
G__8525.cljs$core$IFn$_invoke$arity$variadic = G__8525__delegate;
return G__8525;
})()
;

return null;
});
