goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20880){
var map__20885 = p__20880;
var map__20885__$1 = cljs.core.__destructure_map(map__20885);
var m = map__20885__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21058_21364 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21059_21365 = null;
var count__21060_21366 = (0);
var i__21061_21367 = (0);
while(true){
if((i__21061_21367 < count__21060_21366)){
var f_21369 = chunk__21059_21365.cljs$core$IIndexed$_nth$arity$2(null,i__21061_21367);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21369], 0));


var G__21370 = seq__21058_21364;
var G__21371 = chunk__21059_21365;
var G__21372 = count__21060_21366;
var G__21373 = (i__21061_21367 + (1));
seq__21058_21364 = G__21370;
chunk__21059_21365 = G__21371;
count__21060_21366 = G__21372;
i__21061_21367 = G__21373;
continue;
} else {
var temp__5804__auto___21378 = cljs.core.seq(seq__21058_21364);
if(temp__5804__auto___21378){
var seq__21058_21379__$1 = temp__5804__auto___21378;
if(cljs.core.chunked_seq_QMARK_(seq__21058_21379__$1)){
var c__5565__auto___21380 = cljs.core.chunk_first(seq__21058_21379__$1);
var G__21381 = cljs.core.chunk_rest(seq__21058_21379__$1);
var G__21382 = c__5565__auto___21380;
var G__21383 = cljs.core.count(c__5565__auto___21380);
var G__21384 = (0);
seq__21058_21364 = G__21381;
chunk__21059_21365 = G__21382;
count__21060_21366 = G__21383;
i__21061_21367 = G__21384;
continue;
} else {
var f_21385 = cljs.core.first(seq__21058_21379__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21385], 0));


var G__21386 = cljs.core.next(seq__21058_21379__$1);
var G__21387 = null;
var G__21388 = (0);
var G__21389 = (0);
seq__21058_21364 = G__21386;
chunk__21059_21365 = G__21387;
count__21060_21366 = G__21388;
i__21061_21367 = G__21389;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21390 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21390], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21390)))?cljs.core.second(arglists_21390):arglists_21390)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21090_21391 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21091_21392 = null;
var count__21092_21393 = (0);
var i__21093_21394 = (0);
while(true){
if((i__21093_21394 < count__21092_21393)){
var vec__21104_21395 = chunk__21091_21392.cljs$core$IIndexed$_nth$arity$2(null,i__21093_21394);
var name_21396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21104_21395,(0),null);
var map__21107_21397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21104_21395,(1),null);
var map__21107_21398__$1 = cljs.core.__destructure_map(map__21107_21397);
var doc_21399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21107_21398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21107_21398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21396], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21400], 0));

if(cljs.core.truth_(doc_21399)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21399], 0));
} else {
}


var G__21402 = seq__21090_21391;
var G__21403 = chunk__21091_21392;
var G__21404 = count__21092_21393;
var G__21405 = (i__21093_21394 + (1));
seq__21090_21391 = G__21402;
chunk__21091_21392 = G__21403;
count__21092_21393 = G__21404;
i__21093_21394 = G__21405;
continue;
} else {
var temp__5804__auto___21406 = cljs.core.seq(seq__21090_21391);
if(temp__5804__auto___21406){
var seq__21090_21407__$1 = temp__5804__auto___21406;
if(cljs.core.chunked_seq_QMARK_(seq__21090_21407__$1)){
var c__5565__auto___21408 = cljs.core.chunk_first(seq__21090_21407__$1);
var G__21409 = cljs.core.chunk_rest(seq__21090_21407__$1);
var G__21410 = c__5565__auto___21408;
var G__21411 = cljs.core.count(c__5565__auto___21408);
var G__21412 = (0);
seq__21090_21391 = G__21409;
chunk__21091_21392 = G__21410;
count__21092_21393 = G__21411;
i__21093_21394 = G__21412;
continue;
} else {
var vec__21108_21413 = cljs.core.first(seq__21090_21407__$1);
var name_21414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21108_21413,(0),null);
var map__21111_21415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21108_21413,(1),null);
var map__21111_21416__$1 = cljs.core.__destructure_map(map__21111_21415);
var doc_21417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111_21416__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21111_21416__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21414], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21418], 0));

if(cljs.core.truth_(doc_21417)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21417], 0));
} else {
}


var G__21419 = cljs.core.next(seq__21090_21407__$1);
var G__21420 = null;
var G__21421 = (0);
var G__21422 = (0);
seq__21090_21391 = G__21419;
chunk__21091_21392 = G__21420;
count__21092_21393 = G__21421;
i__21093_21394 = G__21422;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21112 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21113 = null;
var count__21114 = (0);
var i__21115 = (0);
while(true){
if((i__21115 < count__21114)){
var role = chunk__21113.cljs$core$IIndexed$_nth$arity$2(null,i__21115);
var temp__5804__auto___21423__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21423__$1)){
var spec_21424 = temp__5804__auto___21423__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21424)], 0));
} else {
}


var G__21425 = seq__21112;
var G__21426 = chunk__21113;
var G__21427 = count__21114;
var G__21428 = (i__21115 + (1));
seq__21112 = G__21425;
chunk__21113 = G__21426;
count__21114 = G__21427;
i__21115 = G__21428;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21112);
if(temp__5804__auto____$1){
var seq__21112__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21112__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__21112__$1);
var G__21430 = cljs.core.chunk_rest(seq__21112__$1);
var G__21431 = c__5565__auto__;
var G__21432 = cljs.core.count(c__5565__auto__);
var G__21433 = (0);
seq__21112 = G__21430;
chunk__21113 = G__21431;
count__21114 = G__21432;
i__21115 = G__21433;
continue;
} else {
var role = cljs.core.first(seq__21112__$1);
var temp__5804__auto___21434__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21434__$2)){
var spec_21435 = temp__5804__auto___21434__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21435)], 0));
} else {
}


var G__21436 = cljs.core.next(seq__21112__$1);
var G__21437 = null;
var G__21438 = (0);
var G__21439 = (0);
seq__21112 = G__21436;
chunk__21113 = G__21437;
count__21114 = G__21438;
i__21115 = G__21439;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__21446 = cljs.core.ex_cause(t);
via = G__21445;
t = G__21446;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21190 = datafied_throwable;
var map__21190__$1 = cljs.core.__destructure_map(map__21190);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21190__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21190__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21190__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21191 = cljs.core.last(via);
var map__21191__$1 = cljs.core.__destructure_map(map__21191);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21191__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21192 = data;
var map__21192__$1 = cljs.core.__destructure_map(map__21192);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21192__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21193 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21193__$1 = cljs.core.__destructure_map(map__21193);
var top_data = map__21193__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21195 = phase;
var G__21195__$1 = (((G__21195 instanceof cljs.core.Keyword))?G__21195.fqn:null);
switch (G__21195__$1) {
case "read-source":
var map__21230 = data;
var map__21230__$1 = cljs.core.__destructure_map(map__21230);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21239 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21239__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21239,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21239);
var G__21239__$2 = (cljs.core.truth_((function (){var fexpr__21247 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21247.cljs$core$IFn$_invoke$arity$1 ? fexpr__21247.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21247.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21239__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21239__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21239__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21239__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21248 = top_data;
var G__21248__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21248,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21248);
var G__21248__$2 = (cljs.core.truth_((function (){var fexpr__21249 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21249.cljs$core$IFn$_invoke$arity$1 ? fexpr__21249.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21249.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21248__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21248__$1);
var G__21248__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21248__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21248__$2);
var G__21248__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21248__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21248__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21248__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21248__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21251 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21251,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21251,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21251,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21251,(3),null);
var G__21257 = top_data;
var G__21257__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21257,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21257);
var G__21257__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21257__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21257__$1);
var G__21257__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21257__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21257__$2);
var G__21257__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21257__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21257__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21257__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21257__$4;
}

break;
case "execution":
var vec__21264 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21264,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21264,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21264,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21264,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21189_SHARP_){
var or__5043__auto__ = (p1__21189_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__21269 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21269.cljs$core$IFn$_invoke$arity$1 ? fexpr__21269.cljs$core$IFn$_invoke$arity$1(p1__21189_SHARP_) : fexpr__21269.call(null,p1__21189_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__21279 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21279__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21279,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21279);
var G__21279__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21279__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21279__$1);
var G__21279__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21279__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21279__$2);
var G__21279__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21279__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21279__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21279__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21279__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21195__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21299){
var map__21304 = p__21299;
var map__21304__$1 = cljs.core.__destructure_map(map__21304);
var triage_data = map__21304__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21304__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21305 = phase;
var G__21305__$1 = (((G__21305 instanceof cljs.core.Keyword))?G__21305.fqn:null);
switch (G__21305__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21306 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21307 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21308 = loc;
var G__21309 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21310_21485 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21311_21486 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21312_21487 = true;
var _STAR_print_fn_STAR__temp_val__21313_21488 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21312_21487);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21313_21488);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21293_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21293_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21311_21486);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21310_21485);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21306,G__21307,G__21308,G__21309) : format.call(null,G__21306,G__21307,G__21308,G__21309));

break;
case "macroexpansion":
var G__21318 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21319 = cause_type;
var G__21320 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21321 = loc;
var G__21322 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21318,G__21319,G__21320,G__21321,G__21322) : format.call(null,G__21318,G__21319,G__21320,G__21321,G__21322));

break;
case "compile-syntax-check":
var G__21323 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21324 = cause_type;
var G__21325 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21326 = loc;
var G__21327 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21323,G__21324,G__21325,G__21326,G__21327) : format.call(null,G__21323,G__21324,G__21325,G__21326,G__21327));

break;
case "compilation":
var G__21328 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21329 = cause_type;
var G__21330 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21331 = loc;
var G__21332 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21328,G__21329,G__21330,G__21331,G__21332) : format.call(null,G__21328,G__21329,G__21330,G__21331,G__21332));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21333 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21334 = symbol;
var G__21335 = loc;
var G__21336 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21337_21513 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21338_21514 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21339_21515 = true;
var _STAR_print_fn_STAR__temp_val__21340_21516 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21339_21515);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21340_21516);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21294_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21294_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21338_21514);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21337_21513);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21333,G__21334,G__21335,G__21336) : format.call(null,G__21333,G__21334,G__21335,G__21336));
} else {
var G__21341 = "Execution error%s at %s(%s).\n%s\n";
var G__21342 = cause_type;
var G__21343 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21344 = loc;
var G__21345 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21341,G__21342,G__21343,G__21344,G__21345) : format.call(null,G__21341,G__21342,G__21343,G__21344,G__21345));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21305__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
