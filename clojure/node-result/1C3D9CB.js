goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8245__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8246__i = 0, G__8246__a = new Array(arguments.length -  0);
while (G__8246__i < G__8246__a.length) {G__8246__a[G__8246__i] = arguments[G__8246__i + 0]; ++G__8246__i;}
  args = new cljs.core.IndexedSeq(G__8246__a,0);
} 
return G__8245__delegate.call(this,args);};
G__8245.cljs$lang$maxFixedArity = 0;
G__8245.cljs$lang$applyTo = (function (arglist__8247){
var args = cljs.core.seq(arglist__8247);
return G__8245__delegate(args);
});
G__8245.cljs$core$IFn$_invoke$arity$variadic = G__8245__delegate;
return G__8245;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8248__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8249__i = 0, G__8249__a = new Array(arguments.length -  0);
while (G__8249__i < G__8249__a.length) {G__8249__a[G__8249__i] = arguments[G__8249__i + 0]; ++G__8249__i;}
  args = new cljs.core.IndexedSeq(G__8249__a,0);
} 
return G__8248__delegate.call(this,args);};
G__8248.cljs$lang$maxFixedArity = 0;
G__8248.cljs$lang$applyTo = (function (arglist__8250){
var args = cljs.core.seq(arglist__8250);
return G__8248__delegate(args);
});
G__8248.cljs$core$IFn$_invoke$arity$variadic = G__8248__delegate;
return G__8248;
})()
;

return null;
});
