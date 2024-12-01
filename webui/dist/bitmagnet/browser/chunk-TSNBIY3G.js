import{a as Ue,b as Ge,c as Z,d as Ke,e as Ye,f as ee,g as Je,h as We,i as D,j as Xe,k as Ze,l as et}from"./chunk-6OKZFKY7.js";import{a as $e,b as He,c as O}from"./chunk-52V76PPN.js";import{e as X}from"./chunk-Y7K23DTG.js";import{b as Re}from"./chunk-RQ2LQKI2.js";import{l as Fe}from"./chunk-42PJPEMD.js";import{a as we}from"./chunk-ASLGZ7DJ.js";import{a as je}from"./chunk-MSAOOVCY.js";import{a as Le}from"./chunk-DSEDLZDW.js";import{D as Te,J as G,M as qe,P as K,Q as Ve,R as Be,U as Y,Ua as De,a as H,b as xe,i as Me,ia as Ee,n as ye,na as J,o as Se,oa as Oe,qa as W,r as U,ra as Ie,sa as ze,ta as Ne,va as Pe,ya as Qe,za as Ae}from"./chunk-VAEZNV34.js";import"./chunk-6XXA7HXI.js";import"./chunk-CMNWCZJM.js";import{$b as _,B as ce,Cb as de,Ea as g,Fa as C,Hb as u,Kb as I,N as le,Nb as z,Ob as N,Pb as P,Q as ne,Qb as s,Rb as l,Sb as L,Tb as fe,Ub as _e,Wb as re,Zb as k,a as M,ad as ve,b as y,ka as R,kb as c,kc as p,l as A,la as ue,lc as S,mc as he,o as se,pc as be,qa as T,tc as ge,ua as me,va as pe,vc as Ce,wc as ke}from"./chunk-Z3WUIYN5.js";var tt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=pe({type:n})}static{this.\u0275inj=ue({imports:[G,W,Ee,Se,U,K,Y,J,Ne,ze]})}}return n})();var mt={pending:"primary",processed:"success",failed:"error",retry:"caution"},it=(()=>{class n{constructor(){this.themeInfo=T(X),this.transloco=T(H)}create(e){let{colors:i}=this.themeInfo.info,t=Array(),a=[];if(e&&Array.from(new Set(e.queues.flatMap(v=>v.events?[v.events.earliestBucket,v.events.latestBucket]:[]))).sort().length){let v=e.queues.filter(h=>!h.isEmpty);t.push(...v.map(h=>h.queue));let x=Array();switch(e.params.event){case"created":x.push("pending");break;case"processed":x.push("processed");break;case"failed":x.push("retry","failed");break;default:x.push(...Je);break}a.push(...x.map(h=>({label:this.transloco.translate("dashboard.queues."+h),data:v.map(d=>d.statusCounts[h]),backgroundColor:i[O(mt[h],50)]})))}return{type:"bar",options:{animation:!1,scales:{x:{ticks:{callback:r=>parseInt(r).toLocaleString(this.transloco.getActiveLang())}},y:{}},indexAxis:"y",plugins:{legend:{display:!0}}},data:{labels:t,datasets:a}}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var j="\\d+",oe="".concat(j,"(?:[\\.,]").concat(j,")?"),pt="(".concat(j,"Y)?(").concat(j,"M)?(").concat(j,"W)?(").concat(j,"D)?"),dt="T(".concat(oe,"H)?(").concat(oe,"M)?(").concat(oe,"S)?"),ft="P(?:".concat(pt,"(?:").concat(dt,")?)"),_t=["years","months","weeks","days","hours","minutes","seconds"],nt={years:0,months:0,weeks:0,days:0,hours:0,minutes:0,seconds:0},ht=new RegExp(ft),rt=function(n){let o=n.replace(/,/g,".").match(ht);if(!o)throw new RangeError("invalid duration: ".concat(n));let e=o.slice(1);if(e.filter(function(i){return i!=null}).length===0)throw new RangeError("invalid duration: ".concat(n));if(e.filter(function(i){return/\./.test(i||"")}).length>1)throw new RangeError("only the smallest unit can be fractional");return e.reduce(function(i,t,a){return Object.assign(i,{[_t[a]]:parseFloat(t||"0")||0}),i},{})},bt=function(n,o){o||(o=new Date);let e=Object.assign({},nt,n),i=o.getTime(),t=new Date(i);t.setFullYear(t.getFullYear()+e.years),t.setMonth(t.getMonth()+e.months),t.setDate(t.getDate()+e.days);let a=e.hours*3600*1e3,r=e.minutes*60*1e3;return t.setMilliseconds(t.getMilliseconds()+e.seconds*1e3+a+r),t.setDate(t.getDate()+e.weeks*7),t},at=function(n,o){o||(o=new Date);let e=Object.assign({},nt,n),i=o.getTime(),t=new Date(i),a=bt(e,t),r=o.getTimezoneOffset(),v=a.getTimezoneOffset(),x=(r-v)*60;return(a.getTime()-t.getTime())/1e3+x};var te=class{constructor(o,e=Ke,i){this.apollo=o,this.errorsService=i,this.rawResultSubject=new A({queue:{metrics:{buckets:[]}}}),this.resultSubject=new A(Ye),this.result$=this.resultSubject.asObservable(),this.loadingSubject=new A(!1),this.paramsSubject=new A(e),this.params$=this.paramsSubject.asObservable(),this.variablesSubject=new A(ot(e)),this.paramsSubject.pipe(ne(50)).subscribe(t=>{let a=this.variablesSubject.getValue(),r=ot(t);JSON.stringify(a)!==JSON.stringify(r)?this.variablesSubject.next(r):this.resultSubject.next(ct(t,this.rawResultSubject.getValue()))}),this.variablesSubject.pipe(ne(50)).subscribe(t=>this.request(t)),this.rawResultSubject.subscribe(t=>{let a=this.paramsSubject.getValue();this.resultSubject.next(ct(a,t)),this.setInterval(a.autoRefresh)})}setInterval(o){clearTimeout(this.refreshTimeout);let e=et[o??this.params.autoRefresh];e&&(this.refreshTimeout=setTimeout(()=>{this.refresh()},e*1e3))}get params(){return this.paramsSubject.getValue()}get bucketDuration(){let o=this.params.buckets.duration;return o==="AUTO"?"hour":o}get bucketMultiplier(){return this.resultSubject.getValue().params.buckets.multiplier??this.params.buckets.multiplier}get loading(){return this.loadingSubject.getValue()}setTimeframe(o){this.updateParams(e=>y(M({},e),{buckets:y(M({},e.buckets),{timeframe:o})}))}setQueue(o){this.updateParams(e=>y(M({},e),{queue:o??void 0}))}setBucketDuration(o,e){this.updateParams(i=>y(M({},i),{buckets:y(M({},i.buckets),{duration:o,multiplier:e??"AUTO"})}))}setBucketMultiplier(o){this.updateParams(e=>y(M({},e),{buckets:y(M({},e.buckets),{multiplier:o})}))}setEvent(o){this.updateParams(e=>y(M({},e),{event:o??void 0}))}setAutoRefreshInterval(o){this.updateParams(e=>y(M({},e),{autoRefresh:o}))}updateParams(o){this.paramsSubject.next(o(this.params))}refresh(){this.variablesSubject.next(this.variablesSubject.getValue())}request(o){return clearTimeout(this.refreshTimeout),this.loadingSubject.next(!0),this.apollo.query({query:Te,variables:o,fetchPolicy:"no-cache"}).pipe(ce(e=>{e&&(this.loadingSubject.next(!1),this.rawResultSubject.next(e.data))})).pipe(le(e=>(this.errorsService.addError(`Failed to load queue metrics: ${e.message}`),this.loadingSubject.next(!1),this.setInterval(),se))).subscribe()}},ot=n=>({input:{bucketDuration:n.buckets.duration==="AUTO"?"hour":n.buckets.duration,queues:n.queue?[n.queue]:void 0,startTime:n.buckets.timeframe==="all"?void 0:new Date(new Date().getTime()-1e3*D[n.buckets.timeframe]).toISOString()}}),st=n=>Object.fromEntries(n),ct=(n,o)=>{let{bucketParams:e,earliestBucket:i,latestBucket:t}=gt(n,o),a=Object.entries(o.queue.metrics.buckets.reduce((h,d)=>{if(d.queue!==(n.queue??d.queue))return h;let f,m;if((n.event??!0)&&(f=q(d.createdAtBucket,e),i&&i.index>f.index&&(f=void 0)),d.ranAtBucket&&n.event!=="created"&&(m=q(d.ranAtBucket,e),m&&(t.index<m.index||i&&i.index>m.index)&&(m=void 0)),d.queue!==n.queue&&!f&&(!m||d.status==="pending"))return h;let[V,b]=h[d.queue]??[Ue,[]],w=d.latency?at(rt(d.latency)):void 0;return y(M({},h),{[d.queue]:[(d.status==="pending"?f:m)?y(M({},V),{[d.status]:d.count+V[d.status]}):V,{created:f?y(M({},b.created),{[f.key]:{count:d.count+(b.created?.[f.key]?.count??0),latency:0,startTime:f.start}}):b.created,processed:m&&d.status==="processed"&&(n.event??!0)?y(M({},b.processed),{[m.key]:{count:d.count+(b.processed?.[m.key]?.count??0),latency:(b.processed?.[m.key]?.latency??0)+(w??0),startTime:m.start}}):b.processed,failed:m&&d.status==="failed"&&(n.event??!0)?y(M({},b.failed),{[m.key]:{count:d.count+(b.failed?.[m.key]?.count??0),latency:(b.failed?.[m.key]?.latency??0)+(w??0),startTime:m.start}}):b.failed}]})},{})).map(([h,[d,f]])=>{let m;if(Object.keys(f).length){let V=Array(),b=st(Array("created","processed","failed").flatMap(w=>{let B=st(Object.entries(f[w]??{}).filter(([,ie])=>ie?.count).sort(([ie],[ut])=>parseInt(ie)<parseInt(ut)?1:-1)),E=Object.keys(B);if(!E.length)return[];let F=parseInt(E[0]),Q=parseInt(E[E.length-1]);return V.push(F,Q),[[w,{earliestBucket:F,latestBucket:Q,entries:B}]]}));V.sort(),m={bucketDuration:e.duration,earliestBucket:V[0],latestBucket:V[V.length-1],eventBuckets:b}}return{queue:h,statusCounts:d,events:m,isEmpty:!m?.eventBuckets}}),r,v=a.flatMap(h=>h.events?[h.events.earliestBucket]:[]).sort()[0],x=a.flatMap(h=>h.events?[h.events.latestBucket]:[]).sort().reverse()[0];return v&&x&&(r={earliestBucket:v,latestBucket:x}),{params:y(M({},n),{buckets:e}),queues:a,bucketSpan:r}},gt=(n,o)=>{let e=n.buckets.duration==="AUTO"?"hour":n.buckets.duration,i=n.buckets.multiplier==="AUTO"?1:n.buckets.multiplier,t=n.buckets.timeframe,a=new Date,r=q(a,{duration:e,multiplier:i}),v=t==="all"?void 0:q(a.getTime()-1e3*D[t],{duration:e,multiplier:i}),x=[...v?[v]:[],...o.queue.metrics.buckets.flatMap(f=>[q(f.createdAtBucket,{duration:e,multiplier:i}),...f.ranAtBucket?[q(f.ranAtBucket,{duration:e,multiplier:i})]:[]]),r].filter(f=>!v||f.index>=v.index).sort((f,m)=>f.index-m.index),h=x[0],d=x[x.length-1];if(n.buckets.multiplier==="AUTO"){let m=d.index-h.index;i=Math.min(60,Math.max(Math.floor(m/(20*5))*5,1))}return{bucketParams:{duration:e,multiplier:i,timeframe:t},earliestBucket:t==="all"?void 0:q(a.getTime()-1e3*D[t],{duration:e,multiplier:i}),latestBucket:q(Math.max(a.getTime(),d.start.getTime()),{duration:e,multiplier:i})}},q=(n,o)=>{let e=new Date(n),i=1e3*Z[o.duration]*o.multiplier,t=Math.floor(e.getTime()/i);return{key:`${t}`,index:t,start:new Date(t*i)}};var $={created:"primary",processed:"success",failed:"error"},lt=(()=>{class n{constructor(){this.themeInfo=T(X),this.transloco=T(H)}create(e){let{colors:i}=this.themeInfo.info,t=Array(),a=[];if(e){let r=e.queues.filter(f=>!f.isEmpty),v=Array.from(new Set(r.flatMap(f=>f.events?[f.events.earliestBucket,f.events.latestBucket]:[]))).sort(),x=new Date,h=e.params.buckets.timeframe==="all"?v[0]:Math.min(v[0],q(x.getTime()-1e3*D[e.params.buckets.timeframe],e.params.buckets).index),d=Math.max(v[v.length-1],q(x,e.params.buckets).index);if(v.length){for(let m=h;m<=d;m++)t.push(this.formatBucketKey(e.params.buckets,m));let f=ee.filter(m=>(e.params.event??m)===m);for(let m of r){for(let b of f){let w=Array();for(let B=h;B<=d;B++)w.push(m.events?.eventBuckets?.[b]?.entries?.[`${B}`]?.count??0);a.push({yAxisID:"yCount",label:m.queue+": "+this.transloco.translate("dashboard.queues."+b),data:w,borderColor:i[O($[b],50)],pointBackgroundColor:i[O($[b],20)],pointBorderColor:i[O($[b],80)],pointHoverBackgroundColor:i[O($[b],40)],pointHoverBorderColor:i[O($[b],60)]})}if(["processed","failed"].filter(b=>f.includes(b)).length){let b=Array();for(let w=h;w<=d;w++){let B=["processed","failed"].filter(E=>f.includes(E)).reduce((E,F)=>{let Q=m.events?.eventBuckets?.[F]?.entries?.[`${w}`];return Q?.count?[(E?.[0]??0)+Q.latency,(E?.[1]??0)+Q.count]:E},null);b.push(B?B[0]/B[1]:null)}a.push({yAxisID:"yLatency",label:m.queue+": "+this.transloco.translate("dashboard.queues.latency"),data:b,borderColor:i["tertiary-50"],pointHoverBackgroundColor:i["tertiary-80"],pointHoverBorderColor:i["tertiary-20"]})}}}}return{type:"line",options:{animation:!1,elements:{line:{tension:.5}},scales:{yCount:{position:"left",ticks:{callback:r=>parseInt(r).toLocaleString(this.transloco.getActiveLang())}},yLatency:{position:"right",ticks:{callback:this.formatDuration.bind(this)}}},plugins:{legend:{display:!0},decimation:{enabled:!0}}},data:{labels:t,datasets:a}}}formatBucketKey(e,i){let t;switch(e.duration){case"day":t="d LLL";break;case"hour":t="d LLL H:00";break;case"minute":t="H:mm";break}return $e(1e3*Z[e.duration]*e.multiplier*i,t,{locale:Fe(this.transloco.getActiveLang())})}formatDuration(e){if(typeof e=="string"&&(e=parseInt(e)),e===0)return"0";let i=e,t=0,a=0,r=0;return i>=60&&(t=Math.floor(i/60),i=i%60,t>=5&&(i=0,t>=60&&(a=Math.floor(t/60),t=t%60,a>=5&&(t=0,a>=24&&(r=Math.floor(a/24),a=a%24))))),Re({days:r,hours:a,minutes:t,seconds:i},this.transloco.getActiveLang())}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275prov=R({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var Ct=(n,o,e)=>[n,o,e];function kt(n,o){if(n&1&&(s(0,"mat-option",7),p(1),l()),n&2){let e=o.$implicit,i=_().$implicit;u("value",e),c(),S(i("dashboard.interval."+e))}}function vt(n,o){if(n&1&&(s(0,"mat-option",7),p(1),l()),n&2){let e=o.$implicit,i=_().$implicit;u("value",e),c(),S(i("dashboard.interval."+e+"s"))}}function xt(n,o){if(n&1&&(s(0,"mat-option",7),p(1),l()),n&2){let e=o.$implicit;u("value",e),c(),S(e)}}function Mt(n,o){if(n&1){let e=re();s(0,"button",17),k("click",function(){let t=g(e).$implicit,a=_(2);return C(a.queueMetricsController.params.queue===t||a.queueMetricsController.setQueue(t))}),s(1,"mat-icon"),p(2),l()()}if(n&2){let e=o.$implicit,i=_(2);I(i.queueMetricsController.params.queue===e?"selected":"deselected"),u("matTooltip",e),c(2),S(i.queueMetricsController.params.queue===e?"radio_button_checked":"radio_button_unchecked")}}function yt(n,o){if(n&1&&(s(0,"mat-option",7),p(1),l()),n&2){let e=o.$implicit,i=_().$implicit;u("value",e),c(),S(i("dashboard.event."+e))}}function St(n,o){if(n&1&&(s(0,"mat-option",7),p(1),l()),n&2){let e=o.$implicit,i=_().$implicit;u("value",e),c(),S(i("dashboard.interval."+e))}}function wt(n,o){if(n&1){let e=re();fe(0),L(1,"app-document-title",1),s(2,"mat-card")(3,"mat-card-content")(4,"mat-grid-list",2)(5,"mat-grid-tile",3)(6,"mat-card",4)(7,"mat-card-header")(8,"mat-card-title")(9,"h4"),p(10),l()()(),s(11,"mat-card-content")(12,"mat-form-field",5)(13,"mat-select",6),k("valueChange",function(t){g(e);let a=_();return C(a.queueMetricsController.setTimeframe(t))}),N(14,kt,2,2,"mat-option",7,z),l()(),s(16,"div",8)(17,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setTimeframe(t.timeframeNames[0]))}),s(18,"mat-icon"),p(19,"first_page"),l()(),s(20,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setTimeframe(t.timeframeNames[t.timeframeNames.indexOf(t.queueMetricsController.params.buckets.timeframe)-1]))}),s(21,"mat-icon"),p(22,"navigate_before"),l()(),s(23,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setTimeframe(t.timeframeNames[t.timeframeNames.indexOf(t.queueMetricsController.params.buckets.timeframe)+1]))}),s(24,"mat-icon"),p(25,"navigate_next"),l()(),s(26,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setTimeframe(t.timeframeNames[t.timeframeNames.length-1]))}),s(27,"mat-icon"),p(28,"last_page"),l()()()()()(),s(29,"mat-grid-tile",3)(30,"mat-card",10)(31,"mat-card-header")(32,"mat-card-title")(33,"h4"),p(34),l()()(),s(35,"mat-card-content")(36,"mat-form-field",11)(37,"input",12),Ce(38,"async"),k("change",function(t){g(e);let a=_();return C(a.handleMultiplierEvent(t))}),l()(),s(39,"mat-form-field",13)(40,"mat-select",6),k("valueChange",function(t){g(e);let a=_();return C(a.queueMetricsController.setBucketDuration(t))}),N(41,vt,2,2,"mat-option",7,z),l()(),s(43,"div",8)(44,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setBucketMultiplier(t.queueMetricsController.bucketMultiplier-1))}),s(45,"mat-icon"),p(46,"remove"),l()(),s(47,"button",14),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setBucketMultiplier(t.queueMetricsController.bucketMultiplier+1))}),s(48,"mat-icon"),p(49,"add"),l()(),s(50,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setBucketDuration(t.resolutionNames[0]))}),s(51,"mat-icon"),p(52,"first_page"),l()(),s(53,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setBucketDuration(t.resolutionNames[t.resolutionNames.indexOf(t.queueMetricsController.bucketDuration)-1]))}),s(54,"mat-icon"),p(55,"navigate_before"),l()(),s(56,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setBucketDuration(t.resolutionNames[t.resolutionNames.indexOf(t.queueMetricsController.bucketDuration)+1]))}),s(57,"mat-icon"),p(58,"navigate_next"),l()(),s(59,"button",9),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setBucketDuration(t.resolutionNames[t.resolutionNames.length-1]))}),s(60,"mat-icon"),p(61,"last_page"),l()()()()()(),s(62,"mat-grid-tile",3)(63,"mat-card")(64,"mat-card-header")(65,"mat-card-title")(66,"h4"),p(67),l()()(),s(68,"mat-card-content")(69,"mat-form-field",5)(70,"mat-select",6),k("valueChange",function(t){g(e);let a=_();return C(a.queueMetricsController.setQueue(t==="_all"?null:t))}),s(71,"mat-option",15),p(72),l(),N(73,xt,2,2,"mat-option",7,z),l()(),s(75,"div",16)(76,"button",17),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setQueue(null))}),s(77,"mat-icon",18),p(78,"workspaces"),l()(),N(79,Mt,3,4,"button",19,z),l()()()(),s(81,"mat-grid-tile",3)(82,"mat-card")(83,"mat-card-header")(84,"mat-card-title")(85,"h4"),p(86),l()()(),s(87,"mat-card-content")(88,"mat-form-field",5)(89,"mat-select",6),k("valueChange",function(t){g(e);let a=_();return C(a.queueMetricsController.setEvent(t==="_all"?null:t))}),s(90,"mat-option",15),p(91,"All"),l(),N(92,yt,2,2,"mat-option",7,z),l()(),s(94,"div",16)(95,"button",17),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.setEvent(null))}),s(96,"mat-icon",18),p(97,"radio_button_checked"),l()(),s(98,"button",17),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.params.event==="created"||t.queueMetricsController.setEvent("created"))}),s(99,"mat-icon"),p(100,"add_circle"),l()(),s(101,"button",17),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.params.event==="processed"||t.queueMetricsController.setEvent("processed"))}),s(102,"mat-icon"),p(103,"check_circle"),l()(),s(104,"button",17),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.params.event==="failed"||t.queueMetricsController.setEvent("failed"))}),s(105,"mat-icon"),p(106,"error"),l()()()()()(),s(107,"mat-grid-tile",3)(108,"mat-card",20)(109,"mat-card-header")(110,"mat-card-title")(111,"h4"),p(112),l()()(),s(113,"mat-card-content")(114,"mat-form-field",5)(115,"mat-select",6),k("valueChange",function(t){g(e);let a=_();return C(a.queueMetricsController.setAutoRefreshInterval(t))}),N(116,St,2,2,"mat-option",7,z),l()(),s(118,"div",16)(119,"button",17),k("click",function(){g(e);let t=_();return C(t.queueMetricsController.refresh())}),s(120,"mat-icon"),p(121,"sync"),l()()()()()()(),s(122,"div",21),L(123,"mat-progress-bar",22),l(),s(124,"mat-grid-list",2)(125,"mat-grid-tile",3)(126,"mat-card")(127,"mat-card-header")(128,"mat-card-title")(129,"h4"),p(130),l()()(),s(131,"mat-card-content"),L(132,"app-chart",23),l()()(),s(133,"mat-grid-tile",3)(134,"mat-card")(135,"mat-card-header")(136,"mat-card-title")(137,"h4"),p(138),l()()(),s(139,"mat-card-content"),L(140,"app-chart",23),l()()()()()(),_e()}if(n&2){let e,i,t,a=o.$implicit,r=_();c(),u("parts",ge(69,Ct,a("routes.visualize"),a("routes.queues"),a("routes.dashboard"))),c(3),u("cols",r.breakpoints.sizeAtLeast("Large")?5:r.breakpoints.sizeAtLeast("Medium")?3:r.breakpoints.sizeAtLeast("Small")?2:1),c(),u("colspan",1)("rowspan",2),c(5),S(a("dashboard.metrics.timeframe")),c(3),u("value",r.queueMetricsController.params.buckets.timeframe),c(),P(r.timeframeNames),c(3),u("disabled",r.timeframeNames.indexOf(r.queueMetricsController.params.buckets.timeframe)<=0),c(3),u("disabled",r.timeframeNames.indexOf(r.queueMetricsController.params.buckets.timeframe)<=0),c(3),u("disabled",r.timeframeNames.indexOf(r.queueMetricsController.params.buckets.timeframe)>=r.timeframeNames.length-1),c(3),u("disabled",r.timeframeNames.indexOf(r.queueMetricsController.params.buckets.timeframe)>=r.timeframeNames.length-1),c(3),u("colspan",1)("rowspan",2),c(5),he(" ",a("dashboard.metrics.resolution")," "),c(3),u("placeholder",(e=(e=ke(38,67,r.queueMetricsController.result$))==null||e.params==null||e.params.buckets==null||e.params.buckets.multiplier==null?null:e.params.buckets.multiplier.toString())!==null&&e!==void 0?e:"")("value",r.queueMetricsController.params.buckets.multiplier),c(3),u("value",r.queueMetricsController.bucketDuration),c(),P(r.resolutionNames),c(3),u("disabled",r.queueMetricsController.bucketMultiplier===1),c(6),u("disabled",r.resolutionNames.indexOf(r.queueMetricsController.bucketDuration)<=0),c(3),u("disabled",r.resolutionNames.indexOf(r.queueMetricsController.bucketDuration)<=0),c(3),u("disabled",r.resolutionNames.indexOf(r.queueMetricsController.bucketDuration)>=r.resolutionNames.length-1),c(3),u("disabled",r.resolutionNames.indexOf(r.queueMetricsController.bucketDuration)>=r.resolutionNames.length-1),c(3),u("colspan",1)("rowspan",2),c(5),S(a("dashboard.queues.queue")),c(3),u("value",(i=r.queueMetricsController.params.queue)!==null&&i!==void 0?i:"_all"),c(2),S(a("general.all")),c(),P(r.availableQueueNames),c(3),I(r.queueMetricsController.params.queue?"deselected":"selected"),u("matTooltip",a("general.all")),c(3),P(r.availableQueueNames),c(2),u("colspan",1)("rowspan",2),c(5),S(a("dashboard.metrics.event")),c(3),u("value",(t=r.queueMetricsController.params.event)!==null&&t!==void 0?t:"_all"),c(3),P(r.eventNames),c(3),I(r.queueMetricsController.params.event?"deselected":"selected"),u("matTooltip",a("general.all")),c(3),I(r.queueMetricsController.params.event==="created"?"selected":"deselected"),u("matTooltip",a("dashboard.queues.created")),c(3),I(r.queueMetricsController.params.event==="processed"?"selected":"deselected"),u("matTooltip",a("dashboard.queues.processed")),c(3),I(r.queueMetricsController.params.event==="failed"?"selected":"deselected"),u("matTooltip",a("dashboard.queues.failed")),c(3),u("colspan",1)("rowspan",2),c(5),S(a("general.refresh")),c(3),u("value",r.queueMetricsController.params.autoRefresh),c(),P(r.autoRefreshIntervalNames),c(3),u("matTooltip",a("general.refresh")),c(4),u("mode",r.queueMetricsController.loading?"indeterminate":"determinate")("value",0),c(),u("cols",r.breakpoints.sizeAtLeast("Large")?2:1),c(),u("colspan",1)("rowspan",5),c(5),S(a("dashboard.queues.total_counts_by_status")),c(2),u("adapter",r.totals)("$data",r.queueMetricsController.result$)("height",400)("width",550),c(),u("colspan",1)("rowspan",5),c(5),S(a("dashboard.metrics.throughput")),c(2),u("adapter",r.timeline)("$data",r.queueMetricsController.result$)("height",400)("width",550)}}var Ai=(()=>{class n{constructor(){this.breakpoints=T(je),this.apollo=T(Me),this.queueMetricsController=new te(this.apollo,{buckets:{duration:"AUTO",multiplier:"AUTO",timeframe:"all"},autoRefresh:"seconds_30"},T(we)),this.timeline=T(lt),this.totals=T(it),this.resolutionNames=Ge,this.timeframeNames=We,this.availableQueueNames=Xe,this.autoRefreshIntervalNames=Ze,this.eventNames=ee}ngOnInit(){this.queueMetricsController.result$.subscribe(e=>{if(this.queueMetricsController.params.buckets.timeframe==="all"&&this.queueMetricsController.params.buckets.duration==="AUTO"&&e.params.buckets.duration==="hour"){let i=e.bucketSpan;i&&i.latestBucket-i.earliestBucket<12&&this.queueMetricsController.setBucketDuration("minute")}})}ngOnDestroy(){this.queueMetricsController.setAutoRefreshInterval("off")}handleMultiplierEvent(e){let i=e.currentTarget.value;this.queueMetricsController.setBucketMultiplier(/^\d+$/.test(i)?parseInt(i):"AUTO")}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=me({type:n,selectors:[["app-queue-visualize"]],standalone:!0,features:[be],decls:1,vars:0,consts:[[4,"transloco"],[3,"parts"],["rowHeight","100px",3,"cols"],[3,"colspan","rowspan"],[1,"form-timeframe"],["subscriptSizing","dynamic"],[3,"valueChange","value"],[3,"value"],[1,"paginator","actions"],["mat-icon-button","",3,"click","disabled"],[1,"form-resolution"],["subscriptSizing","dynamic",1,"form-input-multiplier"],["type","number","matInput","","min","1","step","1",3,"change","placeholder","value"],["subscriptSizing","dynamic",1,"form-select-duration"],["mat-icon-button","",3,"click"],["value","_all"],[1,"actions"],["mat-icon-button","",3,"click","matTooltip"],["fontSet","material-icons"],["mat-icon-button","",3,"class","matTooltip"],[1,"form-refresh"],[1,"progress-bar-container"],[3,"mode","value"],[3,"adapter","$data","height","width"]],template:function(i,t){i&1&&de(0,wt,141,73,"ng-container",0)},dependencies:[De,ye,U,K,Be,Y,Ve,qe,Oe,J,W,Ie,Pe,Ae,Qe,xe,ve,He,G,tt,Le],styles:[".actions[_ngcontent-%COMP%]{width:210px;padding-top:12px;--mdc-icon-button-state-layer-size: 32px}.actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:22px}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:0}.progress-bar-container[_ngcontent-%COMP%]{width:100%;height:10px}mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{width:100%}mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{min-width:190px}mat-grid-tile[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:16px;font-size:18px}mat-form-field[_ngcontent-%COMP%]{width:186px}.form-resolution[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-left:-2px}.form-resolution[_ngcontent-%COMP%]   .form-input-multiplier[_ngcontent-%COMP%]{width:60px;margin-right:10px}.form-resolution[_ngcontent-%COMP%]   .form-input-multiplier[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .form-resolution[_ngcontent-%COMP%]   .form-input-multiplier[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.form-resolution[_ngcontent-%COMP%]   .form-input-multiplier[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.form-resolution[_ngcontent-%COMP%]   .form-select-duration[_ngcontent-%COMP%]{width:116px}"]})}}return n})();export{Ai as QueueVisualizeComponent};