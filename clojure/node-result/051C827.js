goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8075__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8076__i = 0, G__8076__a = new Array(arguments.length -  0);
while (G__8076__i < G__8076__a.length) {G__8076__a[G__8076__i] = arguments[G__8076__i + 0]; ++G__8076__i;}
  args = new cljs.core.IndexedSeq(G__8076__a,0);
} 
return G__8075__delegate.call(this,args);};
G__8075.cljs$lang$maxFixedArity = 0;
G__8075.cljs$lang$applyTo = (function (arglist__8077){
var args = cljs.core.seq(arglist__8077);
return G__8075__delegate(args);
});
G__8075.cljs$core$IFn$_invoke$arity$variadic = G__8075__delegate;
return G__8075;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8078__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8079__i = 0, G__8079__a = new Array(arguments.length -  0);
while (G__8079__i < G__8079__a.length) {G__8079__a[G__8079__i] = arguments[G__8079__i + 0]; ++G__8079__i;}
  args = new cljs.core.IndexedSeq(G__8079__a,0);
} 
return G__8078__delegate.call(this,args);};
G__8078.cljs$lang$maxFixedArity = 0;
G__8078.cljs$lang$applyTo = (function (arglist__8080){
var args = cljs.core.seq(arglist__8080);
return G__8078__delegate(args);
});
G__8078.cljs$core$IFn$_invoke$arity$variadic = G__8078__delegate;
return G__8078;
})()
;

return null;
});
