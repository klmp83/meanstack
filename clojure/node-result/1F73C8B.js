goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7880__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7881__i = 0, G__7881__a = new Array(arguments.length -  0);
while (G__7881__i < G__7881__a.length) {G__7881__a[G__7881__i] = arguments[G__7881__i + 0]; ++G__7881__i;}
  args = new cljs.core.IndexedSeq(G__7881__a,0);
} 
return G__7880__delegate.call(this,args);};
G__7880.cljs$lang$maxFixedArity = 0;
G__7880.cljs$lang$applyTo = (function (arglist__7882){
var args = cljs.core.seq(arglist__7882);
return G__7880__delegate(args);
});
G__7880.cljs$core$IFn$_invoke$arity$variadic = G__7880__delegate;
return G__7880;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7883__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7884__i = 0, G__7884__a = new Array(arguments.length -  0);
while (G__7884__i < G__7884__a.length) {G__7884__a[G__7884__i] = arguments[G__7884__i + 0]; ++G__7884__i;}
  args = new cljs.core.IndexedSeq(G__7884__a,0);
} 
return G__7883__delegate.call(this,args);};
G__7883.cljs$lang$maxFixedArity = 0;
G__7883.cljs$lang$applyTo = (function (arglist__7885){
var args = cljs.core.seq(arglist__7885);
return G__7883__delegate(args);
});
G__7883.cljs$core$IFn$_invoke$arity$variadic = G__7883__delegate;
return G__7883;
})()
;

return null;
});
