goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7366__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7367__i = 0, G__7367__a = new Array(arguments.length -  0);
while (G__7367__i < G__7367__a.length) {G__7367__a[G__7367__i] = arguments[G__7367__i + 0]; ++G__7367__i;}
  args = new cljs.core.IndexedSeq(G__7367__a,0);
} 
return G__7366__delegate.call(this,args);};
G__7366.cljs$lang$maxFixedArity = 0;
G__7366.cljs$lang$applyTo = (function (arglist__7368){
var args = cljs.core.seq(arglist__7368);
return G__7366__delegate(args);
});
G__7366.cljs$core$IFn$_invoke$arity$variadic = G__7366__delegate;
return G__7366;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7369__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7370__i = 0, G__7370__a = new Array(arguments.length -  0);
while (G__7370__i < G__7370__a.length) {G__7370__a[G__7370__i] = arguments[G__7370__i + 0]; ++G__7370__i;}
  args = new cljs.core.IndexedSeq(G__7370__a,0);
} 
return G__7369__delegate.call(this,args);};
G__7369.cljs$lang$maxFixedArity = 0;
G__7369.cljs$lang$applyTo = (function (arglist__7371){
var args = cljs.core.seq(arglist__7371);
return G__7369__delegate(args);
});
G__7369.cljs$core$IFn$_invoke$arity$variadic = G__7369__delegate;
return G__7369;
})()
;

return null;
});
