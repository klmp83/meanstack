goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7360__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7361__i = 0, G__7361__a = new Array(arguments.length -  0);
while (G__7361__i < G__7361__a.length) {G__7361__a[G__7361__i] = arguments[G__7361__i + 0]; ++G__7361__i;}
  args = new cljs.core.IndexedSeq(G__7361__a,0);
} 
return G__7360__delegate.call(this,args);};
G__7360.cljs$lang$maxFixedArity = 0;
G__7360.cljs$lang$applyTo = (function (arglist__7362){
var args = cljs.core.seq(arglist__7362);
return G__7360__delegate(args);
});
G__7360.cljs$core$IFn$_invoke$arity$variadic = G__7360__delegate;
return G__7360;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7363__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7364__i = 0, G__7364__a = new Array(arguments.length -  0);
while (G__7364__i < G__7364__a.length) {G__7364__a[G__7364__i] = arguments[G__7364__i + 0]; ++G__7364__i;}
  args = new cljs.core.IndexedSeq(G__7364__a,0);
} 
return G__7363__delegate.call(this,args);};
G__7363.cljs$lang$maxFixedArity = 0;
G__7363.cljs$lang$applyTo = (function (arglist__7365){
var args = cljs.core.seq(arglist__7365);
return G__7363__delegate(args);
});
G__7363.cljs$core$IFn$_invoke$arity$variadic = G__7363__delegate;
return G__7363;
})()
;

return null;
});
