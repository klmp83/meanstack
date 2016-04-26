goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7442__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7443__i = 0, G__7443__a = new Array(arguments.length -  0);
while (G__7443__i < G__7443__a.length) {G__7443__a[G__7443__i] = arguments[G__7443__i + 0]; ++G__7443__i;}
  args = new cljs.core.IndexedSeq(G__7443__a,0);
} 
return G__7442__delegate.call(this,args);};
G__7442.cljs$lang$maxFixedArity = 0;
G__7442.cljs$lang$applyTo = (function (arglist__7444){
var args = cljs.core.seq(arglist__7444);
return G__7442__delegate(args);
});
G__7442.cljs$core$IFn$_invoke$arity$variadic = G__7442__delegate;
return G__7442;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7445__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7445 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7446__i = 0, G__7446__a = new Array(arguments.length -  0);
while (G__7446__i < G__7446__a.length) {G__7446__a[G__7446__i] = arguments[G__7446__i + 0]; ++G__7446__i;}
  args = new cljs.core.IndexedSeq(G__7446__a,0);
} 
return G__7445__delegate.call(this,args);};
G__7445.cljs$lang$maxFixedArity = 0;
G__7445.cljs$lang$applyTo = (function (arglist__7447){
var args = cljs.core.seq(arglist__7447);
return G__7445__delegate(args);
});
G__7445.cljs$core$IFn$_invoke$arity$variadic = G__7445__delegate;
return G__7445;
})()
;

return null;
});
