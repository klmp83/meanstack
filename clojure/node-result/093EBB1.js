goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8743__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8744__i = 0, G__8744__a = new Array(arguments.length -  0);
while (G__8744__i < G__8744__a.length) {G__8744__a[G__8744__i] = arguments[G__8744__i + 0]; ++G__8744__i;}
  args = new cljs.core.IndexedSeq(G__8744__a,0);
} 
return G__8743__delegate.call(this,args);};
G__8743.cljs$lang$maxFixedArity = 0;
G__8743.cljs$lang$applyTo = (function (arglist__8745){
var args = cljs.core.seq(arglist__8745);
return G__8743__delegate(args);
});
G__8743.cljs$core$IFn$_invoke$arity$variadic = G__8743__delegate;
return G__8743;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8746__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8747__i = 0, G__8747__a = new Array(arguments.length -  0);
while (G__8747__i < G__8747__a.length) {G__8747__a[G__8747__i] = arguments[G__8747__i + 0]; ++G__8747__i;}
  args = new cljs.core.IndexedSeq(G__8747__a,0);
} 
return G__8746__delegate.call(this,args);};
G__8746.cljs$lang$maxFixedArity = 0;
G__8746.cljs$lang$applyTo = (function (arglist__8748){
var args = cljs.core.seq(arglist__8748);
return G__8746__delegate(args);
});
G__8746.cljs$core$IFn$_invoke$arity$variadic = G__8746__delegate;
return G__8746;
})()
;

return null;
});
