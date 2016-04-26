goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7444__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7445__i = 0, G__7445__a = new Array(arguments.length -  0);
while (G__7445__i < G__7445__a.length) {G__7445__a[G__7445__i] = arguments[G__7445__i + 0]; ++G__7445__i;}
  args = new cljs.core.IndexedSeq(G__7445__a,0);
} 
return G__7444__delegate.call(this,args);};
G__7444.cljs$lang$maxFixedArity = 0;
G__7444.cljs$lang$applyTo = (function (arglist__7446){
var args = cljs.core.seq(arglist__7446);
return G__7444__delegate(args);
});
G__7444.cljs$core$IFn$_invoke$arity$variadic = G__7444__delegate;
return G__7444;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7447__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7448__i = 0, G__7448__a = new Array(arguments.length -  0);
while (G__7448__i < G__7448__a.length) {G__7448__a[G__7448__i] = arguments[G__7448__i + 0]; ++G__7448__i;}
  args = new cljs.core.IndexedSeq(G__7448__a,0);
} 
return G__7447__delegate.call(this,args);};
G__7447.cljs$lang$maxFixedArity = 0;
G__7447.cljs$lang$applyTo = (function (arglist__7449){
var args = cljs.core.seq(arglist__7449);
return G__7447__delegate(args);
});
G__7447.cljs$core$IFn$_invoke$arity$variadic = G__7447__delegate;
return G__7447;
})()
;

return null;
});