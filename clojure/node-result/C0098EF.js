goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9276__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9277__i = 0, G__9277__a = new Array(arguments.length -  0);
while (G__9277__i < G__9277__a.length) {G__9277__a[G__9277__i] = arguments[G__9277__i + 0]; ++G__9277__i;}
  args = new cljs.core.IndexedSeq(G__9277__a,0);
} 
return G__9276__delegate.call(this,args);};
G__9276.cljs$lang$maxFixedArity = 0;
G__9276.cljs$lang$applyTo = (function (arglist__9278){
var args = cljs.core.seq(arglist__9278);
return G__9276__delegate(args);
});
G__9276.cljs$core$IFn$_invoke$arity$variadic = G__9276__delegate;
return G__9276;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9279__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9280__i = 0, G__9280__a = new Array(arguments.length -  0);
while (G__9280__i < G__9280__a.length) {G__9280__a[G__9280__i] = arguments[G__9280__i + 0]; ++G__9280__i;}
  args = new cljs.core.IndexedSeq(G__9280__a,0);
} 
return G__9279__delegate.call(this,args);};
G__9279.cljs$lang$maxFixedArity = 0;
G__9279.cljs$lang$applyTo = (function (arglist__9281){
var args = cljs.core.seq(arglist__9281);
return G__9279__delegate(args);
});
G__9279.cljs$core$IFn$_invoke$arity$variadic = G__9279__delegate;
return G__9279;
})()
;

return null;
});
