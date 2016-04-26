goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8348__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8349__i = 0, G__8349__a = new Array(arguments.length -  0);
while (G__8349__i < G__8349__a.length) {G__8349__a[G__8349__i] = arguments[G__8349__i + 0]; ++G__8349__i;}
  args = new cljs.core.IndexedSeq(G__8349__a,0);
} 
return G__8348__delegate.call(this,args);};
G__8348.cljs$lang$maxFixedArity = 0;
G__8348.cljs$lang$applyTo = (function (arglist__8350){
var args = cljs.core.seq(arglist__8350);
return G__8348__delegate(args);
});
G__8348.cljs$core$IFn$_invoke$arity$variadic = G__8348__delegate;
return G__8348;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8351__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8352__i = 0, G__8352__a = new Array(arguments.length -  0);
while (G__8352__i < G__8352__a.length) {G__8352__a[G__8352__i] = arguments[G__8352__i + 0]; ++G__8352__i;}
  args = new cljs.core.IndexedSeq(G__8352__a,0);
} 
return G__8351__delegate.call(this,args);};
G__8351.cljs$lang$maxFixedArity = 0;
G__8351.cljs$lang$applyTo = (function (arglist__8353){
var args = cljs.core.seq(arglist__8353);
return G__8351__delegate(args);
});
G__8351.cljs$core$IFn$_invoke$arity$variadic = G__8351__delegate;
return G__8351;
})()
;

return null;
});
