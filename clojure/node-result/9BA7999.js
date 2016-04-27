goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7918__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7919__i = 0, G__7919__a = new Array(arguments.length -  0);
while (G__7919__i < G__7919__a.length) {G__7919__a[G__7919__i] = arguments[G__7919__i + 0]; ++G__7919__i;}
  args = new cljs.core.IndexedSeq(G__7919__a,0);
} 
return G__7918__delegate.call(this,args);};
G__7918.cljs$lang$maxFixedArity = 0;
G__7918.cljs$lang$applyTo = (function (arglist__7920){
var args = cljs.core.seq(arglist__7920);
return G__7918__delegate(args);
});
G__7918.cljs$core$IFn$_invoke$arity$variadic = G__7918__delegate;
return G__7918;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7921__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7922__i = 0, G__7922__a = new Array(arguments.length -  0);
while (G__7922__i < G__7922__a.length) {G__7922__a[G__7922__i] = arguments[G__7922__i + 0]; ++G__7922__i;}
  args = new cljs.core.IndexedSeq(G__7922__a,0);
} 
return G__7921__delegate.call(this,args);};
G__7921.cljs$lang$maxFixedArity = 0;
G__7921.cljs$lang$applyTo = (function (arglist__7923){
var args = cljs.core.seq(arglist__7923);
return G__7921__delegate(args);
});
G__7921.cljs$core$IFn$_invoke$arity$variadic = G__7921__delegate;
return G__7921;
})()
;

return null;
});
