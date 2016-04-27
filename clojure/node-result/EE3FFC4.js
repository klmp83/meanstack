goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7475__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7476__i = 0, G__7476__a = new Array(arguments.length -  0);
while (G__7476__i < G__7476__a.length) {G__7476__a[G__7476__i] = arguments[G__7476__i + 0]; ++G__7476__i;}
  args = new cljs.core.IndexedSeq(G__7476__a,0);
} 
return G__7475__delegate.call(this,args);};
G__7475.cljs$lang$maxFixedArity = 0;
G__7475.cljs$lang$applyTo = (function (arglist__7477){
var args = cljs.core.seq(arglist__7477);
return G__7475__delegate(args);
});
G__7475.cljs$core$IFn$_invoke$arity$variadic = G__7475__delegate;
return G__7475;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7478__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7479__i = 0, G__7479__a = new Array(arguments.length -  0);
while (G__7479__i < G__7479__a.length) {G__7479__a[G__7479__i] = arguments[G__7479__i + 0]; ++G__7479__i;}
  args = new cljs.core.IndexedSeq(G__7479__a,0);
} 
return G__7478__delegate.call(this,args);};
G__7478.cljs$lang$maxFixedArity = 0;
G__7478.cljs$lang$applyTo = (function (arglist__7480){
var args = cljs.core.seq(arglist__7480);
return G__7478__delegate(args);
});
G__7478.cljs$core$IFn$_invoke$arity$variadic = G__7478__delegate;
return G__7478;
})()
;

return null;
});
