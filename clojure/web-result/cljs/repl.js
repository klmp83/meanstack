// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8103_8117 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8104_8118 = null;
var count__8105_8119 = (0);
var i__8106_8120 = (0);
while(true){
if((i__8106_8120 < count__8105_8119)){
var f_8121 = cljs.core._nth.call(null,chunk__8104_8118,i__8106_8120);
cljs.core.println.call(null,"  ",f_8121);

var G__8122 = seq__8103_8117;
var G__8123 = chunk__8104_8118;
var G__8124 = count__8105_8119;
var G__8125 = (i__8106_8120 + (1));
seq__8103_8117 = G__8122;
chunk__8104_8118 = G__8123;
count__8105_8119 = G__8124;
i__8106_8120 = G__8125;
continue;
} else {
var temp__4657__auto___8126 = cljs.core.seq.call(null,seq__8103_8117);
if(temp__4657__auto___8126){
var seq__8103_8127__$1 = temp__4657__auto___8126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8103_8127__$1)){
var c__7021__auto___8128 = cljs.core.chunk_first.call(null,seq__8103_8127__$1);
var G__8129 = cljs.core.chunk_rest.call(null,seq__8103_8127__$1);
var G__8130 = c__7021__auto___8128;
var G__8131 = cljs.core.count.call(null,c__7021__auto___8128);
var G__8132 = (0);
seq__8103_8117 = G__8129;
chunk__8104_8118 = G__8130;
count__8105_8119 = G__8131;
i__8106_8120 = G__8132;
continue;
} else {
var f_8133 = cljs.core.first.call(null,seq__8103_8127__$1);
cljs.core.println.call(null,"  ",f_8133);

var G__8134 = cljs.core.next.call(null,seq__8103_8127__$1);
var G__8135 = null;
var G__8136 = (0);
var G__8137 = (0);
seq__8103_8117 = G__8134;
chunk__8104_8118 = G__8135;
count__8105_8119 = G__8136;
i__8106_8120 = G__8137;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8138 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6210__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8138);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8138)))?cljs.core.second.call(null,arglists_8138):arglists_8138));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8107 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8108 = null;
var count__8109 = (0);
var i__8110 = (0);
while(true){
if((i__8110 < count__8109)){
var vec__8111 = cljs.core._nth.call(null,chunk__8108,i__8110);
var name = cljs.core.nth.call(null,vec__8111,(0),null);
var map__8112 = cljs.core.nth.call(null,vec__8111,(1),null);
var map__8112__$1 = ((((!((map__8112 == null)))?((((map__8112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8112):map__8112);
var doc = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8112__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8139 = seq__8107;
var G__8140 = chunk__8108;
var G__8141 = count__8109;
var G__8142 = (i__8110 + (1));
seq__8107 = G__8139;
chunk__8108 = G__8140;
count__8109 = G__8141;
i__8110 = G__8142;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8107);
if(temp__4657__auto__){
var seq__8107__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8107__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__8107__$1);
var G__8143 = cljs.core.chunk_rest.call(null,seq__8107__$1);
var G__8144 = c__7021__auto__;
var G__8145 = cljs.core.count.call(null,c__7021__auto__);
var G__8146 = (0);
seq__8107 = G__8143;
chunk__8108 = G__8144;
count__8109 = G__8145;
i__8110 = G__8146;
continue;
} else {
var vec__8114 = cljs.core.first.call(null,seq__8107__$1);
var name = cljs.core.nth.call(null,vec__8114,(0),null);
var map__8115 = cljs.core.nth.call(null,vec__8114,(1),null);
var map__8115__$1 = ((((!((map__8115 == null)))?((((map__8115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8115):map__8115);
var doc = cljs.core.get.call(null,map__8115__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8115__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8147 = cljs.core.next.call(null,seq__8107__$1);
var G__8148 = null;
var G__8149 = (0);
var G__8150 = (0);
seq__8107 = G__8147;
chunk__8108 = G__8148;
count__8109 = G__8149;
i__8110 = G__8150;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map