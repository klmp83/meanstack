goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7417__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7417 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7418__i = 0, G__7418__a = new Array(arguments.length -  0);
while (G__7418__i < G__7418__a.length) {G__7418__a[G__7418__i] = arguments[G__7418__i + 0]; ++G__7418__i;}
  args = new cljs.core.IndexedSeq(G__7418__a,0);
} 
return G__7417__delegate.call(this,args);};
G__7417.cljs$lang$maxFixedArity = 0;
G__7417.cljs$lang$applyTo = (function (arglist__7419){
var args = cljs.core.seq(arglist__7419);
return G__7417__delegate(args);
});
G__7417.cljs$core$IFn$_invoke$arity$variadic = G__7417__delegate;
return G__7417;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7420__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7421__i = 0, G__7421__a = new Array(arguments.length -  0);
while (G__7421__i < G__7421__a.length) {G__7421__a[G__7421__i] = arguments[G__7421__i + 0]; ++G__7421__i;}
  args = new cljs.core.IndexedSeq(G__7421__a,0);
} 
return G__7420__delegate.call(this,args);};
G__7420.cljs$lang$maxFixedArity = 0;
G__7420.cljs$lang$applyTo = (function (arglist__7422){
var args = cljs.core.seq(arglist__7422);
return G__7420__delegate(args);
});
G__7420.cljs$core$IFn$_invoke$arity$variadic = G__7420__delegate;
return G__7420;
})()
;

return null;
});
