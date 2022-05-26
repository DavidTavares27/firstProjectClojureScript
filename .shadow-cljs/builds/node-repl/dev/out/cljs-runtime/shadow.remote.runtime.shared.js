goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__20662,res){
var map__20663 = p__20662;
var map__20663__$1 = cljs.core.__destructure_map(map__20663);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20663__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20663__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__20664 = res;
var G__20664__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20664,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__20664);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20664__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__20664__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__20674 = arguments.length;
switch (G__20674) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__20692,msg,handlers,timeout_after_ms){
var map__20693 = p__20692;
var map__20693__$1 = cljs.core.__destructure_map(map__20693);
var runtime = map__20693__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20693__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___20826 = arguments.length;
var i__5767__auto___20827 = (0);
while(true){
if((i__5767__auto___20827 < len__5766__auto___20826)){
args__5772__auto__.push((arguments[i__5767__auto___20827]));

var G__20828 = (i__5767__auto___20827 + (1));
i__5767__auto___20827 = G__20828;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__20710,ev,args){
var map__20711 = p__20710;
var map__20711__$1 = cljs.core.__destructure_map(map__20711);
var runtime = map__20711__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20711__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__20712 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20715 = null;
var count__20716 = (0);
var i__20717 = (0);
while(true){
if((i__20717 < count__20716)){
var ext = chunk__20715.cljs$core$IIndexed$_nth$arity$2(null,i__20717);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20829 = seq__20712;
var G__20830 = chunk__20715;
var G__20831 = count__20716;
var G__20832 = (i__20717 + (1));
seq__20712 = G__20829;
chunk__20715 = G__20830;
count__20716 = G__20831;
i__20717 = G__20832;
continue;
} else {
var G__20834 = seq__20712;
var G__20835 = chunk__20715;
var G__20836 = count__20716;
var G__20837 = (i__20717 + (1));
seq__20712 = G__20834;
chunk__20715 = G__20835;
count__20716 = G__20836;
i__20717 = G__20837;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20712);
if(temp__5804__auto__){
var seq__20712__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20712__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20712__$1);
var G__20838 = cljs.core.chunk_rest(seq__20712__$1);
var G__20839 = c__5565__auto__;
var G__20840 = cljs.core.count(c__5565__auto__);
var G__20841 = (0);
seq__20712 = G__20838;
chunk__20715 = G__20839;
count__20716 = G__20840;
i__20717 = G__20841;
continue;
} else {
var ext = cljs.core.first(seq__20712__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__20842 = cljs.core.next(seq__20712__$1);
var G__20843 = null;
var G__20844 = (0);
var G__20845 = (0);
seq__20712 = G__20842;
chunk__20715 = G__20843;
count__20716 = G__20844;
i__20717 = G__20845;
continue;
} else {
var G__20846 = cljs.core.next(seq__20712__$1);
var G__20847 = null;
var G__20848 = (0);
var G__20849 = (0);
seq__20712 = G__20846;
chunk__20715 = G__20847;
count__20716 = G__20848;
i__20717 = G__20849;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq20702){
var G__20703 = cljs.core.first(seq20702);
var seq20702__$1 = cljs.core.next(seq20702);
var G__20704 = cljs.core.first(seq20702__$1);
var seq20702__$2 = cljs.core.next(seq20702__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20703,G__20704,seq20702__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__20730,p__20731){
var map__20732 = p__20730;
var map__20732__$1 = cljs.core.__destructure_map(map__20732);
var runtime = map__20732__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20732__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20733 = p__20731;
var map__20733__$1 = cljs.core.__destructure_map(map__20733);
var msg = map__20733__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20733__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__20734 = cljs.core.deref(state_ref);
var map__20734__$1 = cljs.core.__destructure_map(map__20734);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20734__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__20735){
var map__20739 = p__20735;
var map__20739__$1 = cljs.core.__destructure_map(map__20739);
var runtime = map__20739__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20739__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__20740,msg){
var map__20741 = p__20740;
var map__20741__$1 = cljs.core.__destructure_map(map__20741);
var runtime = map__20741__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20741__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__20747,key,p__20748){
var map__20749 = p__20747;
var map__20749__$1 = cljs.core.__destructure_map(map__20749);
var state = map__20749__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20749__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__20750 = p__20748;
var map__20750__$1 = cljs.core.__destructure_map(map__20750);
var spec = map__20750__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20750__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__20754,key,spec){
var map__20755 = p__20754;
var map__20755__$1 = cljs.core.__destructure_map(map__20755);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__20756_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__20756_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__20758_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__20758_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__20759_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__20759_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__20760_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__20760_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__20761_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__20761_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__20770,key){
var map__20775 = p__20770;
var map__20775__$1 = cljs.core.__destructure_map(map__20775);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20775__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__20779,msg){
var map__20780 = p__20779;
var map__20780__$1 = cljs.core.__destructure_map(map__20780);
var runtime = map__20780__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20780__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__20784,p__20785){
var map__20786 = p__20784;
var map__20786__$1 = cljs.core.__destructure_map(map__20786);
var runtime = map__20786__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__20787 = p__20785;
var map__20787__$1 = cljs.core.__destructure_map(map__20787);
var msg = map__20787__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20787__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__20795 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__20797 = null;
var count__20798 = (0);
var i__20799 = (0);
while(true){
if((i__20799 < count__20798)){
var map__20814 = chunk__20797.cljs$core$IIndexed$_nth$arity$2(null,i__20799);
var map__20814__$1 = cljs.core.__destructure_map(map__20814);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20935 = seq__20795;
var G__20936 = chunk__20797;
var G__20937 = count__20798;
var G__20938 = (i__20799 + (1));
seq__20795 = G__20935;
chunk__20797 = G__20936;
count__20798 = G__20937;
i__20799 = G__20938;
continue;
} else {
var G__20939 = seq__20795;
var G__20940 = chunk__20797;
var G__20941 = count__20798;
var G__20942 = (i__20799 + (1));
seq__20795 = G__20939;
chunk__20797 = G__20940;
count__20798 = G__20941;
i__20799 = G__20942;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20795);
if(temp__5804__auto__){
var seq__20795__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20795__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__20795__$1);
var G__20943 = cljs.core.chunk_rest(seq__20795__$1);
var G__20944 = c__5565__auto__;
var G__20945 = cljs.core.count(c__5565__auto__);
var G__20946 = (0);
seq__20795 = G__20943;
chunk__20797 = G__20944;
count__20798 = G__20945;
i__20799 = G__20946;
continue;
} else {
var map__20817 = cljs.core.first(seq__20795__$1);
var map__20817__$1 = cljs.core.__destructure_map(map__20817);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20817__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__20980 = cljs.core.next(seq__20795__$1);
var G__20981 = null;
var G__20982 = (0);
var G__20983 = (0);
seq__20795 = G__20980;
chunk__20797 = G__20981;
count__20798 = G__20982;
i__20799 = G__20983;
continue;
} else {
var G__20984 = cljs.core.next(seq__20795__$1);
var G__20985 = null;
var G__20986 = (0);
var G__20987 = (0);
seq__20795 = G__20984;
chunk__20797 = G__20985;
count__20798 = G__20986;
i__20799 = G__20987;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
