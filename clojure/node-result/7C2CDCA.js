goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9466__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9467__i = 0, G__9467__a = new Array(arguments.length -  0);
while (G__9467__i < G__9467__a.length) {G__9467__a[G__9467__i] = arguments[G__9467__i + 0]; ++G__9467__i;}
  args = new cljs.core.IndexedSeq(G__9467__a,0);
} 
return G__9466__delegate.call(this,args);};
G__9466.cljs$lang$maxFixedArity = 0;
G__9466.cljs$lang$applyTo = (function (arglist__9468){
var args = cljs.core.seq(arglist__9468);
return G__9466__delegate(args);
});
G__9466.cljs$core$IFn$_invoke$arity$variadic = G__9466__delegate;
return G__9466;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9469__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9470__i = 0, G__9470__a = new Array(arguments.length -  0);
while (G__9470__i < G__9470__a.length) {G__9470__a[G__9470__i] = arguments[G__9470__i + 0]; ++G__9470__i;}
  args = new cljs.core.IndexedSeq(G__9470__a,0);
} 
return G__9469__delegate.call(this,args);};
G__9469.cljs$lang$maxFixedArity = 0;
G__9469.cljs$lang$applyTo = (function (arglist__9471){
var args = cljs.core.seq(arglist__9471);
return G__9469__delegate(args);
});
G__9469.cljs$core$IFn$_invoke$arity$variadic = G__9469__delegate;
return G__9469;
})()
;

return null;
});
