goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__7613__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__7613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7614__i = 0, G__7614__a = new Array(arguments.length -  0);
while (G__7614__i < G__7614__a.length) {G__7614__a[G__7614__i] = arguments[G__7614__i + 0]; ++G__7614__i;}
  args = new cljs.core.IndexedSeq(G__7614__a,0);
} 
return G__7613__delegate.call(this,args);};
G__7613.cljs$lang$maxFixedArity = 0;
G__7613.cljs$lang$applyTo = (function (arglist__7615){
var args = cljs.core.seq(arglist__7615);
return G__7613__delegate(args);
});
G__7613.cljs$core$IFn$_invoke$arity$variadic = G__7613__delegate;
return G__7613;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__7616__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__7616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7617__i = 0, G__7617__a = new Array(arguments.length -  0);
while (G__7617__i < G__7617__a.length) {G__7617__a[G__7617__i] = arguments[G__7617__i + 0]; ++G__7617__i;}
  args = new cljs.core.IndexedSeq(G__7617__a,0);
} 
return G__7616__delegate.call(this,args);};
G__7616.cljs$lang$maxFixedArity = 0;
G__7616.cljs$lang$applyTo = (function (arglist__7618){
var args = cljs.core.seq(arglist__7618);
return G__7616__delegate(args);
});
G__7616.cljs$core$IFn$_invoke$arity$variadic = G__7616__delegate;
return G__7616;
})()
;

return null;
});
