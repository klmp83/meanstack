goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8321__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8322__i = 0, G__8322__a = new Array(arguments.length -  0);
while (G__8322__i < G__8322__a.length) {G__8322__a[G__8322__i] = arguments[G__8322__i + 0]; ++G__8322__i;}
  args = new cljs.core.IndexedSeq(G__8322__a,0);
} 
return G__8321__delegate.call(this,args);};
G__8321.cljs$lang$maxFixedArity = 0;
G__8321.cljs$lang$applyTo = (function (arglist__8323){
var args = cljs.core.seq(arglist__8323);
return G__8321__delegate(args);
});
G__8321.cljs$core$IFn$_invoke$arity$variadic = G__8321__delegate;
return G__8321;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8324__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8325__i = 0, G__8325__a = new Array(arguments.length -  0);
while (G__8325__i < G__8325__a.length) {G__8325__a[G__8325__i] = arguments[G__8325__i + 0]; ++G__8325__i;}
  args = new cljs.core.IndexedSeq(G__8325__a,0);
} 
return G__8324__delegate.call(this,args);};
G__8324.cljs$lang$maxFixedArity = 0;
G__8324.cljs$lang$applyTo = (function (arglist__8326){
var args = cljs.core.seq(arglist__8326);
return G__8324__delegate(args);
});
G__8324.cljs$core$IFn$_invoke$arity$variadic = G__8324__delegate;
return G__8324;
})()
;

return null;
});
