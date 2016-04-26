goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7997__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7998__i = 0, G__7998__a = new Array(arguments.length -  0);
while (G__7998__i < G__7998__a.length) {G__7998__a[G__7998__i] = arguments[G__7998__i + 0]; ++G__7998__i;}
  args = new cljs.core.IndexedSeq(G__7998__a,0);
} 
return G__7997__delegate.call(this,args);};
G__7997.cljs$lang$maxFixedArity = 0;
G__7997.cljs$lang$applyTo = (function (arglist__7999){
var args = cljs.core.seq(arglist__7999);
return G__7997__delegate(args);
});
G__7997.cljs$core$IFn$_invoke$arity$variadic = G__7997__delegate;
return G__7997;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8000__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8001__i = 0, G__8001__a = new Array(arguments.length -  0);
while (G__8001__i < G__8001__a.length) {G__8001__a[G__8001__i] = arguments[G__8001__i + 0]; ++G__8001__i;}
  args = new cljs.core.IndexedSeq(G__8001__a,0);
} 
return G__8000__delegate.call(this,args);};
G__8000.cljs$lang$maxFixedArity = 0;
G__8000.cljs$lang$applyTo = (function (arglist__8002){
var args = cljs.core.seq(arglist__8002);
return G__8000__delegate(args);
});
G__8000.cljs$core$IFn$_invoke$arity$variadic = G__8000__delegate;
return G__8000;
})()
;

return null;
});
