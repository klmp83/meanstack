goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7503__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7504__i = 0, G__7504__a = new Array(arguments.length -  0);
while (G__7504__i < G__7504__a.length) {G__7504__a[G__7504__i] = arguments[G__7504__i + 0]; ++G__7504__i;}
  args = new cljs.core.IndexedSeq(G__7504__a,0);
} 
return G__7503__delegate.call(this,args);};
G__7503.cljs$lang$maxFixedArity = 0;
G__7503.cljs$lang$applyTo = (function (arglist__7505){
var args = cljs.core.seq(arglist__7505);
return G__7503__delegate(args);
});
G__7503.cljs$core$IFn$_invoke$arity$variadic = G__7503__delegate;
return G__7503;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7506__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7507__i = 0, G__7507__a = new Array(arguments.length -  0);
while (G__7507__i < G__7507__a.length) {G__7507__a[G__7507__i] = arguments[G__7507__i + 0]; ++G__7507__i;}
  args = new cljs.core.IndexedSeq(G__7507__a,0);
} 
return G__7506__delegate.call(this,args);};
G__7506.cljs$lang$maxFixedArity = 0;
G__7506.cljs$lang$applyTo = (function (arglist__7508){
var args = cljs.core.seq(arglist__7508);
return G__7506__delegate(args);
});
G__7506.cljs$core$IFn$_invoke$arity$variadic = G__7506__delegate;
return G__7506;
})()
;

return null;
});
