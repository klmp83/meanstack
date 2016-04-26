goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8693__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8694__i = 0, G__8694__a = new Array(arguments.length -  0);
while (G__8694__i < G__8694__a.length) {G__8694__a[G__8694__i] = arguments[G__8694__i + 0]; ++G__8694__i;}
  args = new cljs.core.IndexedSeq(G__8694__a,0);
} 
return G__8693__delegate.call(this,args);};
G__8693.cljs$lang$maxFixedArity = 0;
G__8693.cljs$lang$applyTo = (function (arglist__8695){
var args = cljs.core.seq(arglist__8695);
return G__8693__delegate(args);
});
G__8693.cljs$core$IFn$_invoke$arity$variadic = G__8693__delegate;
return G__8693;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8696__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8697__i = 0, G__8697__a = new Array(arguments.length -  0);
while (G__8697__i < G__8697__a.length) {G__8697__a[G__8697__i] = arguments[G__8697__i + 0]; ++G__8697__i;}
  args = new cljs.core.IndexedSeq(G__8697__a,0);
} 
return G__8696__delegate.call(this,args);};
G__8696.cljs$lang$maxFixedArity = 0;
G__8696.cljs$lang$applyTo = (function (arglist__8698){
var args = cljs.core.seq(arglist__8698);
return G__8696__delegate(args);
});
G__8696.cljs$core$IFn$_invoke$arity$variadic = G__8696__delegate;
return G__8696;
})()
;

return null;
});
