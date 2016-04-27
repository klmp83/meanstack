goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8858__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8859__i = 0, G__8859__a = new Array(arguments.length -  0);
while (G__8859__i < G__8859__a.length) {G__8859__a[G__8859__i] = arguments[G__8859__i + 0]; ++G__8859__i;}
  args = new cljs.core.IndexedSeq(G__8859__a,0);
} 
return G__8858__delegate.call(this,args);};
G__8858.cljs$lang$maxFixedArity = 0;
G__8858.cljs$lang$applyTo = (function (arglist__8860){
var args = cljs.core.seq(arglist__8860);
return G__8858__delegate(args);
});
G__8858.cljs$core$IFn$_invoke$arity$variadic = G__8858__delegate;
return G__8858;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8861__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8862__i = 0, G__8862__a = new Array(arguments.length -  0);
while (G__8862__i < G__8862__a.length) {G__8862__a[G__8862__i] = arguments[G__8862__i + 0]; ++G__8862__i;}
  args = new cljs.core.IndexedSeq(G__8862__a,0);
} 
return G__8861__delegate.call(this,args);};
G__8861.cljs$lang$maxFixedArity = 0;
G__8861.cljs$lang$applyTo = (function (arglist__8863){
var args = cljs.core.seq(arglist__8863);
return G__8861__delegate(args);
});
G__8861.cljs$core$IFn$_invoke$arity$variadic = G__8861__delegate;
return G__8861;
})()
;

return null;
});
