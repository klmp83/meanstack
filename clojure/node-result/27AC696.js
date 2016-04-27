goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9352__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9353__i = 0, G__9353__a = new Array(arguments.length -  0);
while (G__9353__i < G__9353__a.length) {G__9353__a[G__9353__i] = arguments[G__9353__i + 0]; ++G__9353__i;}
  args = new cljs.core.IndexedSeq(G__9353__a,0);
} 
return G__9352__delegate.call(this,args);};
G__9352.cljs$lang$maxFixedArity = 0;
G__9352.cljs$lang$applyTo = (function (arglist__9354){
var args = cljs.core.seq(arglist__9354);
return G__9352__delegate(args);
});
G__9352.cljs$core$IFn$_invoke$arity$variadic = G__9352__delegate;
return G__9352;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9355__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9356__i = 0, G__9356__a = new Array(arguments.length -  0);
while (G__9356__i < G__9356__a.length) {G__9356__a[G__9356__i] = arguments[G__9356__i + 0]; ++G__9356__i;}
  args = new cljs.core.IndexedSeq(G__9356__a,0);
} 
return G__9355__delegate.call(this,args);};
G__9355.cljs$lang$maxFixedArity = 0;
G__9355.cljs$lang$applyTo = (function (arglist__9357){
var args = cljs.core.seq(arglist__9357);
return G__9355__delegate(args);
});
G__9355.cljs$core$IFn$_invoke$arity$variadic = G__9355__delegate;
return G__9355;
})()
;

return null;
});
