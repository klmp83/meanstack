goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7693__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7693 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7694__i = 0, G__7694__a = new Array(arguments.length -  0);
while (G__7694__i < G__7694__a.length) {G__7694__a[G__7694__i] = arguments[G__7694__i + 0]; ++G__7694__i;}
  args = new cljs.core.IndexedSeq(G__7694__a,0);
} 
return G__7693__delegate.call(this,args);};
G__7693.cljs$lang$maxFixedArity = 0;
G__7693.cljs$lang$applyTo = (function (arglist__7695){
var args = cljs.core.seq(arglist__7695);
return G__7693__delegate(args);
});
G__7693.cljs$core$IFn$_invoke$arity$variadic = G__7693__delegate;
return G__7693;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7696__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7697__i = 0, G__7697__a = new Array(arguments.length -  0);
while (G__7697__i < G__7697__a.length) {G__7697__a[G__7697__i] = arguments[G__7697__i + 0]; ++G__7697__i;}
  args = new cljs.core.IndexedSeq(G__7697__a,0);
} 
return G__7696__delegate.call(this,args);};
G__7696.cljs$lang$maxFixedArity = 0;
G__7696.cljs$lang$applyTo = (function (arglist__7698){
var args = cljs.core.seq(arglist__7698);
return G__7696__delegate(args);
});
G__7696.cljs$core$IFn$_invoke$arity$variadic = G__7696__delegate;
return G__7696;
})()
;

return null;
});
