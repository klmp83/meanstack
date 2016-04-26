goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7864__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7865__i = 0, G__7865__a = new Array(arguments.length -  0);
while (G__7865__i < G__7865__a.length) {G__7865__a[G__7865__i] = arguments[G__7865__i + 0]; ++G__7865__i;}
  args = new cljs.core.IndexedSeq(G__7865__a,0);
} 
return G__7864__delegate.call(this,args);};
G__7864.cljs$lang$maxFixedArity = 0;
G__7864.cljs$lang$applyTo = (function (arglist__7866){
var args = cljs.core.seq(arglist__7866);
return G__7864__delegate(args);
});
G__7864.cljs$core$IFn$_invoke$arity$variadic = G__7864__delegate;
return G__7864;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7867__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7868__i = 0, G__7868__a = new Array(arguments.length -  0);
while (G__7868__i < G__7868__a.length) {G__7868__a[G__7868__i] = arguments[G__7868__i + 0]; ++G__7868__i;}
  args = new cljs.core.IndexedSeq(G__7868__a,0);
} 
return G__7867__delegate.call(this,args);};
G__7867.cljs$lang$maxFixedArity = 0;
G__7867.cljs$lang$applyTo = (function (arglist__7869){
var args = cljs.core.seq(arglist__7869);
return G__7867__delegate(args);
});
G__7867.cljs$core$IFn$_invoke$arity$variadic = G__7867__delegate;
return G__7867;
})()
;

return null;
});
