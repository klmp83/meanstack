goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7902__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7903__i = 0, G__7903__a = new Array(arguments.length -  0);
while (G__7903__i < G__7903__a.length) {G__7903__a[G__7903__i] = arguments[G__7903__i + 0]; ++G__7903__i;}
  args = new cljs.core.IndexedSeq(G__7903__a,0);
} 
return G__7902__delegate.call(this,args);};
G__7902.cljs$lang$maxFixedArity = 0;
G__7902.cljs$lang$applyTo = (function (arglist__7904){
var args = cljs.core.seq(arglist__7904);
return G__7902__delegate(args);
});
G__7902.cljs$core$IFn$_invoke$arity$variadic = G__7902__delegate;
return G__7902;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7905__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7906__i = 0, G__7906__a = new Array(arguments.length -  0);
while (G__7906__i < G__7906__a.length) {G__7906__a[G__7906__i] = arguments[G__7906__i + 0]; ++G__7906__i;}
  args = new cljs.core.IndexedSeq(G__7906__a,0);
} 
return G__7905__delegate.call(this,args);};
G__7905.cljs$lang$maxFixedArity = 0;
G__7905.cljs$lang$applyTo = (function (arglist__7907){
var args = cljs.core.seq(arglist__7907);
return G__7905__delegate(args);
});
G__7905.cljs$core$IFn$_invoke$arity$variadic = G__7905__delegate;
return G__7905;
})()
;

return null;
});
