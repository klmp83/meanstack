goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7343__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7344__i = 0, G__7344__a = new Array(arguments.length -  0);
while (G__7344__i < G__7344__a.length) {G__7344__a[G__7344__i] = arguments[G__7344__i + 0]; ++G__7344__i;}
  args = new cljs.core.IndexedSeq(G__7344__a,0);
} 
return G__7343__delegate.call(this,args);};
G__7343.cljs$lang$maxFixedArity = 0;
G__7343.cljs$lang$applyTo = (function (arglist__7345){
var args = cljs.core.seq(arglist__7345);
return G__7343__delegate(args);
});
G__7343.cljs$core$IFn$_invoke$arity$variadic = G__7343__delegate;
return G__7343;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7346__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7347__i = 0, G__7347__a = new Array(arguments.length -  0);
while (G__7347__i < G__7347__a.length) {G__7347__a[G__7347__i] = arguments[G__7347__i + 0]; ++G__7347__i;}
  args = new cljs.core.IndexedSeq(G__7347__a,0);
} 
return G__7346__delegate.call(this,args);};
G__7346.cljs$lang$maxFixedArity = 0;
G__7346.cljs$lang$applyTo = (function (arglist__7348){
var args = cljs.core.seq(arglist__7348);
return G__7346__delegate(args);
});
G__7346.cljs$core$IFn$_invoke$arity$variadic = G__7346__delegate;
return G__7346;
})()
;

return null;
});
