goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8322__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8323__i = 0, G__8323__a = new Array(arguments.length -  0);
while (G__8323__i < G__8323__a.length) {G__8323__a[G__8323__i] = arguments[G__8323__i + 0]; ++G__8323__i;}
  args = new cljs.core.IndexedSeq(G__8323__a,0);
} 
return G__8322__delegate.call(this,args);};
G__8322.cljs$lang$maxFixedArity = 0;
G__8322.cljs$lang$applyTo = (function (arglist__8324){
var args = cljs.core.seq(arglist__8324);
return G__8322__delegate(args);
});
G__8322.cljs$core$IFn$_invoke$arity$variadic = G__8322__delegate;
return G__8322;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8325__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8326__i = 0, G__8326__a = new Array(arguments.length -  0);
while (G__8326__i < G__8326__a.length) {G__8326__a[G__8326__i] = arguments[G__8326__i + 0]; ++G__8326__i;}
  args = new cljs.core.IndexedSeq(G__8326__a,0);
} 
return G__8325__delegate.call(this,args);};
G__8325.cljs$lang$maxFixedArity = 0;
G__8325.cljs$lang$applyTo = (function (arglist__8327){
var args = cljs.core.seq(arglist__8327);
return G__8325__delegate(args);
});
G__8325.cljs$core$IFn$_invoke$arity$variadic = G__8325__delegate;
return G__8325;
})()
;

return null;
});
