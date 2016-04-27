goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9504__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9504 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9505__i = 0, G__9505__a = new Array(arguments.length -  0);
while (G__9505__i < G__9505__a.length) {G__9505__a[G__9505__i] = arguments[G__9505__i + 0]; ++G__9505__i;}
  args = new cljs.core.IndexedSeq(G__9505__a,0);
} 
return G__9504__delegate.call(this,args);};
G__9504.cljs$lang$maxFixedArity = 0;
G__9504.cljs$lang$applyTo = (function (arglist__9506){
var args = cljs.core.seq(arglist__9506);
return G__9504__delegate(args);
});
G__9504.cljs$core$IFn$_invoke$arity$variadic = G__9504__delegate;
return G__9504;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9507__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9508__i = 0, G__9508__a = new Array(arguments.length -  0);
while (G__9508__i < G__9508__a.length) {G__9508__a[G__9508__i] = arguments[G__9508__i + 0]; ++G__9508__i;}
  args = new cljs.core.IndexedSeq(G__9508__a,0);
} 
return G__9507__delegate.call(this,args);};
G__9507.cljs$lang$maxFixedArity = 0;
G__9507.cljs$lang$applyTo = (function (arglist__9509){
var args = cljs.core.seq(arglist__9509);
return G__9507__delegate(args);
});
G__9507.cljs$core$IFn$_invoke$arity$variadic = G__9507__delegate;
return G__9507;
})()
;

return null;
});
