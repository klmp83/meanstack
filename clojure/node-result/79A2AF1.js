goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7959__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7960__i = 0, G__7960__a = new Array(arguments.length -  0);
while (G__7960__i < G__7960__a.length) {G__7960__a[G__7960__i] = arguments[G__7960__i + 0]; ++G__7960__i;}
  args = new cljs.core.IndexedSeq(G__7960__a,0);
} 
return G__7959__delegate.call(this,args);};
G__7959.cljs$lang$maxFixedArity = 0;
G__7959.cljs$lang$applyTo = (function (arglist__7961){
var args = cljs.core.seq(arglist__7961);
return G__7959__delegate(args);
});
G__7959.cljs$core$IFn$_invoke$arity$variadic = G__7959__delegate;
return G__7959;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7962__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7963__i = 0, G__7963__a = new Array(arguments.length -  0);
while (G__7963__i < G__7963__a.length) {G__7963__a[G__7963__i] = arguments[G__7963__i + 0]; ++G__7963__i;}
  args = new cljs.core.IndexedSeq(G__7963__a,0);
} 
return G__7962__delegate.call(this,args);};
G__7962.cljs$lang$maxFixedArity = 0;
G__7962.cljs$lang$applyTo = (function (arglist__7964){
var args = cljs.core.seq(arglist__7964);
return G__7962__delegate(args);
});
G__7962.cljs$core$IFn$_invoke$arity$variadic = G__7962__delegate;
return G__7962;
})()
;

return null;
});
