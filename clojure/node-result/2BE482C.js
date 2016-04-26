goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7731__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
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

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7734__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7734 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7735__i = 0, G__7735__a = new Array(arguments.length -  0);
while (G__7735__i < G__7735__a.length) {G__7735__a[G__7735__i] = arguments[G__7735__i + 0]; ++G__7735__i;}
  args = new cljs.core.IndexedSeq(G__7735__a,0);
} 
return G__7734__delegate.call(this,args);};
G__7734.cljs$lang$maxFixedArity = 0;
G__7734.cljs$lang$applyTo = (function (arglist__7736){
var args = cljs.core.seq(arglist__7736);
return G__7734__delegate(args);
});
G__7734.cljs$core$IFn$_invoke$arity$variadic = G__7734__delegate;
return G__7734;
})()
;

return null;
});
