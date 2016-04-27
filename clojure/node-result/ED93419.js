goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7728__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7729__i = 0, G__7729__a = new Array(arguments.length -  0);
while (G__7729__i < G__7729__a.length) {G__7729__a[G__7729__i] = arguments[G__7729__i + 0]; ++G__7729__i;}
  args = new cljs.core.IndexedSeq(G__7729__a,0);
} 
return G__7728__delegate.call(this,args);};
G__7728.cljs$lang$maxFixedArity = 0;
G__7728.cljs$lang$applyTo = (function (arglist__7730){
var args = cljs.core.seq(arglist__7730);
return G__7728__delegate(args);
});
G__7728.cljs$core$IFn$_invoke$arity$variadic = G__7728__delegate;
return G__7728;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7731__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7731 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7732__i = 0, G__7732__a = new Array(arguments.length -  0);
while (G__7732__i < G__7732__a.length) {G__7732__a[G__7732__i] = arguments[G__7732__i + 0]; ++G__7732__i;}
  args = new cljs.core.IndexedSeq(G__7732__a,0);
} 
return G__7731__delegate.call(this,args);};
G__7731.cljs$lang$maxFixedArity = 0;
G__7731.cljs$lang$applyTo = (function (arglist__7733){
var args = cljs.core.seq(arglist__7733);
return G__7731__delegate(args);
});
G__7731.cljs$core$IFn$_invoke$arity$variadic = G__7731__delegate;
return G__7731;
})()
;

return null;
});
