goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7633__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7634__i = 0, G__7634__a = new Array(arguments.length -  0);
while (G__7634__i < G__7634__a.length) {G__7634__a[G__7634__i] = arguments[G__7634__i + 0]; ++G__7634__i;}
  args = new cljs.core.IndexedSeq(G__7634__a,0);
} 
return G__7633__delegate.call(this,args);};
G__7633.cljs$lang$maxFixedArity = 0;
G__7633.cljs$lang$applyTo = (function (arglist__7635){
var args = cljs.core.seq(arglist__7635);
return G__7633__delegate(args);
});
G__7633.cljs$core$IFn$_invoke$arity$variadic = G__7633__delegate;
return G__7633;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7636__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7637__i = 0, G__7637__a = new Array(arguments.length -  0);
while (G__7637__i < G__7637__a.length) {G__7637__a[G__7637__i] = arguments[G__7637__i + 0]; ++G__7637__i;}
  args = new cljs.core.IndexedSeq(G__7637__a,0);
} 
return G__7636__delegate.call(this,args);};
G__7636.cljs$lang$maxFixedArity = 0;
G__7636.cljs$lang$applyTo = (function (arglist__7638){
var args = cljs.core.seq(arglist__7638);
return G__7636__delegate(args);
});
G__7636.cljs$core$IFn$_invoke$arity$variadic = G__7636__delegate;
return G__7636;
})()
;

return null;
});
