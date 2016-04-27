goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7556__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7557__i = 0, G__7557__a = new Array(arguments.length -  0);
while (G__7557__i < G__7557__a.length) {G__7557__a[G__7557__i] = arguments[G__7557__i + 0]; ++G__7557__i;}
  args = new cljs.core.IndexedSeq(G__7557__a,0);
} 
return G__7556__delegate.call(this,args);};
G__7556.cljs$lang$maxFixedArity = 0;
G__7556.cljs$lang$applyTo = (function (arglist__7558){
var args = cljs.core.seq(arglist__7558);
return G__7556__delegate(args);
});
G__7556.cljs$core$IFn$_invoke$arity$variadic = G__7556__delegate;
return G__7556;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7559__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7559 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7560__i = 0, G__7560__a = new Array(arguments.length -  0);
while (G__7560__i < G__7560__a.length) {G__7560__a[G__7560__i] = arguments[G__7560__i + 0]; ++G__7560__i;}
  args = new cljs.core.IndexedSeq(G__7560__a,0);
} 
return G__7559__delegate.call(this,args);};
G__7559.cljs$lang$maxFixedArity = 0;
G__7559.cljs$lang$applyTo = (function (arglist__7561){
var args = cljs.core.seq(arglist__7561);
return G__7559__delegate(args);
});
G__7559.cljs$core$IFn$_invoke$arity$variadic = G__7559__delegate;
return G__7559;
})()
;

return null;
});
