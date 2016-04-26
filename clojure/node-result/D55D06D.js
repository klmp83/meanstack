goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8054__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8054 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8055__i = 0, G__8055__a = new Array(arguments.length -  0);
while (G__8055__i < G__8055__a.length) {G__8055__a[G__8055__i] = arguments[G__8055__i + 0]; ++G__8055__i;}
  args = new cljs.core.IndexedSeq(G__8055__a,0);
} 
return G__8054__delegate.call(this,args);};
G__8054.cljs$lang$maxFixedArity = 0;
G__8054.cljs$lang$applyTo = (function (arglist__8056){
var args = cljs.core.seq(arglist__8056);
return G__8054__delegate(args);
});
G__8054.cljs$core$IFn$_invoke$arity$variadic = G__8054__delegate;
return G__8054;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8057__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8058__i = 0, G__8058__a = new Array(arguments.length -  0);
while (G__8058__i < G__8058__a.length) {G__8058__a[G__8058__i] = arguments[G__8058__i + 0]; ++G__8058__i;}
  args = new cljs.core.IndexedSeq(G__8058__a,0);
} 
return G__8057__delegate.call(this,args);};
G__8057.cljs$lang$maxFixedArity = 0;
G__8057.cljs$lang$applyTo = (function (arglist__8059){
var args = cljs.core.seq(arglist__8059);
return G__8057__delegate(args);
});
G__8057.cljs$core$IFn$_invoke$arity$variadic = G__8057__delegate;
return G__8057;
})()
;

return null;
});
