goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8608__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8609__i = 0, G__8609__a = new Array(arguments.length -  0);
while (G__8609__i < G__8609__a.length) {G__8609__a[G__8609__i] = arguments[G__8609__i + 0]; ++G__8609__i;}
  args = new cljs.core.IndexedSeq(G__8609__a,0);
} 
return G__8608__delegate.call(this,args);};
G__8608.cljs$lang$maxFixedArity = 0;
G__8608.cljs$lang$applyTo = (function (arglist__8610){
var args = cljs.core.seq(arglist__8610);
return G__8608__delegate(args);
});
G__8608.cljs$core$IFn$_invoke$arity$variadic = G__8608__delegate;
return G__8608;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8611__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8612__i = 0, G__8612__a = new Array(arguments.length -  0);
while (G__8612__i < G__8612__a.length) {G__8612__a[G__8612__i] = arguments[G__8612__i + 0]; ++G__8612__i;}
  args = new cljs.core.IndexedSeq(G__8612__a,0);
} 
return G__8611__delegate.call(this,args);};
G__8611.cljs$lang$maxFixedArity = 0;
G__8611.cljs$lang$applyTo = (function (arglist__8613){
var args = cljs.core.seq(arglist__8613);
return G__8611__delegate(args);
});
G__8611.cljs$core$IFn$_invoke$arity$variadic = G__8611__delegate;
return G__8611;
})()
;

return null;
});
