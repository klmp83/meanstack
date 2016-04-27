goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8093__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8094__i = 0, G__8094__a = new Array(arguments.length -  0);
while (G__8094__i < G__8094__a.length) {G__8094__a[G__8094__i] = arguments[G__8094__i + 0]; ++G__8094__i;}
  args = new cljs.core.IndexedSeq(G__8094__a,0);
} 
return G__8093__delegate.call(this,args);};
G__8093.cljs$lang$maxFixedArity = 0;
G__8093.cljs$lang$applyTo = (function (arglist__8095){
var args = cljs.core.seq(arglist__8095);
return G__8093__delegate(args);
});
G__8093.cljs$core$IFn$_invoke$arity$variadic = G__8093__delegate;
return G__8093;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8096__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8097__i = 0, G__8097__a = new Array(arguments.length -  0);
while (G__8097__i < G__8097__a.length) {G__8097__a[G__8097__i] = arguments[G__8097__i + 0]; ++G__8097__i;}
  args = new cljs.core.IndexedSeq(G__8097__a,0);
} 
return G__8096__delegate.call(this,args);};
G__8096.cljs$lang$maxFixedArity = 0;
G__8096.cljs$lang$applyTo = (function (arglist__8098){
var args = cljs.core.seq(arglist__8098);
return G__8096__delegate(args);
});
G__8096.cljs$core$IFn$_invoke$arity$variadic = G__8096__delegate;
return G__8096;
})()
;

return null;
});
