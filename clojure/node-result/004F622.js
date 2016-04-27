goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8475__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8476__i = 0, G__8476__a = new Array(arguments.length -  0);
while (G__8476__i < G__8476__a.length) {G__8476__a[G__8476__i] = arguments[G__8476__i + 0]; ++G__8476__i;}
  args = new cljs.core.IndexedSeq(G__8476__a,0);
} 
return G__8475__delegate.call(this,args);};
G__8475.cljs$lang$maxFixedArity = 0;
G__8475.cljs$lang$applyTo = (function (arglist__8477){
var args = cljs.core.seq(arglist__8477);
return G__8475__delegate(args);
});
G__8475.cljs$core$IFn$_invoke$arity$variadic = G__8475__delegate;
return G__8475;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8478__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8479__i = 0, G__8479__a = new Array(arguments.length -  0);
while (G__8479__i < G__8479__a.length) {G__8479__a[G__8479__i] = arguments[G__8479__i + 0]; ++G__8479__i;}
  args = new cljs.core.IndexedSeq(G__8479__a,0);
} 
return G__8478__delegate.call(this,args);};
G__8478.cljs$lang$maxFixedArity = 0;
G__8478.cljs$lang$applyTo = (function (arglist__8480){
var args = cljs.core.seq(arglist__8480);
return G__8478__delegate(args);
});
G__8478.cljs$core$IFn$_invoke$arity$variadic = G__8478__delegate;
return G__8478;
})()
;

return null;
});
