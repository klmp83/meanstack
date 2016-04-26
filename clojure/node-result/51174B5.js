goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8170__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8171__i = 0, G__8171__a = new Array(arguments.length -  0);
while (G__8171__i < G__8171__a.length) {G__8171__a[G__8171__i] = arguments[G__8171__i + 0]; ++G__8171__i;}
  args = new cljs.core.IndexedSeq(G__8171__a,0);
} 
return G__8170__delegate.call(this,args);};
G__8170.cljs$lang$maxFixedArity = 0;
G__8170.cljs$lang$applyTo = (function (arglist__8172){
var args = cljs.core.seq(arglist__8172);
return G__8170__delegate(args);
});
G__8170.cljs$core$IFn$_invoke$arity$variadic = G__8170__delegate;
return G__8170;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8173__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8173 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8174__i = 0, G__8174__a = new Array(arguments.length -  0);
while (G__8174__i < G__8174__a.length) {G__8174__a[G__8174__i] = arguments[G__8174__i + 0]; ++G__8174__i;}
  args = new cljs.core.IndexedSeq(G__8174__a,0);
} 
return G__8173__delegate.call(this,args);};
G__8173.cljs$lang$maxFixedArity = 0;
G__8173.cljs$lang$applyTo = (function (arglist__8175){
var args = cljs.core.seq(arglist__8175);
return G__8173__delegate(args);
});
G__8173.cljs$core$IFn$_invoke$arity$variadic = G__8173__delegate;
return G__8173;
})()
;

return null;
});
