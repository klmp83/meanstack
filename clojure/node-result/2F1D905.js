goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8877__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8877 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8878__i = 0, G__8878__a = new Array(arguments.length -  0);
while (G__8878__i < G__8878__a.length) {G__8878__a[G__8878__i] = arguments[G__8878__i + 0]; ++G__8878__i;}
  args = new cljs.core.IndexedSeq(G__8878__a,0);
} 
return G__8877__delegate.call(this,args);};
G__8877.cljs$lang$maxFixedArity = 0;
G__8877.cljs$lang$applyTo = (function (arglist__8879){
var args = cljs.core.seq(arglist__8879);
return G__8877__delegate(args);
});
G__8877.cljs$core$IFn$_invoke$arity$variadic = G__8877__delegate;
return G__8877;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8880__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8880 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8881__i = 0, G__8881__a = new Array(arguments.length -  0);
while (G__8881__i < G__8881__a.length) {G__8881__a[G__8881__i] = arguments[G__8881__i + 0]; ++G__8881__i;}
  args = new cljs.core.IndexedSeq(G__8881__a,0);
} 
return G__8880__delegate.call(this,args);};
G__8880.cljs$lang$maxFixedArity = 0;
G__8880.cljs$lang$applyTo = (function (arglist__8882){
var args = cljs.core.seq(arglist__8882);
return G__8880__delegate(args);
});
G__8880.cljs$core$IFn$_invoke$arity$variadic = G__8880__delegate;
return G__8880;
})()
;

return null;
});
