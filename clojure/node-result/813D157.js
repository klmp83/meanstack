goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7385__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7386__i = 0, G__7386__a = new Array(arguments.length -  0);
while (G__7386__i < G__7386__a.length) {G__7386__a[G__7386__i] = arguments[G__7386__i + 0]; ++G__7386__i;}
  args = new cljs.core.IndexedSeq(G__7386__a,0);
} 
return G__7385__delegate.call(this,args);};
G__7385.cljs$lang$maxFixedArity = 0;
G__7385.cljs$lang$applyTo = (function (arglist__7387){
var args = cljs.core.seq(arglist__7387);
return G__7385__delegate(args);
});
G__7385.cljs$core$IFn$_invoke$arity$variadic = G__7385__delegate;
return G__7385;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7388__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7389__i = 0, G__7389__a = new Array(arguments.length -  0);
while (G__7389__i < G__7389__a.length) {G__7389__a[G__7389__i] = arguments[G__7389__i + 0]; ++G__7389__i;}
  args = new cljs.core.IndexedSeq(G__7389__a,0);
} 
return G__7388__delegate.call(this,args);};
G__7388.cljs$lang$maxFixedArity = 0;
G__7388.cljs$lang$applyTo = (function (arglist__7390){
var args = cljs.core.seq(arglist__7390);
return G__7388__delegate(args);
});
G__7388.cljs$core$IFn$_invoke$arity$variadic = G__7388__delegate;
return G__7388;
})()
;

return null;
});
