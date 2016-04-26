goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8446__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8447__i = 0, G__8447__a = new Array(arguments.length -  0);
while (G__8447__i < G__8447__a.length) {G__8447__a[G__8447__i] = arguments[G__8447__i + 0]; ++G__8447__i;}
  args = new cljs.core.IndexedSeq(G__8447__a,0);
} 
return G__8446__delegate.call(this,args);};
G__8446.cljs$lang$maxFixedArity = 0;
G__8446.cljs$lang$applyTo = (function (arglist__8448){
var args = cljs.core.seq(arglist__8448);
return G__8446__delegate(args);
});
G__8446.cljs$core$IFn$_invoke$arity$variadic = G__8446__delegate;
return G__8446;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8449__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8450__i = 0, G__8450__a = new Array(arguments.length -  0);
while (G__8450__i < G__8450__a.length) {G__8450__a[G__8450__i] = arguments[G__8450__i + 0]; ++G__8450__i;}
  args = new cljs.core.IndexedSeq(G__8450__a,0);
} 
return G__8449__delegate.call(this,args);};
G__8449.cljs$lang$maxFixedArity = 0;
G__8449.cljs$lang$applyTo = (function (arglist__8451){
var args = cljs.core.seq(arglist__8451);
return G__8449__delegate(args);
});
G__8449.cljs$core$IFn$_invoke$arity$variadic = G__8449__delegate;
return G__8449;
})()
;

return null;
});
