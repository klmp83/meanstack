goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7617__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7618__i = 0, G__7618__a = new Array(arguments.length -  0);
while (G__7618__i < G__7618__a.length) {G__7618__a[G__7618__i] = arguments[G__7618__i + 0]; ++G__7618__i;}
  args = new cljs.core.IndexedSeq(G__7618__a,0);
} 
return G__7617__delegate.call(this,args);};
G__7617.cljs$lang$maxFixedArity = 0;
G__7617.cljs$lang$applyTo = (function (arglist__7619){
var args = cljs.core.seq(arglist__7619);
return G__7617__delegate(args);
});
G__7617.cljs$core$IFn$_invoke$arity$variadic = G__7617__delegate;
return G__7617;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7620__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7621__i = 0, G__7621__a = new Array(arguments.length -  0);
while (G__7621__i < G__7621__a.length) {G__7621__a[G__7621__i] = arguments[G__7621__i + 0]; ++G__7621__i;}
  args = new cljs.core.IndexedSeq(G__7621__a,0);
} 
return G__7620__delegate.call(this,args);};
G__7620.cljs$lang$maxFixedArity = 0;
G__7620.cljs$lang$applyTo = (function (arglist__7622){
var args = cljs.core.seq(arglist__7622);
return G__7620__delegate(args);
});
G__7620.cljs$core$IFn$_invoke$arity$variadic = G__7620__delegate;
return G__7620;
})()
;

return null;
});
