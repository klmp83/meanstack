goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7345__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7346__i = 0, G__7346__a = new Array(arguments.length -  0);
while (G__7346__i < G__7346__a.length) {G__7346__a[G__7346__i] = arguments[G__7346__i + 0]; ++G__7346__i;}
  args = new cljs.core.IndexedSeq(G__7346__a,0);
} 
return G__7345__delegate.call(this,args);};
G__7345.cljs$lang$maxFixedArity = 0;
G__7345.cljs$lang$applyTo = (function (arglist__7347){
var args = cljs.core.seq(arglist__7347);
return G__7345__delegate(args);
});
G__7345.cljs$core$IFn$_invoke$arity$variadic = G__7345__delegate;
return G__7345;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7348__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7349__i = 0, G__7349__a = new Array(arguments.length -  0);
while (G__7349__i < G__7349__a.length) {G__7349__a[G__7349__i] = arguments[G__7349__i + 0]; ++G__7349__i;}
  args = new cljs.core.IndexedSeq(G__7349__a,0);
} 
return G__7348__delegate.call(this,args);};
G__7348.cljs$lang$maxFixedArity = 0;
G__7348.cljs$lang$applyTo = (function (arglist__7350){
var args = cljs.core.seq(arglist__7350);
return G__7348__delegate(args);
});
G__7348.cljs$core$IFn$_invoke$arity$variadic = G__7348__delegate;
return G__7348;
})()
;

return null;
});
