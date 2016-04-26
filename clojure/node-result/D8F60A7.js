goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8807__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8808__i = 0, G__8808__a = new Array(arguments.length -  0);
while (G__8808__i < G__8808__a.length) {G__8808__a[G__8808__i] = arguments[G__8808__i + 0]; ++G__8808__i;}
  args = new cljs.core.IndexedSeq(G__8808__a,0);
} 
return G__8807__delegate.call(this,args);};
G__8807.cljs$lang$maxFixedArity = 0;
G__8807.cljs$lang$applyTo = (function (arglist__8809){
var args = cljs.core.seq(arglist__8809);
return G__8807__delegate(args);
});
G__8807.cljs$core$IFn$_invoke$arity$variadic = G__8807__delegate;
return G__8807;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8810__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8811__i = 0, G__8811__a = new Array(arguments.length -  0);
while (G__8811__i < G__8811__a.length) {G__8811__a[G__8811__i] = arguments[G__8811__i + 0]; ++G__8811__i;}
  args = new cljs.core.IndexedSeq(G__8811__a,0);
} 
return G__8810__delegate.call(this,args);};
G__8810.cljs$lang$maxFixedArity = 0;
G__8810.cljs$lang$applyTo = (function (arglist__8812){
var args = cljs.core.seq(arglist__8812);
return G__8810__delegate(args);
});
G__8810.cljs$core$IFn$_invoke$arity$variadic = G__8810__delegate;
return G__8810;
})()
;

return null;
});
