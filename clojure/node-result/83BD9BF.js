goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8551__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8552__i = 0, G__8552__a = new Array(arguments.length -  0);
while (G__8552__i < G__8552__a.length) {G__8552__a[G__8552__i] = arguments[G__8552__i + 0]; ++G__8552__i;}
  args = new cljs.core.IndexedSeq(G__8552__a,0);
} 
return G__8551__delegate.call(this,args);};
G__8551.cljs$lang$maxFixedArity = 0;
G__8551.cljs$lang$applyTo = (function (arglist__8553){
var args = cljs.core.seq(arglist__8553);
return G__8551__delegate(args);
});
G__8551.cljs$core$IFn$_invoke$arity$variadic = G__8551__delegate;
return G__8551;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8554__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8555__i = 0, G__8555__a = new Array(arguments.length -  0);
while (G__8555__i < G__8555__a.length) {G__8555__a[G__8555__i] = arguments[G__8555__i + 0]; ++G__8555__i;}
  args = new cljs.core.IndexedSeq(G__8555__a,0);
} 
return G__8554__delegate.call(this,args);};
G__8554.cljs$lang$maxFixedArity = 0;
G__8554.cljs$lang$applyTo = (function (arglist__8556){
var args = cljs.core.seq(arglist__8556);
return G__8554__delegate(args);
});
G__8554.cljs$core$IFn$_invoke$arity$variadic = G__8554__delegate;
return G__8554;
})()
;

return null;
});
