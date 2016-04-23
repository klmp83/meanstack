goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7349__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7350__i = 0, G__7350__a = new Array(arguments.length -  0);
while (G__7350__i < G__7350__a.length) {G__7350__a[G__7350__i] = arguments[G__7350__i + 0]; ++G__7350__i;}
  args = new cljs.core.IndexedSeq(G__7350__a,0);
} 
return G__7349__delegate.call(this,args);};
G__7349.cljs$lang$maxFixedArity = 0;
G__7349.cljs$lang$applyTo = (function (arglist__7351){
var args = cljs.core.seq(arglist__7351);
return G__7349__delegate(args);
});
G__7349.cljs$core$IFn$_invoke$arity$variadic = G__7349__delegate;
return G__7349;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7352__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7353__i = 0, G__7353__a = new Array(arguments.length -  0);
while (G__7353__i < G__7353__a.length) {G__7353__a[G__7353__i] = arguments[G__7353__i + 0]; ++G__7353__i;}
  args = new cljs.core.IndexedSeq(G__7353__a,0);
} 
return G__7352__delegate.call(this,args);};
G__7352.cljs$lang$maxFixedArity = 0;
G__7352.cljs$lang$applyTo = (function (arglist__7354){
var args = cljs.core.seq(arglist__7354);
return G__7352__delegate(args);
});
G__7352.cljs$core$IFn$_invoke$arity$variadic = G__7352__delegate;
return G__7352;
})()
;

return null;
});
