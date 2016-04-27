goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9048__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9049__i = 0, G__9049__a = new Array(arguments.length -  0);
while (G__9049__i < G__9049__a.length) {G__9049__a[G__9049__i] = arguments[G__9049__i + 0]; ++G__9049__i;}
  args = new cljs.core.IndexedSeq(G__9049__a,0);
} 
return G__9048__delegate.call(this,args);};
G__9048.cljs$lang$maxFixedArity = 0;
G__9048.cljs$lang$applyTo = (function (arglist__9050){
var args = cljs.core.seq(arglist__9050);
return G__9048__delegate(args);
});
G__9048.cljs$core$IFn$_invoke$arity$variadic = G__9048__delegate;
return G__9048;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9051__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9051 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9052__i = 0, G__9052__a = new Array(arguments.length -  0);
while (G__9052__i < G__9052__a.length) {G__9052__a[G__9052__i] = arguments[G__9052__i + 0]; ++G__9052__i;}
  args = new cljs.core.IndexedSeq(G__9052__a,0);
} 
return G__9051__delegate.call(this,args);};
G__9051.cljs$lang$maxFixedArity = 0;
G__9051.cljs$lang$applyTo = (function (arglist__9053){
var args = cljs.core.seq(arglist__9053);
return G__9051__delegate(args);
});
G__9051.cljs$core$IFn$_invoke$arity$variadic = G__9051__delegate;
return G__9051;
})()
;

return null;
});
