goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8826__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8827__i = 0, G__8827__a = new Array(arguments.length -  0);
while (G__8827__i < G__8827__a.length) {G__8827__a[G__8827__i] = arguments[G__8827__i + 0]; ++G__8827__i;}
  args = new cljs.core.IndexedSeq(G__8827__a,0);
} 
return G__8826__delegate.call(this,args);};
G__8826.cljs$lang$maxFixedArity = 0;
G__8826.cljs$lang$applyTo = (function (arglist__8828){
var args = cljs.core.seq(arglist__8828);
return G__8826__delegate(args);
});
G__8826.cljs$core$IFn$_invoke$arity$variadic = G__8826__delegate;
return G__8826;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8829__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8830__i = 0, G__8830__a = new Array(arguments.length -  0);
while (G__8830__i < G__8830__a.length) {G__8830__a[G__8830__i] = arguments[G__8830__i + 0]; ++G__8830__i;}
  args = new cljs.core.IndexedSeq(G__8830__a,0);
} 
return G__8829__delegate.call(this,args);};
G__8829.cljs$lang$maxFixedArity = 0;
G__8829.cljs$lang$applyTo = (function (arglist__8831){
var args = cljs.core.seq(arglist__8831);
return G__8829__delegate(args);
});
G__8829.cljs$core$IFn$_invoke$arity$variadic = G__8829__delegate;
return G__8829;
})()
;

return null;
});
