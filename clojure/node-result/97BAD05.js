goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8132__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8133__i = 0, G__8133__a = new Array(arguments.length -  0);
while (G__8133__i < G__8133__a.length) {G__8133__a[G__8133__i] = arguments[G__8133__i + 0]; ++G__8133__i;}
  args = new cljs.core.IndexedSeq(G__8133__a,0);
} 
return G__8132__delegate.call(this,args);};
G__8132.cljs$lang$maxFixedArity = 0;
G__8132.cljs$lang$applyTo = (function (arglist__8134){
var args = cljs.core.seq(arglist__8134);
return G__8132__delegate(args);
});
G__8132.cljs$core$IFn$_invoke$arity$variadic = G__8132__delegate;
return G__8132;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8135__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8136__i = 0, G__8136__a = new Array(arguments.length -  0);
while (G__8136__i < G__8136__a.length) {G__8136__a[G__8136__i] = arguments[G__8136__i + 0]; ++G__8136__i;}
  args = new cljs.core.IndexedSeq(G__8136__a,0);
} 
return G__8135__delegate.call(this,args);};
G__8135.cljs$lang$maxFixedArity = 0;
G__8135.cljs$lang$applyTo = (function (arglist__8137){
var args = cljs.core.seq(arglist__8137);
return G__8135__delegate(args);
});
G__8135.cljs$core$IFn$_invoke$arity$variadic = G__8135__delegate;
return G__8135;
})()
;

return null;
});
