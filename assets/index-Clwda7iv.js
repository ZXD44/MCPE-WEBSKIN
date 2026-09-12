(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function en(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){const e=Math.random()*16|0;return(r==="x"?e:e&3|8).toString(16)})}function is(r=10){const e="abcdefghijklmnopqrstuvwxyz",t="abcdefghijklmnopqrstuvwxyz0123456789";let n=e.charAt(Math.floor(Math.random()*e.length));for(let i=1;i<r;i++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function ke(r,e="info"){let t=document.getElementById("toast-container");t||(t=document.createElement("div"),t.id="toast-container",t.className="toast-container",document.body.appendChild(t));const n=document.createElement("div");n.className=`toast ${e}`,n.innerHTML=`<span>${r}</span>`,t.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateX(100%)",n.style.transition="all 0.3s ease",setTimeout(()=>n.remove(),300)},3500)}function lo(r){return new Promise((e,t)=>{if(r.width===64&&r.height===32){const o=document.createElement("canvas");o.width=64,o.height=64;const a=o.getContext("2d");a.imageSmoothingEnabled=!1,a.drawImage(r,0,0);const l=new Image;l.onload=()=>e(l),l.onerror=()=>t(new Error("ไม่สามารถประมวลผลไฟล์สกินได้")),l.src=o.toDataURL("image/png");return}const n=[64,128,192,256,320,384,448,512,1024,1048,2048,4096],i=r.width===r.height,s=n.includes(r.width)||i&&r.width%64===0&&r.width<=4096;if(!i||!s){t(new Error("กรุณาอัพโหลดสกินรูปสี่เหลี่ยมจัตุรัส (เช่น 64, 128, 512, 1024, 1048, 2048, 4096)"));return}e(r)})}var mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ol(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Pi(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Sr={exports:{}};/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Cs;function ll(){return Cs||(Cs=1,(function(r,e){(function(t){r.exports=t()})(function(){return(function t(n,i,s){function o(c,u){if(!i[c]){if(!n[c]){var m=typeof Pi=="function"&&Pi;if(!u&&m)return m(c,!0);if(a)return a(c,!0);var f=new Error("Cannot find module '"+c+"'");throw f.code="MODULE_NOT_FOUND",f}var p=i[c]={exports:{}};n[c][0].call(p.exports,function(_){var g=n[c][1][_];return o(g||_)},p,p.exports,t,n,i,s)}return i[c].exports}for(var a=typeof Pi=="function"&&Pi,l=0;l<s.length;l++)o(s[l]);return o})({1:[function(t,n,i){var s=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var c,u,m,f,p,_,g,d=[],h=0,v=l.length,b=v,E=s.getTypeOf(l)!=="string";h<l.length;)b=v-h,m=E?(c=l[h++],u=h<v?l[h++]:0,h<v?l[h++]:0):(c=l.charCodeAt(h++),u=h<v?l.charCodeAt(h++):0,h<v?l.charCodeAt(h++):0),f=c>>2,p=(3&c)<<4|u>>4,_=1<b?(15&u)<<2|m>>6:64,g=2<b?63&m:64,d.push(a.charAt(f)+a.charAt(p)+a.charAt(_)+a.charAt(g));return d.join("")},i.decode=function(l){var c,u,m,f,p,_,g=0,d=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var v,b=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&b--,l.charAt(l.length-2)===a.charAt(64)&&b--,b%1!=0)throw new Error("Invalid base64 input, bad content length.");for(v=o.uint8array?new Uint8Array(0|b):new Array(0|b);g<l.length;)c=a.indexOf(l.charAt(g++))<<2|(f=a.indexOf(l.charAt(g++)))>>4,u=(15&f)<<4|(p=a.indexOf(l.charAt(g++)))>>2,m=(3&p)<<6|(_=a.indexOf(l.charAt(g++))),v[d++]=c,p!==64&&(v[d++]=u),_!==64&&(v[d++]=m);return v}},{"./support":30,"./utils":32}],2:[function(t,n,i){var s=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function c(u,m,f,p,_){this.compressedSize=u,this.uncompressedSize=m,this.crc32=f,this.compression=p,this.compressedContent=_}c.prototype={getContentWorker:function(){var u=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),m=this;return u.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,m,f){return u.pipe(new a).pipe(new l("uncompressedSize")).pipe(m.compressWorker(f)).pipe(new l("compressedSize")).withStreamInfo("compression",m)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,i){var s=t("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,i){var s=t("./utils"),o=(function(){for(var a,l=[],c=0;c<256;c++){a=c;for(var u=0;u<8;u++)a=1&a?3988292384^a>>>1:a>>>1;l[c]=a}return l})();n.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?(function(c,u,m,f){var p=o,_=f+m;c^=-1;for(var g=f;g<_;g++)c=c>>>8^p[255&(c^u[g])];return-1^c})(0|l,a,a.length,0):(function(c,u,m,f){var p=o,_=f+m;c^=-1;for(var g=f;g<_;g++)c=c>>>8^p[255&(c^u.charCodeAt(g))];return-1^c})(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(t,n,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(t,n,i){var s=null;s=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:s}},{lie:37}],7:[function(t,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),l=t("./stream/GenericWorker"),c=s?"uint8array":"array";function u(m,f){l.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=f,this.meta={}}i.magic="\b\0",a.inherits(u,l),u.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(c,m.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(f){m.push({data:f,meta:m.meta})}},i.compressWorker=function(m){return new u("Deflate",m)},i.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,i){function s(p,_){var g,d="";for(g=0;g<_;g++)d+=String.fromCharCode(255&p),p>>>=8;return d}function o(p,_,g,d,h,v){var b,E,w=p.file,L=p.compression,T=v!==c.utf8encode,H=a.transformTo("string",v(w.name)),S=a.transformTo("string",c.utf8encode(w.name)),R=w.comment,J=a.transformTo("string",v(R)),P=a.transformTo("string",c.utf8encode(R)),O=S.length!==w.name.length,x=P.length!==R.length,F="",ie="",G="",Q=w.dir,W=w.date,K={crc32:0,compressedSize:0,uncompressedSize:0};_&&!g||(K.crc32=p.crc32,K.compressedSize=p.compressedSize,K.uncompressedSize=p.uncompressedSize);var I=0;_&&(I|=8),T||!O&&!x||(I|=2048);var D=0,ue=0;Q&&(D|=16),h==="UNIX"?(ue=798,D|=(function(ne,Me){var Ce=ne;return ne||(Ce=Me?16893:33204),(65535&Ce)<<16})(w.unixPermissions,Q)):(ue=20,D|=(function(ne){return 63&(ne||0)})(w.dosPermissions)),b=W.getUTCHours(),b<<=6,b|=W.getUTCMinutes(),b<<=5,b|=W.getUTCSeconds()/2,E=W.getUTCFullYear()-1980,E<<=4,E|=W.getUTCMonth()+1,E<<=5,E|=W.getUTCDate(),O&&(ie=s(1,1)+s(u(H),4)+S,F+="up"+s(ie.length,2)+ie),x&&(G=s(1,1)+s(u(J),4)+P,F+="uc"+s(G.length,2)+G);var oe="";return oe+=`
\0`,oe+=s(I,2),oe+=L.magic,oe+=s(b,2),oe+=s(E,2),oe+=s(K.crc32,4),oe+=s(K.compressedSize,4),oe+=s(K.uncompressedSize,4),oe+=s(H.length,2),oe+=s(F.length,2),{fileRecord:m.LOCAL_FILE_HEADER+oe+H+F,dirRecord:m.CENTRAL_FILE_HEADER+s(ue,2)+oe+s(J.length,2)+"\0\0\0\0"+s(D,4)+s(d,4)+H+F+J}}var a=t("../utils"),l=t("../stream/GenericWorker"),c=t("../utf8"),u=t("../crc32"),m=t("../signature");function f(p,_,g,d){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=g,this.encodeFileName=d,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(f,l),f.prototype.push=function(p){var _=p.meta.percent||0,g=this.entriesCount,d=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:g?(_+100*(g-d-1))/g:100}}))},f.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var _=this.streamFiles&&!p.file.dir;if(_){var g=o(p,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},f.prototype.closedSource=function(p){this.accumulate=!1;var _=this.streamFiles&&!p.file.dir,g=o(p,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),_)this.push({data:(function(d){return m.DATA_DESCRIPTOR+s(d.crc32,4)+s(d.compressedSize,4)+s(d.uncompressedSize,4)})(p),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},f.prototype.flush=function(){for(var p=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var g=this.bytesWritten-p,d=(function(h,v,b,E,w){var L=a.transformTo("string",w(E));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(v,4)+s(b,4)+s(L.length,2)+L})(this.dirRecords.length,g,p,this.zipComment,this.encodeFileName);this.push({data:d,meta:{percent:100}})},f.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},f.prototype.registerPrevious=function(p){this._sources.push(p);var _=this;return p.on("data",function(g){_.processChunk(g)}),p.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),p.on("error",function(g){_.error(g)}),this},f.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},f.prototype.error=function(p){var _=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var g=0;g<_.length;g++)try{_[g].error(p)}catch{}return!0},f.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,_=0;_<p.length;_++)p[_].lock()},n.exports=f},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,i){var s=t("../compressions"),o=t("./ZipFileWorker");i.generateWorker=function(a,l,c){var u=new o(l.streamFiles,c,l.platform,l.encodeFileName),m=0;try{a.forEach(function(f,p){m++;var _=(function(v,b){var E=v||b,w=s[E];if(!w)throw new Error(E+" is not a valid compression method !");return w})(p.options.compression,l.compression),g=p.options.compressionOptions||l.compressionOptions||{},d=p.dir,h=p.date;p._compressWorker(_,g).withStreamInfo("file",{name:f,dir:d,date:h,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(u)}),u.entriesCount=m}catch(f){u.error(f)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=t("./object")).loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.2",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=t("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,i){var s=t("./utils"),o=t("./external"),a=t("./utf8"),l=t("./zipEntries"),c=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function m(f){return new o.Promise(function(p,_){var g=f.decompressed.getContentWorker().pipe(new c);g.on("error",function(d){_(d)}).on("end",function(){g.streamInfo.crc32!==f.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}n.exports=function(f,p){var _=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),u.isNode&&u.isStream(f)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",f,!0,p.optimizedBinaryString,p.base64).then(function(g){var d=new l(p);return d.load(g),d}).then(function(g){var d=[o.Promise.resolve(g)],h=g.files;if(p.checkCRC32)for(var v=0;v<h.length;v++)d.push(m(h[v]));return o.Promise.all(d)}).then(function(g){for(var d=g.shift(),h=d.files,v=0;v<h.length;v++){var b=h[v],E=b.fileNameStr,w=s.resolve(b.fileNameStr);_.file(w,b.decompressed,{binary:!0,optimizedBinaryString:!0,date:b.date,dir:b.dir,comment:b.fileCommentStr.length?b.fileCommentStr:null,unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions,createFolders:p.createFolders}),b.dir||(_.file(w).unsafeOriginalName=E)}return d.zipComment.length&&(_.comment=d.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,i){var s=t("../utils"),o=t("../stream/GenericWorker");function a(l,c){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(a,o),a.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,i){var s=t("readable-stream").Readable;function o(a,l,c){s.call(this,l),this._helper=a;var u=this;a.on("data",function(m,f){u.push(m)||u._helper.pause(),c&&c(f)}).on("error",function(m){u.emit("error",m)}).on("end",function(){u.push(null)})}t("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},n.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,n,i){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,n,i){function s(w,L,T){var H,S=a.getTypeOf(L),R=a.extend(T||{},u);R.date=R.date||new Date,R.compression!==null&&(R.compression=R.compression.toUpperCase()),typeof R.unixPermissions=="string"&&(R.unixPermissions=parseInt(R.unixPermissions,8)),R.unixPermissions&&16384&R.unixPermissions&&(R.dir=!0),R.dosPermissions&&16&R.dosPermissions&&(R.dir=!0),R.dir&&(w=h(w)),R.createFolders&&(H=d(w))&&v.call(this,H,!0);var J=S==="string"&&R.binary===!1&&R.base64===!1;T&&T.binary!==void 0||(R.binary=!J),(L instanceof m&&L.uncompressedSize===0||R.dir||!L||L.length===0)&&(R.base64=!1,R.binary=!0,L="",R.compression="STORE",S="string");var P=null;P=L instanceof m||L instanceof l?L:_.isNode&&_.isStream(L)?new g(w,L):a.prepareContent(w,L,R.binary,R.optimizedBinaryString,R.base64);var O=new f(w,P,R);this.files[w]=O}var o=t("./utf8"),a=t("./utils"),l=t("./stream/GenericWorker"),c=t("./stream/StreamHelper"),u=t("./defaults"),m=t("./compressedObject"),f=t("./zipObject"),p=t("./generate"),_=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),d=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var L=w.lastIndexOf("/");return 0<L?w.substring(0,L):""},h=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},v=function(w,L){return L=L!==void 0?L:u.createFolders,w=h(w),this.files[w]||s.call(this,w,null,{dir:!0,createFolders:L}),this.files[w]};function b(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var L,T,H;for(L in this.files)H=this.files[L],(T=L.slice(this.root.length,L.length))&&L.slice(0,this.root.length)===this.root&&w(T,H)},filter:function(w){var L=[];return this.forEach(function(T,H){w(T,H)&&L.push(H)}),L},file:function(w,L,T){if(arguments.length!==1)return w=this.root+w,s.call(this,w,L,T),this;if(b(w)){var H=w;return this.filter(function(R,J){return!J.dir&&H.test(R)})}var S=this.files[this.root+w];return S&&!S.dir?S:null},folder:function(w){if(!w)return this;if(b(w))return this.filter(function(S,R){return R.dir&&w.test(S)});var L=this.root+w,T=v.call(this,L),H=this.clone();return H.root=T.name,H},remove:function(w){w=this.root+w;var L=this.files[w];if(L||(w.slice(-1)!=="/"&&(w+="/"),L=this.files[w]),L&&!L.dir)delete this.files[w];else for(var T=this.filter(function(S,R){return R.name.slice(0,w.length)===w}),H=0;H<T.length;H++)delete this.files[T[H].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var L,T={};try{if((T=a.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=T.type.toLowerCase(),T.compression=T.compression.toUpperCase(),T.type==="binarystring"&&(T.type="string"),!T.type)throw new Error("No output type specified.");a.checkSupport(T.type),T.platform!=="darwin"&&T.platform!=="freebsd"&&T.platform!=="linux"&&T.platform!=="sunos"||(T.platform="UNIX"),T.platform==="win32"&&(T.platform="DOS");var H=T.comment||this.comment||"";L=p.generateWorker(this,T,H)}catch(S){(L=new l("error")).error(S)}return new c(L,T.type||"string",T.mimeType)},generateAsync:function(w,L){return this.generateInternalStream(w).accumulate(L)},generateNodeStream:function(w,L){return(w=w||{}).type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(L)}};n.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,i){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,i){var s=t("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}t("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),m=a.charCodeAt(3),f=this.length-4;0<=f;--f)if(this.data[f]===l&&this.data[f+1]===c&&this.data[f+2]===u&&this.data[f+3]===m)return f-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),c=a.charCodeAt(1),u=a.charCodeAt(2),m=a.charCodeAt(3),f=this.readData(4);return l===f[0]&&c===f[1]&&u===f[2]&&m===f[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,n,i){var s=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,c=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=a,c},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=o},{"../utils":32}],19:[function(t,n,i){var s=t("./Uint8ArrayReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,i){var s=t("./DataReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,n,i){var s=t("./ArrayReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},n.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,i){var s=t("../utils"),o=t("../support"),a=t("./ArrayReader"),l=t("./StringReader"),c=t("./NodeBufferReader"),u=t("./Uint8ArrayReader");n.exports=function(m){var f=s.getTypeOf(m);return s.checkSupport(f),f!=="string"||o.uint8array?f==="nodebuffer"?new c(m):o.uint8array?new u(s.transformTo("uint8array",m)):new a(s.transformTo("array",m)):new l(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,i){var s=t("./GenericWorker"),o=t("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,i){var s=t("./GenericWorker"),o=t("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,i){var s=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}o.prototype.processChunk.call(this,l)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,i){var s=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=s.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,i){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},n.exports=s},{}],29:[function(t,n,i){var s=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),l=t("../base64"),c=t("../support"),u=t("../external"),m=null;if(c.nodestream)try{m=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function f(_,g){return new u.Promise(function(d,h){var v=[],b=_._internalType,E=_._outputType,w=_._mimeType;_.on("data",function(L,T){v.push(L),g&&g(T)}).on("error",function(L){v=[],h(L)}).on("end",function(){try{var L=(function(T,H,S){switch(T){case"blob":return s.newBlob(s.transformTo("arraybuffer",H),S);case"base64":return l.encode(H);default:return s.transformTo(T,H)}})(E,(function(T,H){var S,R=0,J=null,P=0;for(S=0;S<H.length;S++)P+=H[S].length;switch(T){case"string":return H.join("");case"array":return Array.prototype.concat.apply([],H);case"uint8array":for(J=new Uint8Array(P),S=0;S<H.length;S++)J.set(H[S],R),R+=H[S].length;return J;case"nodebuffer":return Buffer.concat(H);default:throw new Error("concat : unsupported type '"+T+"'")}})(b,v),w);d(L)}catch(T){h(T)}v=[]}).resume()})}function p(_,g,d){var h=g;switch(g){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=g,this._mimeType=d,s.checkSupport(h),this._worker=_.pipe(new o(h)),_.lock()}catch(v){this._worker=new a("error"),this._worker.error(v)}}p.prototype={accumulate:function(_){return f(this,_)},on:function(_,g){var d=this;return _==="data"?this._worker.on(_,function(h){g.call(d,h.data,h.meta)}):this._worker.on(_,function(){s.delay(g,arguments,d)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},_)}},n.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),i.blob=o.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!t("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,i){for(var s=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),l=t("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function m(){l.call(this,"utf-8 decode"),this.leftOver=null}function f(){l.call(this,"utf-8 encode")}i.utf8encode=function(p){return o.nodebuffer?a.newBufferFrom(p,"utf-8"):(function(_){var g,d,h,v,b,E=_.length,w=0;for(v=0;v<E;v++)(64512&(d=_.charCodeAt(v)))==55296&&v+1<E&&(64512&(h=_.charCodeAt(v+1)))==56320&&(d=65536+(d-55296<<10)+(h-56320),v++),w+=d<128?1:d<2048?2:d<65536?3:4;for(g=o.uint8array?new Uint8Array(w):new Array(w),v=b=0;b<w;v++)(64512&(d=_.charCodeAt(v)))==55296&&v+1<E&&(64512&(h=_.charCodeAt(v+1)))==56320&&(d=65536+(d-55296<<10)+(h-56320),v++),d<128?g[b++]=d:(d<2048?g[b++]=192|d>>>6:(d<65536?g[b++]=224|d>>>12:(g[b++]=240|d>>>18,g[b++]=128|d>>>12&63),g[b++]=128|d>>>6&63),g[b++]=128|63&d);return g})(p)},i.utf8decode=function(p){return o.nodebuffer?s.transformTo("nodebuffer",p).toString("utf-8"):(function(_){var g,d,h,v,b=_.length,E=new Array(2*b);for(g=d=0;g<b;)if((h=_[g++])<128)E[d++]=h;else if(4<(v=c[h]))E[d++]=65533,g+=v-1;else{for(h&=v===2?31:v===3?15:7;1<v&&g<b;)h=h<<6|63&_[g++],v--;1<v?E[d++]=65533:h<65536?E[d++]=h:(h-=65536,E[d++]=55296|h>>10&1023,E[d++]=56320|1023&h)}return E.length!==d&&(E.subarray?E=E.subarray(0,d):E.length=d),s.applyFromCharCode(E)})(p=s.transformTo(o.uint8array?"uint8array":"array",p))},s.inherits(m,l),m.prototype.processChunk=function(p){var _=s.transformTo(o.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=_;(_=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),_.set(g,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var d=(function(v,b){var E;for((b=b||v.length)>v.length&&(b=v.length),E=b-1;0<=E&&(192&v[E])==128;)E--;return E<0||E===0?b:E+c[v[E]]>b?E:b})(_),h=_;d!==_.length&&(o.uint8array?(h=_.subarray(0,d),this.leftOver=_.subarray(d,_.length)):(h=_.slice(0,d),this.leftOver=_.slice(d,_.length))),this.push({data:i.utf8decode(h),meta:p.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=m,s.inherits(f,l),f.prototype.processChunk=function(p){this.push({data:i.utf8encode(p.data),meta:p.meta})},i.Utf8EncodeWorker=f},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,i){var s=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),l=t("./external");function c(g){return g}function u(g,d){for(var h=0;h<g.length;++h)d[h]=255&g.charCodeAt(h);return d}t("setimmediate"),i.newBlob=function(g,d){i.checkSupport("blob");try{return new Blob([g],{type:d})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(g),h.getBlob(d)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(g,d,h){var v=[],b=0,E=g.length;if(E<=h)return String.fromCharCode.apply(null,g);for(;b<E;)d==="array"||d==="nodebuffer"?v.push(String.fromCharCode.apply(null,g.slice(b,Math.min(b+h,E)))):v.push(String.fromCharCode.apply(null,g.subarray(b,Math.min(b+h,E)))),b+=h;return v.join("")},stringifyByChar:function(g){for(var d="",h=0;h<g.length;h++)d+=String.fromCharCode(g[h]);return d},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}})()}};function f(g){var d=65536,h=i.getTypeOf(g),v=!0;if(h==="uint8array"?v=m.applyCanBeUsed.uint8array:h==="nodebuffer"&&(v=m.applyCanBeUsed.nodebuffer),v)for(;1<d;)try{return m.stringifyByChunk(g,h,d)}catch{d=Math.floor(d/2)}return m.stringifyByChar(g)}function p(g,d){for(var h=0;h<g.length;h++)d[h]=g[h];return d}i.applyFromCharCode=f;var _={};_.string={string:c,array:function(g){return u(g,new Array(g.length))},arraybuffer:function(g){return _.string.uint8array(g).buffer},uint8array:function(g){return u(g,new Uint8Array(g.length))},nodebuffer:function(g){return u(g,a.allocBuffer(g.length))}},_.array={string:f,array:c,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},_.arraybuffer={string:function(g){return f(new Uint8Array(g))},array:function(g){return p(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:c,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},_.uint8array={string:f,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:c,nodebuffer:function(g){return a.newBufferFrom(g)}},_.nodebuffer={string:f,array:function(g){return p(g,new Array(g.length))},arraybuffer:function(g){return _.nodebuffer.uint8array(g).buffer},uint8array:function(g){return p(g,new Uint8Array(g.length))},nodebuffer:c},i.transformTo=function(g,d){if(d=d||"",!g)return d;i.checkSupport(g);var h=i.getTypeOf(d);return _[h][g](d)},i.resolve=function(g){for(var d=g.split("/"),h=[],v=0;v<d.length;v++){var b=d[v];b==="."||b===""&&v!==0&&v!==d.length-1||(b===".."?h.pop():h.push(b))}return h.join("/")},i.getTypeOf=function(g){if(typeof g=="string")return"string";var d=Object.prototype.toString.call(g);return d==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&d==="[object Uint8Array]"?"uint8array":s.arraybuffer&&d==="[object ArrayBuffer]"?"arraybuffer":void 0},i.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(g){var d,h,v="";for(h=0;h<(g||"").length;h++)v+="\\x"+((d=g.charCodeAt(h))<16?"0":"")+d.toString(16).toUpperCase();return v},i.delay=function(g,d,h){setImmediate(function(){g.apply(h||null,d||[])})},i.inherits=function(g,d){function h(){}h.prototype=d.prototype,g.prototype=new h},i.extend=function(){var g,d,h={};for(g=0;g<arguments.length;g++)for(d in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],d)&&h[d]===void 0&&(h[d]=arguments[g][d]);return h},i.prepareContent=function(g,d,h,v,b){return l.Promise.resolve(d).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)?Blob.prototype.arrayBuffer!==void 0?E.arrayBuffer():typeof FileReader<"u"?new l.Promise(function(w,L){var T=new FileReader;T.onload=function(H){w(H.target.result)},T.onerror=function(H){L(H.target.error)},T.readAsArrayBuffer(E)}):l.Promise.reject(new Error(g+" is a Blob, but we have no way of reading it.")):E}).then(function(E){var w=i.getTypeOf(E);return w?(w==="arraybuffer"?E=i.transformTo("uint8array",E):w==="string"&&(b?E=o.decode(E):h&&v!==!0&&(E=(function(L){return u(L,s.uint8array?new Uint8Array(L.length):new Array(L.length))})(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,i){var s=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),l=t("./zipEntry"),c=t("./support");function u(m){this.files=[],this.loadOptions=m}u.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var f=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(f)+", expected "+o.pretty(m)+")")}},isSignature:function(m,f){var p=this.reader.index;this.reader.setIndex(m);var _=this.reader.readString(4)===f;return this.reader.setIndex(p),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),f=c.uint8array?"uint8array":"array",p=o.transformTo(f,m);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,f,p,_=this.zip64EndOfCentralSize-44;0<_;)m=this.reader.readInt(2),f=this.reader.readInt(4),p=this.reader.readData(f),this.zip64ExtensibleData[m]={id:m,length:f,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,f;for(m=0;m<this.files.length;m++)f=this.files[m],this.reader.setIndex(f.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),f.readLocalPart(this.reader),f.handleUTF8(),f.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(m=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var f=m;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var _=f-p;if(0<_)this.isSignature(f,a.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(m){this.reader=s(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,i){var s=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),l=t("./crc32"),c=t("./utf8"),u=t("./compressions"),m=t("./support");function f(p,_){this.options=p,this.loadOptions=_}f.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var _,g;if(p.skip(22),this.fileNameLength=p.readInt(2),g=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(d){for(var h in u)if(Object.prototype.hasOwnProperty.call(u,h)&&u[h].magic===d)return u[h];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,_,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var _=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(_),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var _,g,d,h=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<h;)_=p.readInt(2),g=p.readInt(2),d=p.readData(g),this.extraFields[_]={id:_,length:g,value:d};p.setIndex(h)},handleUTF8:function(){var p=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var g=o.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var d=this.findExtraFieldUnicodeComment();if(d!==null)this.fileCommentStr=d;else{var h=o.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var _=s(p.value);return _.readInt(1)!==1||l(this.fileName)!==_.readInt(4)?null:c.utf8decode(_.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var _=s(p.value);return _.readInt(1)!==1||l(this.fileComment)!==_.readInt(4)?null:c.utf8decode(_.readData(p.length-5))}return null}},n.exports=f},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,i){function s(_,g,d){this.name=_,this.dir=d.dir,this.date=d.date,this.comment=d.comment,this.unixPermissions=d.unixPermissions,this.dosPermissions=d.dosPermissions,this._data=g,this._dataBinary=d.binary,this.options={compression:d.compression,compressionOptions:d.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),l=t("./utf8"),c=t("./compressedObject"),u=t("./stream/GenericWorker");s.prototype={internalStream:function(_){var g=null,d="string";try{if(!_)throw new Error("No output type specified.");var h=(d=_.toLowerCase())==="string"||d==="text";d!=="binarystring"&&d!=="text"||(d="string"),g=this._decompressWorker();var v=!this._dataBinary;v&&!h&&(g=g.pipe(new l.Utf8EncodeWorker)),!v&&h&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(b){(g=new u("error")).error(b)}return new o(g,d,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof c&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var d=this._decompressWorker();return this._dataBinary||(d=d.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(d,_,g)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new a(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],f=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<m.length;p++)s.prototype[m[p]]=f;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,i){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,u=new l(_),m=s.document.createTextNode("");u.observe(m,{characterData:!0}),o=function(){m.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){_(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(_,0)};else{var f=new s.MessageChannel;f.port1.onmessage=_,o=function(){f.port2.postMessage(0)}}var p=[];function _(){var g,d;a=!0;for(var h=p.length;h;){for(d=p,p=[],g=-1;++g<h;)d[g]();h=p.length}a=!1}n.exports=function(g){p.push(g)!==1||a||o()}}).call(this,typeof mn<"u"?mn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,i){var s=t("immediate");function o(){}var a={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function m(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,h!==o&&g(this,h)}function f(h,v,b){this.promise=h,typeof v=="function"&&(this.onFulfilled=v,this.callFulfilled=this.otherCallFulfilled),typeof b=="function"&&(this.onRejected=b,this.callRejected=this.otherCallRejected)}function p(h,v,b){s(function(){var E;try{E=v(b)}catch(w){return a.reject(h,w)}E===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,E)})}function _(h){var v=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof v=="function")return function(){v.apply(h,arguments)}}function g(h,v){var b=!1;function E(T){b||(b=!0,a.reject(h,T))}function w(T){b||(b=!0,a.resolve(h,T))}var L=d(function(){v(w,E)});L.status==="error"&&E(L.value)}function d(h,v){var b={};try{b.value=h(v),b.status="success"}catch(E){b.status="error",b.value=E}return b}(n.exports=m).prototype.finally=function(h){if(typeof h!="function")return this;var v=this.constructor;return this.then(function(b){return v.resolve(h()).then(function(){return b})},function(b){return v.resolve(h()).then(function(){throw b})})},m.prototype.catch=function(h){return this.then(null,h)},m.prototype.then=function(h,v){if(typeof h!="function"&&this.state===c||typeof v!="function"&&this.state===l)return this;var b=new this.constructor(o);return this.state!==u?p(b,this.state===c?h:v,this.outcome):this.queue.push(new f(b,h,v)),b},f.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},f.prototype.otherCallFulfilled=function(h){p(this.promise,this.onFulfilled,h)},f.prototype.callRejected=function(h){a.reject(this.promise,h)},f.prototype.otherCallRejected=function(h){p(this.promise,this.onRejected,h)},a.resolve=function(h,v){var b=d(_,v);if(b.status==="error")return a.reject(h,b.value);var E=b.value;if(E)g(h,E);else{h.state=c,h.outcome=v;for(var w=-1,L=h.queue.length;++w<L;)h.queue[w].callFulfilled(v)}return h},a.reject=function(h,v){h.state=l,h.outcome=v;for(var b=-1,E=h.queue.length;++b<E;)h.queue[b].callRejected(v);return h},m.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},m.reject=function(h){var v=new this(o);return a.reject(v,h)},m.all=function(h){var v=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=h.length,E=!1;if(!b)return this.resolve([]);for(var w=new Array(b),L=0,T=-1,H=new this(o);++T<b;)S(h[T],T);return H;function S(R,J){v.resolve(R).then(function(P){w[J]=P,++L!==b||E||(E=!0,a.resolve(H,w))},function(P){E||(E=!0,a.reject(H,P))})}},m.race=function(h){var v=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var b=h.length,E=!1;if(!b)return this.resolve([]);for(var w=-1,L=new this(o);++w<b;)T=h[w],v.resolve(T).then(function(H){E||(E=!0,a.resolve(L,H))},function(H){E||(E=!0,a.reject(L,H))});var T;return L}},{immediate:36}],38:[function(t,n,i){var s={};(0,t("./lib/utils/common").assign)(s,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,i){var s=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/messages"),c=t("./zlib/zstream"),u=Object.prototype.toString,m=0,f=-1,p=0,_=8;function g(h){if(!(this instanceof g))return new g(h);this.options=o.assign({level:f,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},h||{});var v=this.options;v.raw&&0<v.windowBits?v.windowBits=-v.windowBits:v.gzip&&0<v.windowBits&&v.windowBits<16&&(v.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var b=s.deflateInit2(this.strm,v.level,v.method,v.windowBits,v.memLevel,v.strategy);if(b!==m)throw new Error(l[b]);if(v.header&&s.deflateSetHeader(this.strm,v.header),v.dictionary){var E;if(E=typeof v.dictionary=="string"?a.string2buf(v.dictionary):u.call(v.dictionary)==="[object ArrayBuffer]"?new Uint8Array(v.dictionary):v.dictionary,(b=s.deflateSetDictionary(this.strm,E))!==m)throw new Error(l[b]);this._dict_set=!0}}function d(h,v){var b=new g(v);if(b.push(h,!0),b.err)throw b.msg||l[b.err];return b.result}g.prototype.push=function(h,v){var b,E,w=this.strm,L=this.options.chunkSize;if(this.ended)return!1;E=v===~~v?v:v===!0?4:0,typeof h=="string"?w.input=a.string2buf(h):u.call(h)==="[object ArrayBuffer]"?w.input=new Uint8Array(h):w.input=h,w.next_in=0,w.avail_in=w.input.length;do{if(w.avail_out===0&&(w.output=new o.Buf8(L),w.next_out=0,w.avail_out=L),(b=s.deflate(w,E))!==1&&b!==m)return this.onEnd(b),!(this.ended=!0);w.avail_out!==0&&(w.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(w.output,w.next_out))):this.onData(o.shrinkBuf(w.output,w.next_out)))}while((0<w.avail_in||w.avail_out===0)&&b!==1);return E===4?(b=s.deflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===m):E!==2||(this.onEnd(m),!(w.avail_out=0))},g.prototype.onData=function(h){this.chunks.push(h)},g.prototype.onEnd=function(h){h===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},i.Deflate=g,i.deflate=d,i.deflateRaw=function(h,v){return(v=v||{}).raw=!0,d(h,v)},i.gzip=function(h,v){return(v=v||{}).gzip=!0,d(h,v)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,i){var s=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/constants"),c=t("./zlib/messages"),u=t("./zlib/zstream"),m=t("./zlib/gzheader"),f=Object.prototype.toString;function p(g){if(!(this instanceof p))return new p(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var d=this.options;d.raw&&0<=d.windowBits&&d.windowBits<16&&(d.windowBits=-d.windowBits,d.windowBits===0&&(d.windowBits=-15)),!(0<=d.windowBits&&d.windowBits<16)||g&&g.windowBits||(d.windowBits+=32),15<d.windowBits&&d.windowBits<48&&(15&d.windowBits)==0&&(d.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,d.windowBits);if(h!==l.Z_OK)throw new Error(c[h]);this.header=new m,s.inflateGetHeader(this.strm,this.header)}function _(g,d){var h=new p(d);if(h.push(g,!0),h.err)throw h.msg||c[h.err];return h.result}p.prototype.push=function(g,d){var h,v,b,E,w,L,T=this.strm,H=this.options.chunkSize,S=this.options.dictionary,R=!1;if(this.ended)return!1;v=d===~~d?d:d===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?T.input=a.binstring2buf(g):f.call(g)==="[object ArrayBuffer]"?T.input=new Uint8Array(g):T.input=g,T.next_in=0,T.avail_in=T.input.length;do{if(T.avail_out===0&&(T.output=new o.Buf8(H),T.next_out=0,T.avail_out=H),(h=s.inflate(T,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&S&&(L=typeof S=="string"?a.string2buf(S):f.call(S)==="[object ArrayBuffer]"?new Uint8Array(S):S,h=s.inflateSetDictionary(this.strm,L)),h===l.Z_BUF_ERROR&&R===!0&&(h=l.Z_OK,R=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);T.next_out&&(T.avail_out!==0&&h!==l.Z_STREAM_END&&(T.avail_in!==0||v!==l.Z_FINISH&&v!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(b=a.utf8border(T.output,T.next_out),E=T.next_out-b,w=a.buf2string(T.output,b),T.next_out=E,T.avail_out=H-E,E&&o.arraySet(T.output,T.output,b,E,0),this.onData(w)):this.onData(o.shrinkBuf(T.output,T.next_out)))),T.avail_in===0&&T.avail_out===0&&(R=!0)}while((0<T.avail_in||T.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(v=l.Z_FINISH),v===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):v!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(T.avail_out=0))},p.prototype.onData=function(g){this.chunks.push(g)},p.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},i.Inflate=p,i.inflate=_,i.inflateRaw=function(g,d){return(d=d||{}).raw=!0,_(g,d)},i.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var m in u)u.hasOwnProperty(m)&&(l[m]=u[m])}}return l},i.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var o={arraySet:function(l,c,u,m,f){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+m),f);else for(var p=0;p<m;p++)l[f+p]=c[u+p]},flattenChunks:function(l){var c,u,m,f,p,_;for(c=m=0,u=l.length;c<u;c++)m+=l[c].length;for(_=new Uint8Array(m),c=f=0,u=l.length;c<u;c++)p=l[c],_.set(p,f),f+=p.length;return _}},a={arraySet:function(l,c,u,m,f){for(var p=0;p<m;p++)l[f+p]=c[u+p]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,o)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,a))},i.setTyped(s)},{}],42:[function(t,n,i){var s=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(m,f){if(f<65537&&(m.subarray&&a||!m.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(m,f));for(var p="",_=0;_<f;_++)p+=String.fromCharCode(m[_]);return p}l[254]=l[254]=1,i.string2buf=function(m){var f,p,_,g,d,h=m.length,v=0;for(g=0;g<h;g++)(64512&(p=m.charCodeAt(g)))==55296&&g+1<h&&(64512&(_=m.charCodeAt(g+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),g++),v+=p<128?1:p<2048?2:p<65536?3:4;for(f=new s.Buf8(v),g=d=0;d<v;g++)(64512&(p=m.charCodeAt(g)))==55296&&g+1<h&&(64512&(_=m.charCodeAt(g+1)))==56320&&(p=65536+(p-55296<<10)+(_-56320),g++),p<128?f[d++]=p:(p<2048?f[d++]=192|p>>>6:(p<65536?f[d++]=224|p>>>12:(f[d++]=240|p>>>18,f[d++]=128|p>>>12&63),f[d++]=128|p>>>6&63),f[d++]=128|63&p);return f},i.buf2binstring=function(m){return u(m,m.length)},i.binstring2buf=function(m){for(var f=new s.Buf8(m.length),p=0,_=f.length;p<_;p++)f[p]=m.charCodeAt(p);return f},i.buf2string=function(m,f){var p,_,g,d,h=f||m.length,v=new Array(2*h);for(p=_=0;p<h;)if((g=m[p++])<128)v[_++]=g;else if(4<(d=l[g]))v[_++]=65533,p+=d-1;else{for(g&=d===2?31:d===3?15:7;1<d&&p<h;)g=g<<6|63&m[p++],d--;1<d?v[_++]=65533:g<65536?v[_++]=g:(g-=65536,v[_++]=55296|g>>10&1023,v[_++]=56320|1023&g)}return u(v,_)},i.utf8border=function(m,f){var p;for((f=f||m.length)>m.length&&(f=m.length),p=f-1;0<=p&&(192&m[p])==128;)p--;return p<0||p===0?f:p+l[m[p]]>f?p:f}},{"./common":41}],43:[function(t,n,i){n.exports=function(s,o,a,l){for(var c=65535&s|0,u=s>>>16&65535|0,m=0;a!==0;){for(a-=m=2e3<a?2e3:a;u=u+(c=c+o[l++]|0)|0,--m;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(t,n,i){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,i){var s=(function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var c=0;c<8;c++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a})();n.exports=function(o,a,l,c){var u=s,m=c+l;o^=-1;for(var f=c;f<m;f++)o=o>>>8^u[255&(o^a[f])];return-1^o}},{}],46:[function(t,n,i){var s,o=t("../utils/common"),a=t("./trees"),l=t("./adler32"),c=t("./crc32"),u=t("./messages"),m=0,f=4,p=0,_=-2,g=-1,d=4,h=2,v=8,b=9,E=286,w=30,L=19,T=2*E+1,H=15,S=3,R=258,J=R+S+1,P=42,O=113,x=1,F=2,ie=3,G=4;function Q(y,Z){return y.msg=u[Z],Z}function W(y){return(y<<1)-(4<y?9:0)}function K(y){for(var Z=y.length;0<=--Z;)y[Z]=0}function I(y){var Z=y.state,X=Z.pending;X>y.avail_out&&(X=y.avail_out),X!==0&&(o.arraySet(y.output,Z.pending_buf,Z.pending_out,X,y.next_out),y.next_out+=X,Z.pending_out+=X,y.total_out+=X,y.avail_out-=X,Z.pending-=X,Z.pending===0&&(Z.pending_out=0))}function D(y,Z){a._tr_flush_block(y,0<=y.block_start?y.block_start:-1,y.strstart-y.block_start,Z),y.block_start=y.strstart,I(y.strm)}function ue(y,Z){y.pending_buf[y.pending++]=Z}function oe(y,Z){y.pending_buf[y.pending++]=Z>>>8&255,y.pending_buf[y.pending++]=255&Z}function ne(y,Z){var X,N,C=y.max_chain_length,z=y.strstart,ae=y.prev_length,pe=y.nice_match,q=y.strstart>y.w_size-J?y.strstart-(y.w_size-J):0,A=y.window,M=y.w_mask,k=y.prev,re=y.strstart+R,de=A[z+ae-1],fe=A[z+ae];y.prev_length>=y.good_match&&(C>>=2),pe>y.lookahead&&(pe=y.lookahead);do if(A[(X=Z)+ae]===fe&&A[X+ae-1]===de&&A[X]===A[z]&&A[++X]===A[z+1]){z+=2,X++;do;while(A[++z]===A[++X]&&A[++z]===A[++X]&&A[++z]===A[++X]&&A[++z]===A[++X]&&A[++z]===A[++X]&&A[++z]===A[++X]&&A[++z]===A[++X]&&A[++z]===A[++X]&&z<re);if(N=R-(re-z),z=re-R,ae<N){if(y.match_start=Z,pe<=(ae=N))break;de=A[z+ae-1],fe=A[z+ae]}}while((Z=k[Z&M])>q&&--C!=0);return ae<=y.lookahead?ae:y.lookahead}function Me(y){var Z,X,N,C,z,ae,pe,q,A,M,k=y.w_size;do{if(C=y.window_size-y.lookahead-y.strstart,y.strstart>=k+(k-J)){for(o.arraySet(y.window,y.window,k,k,0),y.match_start-=k,y.strstart-=k,y.block_start-=k,Z=X=y.hash_size;N=y.head[--Z],y.head[Z]=k<=N?N-k:0,--X;);for(Z=X=k;N=y.prev[--Z],y.prev[Z]=k<=N?N-k:0,--X;);C+=k}if(y.strm.avail_in===0)break;if(ae=y.strm,pe=y.window,q=y.strstart+y.lookahead,A=C,M=void 0,M=ae.avail_in,A<M&&(M=A),X=M===0?0:(ae.avail_in-=M,o.arraySet(pe,ae.input,ae.next_in,M,q),ae.state.wrap===1?ae.adler=l(ae.adler,pe,M,q):ae.state.wrap===2&&(ae.adler=c(ae.adler,pe,M,q)),ae.next_in+=M,ae.total_in+=M,M),y.lookahead+=X,y.lookahead+y.insert>=S)for(z=y.strstart-y.insert,y.ins_h=y.window[z],y.ins_h=(y.ins_h<<y.hash_shift^y.window[z+1])&y.hash_mask;y.insert&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[z+S-1])&y.hash_mask,y.prev[z&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=z,z++,y.insert--,!(y.lookahead+y.insert<S)););}while(y.lookahead<J&&y.strm.avail_in!==0)}function Ce(y,Z){for(var X,N;;){if(y.lookahead<J){if(Me(y),y.lookahead<J&&Z===m)return x;if(y.lookahead===0)break}if(X=0,y.lookahead>=S&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+S-1])&y.hash_mask,X=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),X!==0&&y.strstart-X<=y.w_size-J&&(y.match_length=ne(y,X)),y.match_length>=S)if(N=a._tr_tally(y,y.strstart-y.match_start,y.match_length-S),y.lookahead-=y.match_length,y.match_length<=y.max_lazy_match&&y.lookahead>=S){for(y.match_length--;y.strstart++,y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+S-1])&y.hash_mask,X=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart,--y.match_length!=0;);y.strstart++}else y.strstart+=y.match_length,y.match_length=0,y.ins_h=y.window[y.strstart],y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+1])&y.hash_mask;else N=a._tr_tally(y,0,y.window[y.strstart]),y.lookahead--,y.strstart++;if(N&&(D(y,!1),y.strm.avail_out===0))return x}return y.insert=y.strstart<S-1?y.strstart:S-1,Z===f?(D(y,!0),y.strm.avail_out===0?ie:G):y.last_lit&&(D(y,!1),y.strm.avail_out===0)?x:F}function ve(y,Z){for(var X,N,C;;){if(y.lookahead<J){if(Me(y),y.lookahead<J&&Z===m)return x;if(y.lookahead===0)break}if(X=0,y.lookahead>=S&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+S-1])&y.hash_mask,X=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),y.prev_length=y.match_length,y.prev_match=y.match_start,y.match_length=S-1,X!==0&&y.prev_length<y.max_lazy_match&&y.strstart-X<=y.w_size-J&&(y.match_length=ne(y,X),y.match_length<=5&&(y.strategy===1||y.match_length===S&&4096<y.strstart-y.match_start)&&(y.match_length=S-1)),y.prev_length>=S&&y.match_length<=y.prev_length){for(C=y.strstart+y.lookahead-S,N=a._tr_tally(y,y.strstart-1-y.prev_match,y.prev_length-S),y.lookahead-=y.prev_length-1,y.prev_length-=2;++y.strstart<=C&&(y.ins_h=(y.ins_h<<y.hash_shift^y.window[y.strstart+S-1])&y.hash_mask,X=y.prev[y.strstart&y.w_mask]=y.head[y.ins_h],y.head[y.ins_h]=y.strstart),--y.prev_length!=0;);if(y.match_available=0,y.match_length=S-1,y.strstart++,N&&(D(y,!1),y.strm.avail_out===0))return x}else if(y.match_available){if((N=a._tr_tally(y,0,y.window[y.strstart-1]))&&D(y,!1),y.strstart++,y.lookahead--,y.strm.avail_out===0)return x}else y.match_available=1,y.strstart++,y.lookahead--}return y.match_available&&(N=a._tr_tally(y,0,y.window[y.strstart-1]),y.match_available=0),y.insert=y.strstart<S-1?y.strstart:S-1,Z===f?(D(y,!0),y.strm.avail_out===0?ie:G):y.last_lit&&(D(y,!1),y.strm.avail_out===0)?x:F}function Te(y,Z,X,N,C){this.good_length=y,this.max_lazy=Z,this.nice_length=X,this.max_chain=N,this.func=C}function Ve(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*T),this.dyn_dtree=new o.Buf16(2*(2*w+1)),this.bl_tree=new o.Buf16(2*(2*L+1)),K(this.dyn_ltree),K(this.dyn_dtree),K(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(H+1),this.heap=new o.Buf16(2*E+1),K(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*E+1),K(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Re(y){var Z;return y&&y.state?(y.total_in=y.total_out=0,y.data_type=h,(Z=y.state).pending=0,Z.pending_out=0,Z.wrap<0&&(Z.wrap=-Z.wrap),Z.status=Z.wrap?P:O,y.adler=Z.wrap===2?0:1,Z.last_flush=m,a._tr_init(Z),p):Q(y,_)}function Y(y){var Z=Re(y);return Z===p&&(function(X){X.window_size=2*X.w_size,K(X.head),X.max_lazy_match=s[X.level].max_lazy,X.good_match=s[X.level].good_length,X.nice_match=s[X.level].nice_length,X.max_chain_length=s[X.level].max_chain,X.strstart=0,X.block_start=0,X.lookahead=0,X.insert=0,X.match_length=X.prev_length=S-1,X.match_available=0,X.ins_h=0})(y.state),Z}function je(y,Z,X,N,C,z){if(!y)return _;var ae=1;if(Z===g&&(Z=6),N<0?(ae=0,N=-N):15<N&&(ae=2,N-=16),C<1||b<C||X!==v||N<8||15<N||Z<0||9<Z||z<0||d<z)return Q(y,_);N===8&&(N=9);var pe=new Ve;return(y.state=pe).strm=y,pe.wrap=ae,pe.gzhead=null,pe.w_bits=N,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=C+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+S-1)/S),pe.window=new o.Buf8(2*pe.w_size),pe.head=new o.Buf16(pe.hash_size),pe.prev=new o.Buf16(pe.w_size),pe.lit_bufsize=1<<C+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new o.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=Z,pe.strategy=z,pe.method=X,Y(y)}s=[new Te(0,0,0,0,function(y,Z){var X=65535;for(X>y.pending_buf_size-5&&(X=y.pending_buf_size-5);;){if(y.lookahead<=1){if(Me(y),y.lookahead===0&&Z===m)return x;if(y.lookahead===0)break}y.strstart+=y.lookahead,y.lookahead=0;var N=y.block_start+X;if((y.strstart===0||y.strstart>=N)&&(y.lookahead=y.strstart-N,y.strstart=N,D(y,!1),y.strm.avail_out===0)||y.strstart-y.block_start>=y.w_size-J&&(D(y,!1),y.strm.avail_out===0))return x}return y.insert=0,Z===f?(D(y,!0),y.strm.avail_out===0?ie:G):(y.strstart>y.block_start&&(D(y,!1),y.strm.avail_out),x)}),new Te(4,4,8,4,Ce),new Te(4,5,16,8,Ce),new Te(4,6,32,32,Ce),new Te(4,4,16,16,ve),new Te(8,16,32,32,ve),new Te(8,16,128,128,ve),new Te(8,32,128,256,ve),new Te(32,128,258,1024,ve),new Te(32,258,258,4096,ve)],i.deflateInit=function(y,Z){return je(y,Z,v,15,8,0)},i.deflateInit2=je,i.deflateReset=Y,i.deflateResetKeep=Re,i.deflateSetHeader=function(y,Z){return y&&y.state?y.state.wrap!==2?_:(y.state.gzhead=Z,p):_},i.deflate=function(y,Z){var X,N,C,z;if(!y||!y.state||5<Z||Z<0)return y?Q(y,_):_;if(N=y.state,!y.output||!y.input&&y.avail_in!==0||N.status===666&&Z!==f)return Q(y,y.avail_out===0?-5:_);if(N.strm=y,X=N.last_flush,N.last_flush=Z,N.status===P)if(N.wrap===2)y.adler=0,ue(N,31),ue(N,139),ue(N,8),N.gzhead?(ue(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),ue(N,255&N.gzhead.time),ue(N,N.gzhead.time>>8&255),ue(N,N.gzhead.time>>16&255),ue(N,N.gzhead.time>>24&255),ue(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),ue(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(ue(N,255&N.gzhead.extra.length),ue(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(y.adler=c(y.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(ue(N,0),ue(N,0),ue(N,0),ue(N,0),ue(N,0),ue(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),ue(N,3),N.status=O);else{var ae=v+(N.w_bits-8<<4)<<8;ae|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(ae|=32),ae+=31-ae%31,N.status=O,oe(N,ae),N.strstart!==0&&(oe(N,y.adler>>>16),oe(N,65535&y.adler)),y.adler=1}if(N.status===69)if(N.gzhead.extra){for(C=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>C&&(y.adler=c(y.adler,N.pending_buf,N.pending-C,C)),I(y),C=N.pending,N.pending!==N.pending_buf_size));)ue(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>C&&(y.adler=c(y.adler,N.pending_buf,N.pending-C,C)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){C=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>C&&(y.adler=c(y.adler,N.pending_buf,N.pending-C,C)),I(y),C=N.pending,N.pending===N.pending_buf_size)){z=1;break}z=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,ue(N,z)}while(z!==0);N.gzhead.hcrc&&N.pending>C&&(y.adler=c(y.adler,N.pending_buf,N.pending-C,C)),z===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){C=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>C&&(y.adler=c(y.adler,N.pending_buf,N.pending-C,C)),I(y),C=N.pending,N.pending===N.pending_buf_size)){z=1;break}z=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,ue(N,z)}while(z!==0);N.gzhead.hcrc&&N.pending>C&&(y.adler=c(y.adler,N.pending_buf,N.pending-C,C)),z===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&I(y),N.pending+2<=N.pending_buf_size&&(ue(N,255&y.adler),ue(N,y.adler>>8&255),y.adler=0,N.status=O)):N.status=O),N.pending!==0){if(I(y),y.avail_out===0)return N.last_flush=-1,p}else if(y.avail_in===0&&W(Z)<=W(X)&&Z!==f)return Q(y,-5);if(N.status===666&&y.avail_in!==0)return Q(y,-5);if(y.avail_in!==0||N.lookahead!==0||Z!==m&&N.status!==666){var pe=N.strategy===2?(function(q,A){for(var M;;){if(q.lookahead===0&&(Me(q),q.lookahead===0)){if(A===m)return x;break}if(q.match_length=0,M=a._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++,M&&(D(q,!1),q.strm.avail_out===0))return x}return q.insert=0,A===f?(D(q,!0),q.strm.avail_out===0?ie:G):q.last_lit&&(D(q,!1),q.strm.avail_out===0)?x:F})(N,Z):N.strategy===3?(function(q,A){for(var M,k,re,de,fe=q.window;;){if(q.lookahead<=R){if(Me(q),q.lookahead<=R&&A===m)return x;if(q.lookahead===0)break}if(q.match_length=0,q.lookahead>=S&&0<q.strstart&&(k=fe[re=q.strstart-1])===fe[++re]&&k===fe[++re]&&k===fe[++re]){de=q.strstart+R;do;while(k===fe[++re]&&k===fe[++re]&&k===fe[++re]&&k===fe[++re]&&k===fe[++re]&&k===fe[++re]&&k===fe[++re]&&k===fe[++re]&&re<de);q.match_length=R-(de-re),q.match_length>q.lookahead&&(q.match_length=q.lookahead)}if(q.match_length>=S?(M=a._tr_tally(q,1,q.match_length-S),q.lookahead-=q.match_length,q.strstart+=q.match_length,q.match_length=0):(M=a._tr_tally(q,0,q.window[q.strstart]),q.lookahead--,q.strstart++),M&&(D(q,!1),q.strm.avail_out===0))return x}return q.insert=0,A===f?(D(q,!0),q.strm.avail_out===0?ie:G):q.last_lit&&(D(q,!1),q.strm.avail_out===0)?x:F})(N,Z):s[N.level].func(N,Z);if(pe!==ie&&pe!==G||(N.status=666),pe===x||pe===ie)return y.avail_out===0&&(N.last_flush=-1),p;if(pe===F&&(Z===1?a._tr_align(N):Z!==5&&(a._tr_stored_block(N,0,0,!1),Z===3&&(K(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),I(y),y.avail_out===0))return N.last_flush=-1,p}return Z!==f?p:N.wrap<=0?1:(N.wrap===2?(ue(N,255&y.adler),ue(N,y.adler>>8&255),ue(N,y.adler>>16&255),ue(N,y.adler>>24&255),ue(N,255&y.total_in),ue(N,y.total_in>>8&255),ue(N,y.total_in>>16&255),ue(N,y.total_in>>24&255)):(oe(N,y.adler>>>16),oe(N,65535&y.adler)),I(y),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?p:1)},i.deflateEnd=function(y){var Z;return y&&y.state?(Z=y.state.status)!==P&&Z!==69&&Z!==73&&Z!==91&&Z!==103&&Z!==O&&Z!==666?Q(y,_):(y.state=null,Z===O?Q(y,-3):p):_},i.deflateSetDictionary=function(y,Z){var X,N,C,z,ae,pe,q,A,M=Z.length;if(!y||!y.state||(z=(X=y.state).wrap)===2||z===1&&X.status!==P||X.lookahead)return _;for(z===1&&(y.adler=l(y.adler,Z,M,0)),X.wrap=0,M>=X.w_size&&(z===0&&(K(X.head),X.strstart=0,X.block_start=0,X.insert=0),A=new o.Buf8(X.w_size),o.arraySet(A,Z,M-X.w_size,X.w_size,0),Z=A,M=X.w_size),ae=y.avail_in,pe=y.next_in,q=y.input,y.avail_in=M,y.next_in=0,y.input=Z,Me(X);X.lookahead>=S;){for(N=X.strstart,C=X.lookahead-(S-1);X.ins_h=(X.ins_h<<X.hash_shift^X.window[N+S-1])&X.hash_mask,X.prev[N&X.w_mask]=X.head[X.ins_h],X.head[X.ins_h]=N,N++,--C;);X.strstart=N,X.lookahead=S-1,Me(X)}return X.strstart+=X.lookahead,X.block_start=X.strstart,X.insert=X.lookahead,X.lookahead=0,X.match_length=X.prev_length=S-1,X.match_available=0,y.next_in=pe,y.input=q,y.avail_in=ae,X.wrap=z,p},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,i){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,i){n.exports=function(s,o){var a,l,c,u,m,f,p,_,g,d,h,v,b,E,w,L,T,H,S,R,J,P,O,x,F;a=s.state,l=s.next_in,x=s.input,c=l+(s.avail_in-5),u=s.next_out,F=s.output,m=u-(o-s.avail_out),f=u+(s.avail_out-257),p=a.dmax,_=a.wsize,g=a.whave,d=a.wnext,h=a.window,v=a.hold,b=a.bits,E=a.lencode,w=a.distcode,L=(1<<a.lenbits)-1,T=(1<<a.distbits)-1;e:do{b<15&&(v+=x[l++]<<b,b+=8,v+=x[l++]<<b,b+=8),H=E[v&L];t:for(;;){if(v>>>=S=H>>>24,b-=S,(S=H>>>16&255)===0)F[u++]=65535&H;else{if(!(16&S)){if((64&S)==0){H=E[(65535&H)+(v&(1<<S)-1)];continue t}if(32&S){a.mode=12;break e}s.msg="invalid literal/length code",a.mode=30;break e}R=65535&H,(S&=15)&&(b<S&&(v+=x[l++]<<b,b+=8),R+=v&(1<<S)-1,v>>>=S,b-=S),b<15&&(v+=x[l++]<<b,b+=8,v+=x[l++]<<b,b+=8),H=w[v&T];n:for(;;){if(v>>>=S=H>>>24,b-=S,!(16&(S=H>>>16&255))){if((64&S)==0){H=w[(65535&H)+(v&(1<<S)-1)];continue n}s.msg="invalid distance code",a.mode=30;break e}if(J=65535&H,b<(S&=15)&&(v+=x[l++]<<b,(b+=8)<S&&(v+=x[l++]<<b,b+=8)),p<(J+=v&(1<<S)-1)){s.msg="invalid distance too far back",a.mode=30;break e}if(v>>>=S,b-=S,(S=u-m)<J){if(g<(S=J-S)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break e}if(O=h,(P=0)===d){if(P+=_-S,S<R){for(R-=S;F[u++]=h[P++],--S;);P=u-J,O=F}}else if(d<S){if(P+=_+d-S,(S-=d)<R){for(R-=S;F[u++]=h[P++],--S;);if(P=0,d<R){for(R-=S=d;F[u++]=h[P++],--S;);P=u-J,O=F}}}else if(P+=d-S,S<R){for(R-=S;F[u++]=h[P++],--S;);P=u-J,O=F}for(;2<R;)F[u++]=O[P++],F[u++]=O[P++],F[u++]=O[P++],R-=3;R&&(F[u++]=O[P++],1<R&&(F[u++]=O[P++]))}else{for(P=u-J;F[u++]=F[P++],F[u++]=F[P++],F[u++]=F[P++],2<(R-=3););R&&(F[u++]=F[P++],1<R&&(F[u++]=F[P++]))}break}}break}}while(l<c&&u<f);l-=R=b>>3,v&=(1<<(b-=R<<3))-1,s.next_in=l,s.next_out=u,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=u<f?f-u+257:257-(u-f),a.hold=v,a.bits=b}},{}],49:[function(t,n,i){var s=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),l=t("./inffast"),c=t("./inftrees"),u=1,m=2,f=0,p=-2,_=1,g=852,d=592;function h(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function v(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function b(P){var O;return P&&P.state?(O=P.state,P.total_in=P.total_out=O.total=0,P.msg="",O.wrap&&(P.adler=1&O.wrap),O.mode=_,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new s.Buf32(g),O.distcode=O.distdyn=new s.Buf32(d),O.sane=1,O.back=-1,f):p}function E(P){var O;return P&&P.state?((O=P.state).wsize=0,O.whave=0,O.wnext=0,b(P)):p}function w(P,O){var x,F;return P&&P.state?(F=P.state,O<0?(x=0,O=-O):(x=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?p:(F.window!==null&&F.wbits!==O&&(F.window=null),F.wrap=x,F.wbits=O,E(P))):p}function L(P,O){var x,F;return P?(F=new v,(P.state=F).window=null,(x=w(P,O))!==f&&(P.state=null),x):p}var T,H,S=!0;function R(P){if(S){var O;for(T=new s.Buf32(512),H=new s.Buf32(32),O=0;O<144;)P.lens[O++]=8;for(;O<256;)P.lens[O++]=9;for(;O<280;)P.lens[O++]=7;for(;O<288;)P.lens[O++]=8;for(c(u,P.lens,0,288,T,0,P.work,{bits:9}),O=0;O<32;)P.lens[O++]=5;c(m,P.lens,0,32,H,0,P.work,{bits:5}),S=!1}P.lencode=T,P.lenbits=9,P.distcode=H,P.distbits=5}function J(P,O,x,F){var ie,G=P.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new s.Buf8(G.wsize)),F>=G.wsize?(s.arraySet(G.window,O,x-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(F<(ie=G.wsize-G.wnext)&&(ie=F),s.arraySet(G.window,O,x-F,ie,G.wnext),(F-=ie)?(s.arraySet(G.window,O,x-F,F,0),G.wnext=F,G.whave=G.wsize):(G.wnext+=ie,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=ie))),0}i.inflateReset=E,i.inflateReset2=w,i.inflateResetKeep=b,i.inflateInit=function(P){return L(P,15)},i.inflateInit2=L,i.inflate=function(P,O){var x,F,ie,G,Q,W,K,I,D,ue,oe,ne,Me,Ce,ve,Te,Ve,Re,Y,je,y,Z,X,N,C=0,z=new s.Buf8(4),ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return p;(x=P.state).mode===12&&(x.mode=13),Q=P.next_out,ie=P.output,K=P.avail_out,G=P.next_in,F=P.input,W=P.avail_in,I=x.hold,D=x.bits,ue=W,oe=K,Z=f;e:for(;;)switch(x.mode){case _:if(x.wrap===0){x.mode=13;break}for(;D<16;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if(2&x.wrap&&I===35615){z[x.check=0]=255&I,z[1]=I>>>8&255,x.check=a(x.check,z,2,0),D=I=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&I)<<8)+(I>>8))%31){P.msg="incorrect header check",x.mode=30;break}if((15&I)!=8){P.msg="unknown compression method",x.mode=30;break}if(D-=4,y=8+(15&(I>>>=4)),x.wbits===0)x.wbits=y;else if(y>x.wbits){P.msg="invalid window size",x.mode=30;break}x.dmax=1<<y,P.adler=x.check=1,x.mode=512&I?10:12,D=I=0;break;case 2:for(;D<16;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if(x.flags=I,(255&x.flags)!=8){P.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){P.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=I>>8&1),512&x.flags&&(z[0]=255&I,z[1]=I>>>8&255,x.check=a(x.check,z,2,0)),D=I=0,x.mode=3;case 3:for(;D<32;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}x.head&&(x.head.time=I),512&x.flags&&(z[0]=255&I,z[1]=I>>>8&255,z[2]=I>>>16&255,z[3]=I>>>24&255,x.check=a(x.check,z,4,0)),D=I=0,x.mode=4;case 4:for(;D<16;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}x.head&&(x.head.xflags=255&I,x.head.os=I>>8),512&x.flags&&(z[0]=255&I,z[1]=I>>>8&255,x.check=a(x.check,z,2,0)),D=I=0,x.mode=5;case 5:if(1024&x.flags){for(;D<16;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}x.length=I,x.head&&(x.head.extra_len=I),512&x.flags&&(z[0]=255&I,z[1]=I>>>8&255,x.check=a(x.check,z,2,0)),D=I=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(W<(ne=x.length)&&(ne=W),ne&&(x.head&&(y=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),s.arraySet(x.head.extra,F,G,ne,y)),512&x.flags&&(x.check=a(x.check,F,ne,G)),W-=ne,G+=ne,x.length-=ne),x.length))break e;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(W===0)break e;for(ne=0;y=F[G+ne++],x.head&&y&&x.length<65536&&(x.head.name+=String.fromCharCode(y)),y&&ne<W;);if(512&x.flags&&(x.check=a(x.check,F,ne,G)),W-=ne,G+=ne,y)break e}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(W===0)break e;for(ne=0;y=F[G+ne++],x.head&&y&&x.length<65536&&(x.head.comment+=String.fromCharCode(y)),y&&ne<W;);if(512&x.flags&&(x.check=a(x.check,F,ne,G)),W-=ne,G+=ne,y)break e}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;D<16;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if(I!==(65535&x.check)){P.msg="header crc mismatch",x.mode=30;break}D=I=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),P.adler=x.check=0,x.mode=12;break;case 10:for(;D<32;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}P.adler=x.check=h(I),D=I=0,x.mode=11;case 11:if(x.havedict===0)return P.next_out=Q,P.avail_out=K,P.next_in=G,P.avail_in=W,x.hold=I,x.bits=D,2;P.adler=x.check=1,x.mode=12;case 12:if(O===5||O===6)break e;case 13:if(x.last){I>>>=7&D,D-=7&D,x.mode=27;break}for(;D<3;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}switch(x.last=1&I,D-=1,3&(I>>>=1)){case 0:x.mode=14;break;case 1:if(R(x),x.mode=20,O!==6)break;I>>>=2,D-=2;break e;case 2:x.mode=17;break;case 3:P.msg="invalid block type",x.mode=30}I>>>=2,D-=2;break;case 14:for(I>>>=7&D,D-=7&D;D<32;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if((65535&I)!=(I>>>16^65535)){P.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&I,D=I=0,x.mode=15,O===6)break e;case 15:x.mode=16;case 16:if(ne=x.length){if(W<ne&&(ne=W),K<ne&&(ne=K),ne===0)break e;s.arraySet(ie,F,G,ne,Q),W-=ne,G+=ne,K-=ne,Q+=ne,x.length-=ne;break}x.mode=12;break;case 17:for(;D<14;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if(x.nlen=257+(31&I),I>>>=5,D-=5,x.ndist=1+(31&I),I>>>=5,D-=5,x.ncode=4+(15&I),I>>>=4,D-=4,286<x.nlen||30<x.ndist){P.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;D<3;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}x.lens[ae[x.have++]]=7&I,I>>>=3,D-=3}for(;x.have<19;)x.lens[ae[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,X={bits:x.lenbits},Z=c(0,x.lens,0,19,x.lencode,0,x.work,X),x.lenbits=X.bits,Z){P.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;Te=(C=x.lencode[I&(1<<x.lenbits)-1])>>>16&255,Ve=65535&C,!((ve=C>>>24)<=D);){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if(Ve<16)I>>>=ve,D-=ve,x.lens[x.have++]=Ve;else{if(Ve===16){for(N=ve+2;D<N;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if(I>>>=ve,D-=ve,x.have===0){P.msg="invalid bit length repeat",x.mode=30;break}y=x.lens[x.have-1],ne=3+(3&I),I>>>=2,D-=2}else if(Ve===17){for(N=ve+3;D<N;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}D-=ve,y=0,ne=3+(7&(I>>>=ve)),I>>>=3,D-=3}else{for(N=ve+7;D<N;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}D-=ve,y=0,ne=11+(127&(I>>>=ve)),I>>>=7,D-=7}if(x.have+ne>x.nlen+x.ndist){P.msg="invalid bit length repeat",x.mode=30;break}for(;ne--;)x.lens[x.have++]=y}}if(x.mode===30)break;if(x.lens[256]===0){P.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,X={bits:x.lenbits},Z=c(u,x.lens,0,x.nlen,x.lencode,0,x.work,X),x.lenbits=X.bits,Z){P.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,X={bits:x.distbits},Z=c(m,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,X),x.distbits=X.bits,Z){P.msg="invalid distances set",x.mode=30;break}if(x.mode=20,O===6)break e;case 20:x.mode=21;case 21:if(6<=W&&258<=K){P.next_out=Q,P.avail_out=K,P.next_in=G,P.avail_in=W,x.hold=I,x.bits=D,l(P,oe),Q=P.next_out,ie=P.output,K=P.avail_out,G=P.next_in,F=P.input,W=P.avail_in,I=x.hold,D=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;Te=(C=x.lencode[I&(1<<x.lenbits)-1])>>>16&255,Ve=65535&C,!((ve=C>>>24)<=D);){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if(Te&&(240&Te)==0){for(Re=ve,Y=Te,je=Ve;Te=(C=x.lencode[je+((I&(1<<Re+Y)-1)>>Re)])>>>16&255,Ve=65535&C,!(Re+(ve=C>>>24)<=D);){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}I>>>=Re,D-=Re,x.back+=Re}if(I>>>=ve,D-=ve,x.back+=ve,x.length=Ve,Te===0){x.mode=26;break}if(32&Te){x.back=-1,x.mode=12;break}if(64&Te){P.msg="invalid literal/length code",x.mode=30;break}x.extra=15&Te,x.mode=22;case 22:if(x.extra){for(N=x.extra;D<N;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}x.length+=I&(1<<x.extra)-1,I>>>=x.extra,D-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;Te=(C=x.distcode[I&(1<<x.distbits)-1])>>>16&255,Ve=65535&C,!((ve=C>>>24)<=D);){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if((240&Te)==0){for(Re=ve,Y=Te,je=Ve;Te=(C=x.distcode[je+((I&(1<<Re+Y)-1)>>Re)])>>>16&255,Ve=65535&C,!(Re+(ve=C>>>24)<=D);){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}I>>>=Re,D-=Re,x.back+=Re}if(I>>>=ve,D-=ve,x.back+=ve,64&Te){P.msg="invalid distance code",x.mode=30;break}x.offset=Ve,x.extra=15&Te,x.mode=24;case 24:if(x.extra){for(N=x.extra;D<N;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}x.offset+=I&(1<<x.extra)-1,I>>>=x.extra,D-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){P.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(K===0)break e;if(ne=oe-K,x.offset>ne){if((ne=x.offset-ne)>x.whave&&x.sane){P.msg="invalid distance too far back",x.mode=30;break}Me=ne>x.wnext?(ne-=x.wnext,x.wsize-ne):x.wnext-ne,ne>x.length&&(ne=x.length),Ce=x.window}else Ce=ie,Me=Q-x.offset,ne=x.length;for(K<ne&&(ne=K),K-=ne,x.length-=ne;ie[Q++]=Ce[Me++],--ne;);x.length===0&&(x.mode=21);break;case 26:if(K===0)break e;ie[Q++]=x.length,K--,x.mode=21;break;case 27:if(x.wrap){for(;D<32;){if(W===0)break e;W--,I|=F[G++]<<D,D+=8}if(oe-=K,P.total_out+=oe,x.total+=oe,oe&&(P.adler=x.check=x.flags?a(x.check,ie,oe,Q-oe):o(x.check,ie,oe,Q-oe)),oe=K,(x.flags?I:h(I))!==x.check){P.msg="incorrect data check",x.mode=30;break}D=I=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;D<32;){if(W===0)break e;W--,I+=F[G++]<<D,D+=8}if(I!==(4294967295&x.total)){P.msg="incorrect length check",x.mode=30;break}D=I=0}x.mode=29;case 29:Z=1;break e;case 30:Z=-3;break e;case 31:return-4;case 32:default:return p}return P.next_out=Q,P.avail_out=K,P.next_in=G,P.avail_in=W,x.hold=I,x.bits=D,(x.wsize||oe!==P.avail_out&&x.mode<30&&(x.mode<27||O!==4))&&J(P,P.output,P.next_out,oe-P.avail_out)?(x.mode=31,-4):(ue-=P.avail_in,oe-=P.avail_out,P.total_in+=ue,P.total_out+=oe,x.total+=oe,x.wrap&&oe&&(P.adler=x.check=x.flags?a(x.check,ie,oe,P.next_out-oe):o(x.check,ie,oe,P.next_out-oe)),P.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(ue==0&&oe===0||O===4)&&Z===f&&(Z=-5),Z)},i.inflateEnd=function(P){if(!P||!P.state)return p;var O=P.state;return O.window&&(O.window=null),P.state=null,f},i.inflateGetHeader=function(P,O){var x;return P&&P.state?(2&(x=P.state).wrap)==0?p:((x.head=O).done=!1,f):p},i.inflateSetDictionary=function(P,O){var x,F=O.length;return P&&P.state?(x=P.state).wrap!==0&&x.mode!==11?p:x.mode===11&&o(1,O,F,0)!==x.check?-3:J(P,O,F,F)?(x.mode=31,-4):(x.havedict=1,f):p},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,i){var s=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,m,f,p,_,g,d,h){var v,b,E,w,L,T,H,S,R,J=h.bits,P=0,O=0,x=0,F=0,ie=0,G=0,Q=0,W=0,K=0,I=0,D=null,ue=0,oe=new s.Buf16(16),ne=new s.Buf16(16),Me=null,Ce=0;for(P=0;P<=15;P++)oe[P]=0;for(O=0;O<p;O++)oe[m[f+O]]++;for(ie=J,F=15;1<=F&&oe[F]===0;F--);if(F<ie&&(ie=F),F===0)return _[g++]=20971520,_[g++]=20971520,h.bits=1,0;for(x=1;x<F&&oe[x]===0;x++);for(ie<x&&(ie=x),P=W=1;P<=15;P++)if(W<<=1,(W-=oe[P])<0)return-1;if(0<W&&(u===0||F!==1))return-1;for(ne[1]=0,P=1;P<15;P++)ne[P+1]=ne[P]+oe[P];for(O=0;O<p;O++)m[f+O]!==0&&(d[ne[m[f+O]]++]=O);if(T=u===0?(D=Me=d,19):u===1?(D=o,ue-=257,Me=a,Ce-=257,256):(D=l,Me=c,-1),P=x,L=g,Q=O=I=0,E=-1,w=(K=1<<(G=ie))-1,u===1&&852<K||u===2&&592<K)return 1;for(;;){for(H=P-Q,R=d[O]<T?(S=0,d[O]):d[O]>T?(S=Me[Ce+d[O]],D[ue+d[O]]):(S=96,0),v=1<<P-Q,x=b=1<<G;_[L+(I>>Q)+(b-=v)]=H<<24|S<<16|R|0,b!==0;);for(v=1<<P-1;I&v;)v>>=1;if(v!==0?(I&=v-1,I+=v):I=0,O++,--oe[P]==0){if(P===F)break;P=m[f+d[O]]}if(ie<P&&(I&w)!==E){for(Q===0&&(Q=ie),L+=x,W=1<<(G=P-Q);G+Q<F&&!((W-=oe[G+Q])<=0);)G++,W<<=1;if(K+=1<<G,u===1&&852<K||u===2&&592<K)return 1;_[E=I&w]=ie<<24|G<<16|L-g|0}}return I!==0&&(_[L+I]=P-Q<<24|64<<16|0),h.bits=ie,0}},{"../utils/common":41}],51:[function(t,n,i){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,i){var s=t("../utils/common"),o=0,a=1;function l(C){for(var z=C.length;0<=--z;)C[z]=0}var c=0,u=29,m=256,f=m+1+u,p=30,_=19,g=2*f+1,d=15,h=16,v=7,b=256,E=16,w=17,L=18,T=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],H=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],S=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],R=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],J=new Array(2*(f+2));l(J);var P=new Array(2*p);l(P);var O=new Array(512);l(O);var x=new Array(256);l(x);var F=new Array(u);l(F);var ie,G,Q,W=new Array(p);function K(C,z,ae,pe,q){this.static_tree=C,this.extra_bits=z,this.extra_base=ae,this.elems=pe,this.max_length=q,this.has_stree=C&&C.length}function I(C,z){this.dyn_tree=C,this.max_code=0,this.stat_desc=z}function D(C){return C<256?O[C]:O[256+(C>>>7)]}function ue(C,z){C.pending_buf[C.pending++]=255&z,C.pending_buf[C.pending++]=z>>>8&255}function oe(C,z,ae){C.bi_valid>h-ae?(C.bi_buf|=z<<C.bi_valid&65535,ue(C,C.bi_buf),C.bi_buf=z>>h-C.bi_valid,C.bi_valid+=ae-h):(C.bi_buf|=z<<C.bi_valid&65535,C.bi_valid+=ae)}function ne(C,z,ae){oe(C,ae[2*z],ae[2*z+1])}function Me(C,z){for(var ae=0;ae|=1&C,C>>>=1,ae<<=1,0<--z;);return ae>>>1}function Ce(C,z,ae){var pe,q,A=new Array(d+1),M=0;for(pe=1;pe<=d;pe++)A[pe]=M=M+ae[pe-1]<<1;for(q=0;q<=z;q++){var k=C[2*q+1];k!==0&&(C[2*q]=Me(A[k]++,k))}}function ve(C){var z;for(z=0;z<f;z++)C.dyn_ltree[2*z]=0;for(z=0;z<p;z++)C.dyn_dtree[2*z]=0;for(z=0;z<_;z++)C.bl_tree[2*z]=0;C.dyn_ltree[2*b]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function Te(C){8<C.bi_valid?ue(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function Ve(C,z,ae,pe){var q=2*z,A=2*ae;return C[q]<C[A]||C[q]===C[A]&&pe[z]<=pe[ae]}function Re(C,z,ae){for(var pe=C.heap[ae],q=ae<<1;q<=C.heap_len&&(q<C.heap_len&&Ve(z,C.heap[q+1],C.heap[q],C.depth)&&q++,!Ve(z,pe,C.heap[q],C.depth));)C.heap[ae]=C.heap[q],ae=q,q<<=1;C.heap[ae]=pe}function Y(C,z,ae){var pe,q,A,M,k=0;if(C.last_lit!==0)for(;pe=C.pending_buf[C.d_buf+2*k]<<8|C.pending_buf[C.d_buf+2*k+1],q=C.pending_buf[C.l_buf+k],k++,pe===0?ne(C,q,z):(ne(C,(A=x[q])+m+1,z),(M=T[A])!==0&&oe(C,q-=F[A],M),ne(C,A=D(--pe),ae),(M=H[A])!==0&&oe(C,pe-=W[A],M)),k<C.last_lit;);ne(C,b,z)}function je(C,z){var ae,pe,q,A=z.dyn_tree,M=z.stat_desc.static_tree,k=z.stat_desc.has_stree,re=z.stat_desc.elems,de=-1;for(C.heap_len=0,C.heap_max=g,ae=0;ae<re;ae++)A[2*ae]!==0?(C.heap[++C.heap_len]=de=ae,C.depth[ae]=0):A[2*ae+1]=0;for(;C.heap_len<2;)A[2*(q=C.heap[++C.heap_len]=de<2?++de:0)]=1,C.depth[q]=0,C.opt_len--,k&&(C.static_len-=M[2*q+1]);for(z.max_code=de,ae=C.heap_len>>1;1<=ae;ae--)Re(C,A,ae);for(q=re;ae=C.heap[1],C.heap[1]=C.heap[C.heap_len--],Re(C,A,1),pe=C.heap[1],C.heap[--C.heap_max]=ae,C.heap[--C.heap_max]=pe,A[2*q]=A[2*ae]+A[2*pe],C.depth[q]=(C.depth[ae]>=C.depth[pe]?C.depth[ae]:C.depth[pe])+1,A[2*ae+1]=A[2*pe+1]=q,C.heap[1]=q++,Re(C,A,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(fe,we){var ge,ee,B,le,be,xe,ye=we.dyn_tree,Ie=we.max_code,ze=we.stat_desc.static_tree,V=we.stat_desc.has_stree,Se=we.stat_desc.extra_bits,se=we.stat_desc.extra_base,me=we.stat_desc.max_length,_e=0;for(le=0;le<=d;le++)fe.bl_count[le]=0;for(ye[2*fe.heap[fe.heap_max]+1]=0,ge=fe.heap_max+1;ge<g;ge++)me<(le=ye[2*ye[2*(ee=fe.heap[ge])+1]+1]+1)&&(le=me,_e++),ye[2*ee+1]=le,Ie<ee||(fe.bl_count[le]++,be=0,se<=ee&&(be=Se[ee-se]),xe=ye[2*ee],fe.opt_len+=xe*(le+be),V&&(fe.static_len+=xe*(ze[2*ee+1]+be)));if(_e!==0){do{for(le=me-1;fe.bl_count[le]===0;)le--;fe.bl_count[le]--,fe.bl_count[le+1]+=2,fe.bl_count[me]--,_e-=2}while(0<_e);for(le=me;le!==0;le--)for(ee=fe.bl_count[le];ee!==0;)Ie<(B=fe.heap[--ge])||(ye[2*B+1]!==le&&(fe.opt_len+=(le-ye[2*B+1])*ye[2*B],ye[2*B+1]=le),ee--)}})(C,z),Ce(A,de,C.bl_count)}function y(C,z,ae){var pe,q,A=-1,M=z[1],k=0,re=7,de=4;for(M===0&&(re=138,de=3),z[2*(ae+1)+1]=65535,pe=0;pe<=ae;pe++)q=M,M=z[2*(pe+1)+1],++k<re&&q===M||(k<de?C.bl_tree[2*q]+=k:q!==0?(q!==A&&C.bl_tree[2*q]++,C.bl_tree[2*E]++):k<=10?C.bl_tree[2*w]++:C.bl_tree[2*L]++,A=q,de=(k=0)===M?(re=138,3):q===M?(re=6,3):(re=7,4))}function Z(C,z,ae){var pe,q,A=-1,M=z[1],k=0,re=7,de=4;for(M===0&&(re=138,de=3),pe=0;pe<=ae;pe++)if(q=M,M=z[2*(pe+1)+1],!(++k<re&&q===M)){if(k<de)for(;ne(C,q,C.bl_tree),--k!=0;);else q!==0?(q!==A&&(ne(C,q,C.bl_tree),k--),ne(C,E,C.bl_tree),oe(C,k-3,2)):k<=10?(ne(C,w,C.bl_tree),oe(C,k-3,3)):(ne(C,L,C.bl_tree),oe(C,k-11,7));A=q,de=(k=0)===M?(re=138,3):q===M?(re=6,3):(re=7,4)}}l(W);var X=!1;function N(C,z,ae,pe){oe(C,(c<<1)+(pe?1:0),3),(function(q,A,M,k){Te(q),ue(q,M),ue(q,~M),s.arraySet(q.pending_buf,q.window,A,M,q.pending),q.pending+=M})(C,z,ae)}i._tr_init=function(C){X||((function(){var z,ae,pe,q,A,M=new Array(d+1);for(q=pe=0;q<u-1;q++)for(F[q]=pe,z=0;z<1<<T[q];z++)x[pe++]=q;for(x[pe-1]=q,q=A=0;q<16;q++)for(W[q]=A,z=0;z<1<<H[q];z++)O[A++]=q;for(A>>=7;q<p;q++)for(W[q]=A<<7,z=0;z<1<<H[q]-7;z++)O[256+A++]=q;for(ae=0;ae<=d;ae++)M[ae]=0;for(z=0;z<=143;)J[2*z+1]=8,z++,M[8]++;for(;z<=255;)J[2*z+1]=9,z++,M[9]++;for(;z<=279;)J[2*z+1]=7,z++,M[7]++;for(;z<=287;)J[2*z+1]=8,z++,M[8]++;for(Ce(J,f+1,M),z=0;z<p;z++)P[2*z+1]=5,P[2*z]=Me(z,5);ie=new K(J,T,m+1,f,d),G=new K(P,H,0,p,d),Q=new K(new Array(0),S,0,_,v)})(),X=!0),C.l_desc=new I(C.dyn_ltree,ie),C.d_desc=new I(C.dyn_dtree,G),C.bl_desc=new I(C.bl_tree,Q),C.bi_buf=0,C.bi_valid=0,ve(C)},i._tr_stored_block=N,i._tr_flush_block=function(C,z,ae,pe){var q,A,M=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(k){var re,de=4093624447;for(re=0;re<=31;re++,de>>>=1)if(1&de&&k.dyn_ltree[2*re]!==0)return o;if(k.dyn_ltree[18]!==0||k.dyn_ltree[20]!==0||k.dyn_ltree[26]!==0)return a;for(re=32;re<m;re++)if(k.dyn_ltree[2*re]!==0)return a;return o})(C)),je(C,C.l_desc),je(C,C.d_desc),M=(function(k){var re;for(y(k,k.dyn_ltree,k.l_desc.max_code),y(k,k.dyn_dtree,k.d_desc.max_code),je(k,k.bl_desc),re=_-1;3<=re&&k.bl_tree[2*R[re]+1]===0;re--);return k.opt_len+=3*(re+1)+5+5+4,re})(C),q=C.opt_len+3+7>>>3,(A=C.static_len+3+7>>>3)<=q&&(q=A)):q=A=ae+5,ae+4<=q&&z!==-1?N(C,z,ae,pe):C.strategy===4||A===q?(oe(C,2+(pe?1:0),3),Y(C,J,P)):(oe(C,4+(pe?1:0),3),(function(k,re,de,fe){var we;for(oe(k,re-257,5),oe(k,de-1,5),oe(k,fe-4,4),we=0;we<fe;we++)oe(k,k.bl_tree[2*R[we]+1],3);Z(k,k.dyn_ltree,re-1),Z(k,k.dyn_dtree,de-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,M+1),Y(C,C.dyn_ltree,C.dyn_dtree)),ve(C),pe&&Te(C)},i._tr_tally=function(C,z,ae){return C.pending_buf[C.d_buf+2*C.last_lit]=z>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&z,C.pending_buf[C.l_buf+C.last_lit]=255&ae,C.last_lit++,z===0?C.dyn_ltree[2*ae]++:(C.matches++,z--,C.dyn_ltree[2*(x[ae]+m+1)]++,C.dyn_dtree[2*D(z)]++),C.last_lit===C.lit_bufsize-1},i._tr_align=function(C){oe(C,2,3),ne(C,b,J),(function(z){z.bi_valid===16?(ue(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(t,n,i){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,i){(function(s){(function(o,a){if(!o.setImmediate){var l,c,u,m,f=1,p={},_=!1,g=o.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(o);d=d&&d.setTimeout?d:o,l={}.toString.call(o.process)==="[object process]"?function(E){process.nextTick(function(){v(E)})}:(function(){if(o.postMessage&&!o.importScripts){var E=!0,w=o.onmessage;return o.onmessage=function(){E=!1},o.postMessage("","*"),o.onmessage=w,E}})()?(m="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",b,!1):o.attachEvent("onmessage",b),function(E){o.postMessage(m+E,"*")}):o.MessageChannel?((u=new MessageChannel).port1.onmessage=function(E){v(E.data)},function(E){u.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(c=g.documentElement,function(E){var w=g.createElement("script");w.onreadystatechange=function(){v(E),w.onreadystatechange=null,c.removeChild(w),w=null},c.appendChild(w)}):function(E){setTimeout(v,0,E)},d.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var w=new Array(arguments.length-1),L=0;L<w.length;L++)w[L]=arguments[L+1];var T={callback:E,args:w};return p[f]=T,l(f),f++},d.clearImmediate=h}function h(E){delete p[E]}function v(E){if(_)setTimeout(v,0,E);else{var w=p[E];if(w){_=!0;try{(function(L){var T=L.callback,H=L.args;switch(H.length){case 0:T();break;case 1:T(H[0]);break;case 2:T(H[0],H[1]);break;case 3:T(H[0],H[1],H[2]);break;default:T.apply(a,H)}})(w)}finally{h(E),_=!1}}}}function b(E){E.source===o&&typeof E.data=="string"&&E.data.indexOf(m)===0&&v(+E.data.slice(m.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof mn<"u"?mn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Sr)),Sr.exports}var cl=ll();const or=ol(cl);async function co(r){if(!r)return!1;const e=r.name.toLowerCase();return e.endsWith(".zip")||e.endsWith(".mcpack")||e.endsWith(".mcaddon")}async function ho(r){const e=await r.arrayBuffer(),t=await or.loadAsync(e);let n=null,i="",s="";const o=t.file(/manifest\.json$/i)[0];if(o)try{const f=await o.async("string"),p=JSON.parse(f);p.header&&p.header.name&&(s=p.header.name)}catch(f){console.warn("Could not parse manifest.json from archive",f)}const a=t.file(/\.png$/i);if(a.length===0)throw new Error("ไม่พบไฟล์สกิน (.png) ภายในไฟล์ ZIP/แอดออนนี้");const l=[/textures\/entity\/.*skin.*\.png$/i,/textures\/entity\/.*steve.*\.png$/i,/textures\/entity\/.*alex.*\.png$/i,/.*skin.*\.png$/i,/textures\/items\/.*\.png$/i];let c=null;for(const f of l)if(c=a.find(p=>f.test(p.name)),c)break;c||(c=a[0]),i=c.name.split("/").pop().replace(/\.png$/i,"");const u=await c.async("blob");n=new Blob([u],{type:"image/png"});const m=await new Promise((f,p)=>{const _=new Image,g=URL.createObjectURL(n);_.onload=()=>{URL.revokeObjectURL(g),f(_)},_.onerror=()=>{URL.revokeObjectURL(g),p(new Error("ไฟล์ภาพภายใน ZIP ไม่ถูกต้อง"))},_.src=g});return{blob:n,image:m,fileName:i,addonName:s||i}}class hl{constructor(){this.ctx=null,this.muted=localStorage.getItem("mc_sfx_muted")==="true"}getAudioContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}isMuted(){return this.muted}toggleMute(){return this.muted=!this.muted,localStorage.setItem("mc_sfx_muted",this.muted?"true":"false"),this.muted}playClick(){if(this.muted)return;const e=this.getAudioContext();if(e)try{const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="triangle",n.frequency.setValueAtTime(1400,t),n.frequency.exponentialRampToValueAtTime(320,t+.045),i.gain.setValueAtTime(.22,t),i.gain.exponentialRampToValueAtTime(.001,t+.045),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.045)}catch{}}playPop(){if(this.muted)return;const e=this.getAudioContext();if(e)try{const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(500,t),n.frequency.exponentialRampToValueAtTime(1200,t+.07),i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.08)}catch{}}playLevelUp(){if(this.muted)return;const e=this.getAudioContext();if(e)try{const t=e.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,s)=>{const o=e.createOscillator(),a=e.createGain(),l=t+s*.08;o.type="triangle",o.frequency.setValueAtTime(i,l),a.gain.setValueAtTime(.2,l),a.gain.exponentialRampToValueAtTime(.001,l+.35),o.connect(a),a.connect(e.destination),o.start(l),o.stop(l+.36)})}catch{}}}const St=new hl;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ms="156",Nn={ROTATE:0,DOLLY:1,PAN:2},On={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ul=0,Ps=1,dl=2,uo=1,fl=2,Qt=3,Wt=0,Et=1,Nt=2,sn=0,si=1,Ls=2,Is=3,Ds=4,pl=5,ii=100,ml=101,gl=102,Us=103,Ns=104,_l=200,vl=201,xl=202,yl=203,fo=204,po=205,bl=206,Sl=207,El=208,Ml=209,wl=210,Tl=0,Al=1,Rl=2,rs=3,Cl=4,Pl=5,Ll=6,Il=7,mo=0,Dl=1,Ul=2,_n=0,Nl=1,Ol=2,Fl=3,kl=4,Bl=5,go=300,oi=301,li=302,lr=303,ss=304,dr=306,as=1e3,Bt=1001,os=1002,et=1003,Os=1004,Er=1005,Dt=1006,zl=1007,wi=1008,vn=1009,Hl=1010,Gl=1011,gs=1012,_o=1013,gn=1014,nn=1015,ci=1016,vo=1017,xo=1018,Cn=1020,Vl=1021,zt=1023,Wl=1024,Xl=1025,Pn=1026,hi=1027,jl=1028,yo=1029,ql=1030,bo=1031,So=1033,Mr=33776,wr=33777,Tr=33778,Ar=33779,Fs=35840,ks=35841,Bs=35842,zs=35843,Yl=36196,Hs=37492,Gs=37496,Vs=37808,Ws=37809,Xs=37810,js=37811,qs=37812,Ys=37813,Zs=37814,$s=37815,Ks=37816,Js=37817,Qs=37818,ea=37819,ta=37820,na=37821,Rr=36492,ia=36494,ra=36495,Zl=36283,sa=36284,aa=36285,oa=36286,Eo=3e3,Ln=3001,$l=3200,Kl=3201,Mo=0,Jl=1,In="",Je="srgb",Xt="srgb-linear",fr="display-p3",Cr=7680,Ql=519,ec=512,tc=513,nc=514,ic=515,rc=516,sc=517,ac=518,oc=519,ls=35044,la="300 es",cs=1035,rn=2e3,cr=2001;class Un{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ir=Math.PI/180,hs=180/Math.PI;function xn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[r&255]+ft[r>>8&255]+ft[r>>16&255]+ft[r>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function bt(r,e,t){return Math.max(e,Math.min(t,r))}function lc(r,e){return(r%e+e)%e}function Pr(r,e,t){return(1-t)*r+t*e}function ca(r){return(r&r-1)===0&&r!==0}function us(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ye(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const cc={DEG2RAD:ir};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],m=n[7],f=n[2],p=n[5],_=n[8],g=i[0],d=i[3],h=i[6],v=i[1],b=i[4],E=i[7],w=i[2],L=i[5],T=i[8];return s[0]=o*g+a*v+l*w,s[3]=o*d+a*b+l*L,s[6]=o*h+a*E+l*T,s[1]=c*g+u*v+m*w,s[4]=c*d+u*b+m*L,s[7]=c*h+u*E+m*T,s[2]=f*g+p*v+_*w,s[5]=f*d+p*b+_*L,s[8]=f*h+p*E+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],m=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=t*m+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=m*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Be;function wo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hc(){const r=hr("canvas");return r.style.display="block",r}const ha={};function Mi(r){r in ha||(ha[r]=!0,console.warn(r))}function ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const uc=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),dc=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function fc(r){return r.convertSRGBToLinear().applyMatrix3(dc)}function pc(r){return r.applyMatrix3(uc).convertLinearToSRGB()}const mc={[Xt]:r=>r,[Je]:r=>r.convertSRGBToLinear(),[fr]:fc},gc={[Xt]:r=>r,[Je]:r=>r.convertLinearToSRGB(),[fr]:pc},It={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Xt},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=mc[e],i=gc[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Fn;class To{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=hr("canvas")),Fn.width=e.width,Fn.height=e.height;const n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _c=0;class Ao{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Dr(i[o].image)):s.push(Dr(i[o]))}else s=Dr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Dr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?To.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vc=0;class mt extends Un{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Bt,i=Bt,s=Dt,o=wi,a=zt,l=vn,c=mt.DEFAULT_ANISOTROPY,u=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=xn(),this.name="",this.source=new Ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ln?Je:In),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Je?Ln:Eo}set encoding(e){Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ln?Je:In}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=go;mt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],m=l[8],f=l[1],p=l[5],_=l[9],g=l[2],d=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(m-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+f)<.1&&Math.abs(m+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,w=(h+1)/2,L=(u+f)/4,T=(m+g)/4,H=(_+d)/4;return b>E&&b>w?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=L/n,s=T/n):E>w?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=L/i,s=H/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=H/s),this.set(n,i,s,t),this}let v=Math.sqrt((d-_)*(d-_)+(m-g)*(m-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(m-g)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xc extends Un{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ln?Je:In),this.texture=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ro extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yc extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=et,this.minFilter=et,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],m=n[i+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(m!==g||l!==f||c!==p||u!==_){let d=1-a;const h=l*f+c*p+u*_+m*g,v=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const w=Math.sqrt(b),L=Math.atan2(w,h*v);d=Math.sin(d*L)/w,a=Math.sin(a*L)/w}const E=a*v;if(l=l*d+f*E,c=c*d+p*E,u=u*d+_*E,m=m*d+g*E,d===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=w,c*=w,u*=w,m*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],m=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*m+l*p-c*f,e[t+1]=l*_+u*f+c*m-a*p,e[t+2]=c*_+u*p+a*f-l*m,e[t+3]=u*_-a*m-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),m=a(s/2),f=l(n/2),p=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*m+c*p*_,this._y=c*p*m-f*u*_,this._z=c*u*_+f*p*m,this._w=c*u*m-f*p*_;break;case"YXZ":this._x=f*u*m+c*p*_,this._y=c*p*m-f*u*_,this._z=c*u*_-f*p*m,this._w=c*u*m+f*p*_;break;case"ZXY":this._x=f*u*m-c*p*_,this._y=c*p*m+f*u*_,this._z=c*u*_+f*p*m,this._w=c*u*m-f*p*_;break;case"ZYX":this._x=f*u*m-c*p*_,this._y=c*p*m+f*u*_,this._z=c*u*_-f*p*m,this._w=c*u*m+f*p*_;break;case"YZX":this._x=f*u*m+c*p*_,this._y=c*p*m+f*u*_,this._z=c*u*_-f*p*m,this._w=c*u*m-f*p*_;break;case"XZY":this._x=f*u*m-c*p*_,this._y=c*p*m-f*u*_,this._z=c*u*_+f*p*m,this._w=c*u*m+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],m=t[10],f=n+a+m;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>m){const p=2*Math.sqrt(1+n-a-m);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>m){const p=2*Math.sqrt(1+a-n-m);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+m-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),m=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*m+this._w*f,this._x=n*m+this._x*f,this._y=i*m+this._y*f,this._z=s*m+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,m=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+u*-a-m*-o,this.y=u*l+f*-o+m*-s-c*-a,this.z=m*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ur.copy(this).projectOnVector(e),this.sub(Ur)}reflect(e){return this.sub(Ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new j,ua=new Dn;class Ai{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),kn.copy(e.boundingBox),kn.applyMatrix4(e.matrixWorld),this.union(kn);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Yt.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Yt)}else i.boundingBox===null&&i.computeBoundingBox(),kn.copy(i.boundingBox),kn.applyMatrix4(e.matrixWorld),this.union(kn)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mi),Li.subVectors(this.max,mi),Bn.subVectors(e.a,mi),zn.subVectors(e.b,mi),Hn.subVectors(e.c,mi),hn.subVectors(zn,Bn),un.subVectors(Hn,zn),Sn.subVectors(Bn,Hn);let t=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Sn.z,Sn.y,hn.z,0,-hn.x,un.z,0,-un.x,Sn.z,0,-Sn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Sn.y,Sn.x,0];return!Nr(t,Bn,zn,Hn,Li)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,Bn,zn,Hn,Li))?!1:(Ii.crossVectors(hn,un),t=[Ii.x,Ii.y,Ii.z],Nr(t,Bn,zn,Hn,Li))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qt=[new j,new j,new j,new j,new j,new j,new j,new j],Yt=new j,kn=new Ai,Bn=new j,zn=new j,Hn=new j,hn=new j,un=new j,Sn=new j,mi=new j,Li=new j,Ii=new j,En=new j;function Nr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){En.fromArray(r,s);const a=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),l=e.dot(En),c=t.dot(En),u=n.dot(En);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bc=new Ai,gi=new j,Or=new j;class _s{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gi.subVectors(e,this.center);const t=gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gi.copy(e.center).add(Or)),this.expandByPoint(gi.copy(e.center).sub(Or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zt=new j,Fr=new j,Di=new j,dn=new j,kr=new j,Ui=new j,Br=new j;class Co{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zt.copy(this.origin).addScaledVector(this.direction,t),Zt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fr.copy(e).add(t).multiplyScalar(.5),Di.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Fr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Di),a=dn.dot(this.direction),l=-dn.dot(Di),c=dn.lengthSq(),u=Math.abs(1-o*o);let m,f,p,_;if(u>0)if(m=o*l-a,f=o*a-l,_=s*u,m>=0)if(f>=-_)if(f<=_){const g=1/u;m*=g,f*=g,p=m*(m+o*f+2*a)+f*(o*m+f+2*l)+c}else f=s,m=Math.max(0,-(o*f+a)),p=-m*m+f*(f+2*l)+c;else f=-s,m=Math.max(0,-(o*f+a)),p=-m*m+f*(f+2*l)+c;else f<=-_?(m=Math.max(0,-(-o*s+a)),f=m>0?-s:Math.min(Math.max(-s,-l),s),p=-m*m+f*(f+2*l)+c):f<=_?(m=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(m=Math.max(0,-(o*s+a)),f=m>0?s:Math.min(Math.max(-s,-l),s),p=-m*m+f*(f+2*l)+c);else f=o>0?-s:s,m=Math.max(0,-(o*f+a)),p=-m*m+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),i&&i.copy(Fr).addScaledVector(Di,f),p}intersectSphere(e,t){Zt.subVectors(e.center,this.origin);const n=Zt.dot(this.direction),i=Zt.dot(Zt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),m>=0?(a=(e.min.z-f.z)*m,l=(e.max.z-f.z)*m):(a=(e.max.z-f.z)*m,l=(e.min.z-f.z)*m),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zt)!==null}intersectTriangle(e,t,n,i,s){kr.subVectors(t,e),Ui.subVectors(n,e),Br.crossVectors(kr,Ui);let o=this.direction.dot(Br),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,e);const l=a*this.direction.dot(Ui.crossVectors(dn,Ui));if(l<0)return null;const c=a*this.direction.dot(kr.cross(dn));if(c<0||l+c>o)return null;const u=-a*dn.dot(Br);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,o,a,l,c,u,m,f,p,_,g,d){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,m,f,p,_,g,d)}set(e,t,n,i,s,o,a,l,c,u,m,f,p,_,g,d){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=i,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=m,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gn.setFromMatrixColumn(e,0).length(),s=1/Gn.setFromMatrixColumn(e,1).length(),o=1/Gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*m,_=a*u,g=a*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=p+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*m,_=c*u,g=c*m;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*m,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*m,_=c*u,g=c*m;t[0]=f-g*a,t[4]=-o*m,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*m,_=a*u,g=a*m;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+g,t[1]=l*m,t[5]=g*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*m,t[8]=_*m+p,t[1]=m,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*m+_,t[10]=f-g*m}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=f*m+g,t[5]=o*u,t[9]=p*m-_,t[2]=_*m-p,t[6]=a*u,t[10]=g*m+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sc,e,Ec)}lookAt(e,t,n){const i=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),fn.crossVectors(n,Tt),fn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),fn.crossVectors(n,Tt)),fn.normalize(),Ni.crossVectors(Tt,fn),i[0]=fn.x,i[4]=Ni.x,i[8]=Tt.x,i[1]=fn.y,i[5]=Ni.y,i[9]=Tt.y,i[2]=fn.z,i[6]=Ni.z,i[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],m=n[5],f=n[9],p=n[13],_=n[2],g=n[6],d=n[10],h=n[14],v=n[3],b=n[7],E=n[11],w=n[15],L=i[0],T=i[4],H=i[8],S=i[12],R=i[1],J=i[5],P=i[9],O=i[13],x=i[2],F=i[6],ie=i[10],G=i[14],Q=i[3],W=i[7],K=i[11],I=i[15];return s[0]=o*L+a*R+l*x+c*Q,s[4]=o*T+a*J+l*F+c*W,s[8]=o*H+a*P+l*ie+c*K,s[12]=o*S+a*O+l*G+c*I,s[1]=u*L+m*R+f*x+p*Q,s[5]=u*T+m*J+f*F+p*W,s[9]=u*H+m*P+f*ie+p*K,s[13]=u*S+m*O+f*G+p*I,s[2]=_*L+g*R+d*x+h*Q,s[6]=_*T+g*J+d*F+h*W,s[10]=_*H+g*P+d*ie+h*K,s[14]=_*S+g*O+d*G+h*I,s[3]=v*L+b*R+E*x+w*Q,s[7]=v*T+b*J+E*F+w*W,s[11]=v*H+b*P+E*ie+w*K,s[15]=v*S+b*O+E*G+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],m=e[6],f=e[10],p=e[14],_=e[3],g=e[7],d=e[11],h=e[15];return _*(+s*l*m-i*c*m-s*a*f+n*c*f+i*a*p-n*l*p)+g*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*u-s*l*u)+d*(+t*c*m-t*a*p-s*o*m+n*o*p+s*a*u-n*c*u)+h*(-i*a*u-t*l*m+t*a*f+i*o*m-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],m=e[9],f=e[10],p=e[11],_=e[12],g=e[13],d=e[14],h=e[15],v=m*d*c-g*f*c+g*l*p-a*d*p-m*l*h+a*f*h,b=_*f*c-u*d*c-_*l*p+o*d*p+u*l*h-o*f*h,E=u*g*c-_*m*c+_*a*p-o*g*p-u*a*h+o*m*h,w=_*m*l-u*g*l-_*a*f+o*g*f+u*a*d-o*m*d,L=t*v+n*b+i*E+s*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/L;return e[0]=v*T,e[1]=(g*f*s-m*d*s-g*i*p+n*d*p+m*i*h-n*f*h)*T,e[2]=(a*d*s-g*l*s+g*i*c-n*d*c-a*i*h+n*l*h)*T,e[3]=(m*l*s-a*f*s-m*i*c+n*f*c+a*i*p-n*l*p)*T,e[4]=b*T,e[5]=(u*d*s-_*f*s+_*i*p-t*d*p-u*i*h+t*f*h)*T,e[6]=(_*l*s-o*d*s-_*i*c+t*d*c+o*i*h-t*l*h)*T,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*p+t*l*p)*T,e[8]=E*T,e[9]=(_*m*s-u*g*s-_*n*p+t*g*p+u*n*h-t*m*h)*T,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*h+t*a*h)*T,e[11]=(u*a*s-o*m*s-u*n*c+t*m*c+o*n*p-t*a*p)*T,e[12]=w*T,e[13]=(u*g*i-_*m*i+_*n*f-t*g*f-u*n*d+t*m*d)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*d-t*a*d)*T,e[15]=(o*m*i-u*a*i+u*n*l-t*m*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,m=a+a,f=s*c,p=s*u,_=s*m,g=o*u,d=o*m,h=a*m,v=l*c,b=l*u,E=l*m,w=n.x,L=n.y,T=n.z;return i[0]=(1-(g+h))*w,i[1]=(p+E)*w,i[2]=(_-b)*w,i[3]=0,i[4]=(p-E)*L,i[5]=(1-(f+h))*L,i[6]=(d+v)*L,i[7]=0,i[8]=(_+b)*T,i[9]=(d-v)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gn.set(i[0],i[1],i[2]).length();const o=Gn.set(i[4],i[5],i[6]).length(),a=Gn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ot.copy(this);const c=1/s,u=1/o,m=1/a;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=u,Ot.elements[5]*=u,Ot.elements[6]*=u,Ot.elements[8]*=m,Ot.elements[9]*=m,Ot.elements[10]*=m,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=rn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),m=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(a===rn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===cr)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=rn){const l=this.elements,c=1/(t-e),u=1/(n-i),m=1/(o-s),f=(t+e)*c,p=(n+i)*u;let _,g;if(a===rn)_=(o+s)*m,g=-2*m;else if(a===cr)_=s*m,g=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gn=new j,Ot=new rt,Sc=new j(0,0,0),Ec=new j(1,1,1),fn=new j,Ni=new j,Tt=new j,da=new rt,fa=new Dn;class pr{constructor(e=0,t=0,n=0,i=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],m=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return da.makeRotationFromQuaternion(e),this.setFromRotationMatrix(da,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fa.setFromEuler(this),this.setFromQuaternion(fa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mc=0;const pa=new j,Vn=new Dn,$t=new rt,Oi=new j,_i=new j,wc=new j,Tc=new Dn,ma=new j(1,0,0),ga=new j(0,1,0),_a=new j(0,0,1),Ac={type:"added"},Rc={type:"removed"};class gt extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new j,t=new pr,n=new Dn,i=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new Be}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(ma,e)}rotateY(e){return this.rotateOnAxis(ga,e)}rotateZ(e){return this.rotateOnAxis(_a,e)}translateOnAxis(e,t){return pa.copy(e).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ma,e)}translateY(e){return this.translateOnAxis(ga,e)}translateZ(e){return this.translateOnAxis(_a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(_i,Oi,this.up):$t.lookAt(Oi,_i,this.up),this.quaternion.setFromRotationMatrix($t),i&&($t.extractRotation(i.matrixWorld),Vn.setFromRotationMatrix($t),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ac)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,e,wc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_i,Tc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const m=l[c];s(e.shapes,m)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),m=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new j(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ft=new j,Kt=new j,zr=new j,Jt=new j,Wn=new j,Xn=new j,va=new j,Hr=new j,Gr=new j,Vr=new j;let Fi=!1;class Ut{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ft.subVectors(e,t),i.cross(Ft);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ft.subVectors(i,t),Kt.subVectors(n,t),zr.subVectors(e,t);const o=Ft.dot(Ft),a=Ft.dot(Kt),l=Ft.dot(zr),c=Kt.dot(Kt),u=Kt.dot(zr),m=o*c-a*a;if(m===0)return s.set(-2,-1,-1);const f=1/m,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jt),Jt.x>=0&&Jt.y>=0&&Jt.x+Jt.y<=1}static getUV(e,t,n,i,s,o,a,l){return Fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fi=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Jt),l.setScalar(0),l.addScaledVector(s,Jt.x),l.addScaledVector(o,Jt.y),l.addScaledVector(a,Jt.z),l}static isFrontFacing(e,t,n,i){return Ft.subVectors(n,t),Kt.subVectors(e,t),Ft.cross(Kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ft.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Ft.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ut.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ut.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fi=!0),Ut.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return Ut.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ut.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ut.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Wn.subVectors(i,n),Xn.subVectors(s,n),Hr.subVectors(e,n);const l=Wn.dot(Hr),c=Xn.dot(Hr);if(l<=0&&c<=0)return t.copy(n);Gr.subVectors(e,i);const u=Wn.dot(Gr),m=Xn.dot(Gr);if(u>=0&&m<=u)return t.copy(i);const f=l*m-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Wn,o);Vr.subVectors(e,s);const p=Wn.dot(Vr),_=Xn.dot(Vr);if(_>=0&&p<=_)return t.copy(s);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Xn,a);const d=u*_-p*m;if(d<=0&&m-u>=0&&p-_>=0)return va.subVectors(s,i),a=(m-u)/(m-u+(p-_)),t.copy(i).addScaledVector(va,a);const h=1/(d+g+f);return o=g*h,a=f*h,t.copy(n).addScaledVector(Wn,o).addScaledVector(Xn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cc=0;class di extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=si,this.side=Wt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Wt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={h:0,s:0,l:0},ki={h:0,s:0,l:0};function Wr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=It.workingColorSpace){if(e=lc(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Wr(o,s,e+1/3),this.g=Wr(o,s,e),this.b=Wr(o,s,e-1/3)}return It.toWorkingColorSpace(this,i),this}setStyle(e,t=Je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){const n=Lo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return It.fromWorkingColorSpace(pt.copy(this),e),Math.round(bt(pt.r*255,0,255))*65536+Math.round(bt(pt.g*255,0,255))*256+Math.round(bt(pt.b*255,0,255))}getHexString(e=Je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,i=pt.g,s=pt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const m=o-a;switch(c=u<=.5?m/(o+a):m/(2-o-a),o){case n:l=(i-s)/m+(i<s?6:0);break;case i:l=(s-n)/m+2;break;case s:l=(n-i)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Je){It.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,i=pt.b;return e!==Je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=n,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(ki);const n=Pr(kt.h,ki.h,t),i=Pr(kt.s,ki.s,t),s=Pr(kt.l,ki.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Xe;Xe.NAMES=Lo;class Io extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new j,Bi=new Pe;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ls,this.updateRange={offset:0,count:-1},this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bi.fromBufferAttribute(this,t),Bi.applyMatrix3(e),this.setXY(t,Bi.x,Bi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ls&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Do extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uo extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class an extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pc=0;const Pt=new rt,Xr=new gt,jn=new j,At=new Ai,vi=new Ai,ut=new j;class cn extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wo(e)?Uo:Do)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pt.makeRotationFromQuaternion(e),this.applyMatrix4(Pt),this}rotateX(e){return Pt.makeRotationX(e),this.applyMatrix4(Pt),this}rotateY(e){return Pt.makeRotationY(e),this.applyMatrix4(Pt),this}rotateZ(e){return Pt.makeRotationZ(e),this.applyMatrix4(Pt),this}translate(e,t,n){return Pt.makeTranslation(e,t,n),this.applyMatrix4(Pt),this}scale(e,t,n){return Pt.makeScale(e,t,n),this.applyMatrix4(Pt),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new an(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vi.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(At.min,vi.min),At.expandByPoint(ut),ut.addVectors(At.max,vi.max),At.expandByPoint(ut)):(At.expandByPoint(vi.min),At.expandByPoint(vi.max))}At.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ut.fromBufferAttribute(a,c),l&&(jn.fromBufferAttribute(e,c),ut.add(jn)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new j,u[R]=new j;const m=new j,f=new j,p=new j,_=new Pe,g=new Pe,d=new Pe,h=new j,v=new j;function b(R,J,P){m.fromArray(i,R*3),f.fromArray(i,J*3),p.fromArray(i,P*3),_.fromArray(o,R*2),g.fromArray(o,J*2),d.fromArray(o,P*2),f.sub(m),p.sub(m),g.sub(_),d.sub(_);const O=1/(g.x*d.y-d.x*g.y);isFinite(O)&&(h.copy(f).multiplyScalar(d.y).addScaledVector(p,-g.y).multiplyScalar(O),v.copy(p).multiplyScalar(g.x).addScaledVector(f,-d.x).multiplyScalar(O),c[R].add(h),c[J].add(h),c[P].add(h),u[R].add(v),u[J].add(v),u[P].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let R=0,J=E.length;R<J;++R){const P=E[R],O=P.start,x=P.count;for(let F=O,ie=O+x;F<ie;F+=3)b(n[F+0],n[F+1],n[F+2])}const w=new j,L=new j,T=new j,H=new j;function S(R){T.fromArray(s,R*3),H.copy(T);const J=c[R];w.copy(J),w.sub(T.multiplyScalar(T.dot(J))).normalize(),L.crossVectors(H,J);const O=L.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=O}for(let R=0,J=E.length;R<J;++R){const P=E[R],O=P.start,x=P.count;for(let F=O,ie=O+x;F<ie;F+=3)S(n[F+0]),S(n[F+1]),S(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,m=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,d),u.subVectors(o,s),m.subVectors(i,s),u.cross(m),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),m.subVectors(i,s),u.cross(m),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,m=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new Ht(f,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,m=c.length;u<m;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let m=0,f=c.length;m<f;m++){const p=c[m];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],m=s[c];for(let f=0,p=m.length;f<p;f++)u.push(m[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const m=o[c];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new rt,Mn=new Co,zi=new _s,ya=new j,qn=new j,Yn=new j,Zn=new j,jr=new j,Hi=new j,Gi=new Pe,Vi=new Pe,Wi=new Pe,ba=new j,Sa=new j,Ea=new j,Xi=new j,ji=new j;class $e extends gt{constructor(e=new cn,t=new Io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Hi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],m=s[l];u!==0&&(jr.fromBufferAttribute(m,e),o?Hi.addScaledVector(jr,u):Hi.addScaledVector(jr.sub(t),u))}t.add(Hi)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(s),Mn.copy(e.ray).recast(e.near),!(zi.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(zi,ya)===null||Mn.origin.distanceToSquared(ya)>(e.far-e.near)**2))&&(xa.copy(s).invert(),Mn.copy(e.ray).applyMatrix4(xa),!(n.boundingBox!==null&&Mn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,m=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const d=f[_],h=o[d.materialIndex],v=Math.max(d.start,p.start),b=Math.min(a.count,Math.min(d.start+d.count,p.start+p.count));for(let E=v,w=b;E<w;E+=3){const L=a.getX(E),T=a.getX(E+1),H=a.getX(E+2);i=qi(this,h,e,n,c,u,m,L,T,H),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let d=_,h=g;d<h;d+=3){const v=a.getX(d),b=a.getX(d+1),E=a.getX(d+2);i=qi(this,o,e,n,c,u,m,v,b,E),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const d=f[_],h=o[d.materialIndex],v=Math.max(d.start,p.start),b=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let E=v,w=b;E<w;E+=3){const L=E,T=E+1,H=E+2;i=qi(this,h,e,n,c,u,m,L,T,H),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let d=_,h=g;d<h;d+=3){const v=d,b=d+1,E=d+2;i=qi(this,o,e,n,c,u,m,v,b,E),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}}}function Lc(r,e,t,n,i,s,o,a){let l;if(e.side===Et?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Wt,a),l===null)return null;ji.copy(a),ji.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ji);return c<t.near||c>t.far?null:{distance:c,point:ji.clone(),object:r}}function qi(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,qn),r.getVertexPosition(l,Yn),r.getVertexPosition(c,Zn);const u=Lc(r,e,t,n,qn,Yn,Zn,Xi);if(u){i&&(Gi.fromBufferAttribute(i,a),Vi.fromBufferAttribute(i,l),Wi.fromBufferAttribute(i,c),u.uv=Ut.getInterpolation(Xi,qn,Yn,Zn,Gi,Vi,Wi,new Pe)),s&&(Gi.fromBufferAttribute(s,a),Vi.fromBufferAttribute(s,l),Wi.fromBufferAttribute(s,c),u.uv1=Ut.getInterpolation(Xi,qn,Yn,Zn,Gi,Vi,Wi,new Pe),u.uv2=u.uv1),o&&(ba.fromBufferAttribute(o,a),Sa.fromBufferAttribute(o,l),Ea.fromBufferAttribute(o,c),u.normal=Ut.getInterpolation(Xi,qn,Yn,Zn,ba,Sa,Ea,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new j,materialIndex:0};Ut.getNormal(qn,Yn,Zn,m.normal),u.face=m}return u}class it extends cn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],m=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(u,3)),this.setAttribute("uv",new an(m,2));function _(g,d,h,v,b,E,w,L,T,H,S){const R=E/T,J=w/H,P=E/2,O=w/2,x=L/2,F=T+1,ie=H+1;let G=0,Q=0;const W=new j;for(let K=0;K<ie;K++){const I=K*J-O;for(let D=0;D<F;D++){const ue=D*R-P;W[g]=ue*v,W[d]=I*b,W[h]=x,c.push(W.x,W.y,W.z),W[g]=0,W[d]=0,W[h]=L>0?1:-1,u.push(W.x,W.y,W.z),m.push(D/T),m.push(1-K/H),G+=1}}for(let K=0;K<H;K++)for(let I=0;I<T;I++){const D=f+I+F*K,ue=f+I+F*(K+1),oe=f+(I+1)+F*(K+1),ne=f+(I+1)+F*K;l.push(D,ue,ne),l.push(ue,oe,ne),Q+=6}a.addGroup(p,Q,S),p+=Q,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ui(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yt(r){const e={};for(let t=0;t<r.length;t++){const n=ui(r[t]);for(const i in n)e[i]=n[i]}return e}function Ic(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function No(r){return r.getRenderTarget()===null?r.outputColorSpace:Xt}const Oo={clone:ui,merge:yt};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=Ic(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fo extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends Fo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,Kn=1;class Nc extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Rt($n,Kn,e,t);i.layers=this.layers,this.add(i);const s=new Rt($n,Kn,e,t);s.layers=this.layers,this.add(s);const o=new Rt($n,Kn,e,t);o.layers=this.layers,this.add(o);const a=new Rt($n,Kn,e,t);a.layers=this.layers,this.add(a);const l=new Rt($n,Kn,e,t);l.layers=this.layers,this.add(l);const c=new Rt($n,Kn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),m=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ko extends mt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oi,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oc extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ln?Je:In),this.texture=new ko(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new it(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:sn});s.uniforms.tEquirect.value=t;const o=new $e(i,s),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=Dt),new Nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const qr=new j,Fc=new j,kc=new Be;class pn{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qr.subVectors(n,t).cross(Fc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kc.getNormalMatrix(e),i=this.coplanarPoint(qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new _s,Yi=new j;class vs{constructor(e=new pn,t=new pn,n=new pn,i=new pn,s=new pn,o=new pn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],m=i[6],f=i[7],p=i[8],_=i[9],g=i[10],d=i[11],h=i[12],v=i[13],b=i[14],E=i[15];if(n[0].setComponents(l-s,f-c,d-p,E-h).normalize(),n[1].setComponents(l+s,f+c,d+p,E+h).normalize(),n[2].setComponents(l+o,f+u,d+_,E+v).normalize(),n[3].setComponents(l-o,f-u,d-_,E-v).normalize(),n[4].setComponents(l-a,f-m,d-g,E-b).normalize(),t===rn)n[5].setComponents(l+a,f+m,d+g,E+b).normalize();else if(t===cr)n[5].setComponents(a,m,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yi.x=i.normal.x>0?e.max.x:e.min.x,Yi.y=i.normal.y>0?e.max.y:e.min.y,Yi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bo(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const m=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,m,f),c.onUploadCallback();let _;if(m instanceof Float32Array)_=r.FLOAT;else if(m instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)_=r.SHORT;else if(m instanceof Uint32Array)_=r.UNSIGNED_INT;else if(m instanceof Int32Array)_=r.INT;else if(m instanceof Int8Array)_=r.BYTE;else if(m instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:p,type:_,bytesPerElement:m.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,m){const f=u.array,p=u.updateRange;r.bindBuffer(m,c),p.count===-1?r.bufferSubData(m,0,f):(t?r.bufferSubData(m,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(m,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const m=n.get(c);m===void 0?n.set(c,i(c,u)):m.version<c.version&&(s(m.buffer,c,u),m.version=c.version)}return{get:o,remove:a,update:l}}class xs extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,m=e/a,f=t/l,p=[],_=[],g=[],d=[];for(let h=0;h<u;h++){const v=h*f-o;for(let b=0;b<c;b++){const E=b*m-s;_.push(E,-v,0),g.push(0,0,1),d.push(b/a),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const b=v+c*h,E=v+c*(h+1),w=v+1+c*(h+1),L=v+1+c*h;p.push(b,E,L),p.push(E,w,L)}this.setIndex(p),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(g,3)),this.setAttribute("uv",new an(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var zc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$c=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Kc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ch=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Th=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ih=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Fh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Qh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,au=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,du=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_u=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Su=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ru=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ku=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ju=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ku=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ed=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,id=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ad=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,od=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ld=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ud=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,md=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:zc,alphahash_pars_fragment:Hc,alphamap_fragment:Gc,alphamap_pars_fragment:Vc,alphatest_fragment:Wc,alphatest_pars_fragment:Xc,aomap_fragment:jc,aomap_pars_fragment:qc,begin_vertex:Yc,beginnormal_vertex:Zc,bsdfs:$c,iridescence_fragment:Kc,bumpmap_pars_fragment:Jc,clipping_planes_fragment:Qc,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:th,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:rh,color_pars_vertex:sh,color_vertex:ah,common:oh,cube_uv_reflection_fragment:lh,defaultnormal_vertex:ch,displacementmap_pars_vertex:hh,displacementmap_vertex:uh,emissivemap_fragment:dh,emissivemap_pars_fragment:fh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:gh,envmap_common_pars_fragment:_h,envmap_pars_fragment:vh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Lh,envmap_vertex:yh,fog_vertex:bh,fog_pars_vertex:Sh,fog_fragment:Eh,fog_pars_fragment:Mh,gradientmap_pars_fragment:wh,lightmap_fragment:Th,lightmap_pars_fragment:Ah,lights_lambert_fragment:Rh,lights_lambert_pars_fragment:Ch,lights_pars_begin:Ph,lights_toon_fragment:Ih,lights_toon_pars_fragment:Dh,lights_phong_fragment:Uh,lights_phong_pars_fragment:Nh,lights_physical_fragment:Oh,lights_physical_pars_fragment:Fh,lights_fragment_begin:kh,lights_fragment_maps:Bh,lights_fragment_end:zh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:Gh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:jh,map_particle_fragment:qh,map_particle_pars_fragment:Yh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:$h,morphcolor_vertex:Kh,morphnormal_vertex:Jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:eu,normal_fragment_begin:tu,normal_fragment_maps:nu,normal_pars_fragment:iu,normal_pars_vertex:ru,normal_vertex:su,normalmap_pars_fragment:au,clearcoat_normal_fragment_begin:ou,clearcoat_normal_fragment_maps:lu,clearcoat_pars_fragment:cu,iridescence_pars_fragment:hu,opaque_fragment:uu,packing:du,premultiplied_alpha_fragment:fu,project_vertex:pu,dithering_fragment:mu,dithering_pars_fragment:gu,roughnessmap_fragment:_u,roughnessmap_pars_fragment:vu,shadowmap_pars_fragment:xu,shadowmap_pars_vertex:yu,shadowmap_vertex:bu,shadowmask_pars_fragment:Su,skinbase_vertex:Eu,skinning_pars_vertex:Mu,skinning_vertex:wu,skinnormal_vertex:Tu,specularmap_fragment:Au,specularmap_pars_fragment:Ru,tonemapping_fragment:Cu,tonemapping_pars_fragment:Pu,transmission_fragment:Lu,transmission_pars_fragment:Iu,uv_pars_fragment:Du,uv_pars_vertex:Uu,uv_vertex:Nu,worldpos_vertex:Ou,background_vert:Fu,background_frag:ku,backgroundCube_vert:Bu,backgroundCube_frag:zu,cube_vert:Hu,cube_frag:Gu,depth_vert:Vu,depth_frag:Wu,distanceRGBA_vert:Xu,distanceRGBA_frag:ju,equirect_vert:qu,equirect_frag:Yu,linedashed_vert:Zu,linedashed_frag:$u,meshbasic_vert:Ku,meshbasic_frag:Ju,meshlambert_vert:Qu,meshlambert_frag:ed,meshmatcap_vert:td,meshmatcap_frag:nd,meshnormal_vert:id,meshnormal_frag:rd,meshphong_vert:sd,meshphong_frag:ad,meshphysical_vert:od,meshphysical_frag:ld,meshtoon_vert:cd,meshtoon_frag:hd,points_vert:ud,points_frag:dd,shadow_vert:fd,shadow_frag:pd,sprite_vert:md,sprite_frag:gd},Ee={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Vt={basic:{uniforms:yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:yt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:yt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:yt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:yt([Ee.points,Ee.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:yt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:yt([Ee.common,Ee.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:yt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:yt([Ee.sprite,Ee.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:yt([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:yt([Ee.lights,Ee.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Vt.physical={uniforms:yt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Zi={r:0,b:0,g:0};function _d(r,e,t,n,i,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,m=null,f=0,p=null;function _(d,h){let v=!1,b=h.isScene===!0?h.background:null;b&&b.isTexture&&(b=(h.backgroundBlurriness>0?t:e).get(b)),b===null?g(a,l):b&&b.isColor&&(g(b,1),v=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),b&&(b.isCubeTexture||b.mapping===dr)?(u===void 0&&(u=new $e(new it(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ui(Vt.backgroundCube.uniforms),vertexShader:Vt.backgroundCube.vertexShader,fragmentShader:Vt.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,L,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=b.colorSpace!==Je,(m!==b||f!==b.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,m=b,f=b.version,p=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new $e(new xs(2,2),new ln({name:"BackgroundMaterial",uniforms:ui(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=b.colorSpace!==Je,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(m!==b||f!==b.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,m=b,f=b.version,p=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,h){d.getRGB(Zi,No(r)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(d,h=1){a.set(d),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(a,l)},render:_}}function vd(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=d(null);let c=l,u=!1;function m(x,F,ie,G,Q){let W=!1;if(o){const K=g(G,ie,F);c!==K&&(c=K,p(c.object)),W=h(x,G,ie,Q),W&&v(x,G,ie,Q)}else{const K=F.wireframe===!0;(c.geometry!==G.id||c.program!==ie.id||c.wireframe!==K)&&(c.geometry=G.id,c.program=ie.id,c.wireframe=K,W=!0)}Q!==null&&t.update(Q,r.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,H(x,F,ie,G),Q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(x){return n.isWebGL2?r.bindVertexArray(x):s.bindVertexArrayOES(x)}function _(x){return n.isWebGL2?r.deleteVertexArray(x):s.deleteVertexArrayOES(x)}function g(x,F,ie){const G=ie.wireframe===!0;let Q=a[x.id];Q===void 0&&(Q={},a[x.id]=Q);let W=Q[F.id];W===void 0&&(W={},Q[F.id]=W);let K=W[G];return K===void 0&&(K=d(f()),W[G]=K),K}function d(x){const F=[],ie=[],G=[];for(let Q=0;Q<i;Q++)F[Q]=0,ie[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ie,attributeDivisors:G,object:x,attributes:{},index:null}}function h(x,F,ie,G){const Q=c.attributes,W=F.attributes;let K=0;const I=ie.getAttributes();for(const D in I)if(I[D].location>=0){const oe=Q[D];let ne=W[D];if(ne===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),oe===void 0||oe.attribute!==ne||ne&&oe.data!==ne.data)return!0;K++}return c.attributesNum!==K||c.index!==G}function v(x,F,ie,G){const Q={},W=F.attributes;let K=0;const I=ie.getAttributes();for(const D in I)if(I[D].location>=0){let oe=W[D];oe===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor));const ne={};ne.attribute=oe,oe&&oe.data&&(ne.data=oe.data),Q[D]=ne,K++}c.attributes=Q,c.attributesNum=K,c.index=G}function b(){const x=c.newAttributes;for(let F=0,ie=x.length;F<ie;F++)x[F]=0}function E(x){w(x,0)}function w(x,F){const ie=c.newAttributes,G=c.enabledAttributes,Q=c.attributeDivisors;ie[x]=1,G[x]===0&&(r.enableVertexAttribArray(x),G[x]=1),Q[x]!==F&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](x,F),Q[x]=F)}function L(){const x=c.newAttributes,F=c.enabledAttributes;for(let ie=0,G=F.length;ie<G;ie++)F[ie]!==x[ie]&&(r.disableVertexAttribArray(ie),F[ie]=0)}function T(x,F,ie,G,Q,W,K){K===!0?r.vertexAttribIPointer(x,F,ie,Q,W):r.vertexAttribPointer(x,F,ie,G,Q,W)}function H(x,F,ie,G){if(n.isWebGL2===!1&&(x.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const Q=G.attributes,W=ie.getAttributes(),K=F.defaultAttributeValues;for(const I in W){const D=W[I];if(D.location>=0){let ue=Q[I];if(ue===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ue!==void 0){const oe=ue.normalized,ne=ue.itemSize,Me=t.get(ue);if(Me===void 0)continue;const Ce=Me.buffer,ve=Me.type,Te=Me.bytesPerElement,Ve=n.isWebGL2===!0&&(ve===r.INT||ve===r.UNSIGNED_INT||ue.gpuType===_o);if(ue.isInterleavedBufferAttribute){const Re=ue.data,Y=Re.stride,je=ue.offset;if(Re.isInstancedInterleavedBuffer){for(let y=0;y<D.locationSize;y++)w(D.location+y,Re.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let y=0;y<D.locationSize;y++)E(D.location+y);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let y=0;y<D.locationSize;y++)T(D.location+y,ne/D.locationSize,ve,oe,Y*Te,(je+ne/D.locationSize*y)*Te,Ve)}else{if(ue.isInstancedBufferAttribute){for(let Re=0;Re<D.locationSize;Re++)w(D.location+Re,ue.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Re=0;Re<D.locationSize;Re++)E(D.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Re=0;Re<D.locationSize;Re++)T(D.location+Re,ne/D.locationSize,ve,oe,ne*Te,ne/D.locationSize*Re*Te,Ve)}}else if(K!==void 0){const oe=K[I];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(D.location,oe);break;case 3:r.vertexAttrib3fv(D.location,oe);break;case 4:r.vertexAttrib4fv(D.location,oe);break;default:r.vertexAttrib1fv(D.location,oe)}}}}L()}function S(){P();for(const x in a){const F=a[x];for(const ie in F){const G=F[ie];for(const Q in G)_(G[Q].object),delete G[Q];delete F[ie]}delete a[x]}}function R(x){if(a[x.id]===void 0)return;const F=a[x.id];for(const ie in F){const G=F[ie];for(const Q in G)_(G[Q].object),delete G[Q];delete F[ie]}delete a[x.id]}function J(x){for(const F in a){const ie=a[F];if(ie[x.id]===void 0)continue;const G=ie[x.id];for(const Q in G)_(G[Q].object),delete G[Q];delete ie[x.id]}}function P(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:P,resetDefaultState:O,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:J,initAttributes:b,enableAttribute:E,disableUnusedAttributes:L}}function xd(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,m){if(m===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,m),t.update(u,s,m)}this.setMode=o,this.render=a,this.renderInstances=l}function yd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),d=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),h=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,E=o||e.has("OES_texture_float"),w=b&&E,L=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:m,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:d,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:w,maxSamples:L}}function bd(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new pn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){const p=m.length!==0||f||n!==0||i;return i=f,n=m.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,f){t=u(m,f,0)},this.setState=function(m,f,p){const _=m.clippingPlanes,g=m.clipIntersection,d=m.clipShadows,h=r.get(m);if(!i||_===null||_.length===0||s&&!d)s?u(null):c();else{const v=s?0:n,b=v*4;let E=h.clippingState||null;l.value=E,E=u(_,f,b,p);for(let w=0;w!==b;++w)E[w]=t[w];h.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(m,f,p,_){const g=m!==null?m.length:0;let d=null;if(g!==0){if(d=l.value,_!==!0||d===null){const h=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<h)&&(d=new Float32Array(h));for(let b=0,E=p;b!==g;++b,E+=4)o.copy(m[b]).applyMatrix4(v,a),o.normal.toArray(d,E),d[E+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function Sd(r){let e=new WeakMap;function t(o,a){return a===lr?o.mapping=oi:a===ss&&(o.mapping=li),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===lr||a===ss)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Oc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class zo extends Fo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Ma=[.125,.215,.35,.446,.526,.582],Rn=20,Yr=new zo,wa=new Xe;let Zr=null;const An=(1+Math.sqrt(5))/2,Jn=1/An,Ta=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,An,Jn),new j(0,An,-Jn),new j(Jn,0,An),new j(-Jn,0,An),new j(An,Jn,0),new j(-An,Jn,0)];class Aa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ca(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zr),e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oi||e.mapping===li?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:ci,format:zt,colorSpace:Xt,depthBuffer:!1},i=Ra(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ed(s)),this._blurMaterial=Md(s,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Yr)}_sceneToCubeUV(e,t,n,i){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,f=u.toneMapping;u.getClearColor(wa),u.toneMapping=_n,u.autoClear=!1;const p=new Io({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),_=new $e(new it,p);let g=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,g=!0):(p.color.copy(wa),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const b=this._cubeSize;$i(i,v*b,h>2?b:0,b,b),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=m,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===oi||e.mapping===li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ca());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Ta[(i-1)%Ta.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,m=new $e(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rn-1),g=s/_,d=isFinite(s)?1+Math.floor(u*g):Rn;d>Rn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Rn}`);const h=[];let v=0;for(let T=0;T<Rn;++T){const H=T/g,S=Math.exp(-H*H/2);h.push(S),T===0?v+=S:T<d&&(v+=2*S)}for(let T=0;T<h.length;T++)h[T]=h[T]/v;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const E=this._sizeLods[i],w=3*E*(i>b-ri?i-b+ri:0),L=4*(this._cubeSize-E);$i(t,w,L,3*E,2*E),l.setRenderTarget(t),l.render(m,Yr)}}function Ed(r){const e=[],t=[],n=[];let i=r;const s=r-ri+1+Ma.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ri?l=Ma[o-r+ri-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,m=1+c,f=[u,u,m,u,m,m,u,u,m,m,u,m],p=6,_=6,g=3,d=2,h=1,v=new Float32Array(g*_*p),b=new Float32Array(d*_*p),E=new Float32Array(h*_*p);for(let L=0;L<p;L++){const T=L%3*2/3-1,H=L>2?0:-1,S=[T,H,0,T+2/3,H,0,T+2/3,H+1,0,T,H,0,T+2/3,H+1,0,T,H+1,0];v.set(S,g*_*L),b.set(f,d*_*L);const R=[L,L,L,L,L,L];E.set(R,h*_*L)}const w=new cn;w.setAttribute("position",new Ht(v,g)),w.setAttribute("uv",new Ht(b,d)),w.setAttribute("faceIndex",new Ht(E,h)),e.push(w),i>ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ra(r,e,t){const n=new on(r,e,t);return n.texture.mapping=dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Md(r,e,t){const n=new Float32Array(Rn),i=new j(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Ca(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Pa(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function ys(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wd(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===lr||l===ss,u=l===oi||l===li;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let m=e.get(a);return t===null&&(t=new Aa(r)),m=c?t.fromEquirectangular(a,m):t.fromCubemap(a,m),e.set(a,m),m.texture}else{if(e.has(a))return e.get(a).texture;{const m=a.image;if(c&&m&&m.height>0||u&&m&&i(m)){t===null&&(t=new Aa(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Td(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ad(r,e,t,n){const i={},s=new WeakMap;function o(m){const f=m.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let d=0,h=g.length;d<h;d++)e.remove(g[d])}f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(m,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(m){const f=m.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const p=m.morphAttributes;for(const _ in p){const g=p[_];for(let d=0,h=g.length;d<h;d++)e.update(g[d],r.ARRAY_BUFFER)}}function c(m){const f=[],p=m.index,_=m.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let b=0,E=v.length;b<E;b+=3){const w=v[b+0],L=v[b+1],T=v[b+2];f.push(w,L,L,T,T,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let b=0,E=v.length/3-1;b<E;b+=3){const w=b+0,L=b+1,T=b+2;f.push(w,L,L,T,T,w)}}else return;const d=new(wo(f)?Uo:Do)(f,1);d.version=g;const h=s.get(m);h&&e.remove(h),s.set(m,d)}function u(m){const f=s.get(m);if(f){const p=m.index;p!==null&&f.version<p.version&&c(m)}else c(m);return s.get(m)}return{get:a,update:l,getWireframeAttribute:u}}function Rd(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){r.drawElements(s,p,a,f*l),t.update(p,s,1)}function m(f,p,_){if(_===0)return;let g,d;if(i)g=r,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,p,a,f*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=m}function Cd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Pd(r,e){return r[0]-e[0]}function Ld(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Id(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,m){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let d=s.get(u);if(d===void 0||d.count!==g){let F=function(){O.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;d!==void 0&&d.texture.dispose();const b=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],H=u.morphAttributes.color||[];let S=0;b===!0&&(S=1),E===!0&&(S=2),w===!0&&(S=3);let R=u.attributes.position.count*S,J=1;R>e.maxTextureSize&&(J=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*J*4*g),O=new Ro(P,R,J,g);O.type=nn,O.needsUpdate=!0;const x=S*4;for(let ie=0;ie<g;ie++){const G=L[ie],Q=T[ie],W=H[ie],K=R*J*4*ie;for(let I=0;I<G.count;I++){const D=I*x;b===!0&&(o.fromBufferAttribute(G,I),P[K+D+0]=o.x,P[K+D+1]=o.y,P[K+D+2]=o.z,P[K+D+3]=0),E===!0&&(o.fromBufferAttribute(Q,I),P[K+D+4]=o.x,P[K+D+5]=o.y,P[K+D+6]=o.z,P[K+D+7]=0),w===!0&&(o.fromBufferAttribute(W,I),P[K+D+8]=o.x,P[K+D+9]=o.y,P[K+D+10]=o.z,P[K+D+11]=W.itemSize===4?o.w:1)}}d={count:g,texture:O,size:new Pe(R,J)},s.set(u,d),u.addEventListener("dispose",F)}let h=0;for(let b=0;b<f.length;b++)h+=f[b];const v=u.morphTargetsRelative?1:1-h;m.getUniforms().setValue(r,"morphTargetBaseInfluence",v),m.getUniforms().setValue(r,"morphTargetInfluences",f),m.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),m.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];n[u.id]=g}for(let E=0;E<_;E++){const w=g[E];w[0]=E,w[1]=f[E]}g.sort(Ld);for(let E=0;E<8;E++)E<_&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Pd);const d=u.morphAttributes.position,h=u.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const w=a[E],L=w[0],T=w[1];L!==Number.MAX_SAFE_INTEGER&&T?(d&&u.getAttribute("morphTarget"+E)!==d[L]&&u.setAttribute("morphTarget"+E,d[L]),h&&u.getAttribute("morphNormal"+E)!==h[L]&&u.setAttribute("morphNormal"+E,h[L]),i[E]=T,v+=T):(d&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),h&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),i[E]=0)}const b=u.morphTargetsRelative?1:1-v;m.getUniforms().setValue(r,"morphTargetBaseInfluence",b),m.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Dd(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,m=e.get(l,u);if(i.get(m)!==c&&(e.update(m),i.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return m}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Ho=new mt,Go=new Ro,Vo=new yc,Wo=new ko,La=[],Ia=[],Da=new Float32Array(16),Ua=new Float32Array(9),Na=new Float32Array(4);function fi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=La[i];if(s===void 0&&(s=new Float32Array(i),La[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function mr(r,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ud(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Nd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function Od(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function Fd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function kd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Na.set(n),r.uniformMatrix2fv(this.addr,!1,Na),ht(t,n)}}function Bd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Ua.set(n),r.uniformMatrix3fv(this.addr,!1,Ua),ht(t,n)}}function zd(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;Da.set(n),r.uniformMatrix4fv(this.addr,!1,Da),ht(t,n)}}function Hd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function Vd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function Wd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function Xd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function qd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function Yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function Zd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ho,i)}function $d(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vo,i)}function Kd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wo,i)}function Jd(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Go,i)}function Qd(r){switch(r){case 5126:return Ud;case 35664:return Nd;case 35665:return Od;case 35666:return Fd;case 35674:return kd;case 35675:return Bd;case 35676:return zd;case 5124:case 35670:return Hd;case 35667:case 35671:return Gd;case 35668:case 35672:return Vd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return jd;case 36295:return qd;case 36296:return Yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Jd}}function ef(r,e){r.uniform1fv(this.addr,e)}function tf(r,e){const t=fi(e,this.size,2);r.uniform2fv(this.addr,t)}function nf(r,e){const t=fi(e,this.size,3);r.uniform3fv(this.addr,t)}function rf(r,e){const t=fi(e,this.size,4);r.uniform4fv(this.addr,t)}function sf(r,e){const t=fi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function af(r,e){const t=fi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function of(r,e){const t=fi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lf(r,e){r.uniform1iv(this.addr,e)}function cf(r,e){r.uniform2iv(this.addr,e)}function hf(r,e){r.uniform3iv(this.addr,e)}function uf(r,e){r.uniform4iv(this.addr,e)}function df(r,e){r.uniform1uiv(this.addr,e)}function ff(r,e){r.uniform2uiv(this.addr,e)}function pf(r,e){r.uniform3uiv(this.addr,e)}function mf(r,e){r.uniform4uiv(this.addr,e)}function gf(r,e,t){const n=this.cache,i=e.length,s=mr(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ho,s[o])}function _f(r,e,t){const n=this.cache,i=e.length,s=mr(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Vo,s[o])}function vf(r,e,t){const n=this.cache,i=e.length,s=mr(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Wo,s[o])}function xf(r,e,t){const n=this.cache,i=e.length,s=mr(t,i);ct(n,s)||(r.uniform1iv(this.addr,s),ht(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Go,s[o])}function yf(r){switch(r){case 5126:return ef;case 35664:return tf;case 35665:return nf;case 35666:return rf;case 35674:return sf;case 35675:return af;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return hf;case 35669:case 35673:return uf;case 5125:return df;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}class bf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qd(t.type)}}class Sf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=yf(t.type)}}class Ef{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function Oa(r,e){r.seq.push(e),r.map[e.id]=e}function Mf(r,e,t){const n=r.name,i=n.length;for($r.lastIndex=0;;){const s=$r.exec(n),o=$r.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Oa(t,c===void 0?new bf(a,r,e):new Sf(a,r,e));break}else{let m=t.map[a];m===void 0&&(m=new Ef(a),Oa(t,m)),t=m}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Mf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Fa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let wf=0;function Tf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Af(r){switch(r){case Xt:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function ka(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Tf(r.getShaderSource(e),o)}else return i}function Rf(r,e){const t=Af(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cf(r,e){let t;switch(e){case Nl:t="Linear";break;case Ol:t="Reinhard";break;case Fl:t="OptimizedCineon";break;case kl:t="ACESFilmic";break;case Bl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pf(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ei).join(`
`)}function Lf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function If(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ei(r){return r!==""}function Ba(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function za(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Df=/^[ \t]*#include +<([\w\d./]+)>/gm;function ds(r){return r.replace(Df,Nf)}const Uf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nf(r,e){let t=Fe[e];if(t===void 0){const n=Uf.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ds(t)}const Of=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ha(r){return r.replace(Of,Ff)}function Ff(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ga(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===uo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Qt&&(e="SHADOWMAP_TYPE_VSM"),e}function Bf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case oi:case li:e="ENVMAP_TYPE_CUBE";break;case dr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case li:e="ENVMAP_MODE_REFRACTION";break}return e}function Hf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case Dl:e="ENVMAP_BLENDING_MIX";break;case Ul:e="ENVMAP_BLENDING_ADD";break}return e}function Gf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kf(t),c=Bf(t),u=zf(t),m=Hf(t),f=Gf(t),p=t.isWebGL2?"":Pf(t),_=Lf(s),g=i.createProgram();let d,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ei).join(`
`),d.length>0&&(d+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ei).join(`
`),h.length>0&&(h+=`
`)):(d=[Ga(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ei).join(`
`),h=[p,Ga(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Fe.tonemapping_pars_fragment:"",t.toneMapping!==_n?Cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Rf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ei).join(`
`)),o=ds(o),o=Ba(o,t),o=za(o,t),a=ds(a),a=Ba(a,t),a=za(a,t),o=Ha(o),a=Ha(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",t.glslVersion===la?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===la?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=v+d+o,E=v+h+a,w=Fa(i,i.VERTEX_SHADER,b),L=Fa(i,i.FRAGMENT_SHADER,E);if(i.attachShader(g,w),i.attachShader(g,L),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const S=i.getProgramInfoLog(g).trim(),R=i.getShaderInfoLog(w).trim(),J=i.getShaderInfoLog(L).trim();let P=!0,O=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(P=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,L);else{const x=ka(i,w,"vertex"),F=ka(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+x+`
`+F)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||J==="")&&(O=!1);O&&(this.diagnostics={runnable:P,programLog:S,vertexShader:{log:R,prefix:d},fragmentShader:{log:J,prefix:h}})}i.deleteShader(w),i.deleteShader(L);let T;this.getUniforms=function(){return T===void 0&&(T=new rr(i,g)),T};let H;return this.getAttributes=function(){return H===void 0&&(H=If(i,g)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wf++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=L,this}let Wf=0;class Xf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jf(e),t.set(e,n)),n}}class jf{constructor(e){this.id=Wf++,this.code=e,this.usedTimes=0}}function qf(r,e,t,n,i,s,o){const a=new Po,l=new Xf,c=[],u=i.isWebGL2,m=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function d(S,R,J,P,O){const x=P.fog,F=O.geometry,ie=S.isMeshStandardMaterial?P.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||ie),Q=G&&G.mapping===dr?G.image.height:null,W=_[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,I=K!==void 0?K.length:0;let D=0;F.morphAttributes.position!==void 0&&(D=1),F.morphAttributes.normal!==void 0&&(D=2),F.morphAttributes.color!==void 0&&(D=3);let ue,oe,ne,Me;if(W){const Ke=Vt[W];ue=Ke.vertexShader,oe=Ke.fragmentShader}else ue=S.vertexShader,oe=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),Me=l.getFragmentShaderID(S);const Ce=r.getRenderTarget(),ve=O.isInstancedMesh===!0,Te=!!S.map,Ve=!!S.matcap,Re=!!G,Y=!!S.aoMap,je=!!S.lightMap,y=!!S.bumpMap,Z=!!S.normalMap,X=!!S.displacementMap,N=!!S.emissiveMap,C=!!S.metalnessMap,z=!!S.roughnessMap,ae=S.anisotropy>0,pe=S.clearcoat>0,q=S.iridescence>0,A=S.sheen>0,M=S.transmission>0,k=ae&&!!S.anisotropyMap,re=pe&&!!S.clearcoatMap,de=pe&&!!S.clearcoatNormalMap,fe=pe&&!!S.clearcoatRoughnessMap,we=q&&!!S.iridescenceMap,ge=q&&!!S.iridescenceThicknessMap,ee=A&&!!S.sheenColorMap,B=A&&!!S.sheenRoughnessMap,le=!!S.specularMap,be=!!S.specularColorMap,xe=!!S.specularIntensityMap,ye=M&&!!S.transmissionMap,Ie=M&&!!S.thicknessMap,ze=!!S.gradientMap,V=!!S.alphaMap,Se=S.alphaTest>0,se=!!S.alphaHash,me=!!S.extensions,_e=!!F.attributes.uv1,He=!!F.attributes.uv2,qe=!!F.attributes.uv3;let Ze=_n;return S.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Ze=r.toneMapping),{isWebGL2:u,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:ue,fragmentShader:oe,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:ve,instancingColor:ve&&O.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Xt,map:Te,matcap:Ve,envMap:Re,envMapMode:Re&&G.mapping,envMapCubeUVHeight:Q,aoMap:Y,lightMap:je,bumpMap:y,normalMap:Z,displacementMap:f&&X,emissiveMap:N,normalMapObjectSpace:Z&&S.normalMapType===Jl,normalMapTangentSpace:Z&&S.normalMapType===Mo,metalnessMap:C,roughnessMap:z,anisotropy:ae,anisotropyMap:k,clearcoat:pe,clearcoatMap:re,clearcoatNormalMap:de,clearcoatRoughnessMap:fe,iridescence:q,iridescenceMap:we,iridescenceThicknessMap:ge,sheen:A,sheenColorMap:ee,sheenRoughnessMap:B,specularMap:le,specularColorMap:be,specularIntensityMap:xe,transmission:M,transmissionMap:ye,thicknessMap:Ie,gradientMap:ze,opaque:S.transparent===!1&&S.blending===si,alphaMap:V,alphaTest:Se,alphaHash:se,combine:S.combine,mapUv:Te&&g(S.map.channel),aoMapUv:Y&&g(S.aoMap.channel),lightMapUv:je&&g(S.lightMap.channel),bumpMapUv:y&&g(S.bumpMap.channel),normalMapUv:Z&&g(S.normalMap.channel),displacementMapUv:X&&g(S.displacementMap.channel),emissiveMapUv:N&&g(S.emissiveMap.channel),metalnessMapUv:C&&g(S.metalnessMap.channel),roughnessMapUv:z&&g(S.roughnessMap.channel),anisotropyMapUv:k&&g(S.anisotropyMap.channel),clearcoatMapUv:re&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:B&&g(S.sheenRoughnessMap.channel),specularMapUv:le&&g(S.specularMap.channel),specularColorMapUv:be&&g(S.specularColorMap.channel),specularIntensityMapUv:xe&&g(S.specularIntensityMap.channel),transmissionMapUv:ye&&g(S.transmissionMap.channel),thicknessMapUv:Ie&&g(S.thicknessMap.channel),alphaMapUv:V&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Z||ae),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:He,vertexUv3s:qe,pointsUvs:O.isPoints===!0&&!!F.attributes.uv&&(Te||V),fog:!!x,useFog:S.fog===!0,fogExp2:x&&x.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:O.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:D,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ze,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&S.map.colorSpace===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nt,flipSided:S.side===Et,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const J in S.defines)R.push(J),R.push(S.defines[J]);return S.isRawShaderMaterial===!1&&(v(R,S),b(R,S),R.push(r.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function v(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function b(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function E(S){const R=_[S.type];let J;if(R){const P=Vt[R];J=Oo.clone(P.uniforms)}else J=S.uniforms;return J}function w(S,R){let J;for(let P=0,O=c.length;P<O;P++){const x=c[P];if(x.cacheKey===R){J=x,++J.usedTimes;break}}return J===void 0&&(J=new Vf(r,R,S,s),c.push(J)),J}function L(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:E,acquireProgram:w,releaseProgram:L,releaseShaderCache:T,programs:c,dispose:H}}function Yf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Va(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wa(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(m,f,p,_,g,d){let h=r[e];return h===void 0?(h={id:m.id,object:m,geometry:f,material:p,groupOrder:_,renderOrder:m.renderOrder,z:g,group:d},r[e]=h):(h.id=m.id,h.object=m,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=m.renderOrder,h.z=g,h.group=d),e++,h}function a(m,f,p,_,g,d){const h=o(m,f,p,_,g,d);p.transmission>0?n.push(h):p.transparent===!0?i.push(h):t.push(h)}function l(m,f,p,_,g,d){const h=o(m,f,p,_,g,d);p.transmission>0?n.unshift(h):p.transparent===!0?i.unshift(h):t.unshift(h)}function c(m,f){t.length>1&&t.sort(m||Zf),n.length>1&&n.sort(f||Va),i.length>1&&i.sort(f||Va)}function u(){for(let m=e,f=r.length;m<f;m++){const p=r[m];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function $f(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Wa,r.set(n,[o])):i>=s.length?(o=new Wa,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Kf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Xe};break;case"SpotLight":t={position:new j,direction:new j,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=t,t}}}function Jf(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Qf=0;function ep(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tp(r,e){const t=new Kf,n=Jf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new j);const s=new j,o=new rt,a=new rt;function l(u,m){let f=0,p=0,_=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let g=0,d=0,h=0,v=0,b=0,E=0,w=0,L=0,T=0,H=0;u.sort(ep);const S=m===!0?Math.PI:1;for(let J=0,P=u.length;J<P;J++){const O=u[J],x=O.color,F=O.intensity,ie=O.distance,G=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=x.r*F*S,p+=x.g*F*S,_+=x.b*F*S;else if(O.isLightProbe)for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(O.sh.coefficients[Q],F);else if(O.isDirectionalLight){const Q=t.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const W=O.shadow,K=n.get(O);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.directionalShadow[g]=K,i.directionalShadowMap[g]=G,i.directionalShadowMatrix[g]=O.shadow.matrix,E++}i.directional[g]=Q,g++}else if(O.isSpotLight){const Q=t.get(O);Q.position.setFromMatrixPosition(O.matrixWorld),Q.color.copy(x).multiplyScalar(F*S),Q.distance=ie,Q.coneCos=Math.cos(O.angle),Q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Q.decay=O.decay,i.spot[h]=Q;const W=O.shadow;if(O.map&&(i.spotLightMap[T]=O.map,T++,W.updateMatrices(O),O.castShadow&&H++),i.spotLightMatrix[h]=W.matrix,O.castShadow){const K=n.get(O);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.spotShadow[h]=K,i.spotShadowMap[h]=G,L++}h++}else if(O.isRectAreaLight){const Q=t.get(O);Q.color.copy(x).multiplyScalar(F),Q.halfWidth.set(O.width*.5,0,0),Q.halfHeight.set(0,O.height*.5,0),i.rectArea[v]=Q,v++}else if(O.isPointLight){const Q=t.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity*S),Q.distance=O.distance,Q.decay=O.decay,O.castShadow){const W=O.shadow,K=n.get(O);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=G,i.pointShadowMatrix[d]=O.shadow.matrix,w++}i.point[d]=Q,d++}else if(O.isHemisphereLight){const Q=t.get(O);Q.skyColor.copy(O.color).multiplyScalar(F*S),Q.groundColor.copy(O.groundColor).multiplyScalar(F*S),i.hemi[b]=Q,b++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=_;const R=i.hash;(R.directionalLength!==g||R.pointLength!==d||R.spotLength!==h||R.rectAreaLength!==v||R.hemiLength!==b||R.numDirectionalShadows!==E||R.numPointShadows!==w||R.numSpotShadows!==L||R.numSpotMaps!==T)&&(i.directional.length=g,i.spot.length=h,i.rectArea.length=v,i.point.length=d,i.hemi.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=L+T-H,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=H,R.directionalLength=g,R.pointLength=d,R.spotLength=h,R.rectAreaLength=v,R.hemiLength=b,R.numDirectionalShadows=E,R.numPointShadows=w,R.numSpotShadows=L,R.numSpotMaps=T,i.version=Qf++)}function c(u,m){let f=0,p=0,_=0,g=0,d=0;const h=m.matrixWorldInverse;for(let v=0,b=u.length;v<b;v++){const E=u[v];if(E.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),f++}else if(E.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),_++}else if(E.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(h),a.identity(),o.copy(E.matrixWorld),o.premultiply(h),a.extractRotation(o),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(h),p++}else if(E.isHemisphereLight){const w=i.hemi[d];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(h),d++}}}return{setup:l,setupView:c,state:i}}function Xa(r,e){const t=new tp(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(m){n.push(m)}function a(m){i.push(m)}function l(m){t.setup(n,m)}function c(m){t.setupView(n,m)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function np(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Xa(r,e),t.set(s,[l])):o>=a.length?(l=new Xa(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class ip extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rp extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ap=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function op(r,e,t){let n=new vs;const i=new Pe,s=new Pe,o=new Qe,a=new ip({depthPacking:Kl}),l=new rp,c={},u=t.maxTextureSize,m={[Wt]:Et,[Et]:Wt,[Nt]:Nt},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:sp,fragmentShader:ap}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new $e(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let h=this.type;this.render=function(w,L,T){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const H=r.getRenderTarget(),S=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),J=r.state;J.setBlending(sn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const P=h!==Qt&&this.type===Qt,O=h===Qt&&this.type!==Qt;for(let x=0,F=w.length;x<F;x++){const ie=w[x],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const Q=G.getFrameExtents();if(i.multiply(Q),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,G.mapSize.y=s.y)),G.map===null||P===!0||O===!0){const K=this.type!==Qt?{minFilter:et,magFilter:et}:{};G.map!==null&&G.map.dispose(),G.map=new on(i.x,i.y,K),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const W=G.getViewportCount();for(let K=0;K<W;K++){const I=G.getViewport(K);o.set(s.x*I.x,s.y*I.y,s.x*I.z,s.y*I.w),J.viewport(o),G.updateMatrices(ie,K),n=G.getFrustum(),E(L,T,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===Qt&&v(G,T),G.needsUpdate=!1}h=this.type,d.needsUpdate=!1,r.setRenderTarget(H,S,R)};function v(w,L){const T=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new on(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(L,null,T,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(L,null,T,p,g,null)}function b(w,L,T,H){let S=null;const R=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=T.isPointLight===!0?l:a,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const J=S.uuid,P=L.uuid;let O=c[J];O===void 0&&(O={},c[J]=O);let x=O[P];x===void 0&&(x=S.clone(),O[P]=x),S=x}if(S.visible=L.visible,S.wireframe=L.wireframe,H===Qt?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:m[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const J=r.properties.get(S);J.light=T}return S}function E(w,L,T,H,S){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Qt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const P=e.update(w),O=w.material;if(Array.isArray(O)){const x=P.groups;for(let F=0,ie=x.length;F<ie;F++){const G=x[F],Q=O[G.materialIndex];if(Q&&Q.visible){const W=b(w,Q,H,S);r.renderBufferDirect(T,null,P,W,w,G)}}}else if(O.visible){const x=b(w,O,H,S);r.renderBufferDirect(T,null,P,x,w,null)}}const J=w.children;for(let P=0,O=J.length;P<O;P++)E(J[P],L,T,H,S)}}function lp(r,e,t){const n=t.isWebGL2;function i(){let V=!1;const Se=new Qe;let se=null;const me=new Qe(0,0,0,0);return{setMask:function(_e){se!==_e&&!V&&(r.colorMask(_e,_e,_e,_e),se=_e)},setLocked:function(_e){V=_e},setClear:function(_e,He,qe,Ze,Mt){Mt===!0&&(_e*=Ze,He*=Ze,qe*=Ze),Se.set(_e,He,qe,Ze),me.equals(Se)===!1&&(r.clearColor(_e,He,qe,Ze),me.copy(Se))},reset:function(){V=!1,se=null,me.set(-1,0,0,0)}}}function s(){let V=!1,Se=null,se=null,me=null;return{setTest:function(_e){_e?Ce(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(_e){Se!==_e&&!V&&(r.depthMask(_e),Se=_e)},setFunc:function(_e){if(se!==_e){switch(_e){case Tl:r.depthFunc(r.NEVER);break;case Al:r.depthFunc(r.ALWAYS);break;case Rl:r.depthFunc(r.LESS);break;case rs:r.depthFunc(r.LEQUAL);break;case Cl:r.depthFunc(r.EQUAL);break;case Pl:r.depthFunc(r.GEQUAL);break;case Ll:r.depthFunc(r.GREATER);break;case Il:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}se=_e}},setLocked:function(_e){V=_e},setClear:function(_e){me!==_e&&(r.clearDepth(_e),me=_e)},reset:function(){V=!1,Se=null,se=null,me=null}}}function o(){let V=!1,Se=null,se=null,me=null,_e=null,He=null,qe=null,Ze=null,Mt=null;return{setTest:function(Ke){V||(Ke?Ce(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(Ke){Se!==Ke&&!V&&(r.stencilMask(Ke),Se=Ke)},setFunc:function(Ke,Gt,_t){(se!==Ke||me!==Gt||_e!==_t)&&(r.stencilFunc(Ke,Gt,_t),se=Ke,me=Gt,_e=_t)},setOp:function(Ke,Gt,_t){(He!==Ke||qe!==Gt||Ze!==_t)&&(r.stencilOp(Ke,Gt,_t),He=Ke,qe=Gt,Ze=_t)},setLocked:function(Ke){V=Ke},setClear:function(Ke){Mt!==Ke&&(r.clearStencil(Ke),Mt=Ke)},reset:function(){V=!1,Se=null,se=null,me=null,_e=null,He=null,qe=null,Ze=null,Mt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,m=new WeakMap;let f={},p={},_=new WeakMap,g=[],d=null,h=!1,v=null,b=null,E=null,w=null,L=null,T=null,H=null,S=!1,R=null,J=null,P=null,O=null,x=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,G=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),ie=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),ie=G>=2);let W=null,K={};const I=r.getParameter(r.SCISSOR_BOX),D=r.getParameter(r.VIEWPORT),ue=new Qe().fromArray(I),oe=new Qe().fromArray(D);function ne(V,Se,se,me){const _e=new Uint8Array(4),He=r.createTexture();r.bindTexture(V,He),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qe=0;qe<se;qe++)n&&(V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY)?r.texImage3D(Se,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(Se+qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return He}const Me={};Me[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Me[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(r.DEPTH_TEST),l.setFunc(rs),X(!1),N(Ps),Ce(r.CULL_FACE),y(sn);function Ce(V){f[V]!==!0&&(r.enable(V),f[V]=!0)}function ve(V){f[V]!==!1&&(r.disable(V),f[V]=!1)}function Te(V,Se){return p[V]!==Se?(r.bindFramebuffer(V,Se),p[V]=Se,n&&(V===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=Se),V===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=Se)),!0):!1}function Ve(V,Se){let se=g,me=!1;if(V)if(se=_.get(Se),se===void 0&&(se=[],_.set(Se,se)),V.isWebGLMultipleRenderTargets){const _e=V.texture;if(se.length!==_e.length||se[0]!==r.COLOR_ATTACHMENT0){for(let He=0,qe=_e.length;He<qe;He++)se[He]=r.COLOR_ATTACHMENT0+He;se.length=_e.length,me=!0}}else se[0]!==r.COLOR_ATTACHMENT0&&(se[0]=r.COLOR_ATTACHMENT0,me=!0);else se[0]!==r.BACK&&(se[0]=r.BACK,me=!0);me&&(t.isWebGL2?r.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Re(V){return d!==V?(r.useProgram(V),d=V,!0):!1}const Y={[ii]:r.FUNC_ADD,[ml]:r.FUNC_SUBTRACT,[gl]:r.FUNC_REVERSE_SUBTRACT};if(n)Y[Us]=r.MIN,Y[Ns]=r.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(Y[Us]=V.MIN_EXT,Y[Ns]=V.MAX_EXT)}const je={[_l]:r.ZERO,[vl]:r.ONE,[xl]:r.SRC_COLOR,[fo]:r.SRC_ALPHA,[wl]:r.SRC_ALPHA_SATURATE,[El]:r.DST_COLOR,[bl]:r.DST_ALPHA,[yl]:r.ONE_MINUS_SRC_COLOR,[po]:r.ONE_MINUS_SRC_ALPHA,[Ml]:r.ONE_MINUS_DST_COLOR,[Sl]:r.ONE_MINUS_DST_ALPHA};function y(V,Se,se,me,_e,He,qe,Ze){if(V===sn){h===!0&&(ve(r.BLEND),h=!1);return}if(h===!1&&(Ce(r.BLEND),h=!0),V!==pl){if(V!==v||Ze!==S){if((b!==ii||L!==ii)&&(r.blendEquation(r.FUNC_ADD),b=ii,L=ii),Ze)switch(V){case si:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ls:r.blendFunc(r.ONE,r.ONE);break;case Is:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ds:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case si:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ls:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Is:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ds:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}E=null,w=null,T=null,H=null,v=V,S=Ze}return}_e=_e||Se,He=He||se,qe=qe||me,(Se!==b||_e!==L)&&(r.blendEquationSeparate(Y[Se],Y[_e]),b=Se,L=_e),(se!==E||me!==w||He!==T||qe!==H)&&(r.blendFuncSeparate(je[se],je[me],je[He],je[qe]),E=se,w=me,T=He,H=qe),v=V,S=!1}function Z(V,Se){V.side===Nt?ve(r.CULL_FACE):Ce(r.CULL_FACE);let se=V.side===Et;Se&&(se=!se),X(se),V.blending===si&&V.transparent===!1?y(sn):y(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const me=V.stencilWrite;c.setTest(me),me&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),z(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ce(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function X(V){R!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),R=V)}function N(V){V!==ul?(Ce(r.CULL_FACE),V!==J&&(V===Ps?r.cullFace(r.BACK):V===dl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),J=V}function C(V){V!==P&&(ie&&r.lineWidth(V),P=V)}function z(V,Se,se){V?(Ce(r.POLYGON_OFFSET_FILL),(O!==Se||x!==se)&&(r.polygonOffset(Se,se),O=Se,x=se)):ve(r.POLYGON_OFFSET_FILL)}function ae(V){V?Ce(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function pe(V){V===void 0&&(V=r.TEXTURE0+F-1),W!==V&&(r.activeTexture(V),W=V)}function q(V,Se,se){se===void 0&&(W===null?se=r.TEXTURE0+F-1:se=W);let me=K[se];me===void 0&&(me={type:void 0,texture:void 0},K[se]=me),(me.type!==V||me.texture!==Se)&&(W!==se&&(r.activeTexture(se),W=se),r.bindTexture(V,Se||Me[V]),me.type=V,me.texture=Se)}function A(){const V=K[W];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function k(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function B(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(V){ue.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),ue.copy(V))}function xe(V){oe.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function ye(V,Se){let se=m.get(Se);se===void 0&&(se=new WeakMap,m.set(Se,se));let me=se.get(V);me===void 0&&(me=r.getUniformBlockIndex(Se,V.name),se.set(V,me))}function Ie(V,Se){const me=m.get(Se).get(V);u.get(Se)!==me&&(r.uniformBlockBinding(Se,me,V.__bindingPointIndex),u.set(Se,me))}function ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},W=null,K={},p={},_=new WeakMap,g=[],d=null,h=!1,v=null,b=null,E=null,w=null,L=null,T=null,H=null,S=!1,R=null,J=null,P=null,O=null,x=null,ue.set(0,0,r.canvas.width,r.canvas.height),oe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:ve,bindFramebuffer:Te,drawBuffers:Ve,useProgram:Re,setBlending:y,setMaterial:Z,setFlipSided:X,setCullFace:N,setLineWidth:C,setPolygonOffset:z,setScissorTest:ae,activeTexture:pe,bindTexture:q,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:B,texImage3D:le,updateUBOMapping:ye,uniformBlockBinding:Ie,texStorage2D:ge,texStorage3D:ee,texSubImage2D:re,texSubImage3D:de,compressedTexSubImage2D:fe,compressedTexSubImage3D:we,scissor:be,viewport:xe,reset:ze}}function cp(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,m=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return h?new OffscreenCanvas(A,M):hr("canvas")}function b(A,M,k,re){let de=1;if((A.width>re||A.height>re)&&(de=re/Math.max(A.width,A.height)),de<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const fe=M?us:Math.floor,we=fe(de*A.width),ge=fe(de*A.height);g===void 0&&(g=v(we,ge));const ee=k?v(we,ge):g;return ee.width=we,ee.height=ge,ee.getContext("2d").drawImage(A,0,0,we,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+we+"x"+ge+")."),ee}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function E(A){return ca(A.width)&&ca(A.height)}function w(A){return a?!1:A.wrapS!==Bt||A.wrapT!==Bt||A.minFilter!==et&&A.minFilter!==Dt}function L(A,M){return A.generateMipmaps&&M&&A.minFilter!==et&&A.minFilter!==Dt}function T(A){r.generateMipmap(A)}function H(A,M,k,re,de=!1){if(a===!1)return M;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=M;return M===r.RED&&(k===r.FLOAT&&(fe=r.R32F),k===r.HALF_FLOAT&&(fe=r.R16F),k===r.UNSIGNED_BYTE&&(fe=r.R8)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(fe=r.R8UI),k===r.UNSIGNED_SHORT&&(fe=r.R16UI),k===r.UNSIGNED_INT&&(fe=r.R32UI),k===r.BYTE&&(fe=r.R8I),k===r.SHORT&&(fe=r.R16I),k===r.INT&&(fe=r.R32I)),M===r.RG&&(k===r.FLOAT&&(fe=r.RG32F),k===r.HALF_FLOAT&&(fe=r.RG16F),k===r.UNSIGNED_BYTE&&(fe=r.RG8)),M===r.RGBA&&(k===r.FLOAT&&(fe=r.RGBA32F),k===r.HALF_FLOAT&&(fe=r.RGBA16F),k===r.UNSIGNED_BYTE&&(fe=re===Je&&de===!1?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)),(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function S(A,M,k){return L(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==et&&A.minFilter!==Dt?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){return A===et||A===Os||A===Er?r.NEAREST:r.LINEAR}function J(A){const M=A.target;M.removeEventListener("dispose",J),O(M),M.isVideoTexture&&_.delete(M)}function P(A){const M=A.target;M.removeEventListener("dispose",P),F(M)}function O(A){const M=n.get(A);if(M.__webglInit===void 0)return;const k=A.source,re=d.get(k);if(re){const de=re[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&x(A),Object.keys(re).length===0&&d.delete(k)}n.remove(A)}function x(A){const M=n.get(A);r.deleteTexture(M.__webglTexture);const k=A.source,re=d.get(k);delete re[M.__cacheKey],o.memory.textures--}function F(A){const M=A.texture,k=n.get(A),re=n.get(M);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(k.__webglFramebuffer[de]))for(let fe=0;fe<k.__webglFramebuffer[de].length;fe++)r.deleteFramebuffer(k.__webglFramebuffer[de][fe]);else r.deleteFramebuffer(k.__webglFramebuffer[de]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[de])}else{if(Array.isArray(k.__webglFramebuffer))for(let de=0;de<k.__webglFramebuffer.length;de++)r.deleteFramebuffer(k.__webglFramebuffer[de]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let de=0;de<k.__webglColorRenderbuffer.length;de++)k.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[de]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let de=0,fe=M.length;de<fe;de++){const we=n.get(M[de]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(M[de])}n.remove(M),n.remove(A)}let ie=0;function G(){ie=0}function Q(){const A=ie;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),ie+=1,A}function W(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function K(A,M){const k=n.get(A);if(A.isVideoTexture&&pe(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(k,A,M);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function I(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Te(k,A,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function D(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Te(k,A,M);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function ue(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){Ve(k,A,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}const oe={[as]:r.REPEAT,[Bt]:r.CLAMP_TO_EDGE,[os]:r.MIRRORED_REPEAT},ne={[et]:r.NEAREST,[Os]:r.NEAREST_MIPMAP_NEAREST,[Er]:r.NEAREST_MIPMAP_LINEAR,[Dt]:r.LINEAR,[zl]:r.LINEAR_MIPMAP_NEAREST,[wi]:r.LINEAR_MIPMAP_LINEAR},Me={[ec]:r.NEVER,[oc]:r.ALWAYS,[tc]:r.LESS,[ic]:r.LEQUAL,[nc]:r.EQUAL,[ac]:r.GEQUAL,[rc]:r.GREATER,[sc]:r.NOTEQUAL};function Ce(A,M,k){if(k?(r.texParameteri(A,r.TEXTURE_WRAP_S,oe[M.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,oe[M.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,oe[M.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,ne[M.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,ne[M.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(M.wrapS!==Bt||M.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,R(M.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,R(M.minFilter)),M.minFilter!==et&&M.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===et||M.minFilter!==Er&&M.minFilter!==wi||M.type===nn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ci&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ve(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",J));const re=M.source;let de=d.get(re);de===void 0&&(de={},d.set(re,de));const fe=W(M);if(fe!==A.__cacheKey){de[fe]===void 0&&(de[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),de[fe].usedTimes++;const we=de[A.__cacheKey];we!==void 0&&(de[A.__cacheKey].usedTimes--,we.usedTimes===0&&x(M)),A.__cacheKey=fe,A.__webglTexture=de[fe].texture}return k}function Te(A,M,k){let re=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=r.TEXTURE_3D);const de=ve(A,M),fe=M.source;t.bindTexture(re,A.__webglTexture,r.TEXTURE0+k);const we=n.get(fe);if(fe.version!==we.__version||de===!0){t.activeTexture(r.TEXTURE0+k),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ge=w(M)&&E(M.image)===!1;let ee=b(M.image,ge,!1,u);ee=q(M,ee);const B=E(ee)||a,le=s.convert(M.format,M.colorSpace);let be=s.convert(M.type),xe=H(M.internalFormat,le,be,M.colorSpace,M.isVideoTexture);Ce(re,M,B);let ye;const Ie=M.mipmaps,ze=a&&M.isVideoTexture!==!0,V=we.__version===void 0||de===!0,Se=S(M,ee,B);if(M.isDepthTexture)xe=r.DEPTH_COMPONENT,a?M.type===nn?xe=r.DEPTH_COMPONENT32F:M.type===gn?xe=r.DEPTH_COMPONENT24:M.type===Cn?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:M.type===nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Pn&&xe===r.DEPTH_COMPONENT&&M.type!==gs&&M.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=gn,be=s.convert(M.type)),M.format===hi&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,M.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Cn,be=s.convert(M.type))),V&&(ze?t.texStorage2D(r.TEXTURE_2D,1,xe,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,xe,ee.width,ee.height,0,le,be,null));else if(M.isDataTexture)if(Ie.length>0&&B){ze&&V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let se=0,me=Ie.length;se<me;se++)ye=Ie[se],ze?t.texSubImage2D(r.TEXTURE_2D,se,0,0,ye.width,ye.height,le,be,ye.data):t.texImage2D(r.TEXTURE_2D,se,xe,ye.width,ye.height,0,le,be,ye.data);M.generateMipmaps=!1}else ze?(V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,le,be,ee.data)):t.texImage2D(r.TEXTURE_2D,0,xe,ee.width,ee.height,0,le,be,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ze&&V&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,xe,Ie[0].width,Ie[0].height,ee.depth);for(let se=0,me=Ie.length;se<me;se++)ye=Ie[se],M.format!==zt?le!==null?ze?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ee.depth,le,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,xe,ye.width,ye.height,ee.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,ye.width,ye.height,ee.depth,le,be,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,xe,ye.width,ye.height,ee.depth,0,le,be,ye.data)}else{ze&&V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let se=0,me=Ie.length;se<me;se++)ye=Ie[se],M.format!==zt?le!==null?ze?t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,ye.width,ye.height,le,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,se,xe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?t.texSubImage2D(r.TEXTURE_2D,se,0,0,ye.width,ye.height,le,be,ye.data):t.texImage2D(r.TEXTURE_2D,se,xe,ye.width,ye.height,0,le,be,ye.data)}else if(M.isDataArrayTexture)ze?(V&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Se,xe,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,be,ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,ee.width,ee.height,ee.depth,0,le,be,ee.data);else if(M.isData3DTexture)ze?(V&&t.texStorage3D(r.TEXTURE_3D,Se,xe,ee.width,ee.height,ee.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,be,ee.data)):t.texImage3D(r.TEXTURE_3D,0,xe,ee.width,ee.height,ee.depth,0,le,be,ee.data);else if(M.isFramebufferTexture){if(V)if(ze)t.texStorage2D(r.TEXTURE_2D,Se,xe,ee.width,ee.height);else{let se=ee.width,me=ee.height;for(let _e=0;_e<Se;_e++)t.texImage2D(r.TEXTURE_2D,_e,xe,se,me,0,le,be,null),se>>=1,me>>=1}}else if(Ie.length>0&&B){ze&&V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,Ie[0].width,Ie[0].height);for(let se=0,me=Ie.length;se<me;se++)ye=Ie[se],ze?t.texSubImage2D(r.TEXTURE_2D,se,0,0,le,be,ye):t.texImage2D(r.TEXTURE_2D,se,xe,le,be,ye);M.generateMipmaps=!1}else ze?(V&&t.texStorage2D(r.TEXTURE_2D,Se,xe,ee.width,ee.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,be,ee)):t.texImage2D(r.TEXTURE_2D,0,xe,le,be,ee);L(M,B)&&T(re),we.__version=fe.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ve(A,M,k){if(M.image.length!==6)return;const re=ve(A,M),de=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const fe=n.get(de);if(de.version!==fe.__version||re===!0){t.activeTexture(r.TEXTURE0+k),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ge=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let se=0;se<6;se++)!we&&!ge?ee[se]=b(M.image[se],!1,!0,c):ee[se]=ge?M.image[se].image:M.image[se],ee[se]=q(M,ee[se]);const B=ee[0],le=E(B)||a,be=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),ye=H(M.internalFormat,be,xe,M.colorSpace),Ie=a&&M.isVideoTexture!==!0,ze=fe.__version===void 0||re===!0;let V=S(M,B,le);Ce(r.TEXTURE_CUBE_MAP,M,le);let Se;if(we){Ie&&ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,V,ye,B.width,B.height);for(let se=0;se<6;se++){Se=ee[se].mipmaps;for(let me=0;me<Se.length;me++){const _e=Se[me];M.format!==zt?be!==null?Ie?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,_e.width,_e.height,be,xe,_e.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,ye,_e.width,_e.height,0,be,xe,_e.data)}}}else{Se=M.mipmaps,Ie&&ze&&(Se.length>0&&V++,t.texStorage2D(r.TEXTURE_CUBE_MAP,V,ye,ee[0].width,ee[0].height));for(let se=0;se<6;se++)if(ge){Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ee[se].width,ee[se].height,be,xe,ee[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,ee[se].width,ee[se].height,0,be,xe,ee[se].data);for(let me=0;me<Se.length;me++){const He=Se[me].image[se].image;Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,He.width,He.height,be,xe,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,ye,He.width,He.height,0,be,xe,He.data)}}else{Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be,xe,ee[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ye,be,xe,ee[se]);for(let me=0;me<Se.length;me++){const _e=Se[me];Ie?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,be,xe,_e.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,ye,be,xe,_e.image[se])}}}L(M,le)&&T(r.TEXTURE_CUBE_MAP),fe.__version=de.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Re(A,M,k,re,de,fe){const we=s.convert(k.format,k.colorSpace),ge=s.convert(k.type),ee=H(k.internalFormat,we,ge,k.colorSpace);if(!n.get(M).__hasExternalTextures){const le=Math.max(1,M.width>>fe),be=Math.max(1,M.height>>fe);de===r.TEXTURE_3D||de===r.TEXTURE_2D_ARRAY?t.texImage3D(de,fe,ee,le,be,M.depth,0,we,ge,null):t.texImage2D(de,fe,ee,le,be,0,we,ge,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),ae(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,de,n.get(k).__webglTexture,0,z(M)):(de===r.TEXTURE_2D||de>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,de,n.get(k).__webglTexture,fe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(A,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let re=r.DEPTH_COMPONENT16;if(k||ae(M)){const de=M.depthTexture;de&&de.isDepthTexture&&(de.type===nn?re=r.DEPTH_COMPONENT32F:de.type===gn&&(re=r.DEPTH_COMPONENT24));const fe=z(M);ae(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,re,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,re,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const re=z(M);k&&ae(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,M.width,M.height):ae(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let de=0;de<re.length;de++){const fe=re[de],we=s.convert(fe.format,fe.colorSpace),ge=s.convert(fe.type),ee=H(fe.internalFormat,we,ge,fe.colorSpace),B=z(M);k&&ae(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,B,ee,M.width,M.height):ae(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B,ee,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ee,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function je(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);const re=n.get(M.depthTexture).__webglTexture,de=z(M);if(M.depthTexture.format===Pn)ae(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,re,0);else if(M.depthTexture.format===hi)ae(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function y(A){const M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");je(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=r.createRenderbuffer(),Y(M.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Y(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(A,M,k){const re=n.get(A);M!==void 0&&Re(re.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&y(A)}function X(A){const M=A.texture,k=n.get(A),re=n.get(M);A.addEventListener("dispose",P),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=M.version,o.memory.textures++);const de=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,we=E(A)||a;if(de){k.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ge]=[];for(let ee=0;ee<M.mipmaps.length;ee++)k.__webglFramebuffer[ge][ee]=r.createFramebuffer()}else k.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)k.__webglFramebuffer[ge]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(fe)if(i.drawBuffers){const ge=A.texture;for(let ee=0,B=ge.length;ee<B;ee++){const le=n.get(ge[ee]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ae(A)===!1){const ge=fe?M:[M];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<ge.length;ee++){const B=ge[ee];k.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);const le=s.convert(B.format,B.colorSpace),be=s.convert(B.type),xe=H(B.internalFormat,le,be,B.colorSpace,A.isXRRenderTarget===!0),ye=z(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,xe,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Ce(r.TEXTURE_CUBE_MAP,M,we);for(let ge=0;ge<6;ge++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Re(k.__webglFramebuffer[ge][ee],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ee);else Re(k.__webglFramebuffer[ge],A,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);L(M,we)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const ge=A.texture;for(let ee=0,B=ge.length;ee<B;ee++){const le=ge[ee],be=n.get(le);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),Ce(r.TEXTURE_2D,le,we),Re(k.__webglFramebuffer,A,le,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,0),L(le,we)&&T(r.TEXTURE_2D)}t.unbindTexture()}else{let ge=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ge=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,re.__webglTexture),Ce(ge,M,we),a&&M.mipmaps&&M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Re(k.__webglFramebuffer[ee],A,M,r.COLOR_ATTACHMENT0,ge,ee);else Re(k.__webglFramebuffer,A,M,r.COLOR_ATTACHMENT0,ge,0);L(M,we)&&T(ge),t.unbindTexture()}A.depthBuffer&&y(A)}function N(A){const M=E(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,de=k.length;re<de;re++){const fe=k[re];if(L(fe,M)){const we=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ge=n.get(fe).__webglTexture;t.bindTexture(we,ge),T(we),t.unbindTexture()}}}function C(A){if(a&&A.samples>0&&ae(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,re=A.height;let de=r.COLOR_BUFFER_BIT;const fe=[],we=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(A),ee=A.isWebGLMultipleRenderTargets===!0;if(ee)for(let B=0;B<M.length;B++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let B=0;B<M.length;B++){fe.push(r.COLOR_ATTACHMENT0+B),A.depthBuffer&&fe.push(we);const le=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(le===!1&&(A.depthBuffer&&(de|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(de|=r.STENCIL_BUFFER_BIT)),ee&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[B]),le===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[we]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[we])),ee){const be=n.get(M[B]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,k,re,0,0,k,re,de,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let B=0;B<M.length;B++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.RENDERBUFFER,ge.__webglColorRenderbuffer[B]);const le=n.get(M[B]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+B,r.TEXTURE_2D,le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function z(A){return Math.min(m,A.samples)}function ae(A){const M=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(A){const M=o.render.frame;_.get(A)!==M&&(_.set(A,M),A.update())}function q(A,M){const k=A.colorSpace,re=A.format,de=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===cs||k!==Xt&&k!==In&&(k===Je||k===fr?a===!1?e.has("EXT_sRGB")===!0&&re===zt?(A.format=cs,A.minFilter=Dt,A.generateMipmaps=!1):M=To.sRGBToLinear(M):(re!==zt||de!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=Q,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=I,this.setTexture3D=D,this.setTextureCube=ue,this.rebindTextures=Z,this.setupRenderTarget=X,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=y,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=ae}const hp=0,lt=1;function up(r,e,t){const n=t.isWebGL2;function i(s,o=In){let a;const l=o===Je||o===fr?lt:hp;if(s===vn)return r.UNSIGNED_BYTE;if(s===vo)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xo)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hl)return r.BYTE;if(s===Gl)return r.SHORT;if(s===gs)return r.UNSIGNED_SHORT;if(s===_o)return r.INT;if(s===gn)return r.UNSIGNED_INT;if(s===nn)return r.FLOAT;if(s===ci)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vl)return r.ALPHA;if(s===zt)return r.RGBA;if(s===Wl)return r.LUMINANCE;if(s===Xl)return r.LUMINANCE_ALPHA;if(s===Pn)return r.DEPTH_COMPONENT;if(s===hi)return r.DEPTH_STENCIL;if(s===cs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jl)return r.RED;if(s===yo)return r.RED_INTEGER;if(s===ql)return r.RG;if(s===bo)return r.RG_INTEGER;if(s===So)return r.RGBA_INTEGER;if(s===Mr||s===wr||s===Tr||s===Ar)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Mr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ar)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Mr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ar)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fs||s===ks||s===Bs||s===zs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Fs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ks)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hs||s===Gs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hs)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gs)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vs||s===Ws||s===Xs||s===js||s===qs||s===Ys||s===Zs||s===$s||s===Ks||s===Js||s===Qs||s===ea||s===ta||s===na)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vs)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ws)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xs)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===js)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qs)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ys)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zs)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$s)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ks)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Js)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qs)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ea)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ta)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===na)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rr||s===ia||s===ra)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Rr)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ia)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zl||s===sa||s===aa||s===oa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Rr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===sa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===aa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===oa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cn?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class dp extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fp={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const d=t.getJointPose(g,n),h=this._getHandJoint(c,g);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],f=u.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xo extends mt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Pn,u!==Pn&&u!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pn&&(n=gn),n===void 0&&u===hi&&(n=Cn),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:et,this.minFilter=l!==void 0?l:et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pp extends Un{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,m=null,f=null,p=null,_=null;const g=t.getContextAttributes();let d=null,h=null;const v=[],b=[],E=new Rt;E.layers.enable(1),E.viewport=new Qe;const w=new Rt;w.layers.enable(2),w.viewport=new Qe;const L=[E,w],T=new dp;T.layers.enable(1),T.layers.enable(2);let H=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let D=v[I];return D===void 0&&(D=new Kr,v[I]=D),D.getTargetRaySpace()},this.getControllerGrip=function(I){let D=v[I];return D===void 0&&(D=new Kr,v[I]=D),D.getGripSpace()},this.getHand=function(I){let D=v[I];return D===void 0&&(D=new Kr,v[I]=D),D.getHandSpace()};function R(I){const D=b.indexOf(I.inputSource);if(D===-1)return;const ue=v[D];ue!==void 0&&(ue.update(I.inputSource,I.frame,c||o),ue.dispatchEvent({type:I.type,data:I.inputSource}))}function J(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",P);for(let I=0;I<v.length;I++){const D=b[I];D!==null&&(b[I]=null,v[I].disconnect(D))}H=null,S=null,e.setRenderTarget(d),p=null,f=null,m=null,i=null,h=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return m},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",J),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const D={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,D),i.updateRenderState({baseLayer:p}),h=new on(p.framebufferWidth,p.framebufferHeight,{format:zt,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let D=null,ue=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=g.stencil?hi:Pn,ue=g.stencil?Cn:gn);const ne={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};m=new XRWebGLBinding(i,t),f=m.createProjectionLayer(ne),i.updateRenderState({layers:[f]}),h=new on(f.textureWidth,f.textureHeight,{format:zt,type:vn,depthTexture:new Xo(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Me=e.properties.get(h);Me.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(I){for(let D=0;D<I.removed.length;D++){const ue=I.removed[D],oe=b.indexOf(ue);oe>=0&&(b[oe]=null,v[oe].disconnect(ue))}for(let D=0;D<I.added.length;D++){const ue=I.added[D];let oe=b.indexOf(ue);if(oe===-1){for(let Me=0;Me<v.length;Me++)if(Me>=b.length){b.push(ue),oe=Me;break}else if(b[Me]===null){b[Me]=ue,oe=Me;break}if(oe===-1)break}const ne=v[oe];ne&&ne.connect(ue)}}const O=new j,x=new j;function F(I,D,ue){O.setFromMatrixPosition(D.matrixWorld),x.setFromMatrixPosition(ue.matrixWorld);const oe=O.distanceTo(x),ne=D.projectionMatrix.elements,Me=ue.projectionMatrix.elements,Ce=ne[14]/(ne[10]-1),ve=ne[14]/(ne[10]+1),Te=(ne[9]+1)/ne[5],Ve=(ne[9]-1)/ne[5],Re=(ne[8]-1)/ne[0],Y=(Me[8]+1)/Me[0],je=Ce*Re,y=Ce*Y,Z=oe/(-Re+Y),X=Z*-Re;D.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(X),I.translateZ(Z),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const N=Ce+Z,C=ve+Z,z=je-X,ae=y+(oe-X),pe=Te*ve/C*N,q=Ve*ve/C*N;I.projectionMatrix.makePerspective(z,ae,pe,q,N,C),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function ie(I,D){D===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(D.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;T.near=w.near=E.near=I.near,T.far=w.far=E.far=I.far,(H!==T.near||S!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),H=T.near,S=T.far);const D=I.parent,ue=T.cameras;ie(T,D);for(let oe=0;oe<ue.length;oe++)ie(ue[oe],D);ue.length===2?F(T,E,w):T.projectionMatrix.copy(E.projectionMatrix),G(I,T,D)};function G(I,D,ue){ue===null?I.matrix.copy(D.matrixWorld):(I.matrix.copy(ue.matrixWorld),I.matrix.invert(),I.matrix.multiply(D.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(D.projectionMatrix),I.projectionMatrixInverse.copy(D.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=hs*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)};let Q=null;function W(I,D){if(u=D.getViewerPose(c||o),_=D,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let oe=!1;ue.length!==T.cameras.length&&(T.cameras.length=0,oe=!0);for(let ne=0;ne<ue.length;ne++){const Me=ue[ne];let Ce=null;if(p!==null)Ce=p.getViewport(Me);else{const Te=m.getViewSubImage(f,Me);Ce=Te.viewport,ne===0&&(e.setRenderTargetTextures(h,Te.colorTexture,f.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(h))}let ve=L[ne];ve===void 0&&(ve=new Rt,ve.layers.enable(ne),ve.viewport=new Qe,L[ne]=ve),ve.matrix.fromArray(Me.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(Me.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ne===0&&(T.matrix.copy(ve.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),oe===!0&&T.cameras.push(ve)}}for(let ue=0;ue<v.length;ue++){const oe=b[ue],ne=v[ue];oe!==null&&ne!==void 0&&ne.update(oe,D,c||o)}Q&&Q(I,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),_=null}const K=new Bo;K.setAnimationLoop(W),this.setAnimationLoop=function(I){Q=I},this.dispose=function(){}}}function mp(r,e){function t(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,No(r)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function i(d,h,v,b,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(d,h):h.isMeshToonMaterial?(s(d,h),m(d,h)):h.isMeshPhongMaterial?(s(d,h),u(d,h)):h.isMeshStandardMaterial?(s(d,h),f(d,h),h.isMeshPhysicalMaterial&&p(d,h,E)):h.isMeshMatcapMaterial?(s(d,h),_(d,h)):h.isMeshDepthMaterial?s(d,h):h.isMeshDistanceMaterial?(s(d,h),g(d,h)):h.isMeshNormalMaterial?s(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&a(d,h)):h.isPointsMaterial?l(d,h,v,b):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,t(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===Et&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,t(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===Et&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,t(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,t(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap){d.lightMap.value=h.lightMap;const b=r._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=h.lightMapIntensity*b,t(h.lightMap,d.lightMapTransform)}h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform))}function a(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,v,b){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*v,d.scale.value=b*.5,h.map&&(d.map.value=h.map,t(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,t(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,t(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function m(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function f(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,d.roughnessMapTransform)),e.get(h).envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function p(d,h,v){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Et&&d.clearcoatNormalScale.value.negate())),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,h){h.matcap&&(d.matcap.value=h.matcap)}function g(d,h){const v=e.get(h).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gp(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,b){const E=b.program;n.uniformBlockBinding(v,E)}function c(v,b){let E=i[v.id];E===void 0&&(_(v),E=u(v),i[v.id]=E,v.addEventListener("dispose",d));const w=b.program;n.updateUBOMapping(v,w);const L=e.render.frame;s[v.id]!==L&&(f(v),s[v.id]=L)}function u(v){const b=m();v.__bindingPointIndex=b;const E=r.createBuffer(),w=v.__size,L=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,w,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,E),E}function m(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const b=i[v.id],E=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let L=0,T=E.length;L<T;L++){const H=E[L];if(p(H,L,w)===!0){const S=H.__offset,R=Array.isArray(H.value)?H.value:[H.value];let J=0;for(let P=0;P<R.length;P++){const O=R[P],x=g(O);typeof O=="number"?(H.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,S+J,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=O.elements[0],H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=O.elements[0],H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=O.elements[0]):(O.toArray(H.__data,J),J+=x.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,H.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,b,E){const w=v.value;if(E[b]===void 0){if(typeof w=="number")E[b]=w;else{const L=Array.isArray(w)?w:[w],T=[];for(let H=0;H<L.length;H++)T.push(L[H].clone());E[b]=T}return!0}else if(typeof w=="number"){if(E[b]!==w)return E[b]=w,!0}else{const L=Array.isArray(E[b])?E[b]:[E[b]],T=Array.isArray(w)?w:[w];for(let H=0;H<L.length;H++){const S=L[H];if(S.equals(T[H])===!1)return S.copy(T[H]),!0}}return!1}function _(v){const b=v.uniforms;let E=0;const w=16;let L=0;for(let T=0,H=b.length;T<H;T++){const S=b[T],R={boundary:0,storage:0},J=Array.isArray(S.value)?S.value:[S.value];for(let P=0,O=J.length;P<O;P++){const x=J[P],F=g(x);R.boundary+=F.boundary,R.storage+=F.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=E,T>0){L=E%w;const P=w-L;L!==0&&P-R.boundary<0&&(E+=w-L,S.__offset=E)}E+=R.storage}return L=E%w,L>0&&(E+=w-L),v.__size=E,v.__cache={},this}function g(v){const b={boundary:0,storage:0};return typeof v=="number"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function d(v){const b=v.target;b.removeEventListener("dispose",d);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function h(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:h}}class jo{constructor(e={}){const{canvas:t=hc(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Je,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const b=this;let E=!1,w=0,L=0,T=null,H=-1,S=null;const R=new Qe,J=new Qe;let P=null;const O=new Xe(0);let x=0,F=t.width,ie=t.height,G=1,Q=null,W=null;const K=new Qe(0,0,F,ie),I=new Qe(0,0,F,ie);let D=!1;const ue=new vs;let oe=!1,ne=!1,Me=null;const Ce=new rt,ve=new Pe,Te=new j,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return T===null?G:1}let Y=n;function je(U,$){for(let ce=0;ce<U.length;ce++){const te=U[ce],he=t.getContext(te,$);if(he!==null)return he}return null}try{const U={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ms}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",me,!1),Y===null){const $=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&$.shift(),Y=je($,U),Y===null)throw je($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let y,Z,X,N,C,z,ae,pe,q,A,M,k,re,de,fe,we,ge,ee,B,le,be,xe,ye,Ie;function ze(){y=new Td(Y),Z=new yd(Y,y,e),y.init(Z),xe=new up(Y,y,Z),X=new lp(Y,y,Z),N=new Cd(Y),C=new Yf,z=new cp(Y,y,X,C,Z,xe,N),ae=new Sd(b),pe=new wd(b),q=new Bc(Y,Z),ye=new vd(Y,y,q,Z),A=new Ad(Y,q,N,ye),M=new Dd(Y,A,q,N),B=new Id(Y,Z,z),we=new bd(C),k=new qf(b,ae,pe,y,Z,ye,we),re=new mp(b,C),de=new $f,fe=new np(y,Z),ee=new _d(b,ae,pe,X,M,f,l),ge=new op(b,M,Z),Ie=new gp(Y,N,Z,X),le=new xd(Y,y,N,Z),be=new Rd(Y,y,N,Z),N.programs=k.programs,b.capabilities=Z,b.extensions=y,b.properties=C,b.renderLists=de,b.shadowMap=ge,b.state=X,b.info=N}ze();const V=new pp(b,Y);this.xr=V,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const U=y.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=y.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(U){U!==void 0&&(G=U,this.setSize(F,ie,!1))},this.getSize=function(U){return U.set(F,ie)},this.setSize=function(U,$,ce=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=U,ie=$,t.width=Math.floor(U*G),t.height=Math.floor($*G),ce===!0&&(t.style.width=U+"px",t.style.height=$+"px"),this.setViewport(0,0,U,$)},this.getDrawingBufferSize=function(U){return U.set(F*G,ie*G).floor()},this.setDrawingBufferSize=function(U,$,ce){F=U,ie=$,G=ce,t.width=Math.floor(U*ce),t.height=Math.floor($*ce),this.setViewport(0,0,U,$)},this.getCurrentViewport=function(U){return U.copy(R)},this.getViewport=function(U){return U.copy(K)},this.setViewport=function(U,$,ce,te){U.isVector4?K.set(U.x,U.y,U.z,U.w):K.set(U,$,ce,te),X.viewport(R.copy(K).multiplyScalar(G).floor())},this.getScissor=function(U){return U.copy(I)},this.setScissor=function(U,$,ce,te){U.isVector4?I.set(U.x,U.y,U.z,U.w):I.set(U,$,ce,te),X.scissor(J.copy(I).multiplyScalar(G).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(U){X.setScissorTest(D=U)},this.setOpaqueSort=function(U){Q=U},this.setTransparentSort=function(U){W=U},this.getClearColor=function(U){return U.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(U=!0,$=!0,ce=!0){let te=0;if(U){let he=!1;if(T!==null){const Ae=T.texture.format;he=Ae===So||Ae===bo||Ae===yo}if(he){const Ae=T.texture.type,Le=Ae===vn||Ae===gn||Ae===gs||Ae===Cn||Ae===vo||Ae===xo,Ue=ee.getClearColor(),Ne=ee.getClearAlpha(),Ge=Ue.r,De=Ue.g,Oe=Ue.b;Le?(p[0]=Ge,p[1]=De,p[2]=Oe,p[3]=Ne,Y.clearBufferuiv(Y.COLOR,0,p)):(_[0]=Ge,_[1]=De,_[2]=Oe,_[3]=Ne,Y.clearBufferiv(Y.COLOR,0,_))}else te|=Y.COLOR_BUFFER_BIT}$&&(te|=Y.DEPTH_BUFFER_BIT),ce&&(te|=Y.STENCIL_BUFFER_BIT),Y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",me,!1),de.dispose(),fe.dispose(),C.dispose(),ae.dispose(),pe.dispose(),M.dispose(),ye.dispose(),Ie.dispose(),k.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ke),V.removeEventListener("sessionend",Gt),Me&&(Me.dispose(),Me=null),_t.stop()};function Se(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const U=N.autoReset,$=ge.enabled,ce=ge.autoUpdate,te=ge.needsUpdate,he=ge.type;ze(),N.autoReset=U,ge.enabled=$,ge.autoUpdate=ce,ge.needsUpdate=te,ge.type=he}function me(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function _e(U){const $=U.target;$.removeEventListener("dispose",_e),He($)}function He(U){qe(U),C.remove(U)}function qe(U){const $=C.get(U).programs;$!==void 0&&($.forEach(function(ce){k.releaseProgram(ce)}),U.isShaderMaterial&&k.releaseShaderCache(U))}this.renderBufferDirect=function(U,$,ce,te,he,Ae){$===null&&($=Ve);const Le=he.isMesh&&he.matrixWorld.determinant()<0,Ue=il(U,$,ce,te,he);X.setMaterial(te,Le);let Ne=ce.index,Ge=1;if(te.wireframe===!0){if(Ne=A.getWireframeAttribute(ce),Ne===void 0)return;Ge=2}const De=ce.drawRange,Oe=ce.attributes.position;let tt=De.start*Ge,nt=(De.start+De.count)*Ge;Ae!==null&&(tt=Math.max(tt,Ae.start*Ge),nt=Math.min(nt,(Ae.start+Ae.count)*Ge)),Ne!==null?(tt=Math.max(tt,0),nt=Math.min(nt,Ne.count)):Oe!=null&&(tt=Math.max(tt,0),nt=Math.min(nt,Oe.count));const Ct=nt-tt;if(Ct<0||Ct===1/0)return;ye.setup(he,te,Ue,ce,Ne);let jt,st=le;if(Ne!==null&&(jt=q.get(Ne),st=be,st.setIndex(jt)),he.isMesh)te.wireframe===!0?(X.setLineWidth(te.wireframeLinewidth*Re()),st.setMode(Y.LINES)):st.setMode(Y.TRIANGLES);else if(he.isLine){let We=te.linewidth;We===void 0&&(We=1),X.setLineWidth(We*Re()),he.isLineSegments?st.setMode(Y.LINES):he.isLineLoop?st.setMode(Y.LINE_LOOP):st.setMode(Y.LINE_STRIP)}else he.isPoints?st.setMode(Y.POINTS):he.isSprite&&st.setMode(Y.TRIANGLES);if(he.isInstancedMesh)st.renderInstances(tt,Ct,he.count);else if(ce.isInstancedBufferGeometry){const We=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,vr=Math.min(ce.instanceCount,We);st.renderInstances(tt,Ct,vr)}else st.render(tt,Ct)},this.compile=function(U,$){function ce(te,he,Ae){te.transparent===!0&&te.side===Nt&&te.forceSinglePass===!1?(te.side=Et,te.needsUpdate=!0,Ci(te,he,Ae),te.side=Wt,te.needsUpdate=!0,Ci(te,he,Ae),te.side=Nt):Ci(te,he,Ae)}d=fe.get(U),d.init(),v.push(d),U.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(d.pushLight(te),te.castShadow&&d.pushShadow(te))}),d.setupLights(b._useLegacyLights),U.traverse(function(te){const he=te.material;if(he)if(Array.isArray(he))for(let Ae=0;Ae<he.length;Ae++){const Le=he[Ae];ce(Le,U,te)}else ce(he,U,te)}),v.pop(),d=null};let Ze=null;function Mt(U){Ze&&Ze(U)}function Ke(){_t.stop()}function Gt(){_t.start()}const _t=new Bo;_t.setAnimationLoop(Mt),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(U){Ze=U,V.setAnimationLoop(U),U===null?_t.stop():_t.start()},V.addEventListener("sessionstart",Ke),V.addEventListener("sessionend",Gt),this.render=function(U,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera($),$=V.getCamera()),U.isScene===!0&&U.onBeforeRender(b,U,$,T),d=fe.get(U,v.length),d.init(),v.push(d),Ce.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ue.setFromProjectionMatrix(Ce),ne=this.localClippingEnabled,oe=we.init(this.clippingPlanes,ne),g=de.get(U,h.length),g.init(),h.push(g),Es(U,$,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(Q,W),this.info.render.frame++,oe===!0&&we.beginShadows();const ce=d.state.shadowsArray;if(ge.render(ce,U,$),oe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(g,U),d.setupLights(b._useLegacyLights),$.isArrayCamera){const te=$.cameras;for(let he=0,Ae=te.length;he<Ae;he++){const Le=te[he];Ms(g,U,Le,Le.viewport)}}else Ms(g,U,$);T!==null&&(z.updateMultisampleRenderTarget(T),z.updateRenderTargetMipmap(T)),U.isScene===!0&&U.onAfterRender(b,U,$),ye.resetDefaultState(),H=-1,S=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Es(U,$,ce,te){if(U.visible===!1)return;if(U.layers.test($.layers)){if(U.isGroup)ce=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update($);else if(U.isLight)d.pushLight(U),U.castShadow&&d.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ue.intersectsSprite(U)){te&&Te.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Ce);const Le=M.update(U),Ue=U.material;Ue.visible&&g.push(U,Le,Ue,ce,Te.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ue.intersectsObject(U))){const Le=M.update(U),Ue=U.material;if(te&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Te.copy(U.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Te.copy(Le.boundingSphere.center)),Te.applyMatrix4(U.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ue)){const Ne=Le.groups;for(let Ge=0,De=Ne.length;Ge<De;Ge++){const Oe=Ne[Ge],tt=Ue[Oe.materialIndex];tt&&tt.visible&&g.push(U,Le,tt,ce,Te.z,Oe)}}else Ue.visible&&g.push(U,Le,Ue,ce,Te.z,null)}}const Ae=U.children;for(let Le=0,Ue=Ae.length;Le<Ue;Le++)Es(Ae[Le],$,ce,te)}function Ms(U,$,ce,te){const he=U.opaque,Ae=U.transmissive,Le=U.transparent;d.setupLightsView(ce),oe===!0&&we.setGlobalState(b.clippingPlanes,ce),Ae.length>0&&nl(he,Ae,$,ce),te&&X.viewport(R.copy(te)),he.length>0&&Ri(he,$,ce),Ae.length>0&&Ri(Ae,$,ce),Le.length>0&&Ri(Le,$,ce),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function nl(U,$,ce,te){const he=Z.isWebGL2;Me===null&&(Me=new on(1,1,{generateMipmaps:!0,type:y.has("EXT_color_buffer_half_float")?ci:vn,minFilter:wi,samples:he?4:0})),b.getDrawingBufferSize(ve),he?Me.setSize(ve.x,ve.y):Me.setSize(us(ve.x),us(ve.y));const Ae=b.getRenderTarget();b.setRenderTarget(Me),b.getClearColor(O),x=b.getClearAlpha(),x<1&&b.setClearColor(16777215,.5),b.clear();const Le=b.toneMapping;b.toneMapping=_n,Ri(U,ce,te),z.updateMultisampleRenderTarget(Me),z.updateRenderTargetMipmap(Me);let Ue=!1;for(let Ne=0,Ge=$.length;Ne<Ge;Ne++){const De=$[Ne],Oe=De.object,tt=De.geometry,nt=De.material,Ct=De.group;if(nt.side===Nt&&Oe.layers.test(te.layers)){const jt=nt.side;nt.side=Et,nt.needsUpdate=!0,ws(Oe,ce,te,tt,nt,Ct),nt.side=jt,nt.needsUpdate=!0,Ue=!0}}Ue===!0&&(z.updateMultisampleRenderTarget(Me),z.updateRenderTargetMipmap(Me)),b.setRenderTarget(Ae),b.setClearColor(O,x),b.toneMapping=Le}function Ri(U,$,ce){const te=$.isScene===!0?$.overrideMaterial:null;for(let he=0,Ae=U.length;he<Ae;he++){const Le=U[he],Ue=Le.object,Ne=Le.geometry,Ge=te===null?Le.material:te,De=Le.group;Ue.layers.test(ce.layers)&&ws(Ue,$,ce,Ne,Ge,De)}}function ws(U,$,ce,te,he,Ae){U.onBeforeRender(b,$,ce,te,he,Ae),U.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),he.onBeforeRender(b,$,ce,te,U,Ae),he.transparent===!0&&he.side===Nt&&he.forceSinglePass===!1?(he.side=Et,he.needsUpdate=!0,b.renderBufferDirect(ce,$,te,he,U,Ae),he.side=Wt,he.needsUpdate=!0,b.renderBufferDirect(ce,$,te,he,U,Ae),he.side=Nt):b.renderBufferDirect(ce,$,te,he,U,Ae),U.onAfterRender(b,$,ce,te,he,Ae)}function Ci(U,$,ce){$.isScene!==!0&&($=Ve);const te=C.get(U),he=d.state.lights,Ae=d.state.shadowsArray,Le=he.state.version,Ue=k.getParameters(U,he.state,Ae,$,ce),Ne=k.getProgramCacheKey(Ue);let Ge=te.programs;te.environment=U.isMeshStandardMaterial?$.environment:null,te.fog=$.fog,te.envMap=(U.isMeshStandardMaterial?pe:ae).get(U.envMap||te.environment),Ge===void 0&&(U.addEventListener("dispose",_e),Ge=new Map,te.programs=Ge);let De=Ge.get(Ne);if(De!==void 0){if(te.currentProgram===De&&te.lightsStateVersion===Le)return Ts(U,Ue),De}else Ue.uniforms=k.getUniforms(U),U.onBuild(ce,Ue,b),U.onBeforeCompile(Ue,b),De=k.acquireProgram(Ue,Ne),Ge.set(Ne,De),te.uniforms=Ue.uniforms;const Oe=te.uniforms;(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Oe.clippingPlanes=we.uniform),Ts(U,Ue),te.needsLights=sl(U),te.lightsStateVersion=Le,te.needsLights&&(Oe.ambientLightColor.value=he.state.ambient,Oe.lightProbe.value=he.state.probe,Oe.directionalLights.value=he.state.directional,Oe.directionalLightShadows.value=he.state.directionalShadow,Oe.spotLights.value=he.state.spot,Oe.spotLightShadows.value=he.state.spotShadow,Oe.rectAreaLights.value=he.state.rectArea,Oe.ltc_1.value=he.state.rectAreaLTC1,Oe.ltc_2.value=he.state.rectAreaLTC2,Oe.pointLights.value=he.state.point,Oe.pointLightShadows.value=he.state.pointShadow,Oe.hemisphereLights.value=he.state.hemi,Oe.directionalShadowMap.value=he.state.directionalShadowMap,Oe.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Oe.spotShadowMap.value=he.state.spotShadowMap,Oe.spotLightMatrix.value=he.state.spotLightMatrix,Oe.spotLightMap.value=he.state.spotLightMap,Oe.pointShadowMap.value=he.state.pointShadowMap,Oe.pointShadowMatrix.value=he.state.pointShadowMatrix);const tt=De.getUniforms(),nt=rr.seqWithValue(tt.seq,Oe);return te.currentProgram=De,te.uniformsList=nt,De}function Ts(U,$){const ce=C.get(U);ce.outputColorSpace=$.outputColorSpace,ce.instancing=$.instancing,ce.instancingColor=$.instancingColor,ce.skinning=$.skinning,ce.morphTargets=$.morphTargets,ce.morphNormals=$.morphNormals,ce.morphColors=$.morphColors,ce.morphTargetsCount=$.morphTargetsCount,ce.numClippingPlanes=$.numClippingPlanes,ce.numIntersection=$.numClipIntersection,ce.vertexAlphas=$.vertexAlphas,ce.vertexTangents=$.vertexTangents,ce.toneMapping=$.toneMapping}function il(U,$,ce,te,he){$.isScene!==!0&&($=Ve),z.resetTextureUnits();const Ae=$.fog,Le=te.isMeshStandardMaterial?$.environment:null,Ue=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Xt,Ne=(te.isMeshStandardMaterial?pe:ae).get(te.envMap||Le),Ge=te.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,De=!!ce.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Oe=!!ce.morphAttributes.position,tt=!!ce.morphAttributes.normal,nt=!!ce.morphAttributes.color;let Ct=_n;te.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ct=b.toneMapping);const jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,st=jt!==void 0?jt.length:0,We=C.get(te),vr=d.state.lights;if(oe===!0&&(ne===!0||U!==S)){const wt=U===S&&te.id===H;we.setState(te,U,wt)}let at=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==vr.state.version||We.outputColorSpace!==Ue||he.isInstancedMesh&&We.instancing===!1||!he.isInstancedMesh&&We.instancing===!0||he.isSkinnedMesh&&We.skinning===!1||!he.isSkinnedMesh&&We.skinning===!0||he.isInstancedMesh&&We.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&We.instancingColor===!1&&he.instanceColor!==null||We.envMap!==Ne||te.fog===!0&&We.fog!==Ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==we.numPlanes||We.numIntersection!==we.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==De||We.morphTargets!==Oe||We.morphNormals!==tt||We.morphColors!==nt||We.toneMapping!==Ct||Z.isWebGL2===!0&&We.morphTargetsCount!==st)&&(at=!0):(at=!0,We.__version=te.version);let yn=We.currentProgram;at===!0&&(yn=Ci(te,$,he));let As=!1,pi=!1,xr=!1;const vt=yn.getUniforms(),bn=We.uniforms;if(X.useProgram(yn.program)&&(As=!0,pi=!0,xr=!0),te.id!==H&&(H=te.id,pi=!0),As||S!==U){vt.setValue(Y,"projectionMatrix",U.projectionMatrix),vt.setValue(Y,"viewMatrix",U.matrixWorldInverse);const wt=vt.map.cameraPosition;wt!==void 0&&wt.setValue(Y,Te.setFromMatrixPosition(U.matrixWorld)),Z.logarithmicDepthBuffer&&vt.setValue(Y,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&vt.setValue(Y,"isOrthographic",U.isOrthographicCamera===!0),S!==U&&(S=U,pi=!0,xr=!0)}if(he.isSkinnedMesh){vt.setOptional(Y,he,"bindMatrix"),vt.setOptional(Y,he,"bindMatrixInverse");const wt=he.skeleton;wt&&(Z.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),vt.setValue(Y,"boneTexture",wt.boneTexture,z),vt.setValue(Y,"boneTextureSize",wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yr=ce.morphAttributes;if((yr.position!==void 0||yr.normal!==void 0||yr.color!==void 0&&Z.isWebGL2===!0)&&B.update(he,ce,yn),(pi||We.receiveShadow!==he.receiveShadow)&&(We.receiveShadow=he.receiveShadow,vt.setValue(Y,"receiveShadow",he.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(bn.envMap.value=Ne,bn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),pi&&(vt.setValue(Y,"toneMappingExposure",b.toneMappingExposure),We.needsLights&&rl(bn,xr),Ae&&te.fog===!0&&re.refreshFogUniforms(bn,Ae),re.refreshMaterialUniforms(bn,te,G,ie,Me),rr.upload(Y,We.uniformsList,bn,z)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(rr.upload(Y,We.uniformsList,bn,z),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&vt.setValue(Y,"center",he.center),vt.setValue(Y,"modelViewMatrix",he.modelViewMatrix),vt.setValue(Y,"normalMatrix",he.normalMatrix),vt.setValue(Y,"modelMatrix",he.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const wt=te.uniformsGroups;for(let br=0,al=wt.length;br<al;br++)if(Z.isWebGL2){const Rs=wt[br];Ie.update(Rs,yn),Ie.bind(Rs,yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yn}function rl(U,$){U.ambientLightColor.needsUpdate=$,U.lightProbe.needsUpdate=$,U.directionalLights.needsUpdate=$,U.directionalLightShadows.needsUpdate=$,U.pointLights.needsUpdate=$,U.pointLightShadows.needsUpdate=$,U.spotLights.needsUpdate=$,U.spotLightShadows.needsUpdate=$,U.rectAreaLights.needsUpdate=$,U.hemisphereLights.needsUpdate=$}function sl(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(U,$,ce){C.get(U.texture).__webglTexture=$,C.get(U.depthTexture).__webglTexture=ce;const te=C.get(U);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ce===void 0,te.__autoAllocateDepthBuffer||y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,$){const ce=C.get(U);ce.__webglFramebuffer=$,ce.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(U,$=0,ce=0){T=U,w=$,L=ce;let te=!0,he=null,Ae=!1,Le=!1;if(U){const Ne=C.get(U);Ne.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(Y.FRAMEBUFFER,null),te=!1):Ne.__webglFramebuffer===void 0?z.setupRenderTarget(U):Ne.__hasExternalTextures&&z.rebindTextures(U,C.get(U.texture).__webglTexture,C.get(U.depthTexture).__webglTexture);const Ge=U.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const De=C.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(De[$])?he=De[$][ce]:he=De[$],Ae=!0):Z.isWebGL2&&U.samples>0&&z.useMultisampledRTT(U)===!1?he=C.get(U).__webglMultisampledFramebuffer:Array.isArray(De)?he=De[ce]:he=De,R.copy(U.viewport),J.copy(U.scissor),P=U.scissorTest}else R.copy(K).multiplyScalar(G).floor(),J.copy(I).multiplyScalar(G).floor(),P=D;if(X.bindFramebuffer(Y.FRAMEBUFFER,he)&&Z.drawBuffers&&te&&X.drawBuffers(U,he),X.viewport(R),X.scissor(J),X.setScissorTest(P),Ae){const Ne=C.get(U.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ne.__webglTexture,ce)}else if(Le){const Ne=C.get(U.texture),Ge=$||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ne.__webglTexture,ce||0,Ge)}H=-1},this.readRenderTargetPixels=function(U,$,ce,te,he,Ae,Le){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=C.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){X.bindFramebuffer(Y.FRAMEBUFFER,Ue);try{const Ne=U.texture,Ge=Ne.format,De=Ne.type;if(Ge!==zt&&xe.convert(Ge)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=De===ci&&(y.has("EXT_color_buffer_half_float")||Z.isWebGL2&&y.has("EXT_color_buffer_float"));if(De!==vn&&xe.convert(De)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===nn&&(Z.isWebGL2||y.has("OES_texture_float")||y.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=U.width-te&&ce>=0&&ce<=U.height-he&&Y.readPixels($,ce,te,he,xe.convert(Ge),xe.convert(De),Ae)}finally{const Ne=T!==null?C.get(T).__webglFramebuffer:null;X.bindFramebuffer(Y.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(U,$,ce=0){const te=Math.pow(2,-ce),he=Math.floor($.image.width*te),Ae=Math.floor($.image.height*te);z.setTexture2D($,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ce,0,0,U.x,U.y,he,Ae),X.unbindTexture()},this.copyTextureToTexture=function(U,$,ce,te=0){const he=$.image.width,Ae=$.image.height,Le=xe.convert(ce.format),Ue=xe.convert(ce.type);z.setTexture2D(ce,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ce.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ce.unpackAlignment),$.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,te,U.x,U.y,he,Ae,Le,Ue,$.image.data):$.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,te,U.x,U.y,$.mipmaps[0].width,$.mipmaps[0].height,Le,$.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,te,U.x,U.y,Le,Ue,$.image),te===0&&ce.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(U,$,ce,te,he=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=U.max.x-U.min.x+1,Le=U.max.y-U.min.y+1,Ue=U.max.z-U.min.z+1,Ne=xe.convert(te.format),Ge=xe.convert(te.type);let De;if(te.isData3DTexture)z.setTexture3D(te,0),De=Y.TEXTURE_3D;else if(te.isDataArrayTexture)z.setTexture2DArray(te,0),De=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,te.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,te.unpackAlignment);const Oe=Y.getParameter(Y.UNPACK_ROW_LENGTH),tt=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),nt=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ct=Y.getParameter(Y.UNPACK_SKIP_ROWS),jt=Y.getParameter(Y.UNPACK_SKIP_IMAGES),st=ce.isCompressedTexture?ce.mipmaps[0]:ce.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,st.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,st.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,U.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,U.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,U.min.z),ce.isDataTexture||ce.isData3DTexture?Y.texSubImage3D(De,he,$.x,$.y,$.z,Ae,Le,Ue,Ne,Ge,st.data):ce.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(De,he,$.x,$.y,$.z,Ae,Le,Ue,Ne,st.data)):Y.texSubImage3D(De,he,$.x,$.y,$.z,Ae,Le,Ue,Ne,Ge,st),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Oe),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,tt),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,nt),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ct),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,jt),he===0&&te.generateMipmaps&&Y.generateMipmap(De),X.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?z.setTextureCube(U,0):U.isData3DTexture?z.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?z.setTexture2DArray(U,0):z.setTexture2D(U,0),X.unbindTexture()},this.resetState=function(){w=0,L=0,T=null,X.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Je?Ln:Eo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ln?Je:Xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _p extends jo{}_p.prototype.isWebGL1Renderer=!0;class vp extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ls,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new j;class ur{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),s=Ye(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ur(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qo extends di{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qn;const xi=new j,ei=new j,ti=new j,ni=new Pe,yi=new Pe,Yo=new rt,Ki=new j,bi=new j,Ji=new j,ja=new Pe,Jr=new Pe,qa=new Pe;class yp extends gt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",Qn===void 0){Qn=new cn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xp(t,5);Qn.setIndex([0,1,2,0,2,3]),Qn.setAttribute("position",new ur(n,3,0,!1)),Qn.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=Qn,this.material=e!==void 0?e:new qo,this.center=new Pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ei.setFromMatrixScale(this.matrixWorld),Yo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ei.multiplyScalar(-ti.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Qi(Ki.set(-.5,-.5,0),ti,o,ei,i,s),Qi(bi.set(.5,-.5,0),ti,o,ei,i,s),Qi(Ji.set(.5,.5,0),ti,o,ei,i,s),ja.set(0,0),Jr.set(1,0),qa.set(1,1);let a=e.ray.intersectTriangle(Ki,bi,Ji,!1,xi);if(a===null&&(Qi(bi.set(-.5,.5,0),ti,o,ei,i,s),Jr.set(0,1),a=e.ray.intersectTriangle(Ki,Ji,bi,!1,xi),a===null))return;const l=e.ray.origin.distanceTo(xi);l<e.near||l>e.far||t.push({distance:l,point:xi.clone(),uv:Ut.getInterpolation(xi,Ki,bi,Ji,ja,Jr,qa,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qi(r,e,t,n,i,s){ni.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(yi.x=s*ni.x-i*ni.y,yi.y=i*ni.x+s*ni.y):yi.copy(ni),r.copy(e),r.x+=yi.x,r.y+=yi.y,r.applyMatrix4(Yo)}class sr extends mt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ti extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mo,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zo extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Qr=new rt,Ya=new j,Za=new j;class bp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),Qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new rt,Si=new j,es=new j;class Sp extends bp{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Si.setFromMatrixPosition(e.matrixWorld),n.position.copy(Si),es.copy(n.position),es.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(es),n.updateMatrixWorld(),i.makeTranslation(-Si.x,-Si.y,-Si.z),$a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a)}}class Ep extends Zo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mp extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $o{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ka(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ka();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ka(){return(typeof performance>"u"?Date:performance).now()}class Ja{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ms}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ms);function bs(r,e,t,n,i,s,o,a){const l=(T,H,S,R)=>[new Pe(T/o,1-R/a),new Pe(S/o,1-R/a),new Pe(S/o,1-H/a),new Pe(T/o,1-H/a)],c=l(e+s,t,e+n+s,t+s),u=l(e+n+s,t,e+n*2+s,t+s),m=l(e,t+s,e+s,t+s+i),f=l(e+s,t+s,e+n+s,t+s+i),p=l(e+n+s,t+s,e+n+s*2,t+i+s),_=l(e+n+s*2,t+s,e+n*2+s*2,t+i+s),g=r.attributes.uv,d=[p[3],p[2],p[0],p[1]],h=[m[3],m[2],m[0],m[1]],v=[c[3],c[2],c[0],c[1]],b=[u[0],u[1],u[3],u[2]],E=[f[3],f[2],f[0],f[1]],w=[_[3],_[2],_[0],_[1]],L=[];for(const T of[d,h,v,b,E,w])for(const H of T)L.push(H.x,H.y);g.set(new Float32Array(L)),g.needsUpdate=!0}function Lt(r,e,t,n,i,s){bs(r,e,t,n,i,s,64,64)}function fs(r,e,t,n,i,s){bs(r,e,t,n,i,s,64,32)}class Tn extends dt{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class wp extends dt{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new Ti({side:Wt}),this.layer2Material=new Ti({side:Nt,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new it(8,8,8);Lt(e,0,0,8,8,8);const t=new $e(e,this.layer1Material),n=new it(9,9,9);Lt(n,32,0,8,8,8);const i=new $e(n,this.layer2Material);this.head=new Tn(t,i),this.head.name="head",this.head.add(t,i),t.position.y=4,i.position.y=4,this.add(this.head);const s=new it(8,12,4);Lt(s,16,16,8,12,4);const o=new $e(s,this.layer1Material),a=new it(8.5,12.5,4.5);Lt(a,16,32,8,12,4);const l=new $e(a,this.layer2Material);this.body=new Tn(o,l),this.body.name="body",this.body.add(o,l),this.body.position.y=-6,this.add(this.body);const c=new it,u=new $e(c,this.layer1MaterialBiased);this.modelListeners.push(()=>{u.scale.x=this.slim?3:4,u.scale.y=12,u.scale.z=4,Lt(c,40,16,this.slim?3:4,12,4)});const m=new it,f=new $e(m,this.layer2MaterialBiased);this.modelListeners.push(()=>{f.scale.x=this.slim?3.5:4.5,f.scale.y=12.5,f.scale.z=4.5,Lt(m,40,32,this.slim?3:4,12,4)});const p=new dt;p.add(u,f),this.modelListeners.push(()=>{p.position.x=this.slim?-.5:-1}),p.position.y=-4,this.rightArm=new Tn(u,f),this.rightArm.name="rightArm",this.rightArm.add(p),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const _=new it,g=new $e(_,this.layer1MaterialBiased);this.modelListeners.push(()=>{g.scale.x=this.slim?3:4,g.scale.y=12,g.scale.z=4,Lt(_,32,48,this.slim?3:4,12,4)});const d=new it,h=new $e(d,this.layer2MaterialBiased);this.modelListeners.push(()=>{h.scale.x=this.slim?3.5:4.5,h.scale.y=12.5,h.scale.z=4.5,Lt(d,48,48,this.slim?3:4,12,4)});const v=new dt;v.add(g,h),this.modelListeners.push(()=>{v.position.x=this.slim?.5:1}),v.position.y=-4,this.leftArm=new Tn(g,h),this.leftArm.name="leftArm",this.leftArm.add(v),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const b=new it(4,12,4);Lt(b,0,16,4,12,4);const E=new $e(b,this.layer1MaterialBiased),w=new it(4.5,12.5,4.5);Lt(w,0,32,4,12,4);const L=new $e(w,this.layer2MaterialBiased),T=new dt;T.add(E,L),T.position.y=-6,this.rightLeg=new Tn(E,L),this.rightLeg.name="rightLeg",this.rightLeg.add(T),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const H=new it(4,12,4);Lt(H,16,48,4,12,4);const S=new $e(H,this.layer1MaterialBiased),R=new it(4.5,12.5,4.5);Lt(R,0,48,4,12,4);const J=new $e(R,this.layer2MaterialBiased),P=new dt;P.add(S,J),P.position.y=-6,this.leftLeg=new Tn(S,J),this.leftLeg.name="leftLeg",this.leftLeg.add(P),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof Tn)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Tp extends dt{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ti({side:Nt,transparent:!0,alphaTest:1e-5});const e=new it(10,16,1);fs(e,0,0,10,16,1),this.cape=new $e(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Ap extends dt{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ti({side:Nt,transparent:!0,alphaTest:1e-5});const e=new it(12,22,4);fs(e,22,0,10,20,2);const t=new $e(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new dt,this.leftWing.add(t),this.add(this.leftWing);const n=new it(12,22,4);fs(n,22,0,10,20,2);const i=new $e(n,this.material);i.scale.x=-1,i.position.x=5,i.position.y=-10,i.position.z=-1,this.rightWing=new dt,this.rightWing.add(i),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Rp extends dt{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Ti({side:Wt});const e=new it(8,8,4/3);bs(e,0,0,6,6,1,14,7),this.rightEar=new $e(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new $e(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Qa=10.8*Math.PI/180;class Cp extends dt{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new wp,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Tp,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Qa,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Ap,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Rp,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Qa,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function er(r){return r instanceof HTMLImageElement||r instanceof HTMLVideoElement||r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas}function ps(r,e,t,n,i){const s=r.getImageData(e,t,n,i);for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=(o+a*n)*4;if(s.data[l+3]!==255)return!0}return!1}function gr(r){return r/64}function eo(r,e,t){if(t){if(ps(r,0,0,e,e))return}else if(ps(r,0,0,e,e/2))return;const n=gr(e),i=(s,o,a,l)=>r.clearRect(s*n,o*n,a*n,l*n);i(40,0,8,8),i(48,0,8,8),i(32,8,8,8),i(40,8,8,8),i(48,8,8,8),i(56,8,8,8),t&&(i(4,32,4,4),i(8,32,4,4),i(0,36,4,12),i(4,36,4,12),i(8,36,4,12),i(12,36,4,12),i(20,32,8,4),i(28,32,8,4),i(16,36,4,12),i(20,36,8,12),i(28,36,4,12),i(32,36,8,12),i(44,32,4,4),i(48,32,4,4),i(40,36,4,12),i(44,36,4,12),i(48,36,4,12),i(52,36,12,12),i(4,48,4,4),i(8,48,4,4),i(0,52,4,12),i(4,52,4,12),i(8,52,4,12),i(12,52,4,12),i(52,48,4,4),i(56,48,4,4),i(48,52,4,12),i(52,52,4,12),i(56,52,4,12),i(60,52,4,12))}function Pp(r,e){r.save(),r.scale(-1,1);const t=gr(e),n=(i,s,o,a,l,c)=>r.drawImage(r.canvas,i*t,s*t,o*t,a*t,-l*t,c*t,-o*t,a*t);n(4,16,4,4,20,48),n(8,16,4,4,24,48),n(0,20,4,12,24,52),n(4,20,4,12,20,52),n(8,20,4,12,16,52),n(12,20,4,12,28,52),n(44,16,4,4,36,48),n(48,16,4,4,40,48),n(40,20,4,12,40,52),n(44,20,4,12,36,52),n(48,20,4,12,32,52),n(52,20,4,12,44,52),r.restore()}function Lp(r,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const n=r.getContext("2d",{willReadFrequently:!0});if(t){const i=e.width;r.width=i,r.height=i,n.clearRect(0,0,i,i),n.drawImage(e,0,0,i,i/2),Pp(n,i),eo(n,r.width,!1)}else r.width=e.width,r.height=e.height,n.clearRect(0,0,e.width,e.height),n.drawImage(e,0,0,r.width,r.height),eo(n,r.width,!0)}function Ip(r){if(r.width===2*r.height)return r.width/64;if(r.width*17===r.height*22)return r.width/22;if(r.width*11===r.height*23)return r.width/46;throw new Error(`Bad cape size: ${r.width}x${r.height}`)}function Dp(r,e){const t=Ip(e);r.width=64*t,r.height=32*t;const n=r.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,r.width,r.height),n.drawImage(e,0,0,e.width,e.height)}function Up(r,e,t,n,i){const s=r.getImageData(e,t,n,i);for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=(o+a*n)*4;if(!(s.data[l+0]===0&&s.data[l+1]===0&&s.data[l+2]===0&&s.data[l+3]===255))return!1}return!0}function Np(r,e,t,n,i){const s=r.getImageData(e,t,n,i);for(let o=0;o<n;o++)for(let a=0;a<i;a++){const l=(o+a*n)*4;if(!(s.data[l+0]===255&&s.data[l+1]===255&&s.data[l+2]===255&&s.data[l+3]===255))return!1}return!0}function Op(r){const e=gr(r.width),t=r.getContext("2d",{willReadFrequently:!0}),n=(a,l,c,u)=>ps(t,a*e,l*e,c*e,u*e),i=(a,l,c,u)=>Up(t,a*e,l*e,c*e,u*e),s=(a,l,c,u)=>Np(t,a*e,l*e,c*e,u*e);return n(50,16,2,4)||n(54,20,2,12)||n(42,48,2,4)||n(46,52,2,12)||i(50,16,2,4)&&i(54,20,2,12)&&i(42,48,2,4)&&i(46,52,2,12)||s(50,16,2,4)&&s(54,20,2,12)&&s(42,48,2,4)&&s(46,52,2,12)?"slim":"default"}function Fp(r){if(r.width===r.height*2&&r.height%7===0)return r.height/7;throw new Error(`Bad ears size: ${r.width}x${r.height}`)}function kp(r,e){const t=Fp(e);r.width=14*t,r.height=7*t;const n=r.getContext("2d",{willReadFrequently:!0});n.clearRect(0,0,r.width,r.height),n.drawImage(e,0,0,e.width,e.height)}function to(r,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=gr(e.width),n=14*t,i=7*t;r.width=n,r.height=i;const s=r.getContext("2d",{willReadFrequently:!0});s.clearRect(0,0,n,i),s.drawImage(e,24*t,0,n,i,0,0,n,i)}async function tr(r){const e=document.createElement("img");return new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=n,e.crossOrigin="anonymous",typeof r=="string"?e.src=r:(r.crossOrigin!==void 0&&(e.crossOrigin=r.crossOrigin),r.referrerPolicy!==void 0&&(e.referrerPolicy=r.referrerPolicy),e.src=r.src)})}const no={type:"change"},ts={type:"start"},io={type:"end"},nr=new Co,ro=new pn,Bp=Math.cos(70*cc.DEG2RAD);class zp extends Un{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nn.ROTATE,MIDDLE:Nn.DOLLY,RIGHT:Nn.PAN},this.touches={ONE:On.ROTATE,TWO:On.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(B){B.addEventListener("keydown",M),this._domElementKeyEvents=B},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(no),n.update(),s=i.NONE},this.update=(function(){const B=new j,le=new Dn().setFromUnitVectors(e.up,new j(0,1,0)),be=le.clone().invert(),xe=new j,ye=new Dn,Ie=new j,ze=2*Math.PI;return function(Se=null){const se=n.object.position;B.copy(se).sub(n.target),B.applyQuaternion(le),a.setFromVector3(B),n.autoRotate&&s===i.NONE&&J(S(Se)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let me=n.minAzimuthAngle,_e=n.maxAzimuthAngle;isFinite(me)&&isFinite(_e)&&(me<-Math.PI?me+=ze:me>Math.PI&&(me-=ze),_e<-Math.PI?_e+=ze:_e>Math.PI&&(_e-=ze),me<=_e?a.theta=Math.max(me,Math.min(_e,a.theta)):a.theta=a.theta>(me+_e)/2?Math.max(me,a.theta):Math.min(_e,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&L||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*c),B.setFromSpherical(a),B.applyQuaternion(be),se.copy(n.target).add(B),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let He=!1;if(n.zoomToCursor&&L){let qe=null;if(n.object.isPerspectiveCamera){const Ze=B.length();qe=W(Ze*c);const Mt=Ze-qe;n.object.position.addScaledVector(E,Mt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ze=new j(w.x,w.y,0);Ze.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),He=!0;const Mt=new j(w.x,w.y,0);Mt.unproject(n.object),n.object.position.sub(Mt).add(Ze),n.object.updateMatrixWorld(),qe=B.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;qe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(qe).add(n.object.position):(nr.origin.copy(n.object.position),nr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(nr.direction))<Bp?e.lookAt(n.target):(ro.setFromNormalAndCoplanarPoint(n.object.up,n.target),nr.intersectPlane(ro,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),He=!0);return c=1,L=!1,He||xe.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o||Ie.distanceToSquared(n.target)>0?(n.dispatchEvent(no),xe.copy(n.object.position),ye.copy(n.object.quaternion),Ie.copy(n.target),He=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",de),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",ae),n.domElement.removeEventListener("wheel",A),n.domElement.removeEventListener("pointermove",z),n.domElement.removeEventListener("pointerup",ae),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",M),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ja,l=new Ja;let c=1;const u=new j,m=new Pe,f=new Pe,p=new Pe,_=new Pe,g=new Pe,d=new Pe,h=new Pe,v=new Pe,b=new Pe,E=new j,w=new Pe;let L=!1;const T=[],H={};function S(B){return B!==null?2*Math.PI/60*n.autoRotateSpeed*B:2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function J(B){l.theta-=B}function P(B){l.phi-=B}const O=(function(){const B=new j;return function(be,xe){B.setFromMatrixColumn(xe,0),B.multiplyScalar(-be),u.add(B)}})(),x=(function(){const B=new j;return function(be,xe){n.screenSpacePanning===!0?B.setFromMatrixColumn(xe,1):(B.setFromMatrixColumn(xe,0),B.crossVectors(n.object.up,B)),B.multiplyScalar(be),u.add(B)}})(),F=(function(){const B=new j;return function(be,xe){const ye=n.domElement;if(n.object.isPerspectiveCamera){const Ie=n.object.position;B.copy(Ie).sub(n.target);let ze=B.length();ze*=Math.tan(n.object.fov/2*Math.PI/180),O(2*be*ze/ye.clientHeight,n.object.matrix),x(2*xe*ze/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(be*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),x(xe*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function ie(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(B){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=B:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(B){if(!n.zoomToCursor)return;L=!0;const le=n.domElement.getBoundingClientRect(),be=B.clientX-le.left,xe=B.clientY-le.top,ye=le.width,Ie=le.height;w.x=be/ye*2-1,w.y=-(xe/Ie)*2+1,E.set(w.x,w.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(B){return Math.max(n.minDistance,Math.min(n.maxDistance,B))}function K(B){m.set(B.clientX,B.clientY)}function I(B){Q(B),h.set(B.clientX,B.clientY)}function D(B){_.set(B.clientX,B.clientY)}function ue(B){f.set(B.clientX,B.clientY),p.subVectors(f,m).multiplyScalar(n.rotateSpeed);const le=n.domElement;J(2*Math.PI*p.x/le.clientHeight),P(2*Math.PI*p.y/le.clientHeight),m.copy(f),n.update()}function oe(B){v.set(B.clientX,B.clientY),b.subVectors(v,h),b.y>0?ie(R()):b.y<0&&G(R()),h.copy(v),n.update()}function ne(B){g.set(B.clientX,B.clientY),d.subVectors(g,_).multiplyScalar(n.panSpeed),F(d.x,d.y),_.copy(g),n.update()}function Me(B){Q(B),B.deltaY<0?G(R()):B.deltaY>0&&ie(R()),n.update()}function Ce(B){let le=!1;switch(B.code){case n.keys.UP:B.ctrlKey||B.metaKey||B.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:B.ctrlKey||B.metaKey||B.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:B.ctrlKey||B.metaKey||B.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:B.ctrlKey||B.metaKey||B.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),le=!0;break}le&&(B.preventDefault(),n.update())}function ve(){if(T.length===1)m.set(T[0].pageX,T[0].pageY);else{const B=.5*(T[0].pageX+T[1].pageX),le=.5*(T[0].pageY+T[1].pageY);m.set(B,le)}}function Te(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const B=.5*(T[0].pageX+T[1].pageX),le=.5*(T[0].pageY+T[1].pageY);_.set(B,le)}}function Ve(){const B=T[0].pageX-T[1].pageX,le=T[0].pageY-T[1].pageY,be=Math.sqrt(B*B+le*le);h.set(0,be)}function Re(){n.enableZoom&&Ve(),n.enablePan&&Te()}function Y(){n.enableZoom&&Ve(),n.enableRotate&&ve()}function je(B){if(T.length==1)f.set(B.pageX,B.pageY);else{const be=ee(B),xe=.5*(B.pageX+be.x),ye=.5*(B.pageY+be.y);f.set(xe,ye)}p.subVectors(f,m).multiplyScalar(n.rotateSpeed);const le=n.domElement;J(2*Math.PI*p.x/le.clientHeight),P(2*Math.PI*p.y/le.clientHeight),m.copy(f)}function y(B){if(T.length===1)g.set(B.pageX,B.pageY);else{const le=ee(B),be=.5*(B.pageX+le.x),xe=.5*(B.pageY+le.y);g.set(be,xe)}d.subVectors(g,_).multiplyScalar(n.panSpeed),F(d.x,d.y),_.copy(g)}function Z(B){const le=ee(B),be=B.pageX-le.x,xe=B.pageY-le.y,ye=Math.sqrt(be*be+xe*xe);v.set(0,ye),b.set(0,Math.pow(v.y/h.y,n.zoomSpeed)),ie(b.y),h.copy(v)}function X(B){n.enableZoom&&Z(B),n.enablePan&&y(B)}function N(B){n.enableZoom&&Z(B),n.enableRotate&&je(B)}function C(B){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(B.pointerId),n.domElement.addEventListener("pointermove",z),n.domElement.addEventListener("pointerup",ae)),fe(B),B.pointerType==="touch"?k(B):pe(B))}function z(B){n.enabled!==!1&&(B.pointerType==="touch"?re(B):q(B))}function ae(B){we(B),T.length===0&&(n.domElement.releasePointerCapture(B.pointerId),n.domElement.removeEventListener("pointermove",z),n.domElement.removeEventListener("pointerup",ae)),n.dispatchEvent(io),s=i.NONE}function pe(B){let le;switch(B.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Nn.DOLLY:if(n.enableZoom===!1)return;I(B),s=i.DOLLY;break;case Nn.ROTATE:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enablePan===!1)return;D(B),s=i.PAN}else{if(n.enableRotate===!1)return;K(B),s=i.ROTATE}break;case Nn.PAN:if(B.ctrlKey||B.metaKey||B.shiftKey){if(n.enableRotate===!1)return;K(B),s=i.ROTATE}else{if(n.enablePan===!1)return;D(B),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ts)}function q(B){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ue(B);break;case i.DOLLY:if(n.enableZoom===!1)return;oe(B);break;case i.PAN:if(n.enablePan===!1)return;ne(B);break}}function A(B){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(B.preventDefault(),n.dispatchEvent(ts),Me(B),n.dispatchEvent(io))}function M(B){n.enabled===!1||n.enablePan===!1||Ce(B)}function k(B){switch(ge(B),T.length){case 1:switch(n.touches.ONE){case On.ROTATE:if(n.enableRotate===!1)return;ve(),s=i.TOUCH_ROTATE;break;case On.PAN:if(n.enablePan===!1)return;Te(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case On.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(),s=i.TOUCH_DOLLY_PAN;break;case On.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(ts)}function re(B){switch(ge(B),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;je(B),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;y(B),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(B),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(B),n.update();break;default:s=i.NONE}}function de(B){n.enabled!==!1&&B.preventDefault()}function fe(B){T.push(B)}function we(B){delete H[B.pointerId];for(let le=0;le<T.length;le++)if(T[le].pointerId==B.pointerId){T.splice(le,1);return}}function ge(B){let le=H[B.pointerId];le===void 0&&(le=new Pe,H[B.pointerId]=le),le.set(B.pageX,B.pageY)}function ee(B){const le=B.pointerId===T[0].pointerId?T[1]:T[0];return H[le.pointerId]}n.domElement.addEventListener("contextmenu",de),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",ae),n.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}const Hp={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _r{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gp=new zo(-1,1,1,-1,0,1),Ss=new cn;Ss.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3));Ss.setAttribute("uv",new an([0,2,0,0,2,0],2));class Vp{constructor(e){this._mesh=new $e(Ss,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gp)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ko extends _r{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oo.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class so extends _r{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Wp extends _r{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Xp{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Pe);this._width=n.width,this._height=n.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ko(Hp),this.copyPass.material.blending=sn,this.clock=new $o}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}so!==void 0&&(o instanceof so?n=!0:o instanceof Wp&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jp extends _r{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const qp={uniforms:{tDiffuse:{value:null},resolution:{value:new Pe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class Jo{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const n=t*this.speed;this.animate(e,n),this.animationObjects.forEach((i,s)=>{const o=this.progress0.get(s);i(e,this.progress-o,s)}),this.progress+=n}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Qo extends Jo{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const n=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-n,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const i=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+i}}class Yp extends Jo{animate(e){const t=this.progress*15+Math.PI*.5;e.skin.leftLeg.rotation.x=Math.cos(t+Math.PI)*1.3,e.skin.rightLeg.rotation.x=Math.cos(t)*1.3,e.skin.leftArm.rotation.x=Math.cos(t)*1.5,e.skin.rightArm.rotation.x=Math.cos(t+Math.PI)*1.5;const n=Math.PI*.1;e.skin.leftArm.rotation.z=Math.cos(t)*.1+n,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.1-n,e.position.y=Math.cos(t*2),e.position.x=Math.cos(t)*.15,e.rotation.z=Math.cos(t+Math.PI)*.01;const i=Math.PI*.3;e.cape.rotation.x=Math.sin(t*2)*.1+i}}class Zp extends yp{constructor(e="",t={}){const n=new qo({transparent:!0,alphaTest:1e-5});super(n),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=n,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const n=t.measureText(this.text);e.width=this.margin[3]+n.actualBoundingBoxLeft+n.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+n.actualBoundingBoxAscent+n.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+n.actualBoundingBoxLeft,this.margin[0]+n.actualBoundingBoxAscent);const i=new sr(e);i.magFilter=et,i.minFilter=et,this.textMaterial.map=i,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class el{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Mp(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Ep(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new vp,this.camera=new Rt,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),It.enabled=!1,this.renderer=new jo({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new on(0,0,{depthTexture:new Xo(0,0,nn)})),this.composer=new Xp(this.renderer,t),this.renderPass=new jp(this.scene,this.camera),this.fxaaPass=new Ko(qp),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Cp,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new dt,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new zp(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new $o,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=n=>{n.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",n=>{n.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new sr(this.skinCanvas),this.skinTexture.magFilter=et,this.skinTexture.minFilter=et,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new sr(this.capeCanvas),this.capeTexture.magFilter=et,this.capeTexture.minFilter=et,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new sr(this.earsCanvas),this.earsTexture.magFilter=et,this.earsTexture.minFilter=et,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(er(e))Lp(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=Op(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(to(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return tr(e).then(n=>this.loadSkin(n,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(er(e))Dp(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return tr(e).then(n=>this.loadCape(n,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(er(e))t.textureType==="skin"?to(this.earsCanvas,e):kp(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return tr(e).then(n=>this.loadEars(n,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,lr)}loadBackground(e,t){if(er(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new mt,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return tr(e).then(n=>this.loadBackground(n,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new j).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new Pe).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new Pe).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof Xe||e instanceof mt?this.scene.background=e:this.scene.background=new Xe(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof gt||(e=new Zp(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}class $p{constructor(){this.canvas=document.getElementById("hidepart-canvas"),this.ctx=this.canvas?this.canvas.getContext("2d"):null,this.originalImg=new Image,this.currentSkinBlobUrl=null,this.resolution=64,this.modelType="steve",this.animMode="walk",this.parts={head:!0,body:!0,arms:!0,legs:!0},this.viewer=null,this.init()}init(){const e=document.getElementById("hidepart-3d-container"),t=document.getElementById("hidepart-3d-canvas");e&&t&&(this.viewer=new el({canvas:t,width:e.clientWidth||320,height:300}),this.viewer.renderer&&this.viewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.viewer.camera.position.set(0,0,70),this.setAnimation("walk"),new IntersectionObserver(l=>{l.forEach(c=>{this.viewer&&this.viewer.animation&&(this.viewer.animation.paused=!c.isIntersecting)})},{threshold:.1}).observe(e),window.addEventListener("resize",()=>{this.viewer&&e.clientWidth&&(this.viewer.width=e.clientWidth)}));const n=document.getElementById("hidepart-file-input");n&&n.addEventListener("change",a=>this.handleFileUpload(a)),["head","body","arms","legs"].forEach(a=>{const l=document.getElementById(`hidepart-${a}`);l&&l.addEventListener("change",c=>{St.playClick(),this.parts[a]=c.target.checked;const u=l.closest(".part-toggle-item");u&&u.classList.toggle("checked",c.target.checked),this.render()})}),document.querySelectorAll(".hidepart-preset-btn").forEach(a=>{a.addEventListener("click",()=>{St.playClick();const l=a.dataset.preset;this.applyPreset(l)})}),document.querySelectorAll(".hidepart-model-btn").forEach(a=>{a.addEventListener("click",()=>{St.playClick();const l=a.dataset.model;this.setModel(l)})}),document.querySelectorAll(".hidepart-anim-btn").forEach(a=>{a.addEventListener("click",()=>{St.playClick();const l=a.dataset.anim;this.setAnimation(l)})});const i=document.getElementById("hidepart-cam-reset");i&&i.addEventListener("click",()=>{St.playClick(),this.viewer&&(this.viewer.camera.position.set(0,0,70),this.viewer.camera.lookAt(0,0,0))});const s=document.getElementById("hidepart-download-png-btn");s&&s.addEventListener("click",()=>this.downloadSkinPng());const o=document.getElementById("hidepart-download-btn");o&&!s&&o.addEventListener("click",()=>this.downloadSkinPng())}setModel(e){this.modelType=e,document.querySelectorAll(".hidepart-model-btn").forEach(t=>{t.classList.toggle("active",t.dataset.model===e)}),this.viewer&&this.currentSkinBlobUrl&&this.viewer.loadSkin(this.currentSkinBlobUrl,{model:this.modelType==="alex"?"slim":"default"}),ke(`สลับโมเดลเป็น ${e==="alex"?"Alex (แขน 3px)":"Steve (แขน 4px)"}`,"info")}setAnimation(e){this.animMode=e,document.querySelectorAll(".hidepart-anim-btn").forEach(t=>{t.classList.toggle("active",t.dataset.anim===e)}),this.viewer&&(e==="walk"?(this.viewer.animation=new Qo,this.viewer.animation.speed=.6):e==="run"?(this.viewer.animation=new Yp,this.viewer.animation.speed=.8):this.viewer.animation=null)}getPartRectangles(){const e=this.resolution/64,t=(n,i,s,o)=>({x:Math.round(n*e),y:Math.round(i*e),w:Math.round(s*e),h:Math.round(o*e)});return{head:[t(0,0,32,16),t(32,0,32,16)],body:[t(16,16,24,16),t(16,32,24,16)],arms:[t(40,16,16,16),t(40,32,16,16),t(32,48,16,16),t(48,48,16,16)],legs:[t(0,16,16,16),t(0,32,16,16),t(16,48,16,16),t(0,48,16,16)]}}applyPreset(e){if(!this.originalImg.src){ke("กรุณาอัปโหลดสกินก่อนเลือกพรีเซ็ต","info");return}switch(e){case"all":this.parts={head:!0,body:!0,arms:!0,legs:!0};break;case"head-only":this.parts={head:!0,body:!1,arms:!1,legs:!1};break;case"hide-all":this.parts={head:!1,body:!1,arms:!1,legs:!1};break;case"hide-arms-legs":this.parts={head:!0,body:!0,arms:!1,legs:!1};break;case"body-only":this.parts={head:!1,body:!0,arms:!1,legs:!1};break;case"hide-head":this.parts={head:!1,body:!0,arms:!0,legs:!0};break;case"hide-body":this.parts={head:!0,body:!1,arms:!0,legs:!0};break}["head","body","arms","legs"].forEach(t=>{const n=document.getElementById(`hidepart-${t}`);n&&(n.checked=this.parts[t]);const i=n==null?void 0:n.closest(".part-toggle-item");i&&i.classList.toggle("checked",this.parts[t])}),this.render(),ke("ปรับแต่งตามพรีเซ็ตเรียบร้อย","success")}async handleFileUpload(e){const t=e.target?e.target.files[0]:e;t&&await this.loadFile(t)}async loadFile(e){try{if(await co(e)){ke("กำลังแตกไฟล์ ZIP / แอดออน...","info");const n=await ho(e);await this.loadSkinFromImage(n.image,`[ZIP] ${n.fileName}`);return}const t=new FileReader;t.onload=async n=>{const i=new Image;i.onload=async()=>{await this.loadSkinFromImage(i,e.name)},i.onerror=()=>{ke("ไฟล์ภาพไม่ถูกต้อง","error")},i.src=n.target.result},t.readAsDataURL(e)}catch(t){ke(t.message||"ไม่สามารถอ่านไฟล์ได้","error")}}async loadSkinFromImage(e,t=""){try{const n=await lo(e);this.originalImg=n,this.resolution=n.width,this.canvas.width=this.resolution,this.canvas.height=this.resolution;const i=document.getElementById("hidepart-res-badge");i&&(i.textContent=this.resolution>64?`${this.resolution}x${this.resolution} HD`:"64x64 Standard",i.style.display="inline-flex"),["head","body","arms","legs"].forEach(a=>{this.parts[a]=!0;const l=document.getElementById(`hidepart-${a}`);l&&(l.checked=!0);const c=l==null?void 0:l.closest(".part-toggle-item");c&&c.classList.add("checked")});const s=document.getElementById("hidepart-workarea");s&&(s.style.display="block");const o=document.getElementById("hidepart-3d-container");this.viewer&&o&&(this.viewer.width=o.clientWidth||320),this.render(),St.playPop(),ke(t?`โหลดสกิน ${t} เรียบร้อย`:"อัปโหลดสกินเรียบร้อย","success")}catch(n){ke(n.message||"ประมวลผลสกินล้มเหลว","error")}}render(){if(!this.originalImg.src)return;this.ctx.clearRect(0,0,this.resolution,this.resolution),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(this.originalImg,0,0,this.resolution,this.resolution);const e=this.getPartRectangles();this.parts.head||e.head.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.body||e.body.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.arms||e.arms.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.legs||e.legs.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.canvas.toBlob(t=>{t&&(this.currentSkinBlobUrl&&URL.revokeObjectURL(this.currentSkinBlobUrl),this.currentSkinBlobUrl=URL.createObjectURL(t),this.viewer&&this.viewer.loadSkin(this.currentSkinBlobUrl,{model:this.modelType==="alex"?"slim":"default"}))},"image/png")}downloadSkinPng(){if(!this.currentSkinBlobUrl){ke("กรุณาอัปโหลดสกินก่อนดาวน์โหลด","error");return}const e=document.createElement("a");e.href=this.currentSkinBlobUrl,e.download="zxskin_custompart.png",document.body.appendChild(e),e.click(),document.body.removeChild(e),St.playLevelUp(),ke("ดาวน์โหลดไฟล์สกิน (.png) เรียบร้อยแล้ว","success")}}var ar={exports:{}},Kp=ar.exports,ao;function Jp(){return ao||(ao=1,(function(r,e){(function(t,n){n()})(Kp,function(){function t(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function n(c,u,m){var f=new XMLHttpRequest;f.open("GET",c),f.responseType="blob",f.onload=function(){l(f.response,u,m)},f.onerror=function(){console.error("could not download file")},f.send()}function i(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function s(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof mn=="object"&&mn.global===mn?mn:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(c,u,m){var f=o.URL||o.webkitURL,p=document.createElement("a");u=u||c.name||"download",p.download=u,p.rel="noopener",typeof c=="string"?(p.href=c,p.origin===location.origin?s(p):i(p.href)?n(c,u,m):s(p,p.target="_blank")):(p.href=f.createObjectURL(c),setTimeout(function(){f.revokeObjectURL(p.href)},4e4),setTimeout(function(){s(p)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,m){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(t(c,m),u);else if(i(c))n(c,u,m);else{var f=document.createElement("a");f.href=c,f.target="_blank",setTimeout(function(){s(f)})}}:function(c,u,m,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof c=="string")return n(c,u,m);var p=c.type==="application/octet-stream",_=/constructor/i.test(o.HTMLElement)||o.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||p&&_||a)&&typeof FileReader<"u"){var d=new FileReader;d.onloadend=function(){var b=d.result;b=g?b:b.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=b:location=b,f=null},d.readAsDataURL(c)}else{var h=o.URL||o.webkitURL,v=h.createObjectURL(c);f?f.location=v:location.href=v,f=null,setTimeout(function(){h.revokeObjectURL(v)},4e4)}});o.saveAs=l.saveAs=l,r.exports=l})})(ar)),ar.exports}var tl=Jp();class Qp{constructor(){this.addonVersion=[1,0,0],this.addonName="",this.itemName="",this.itemIconDataUrl=null,this.skinImg=new Image,this.skinResolution=64,this.processedSkinBlob=null,this.modelType=1,this.customGeometryJson=null,this.itemSlotType="suit",this.parts={head:!0,body:!0,arms:!0,legs:!0},this.canvas=document.getElementById("standalone-canvas"),this.ctx=this.canvas?this.canvas.getContext("2d"):null,this.viewer=null,this.init()}init(){const e=document.getElementById("standalone-3d-container");e&&(this.viewer=new el({canvas:document.getElementById("standalone-3d-canvas"),width:e.clientWidth||300,height:260}),this.viewer.renderer&&this.viewer.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.viewer.camera.position.z=70,this.viewer.animation=new Qo,this.viewer.animation.speed=.5,new IntersectionObserver(u=>{u.forEach(m=>{this.viewer&&this.viewer.animation&&(this.viewer.animation.paused=!m.isIntersecting)})},{threshold:.1}).observe(e),window.addEventListener("resize",()=>{this.viewer&&e.clientWidth&&(this.viewer.width=e.clientWidth)})),["major","minor","patch"].forEach((c,u)=>{const m=document.getElementById(`standalone-v-${c}`);m&&m.addEventListener("input",f=>{let p=parseInt(f.target.value);(isNaN(p)||p<0)&&(p=0),p>99&&(p=99),this.addonVersion[u]=p,f.target.value=p})});const t=document.getElementById("standalone-addon-name");t&&t.addEventListener("input",c=>this.addonName=c.target.value.trim());const n=document.getElementById("standalone-item-name");n&&n.addEventListener("input",c=>this.itemName=c.target.value.trim());const i=document.getElementById("standalone-icon-input");i&&i.addEventListener("change",c=>this.handleIconUpload(c));const s=document.getElementById("standalone-remove-icon-btn");s&&s.addEventListener("click",()=>{this.itemIconDataUrl=null,document.getElementById("standalone-icon-preview").style.display="none",document.getElementById("standalone-icon-dropzone").style.display="flex",s.style.display="none"});const o=document.getElementById("standalone-skin-input");o&&o.addEventListener("change",c=>this.handleSkinUpload(c)),["head","body","arms","legs"].forEach(c=>{const u=document.getElementById(`standalone-part-${c}`);u&&u.addEventListener("change",m=>{this.parts[c]=m.target.checked;const f=u.closest(".part-toggle-item");f&&f.classList.toggle("checked",m.target.checked),this.renderSkin()})}),document.querySelectorAll(".model-select-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".model-select-btn").forEach(m=>m.classList.remove("active","mc-btn-primary")),c.classList.add("active","mc-btn-primary"),this.modelType=parseInt(c.dataset.model);const u=document.getElementById("standalone-custom-model-area");u&&(u.style.display=this.modelType===3?"block":"none"),this.viewer&&(this.viewer.playerObject.skin.modelType=this.modelType===2?"slim":"default")})}),document.querySelectorAll(".slot-select-btn").forEach(c=>{c.addEventListener("click",()=>{document.querySelectorAll(".slot-select-btn").forEach(u=>u.classList.remove("active","mc-btn-primary")),c.classList.add("active","mc-btn-primary"),this.itemSlotType=c.dataset.slot||"suit",this.itemSlotType==="head"?this.parts={head:!0,body:!1,arms:!1,legs:!1}:this.itemSlotType==="suit"?this.parts={head:!1,body:!0,arms:!0,legs:!0}:this.itemSlotType==="legs"?this.parts={head:!1,body:!1,arms:!1,legs:!0}:this.itemSlotType==="both"&&(this.parts={head:!0,body:!0,arms:!0,legs:!0}),["head","body","arms","legs"].forEach(u=>{const m=document.getElementById(`standalone-part-${u}`);m&&(m.checked=this.parts[u]);const f=m==null?void 0:m.closest(".part-toggle-item");f&&f.classList.toggle("checked",this.parts[u])}),this.updateDynamicItemIcon(),this.renderSkin()})});const a=document.getElementById("standalone-custom-geo-input");a&&a.addEventListener("change",c=>this.handleCustomGeometryUpload(c));const l=document.getElementById("standalone-download-btn");l&&l.addEventListener("click",()=>this.generateAddon())}handleIconUpload(e){const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=i=>{const s=new Image;s.onload=()=>{const o=document.createElement("canvas");o.width=16,o.height=16;const a=o.getContext("2d");a.imageSmoothingEnabled=!1,a.drawImage(s,0,0,16,16),this.itemIconDataUrl=o.toDataURL("image/png");const l=document.getElementById("standalone-icon-preview");l.src=this.itemIconDataUrl,l.style.display="block",document.getElementById("standalone-icon-dropzone").style.display="none",document.getElementById("standalone-remove-icon-btn").style.display="inline-flex",ke("อัพโหลดไอคอนเรียบร้อย","success")},s.src=i.target.result},n.readAsDataURL(t)}async handleSkinUpload(e){const t=e.target.files[0];if(!t)return;const n=t.name.replace(/\.[^/.]+$/,"").replace(/[^a-zA-Z0-9_\s]/g,""),i=document.getElementById("standalone-addon-name"),s=document.getElementById("standalone-item-name");i&&!i.value.trim()&&(this.addonName=n.replace(/\s+/g,""),i.value=this.addonName),s&&!s.value.trim()&&(this.itemName=n,s.value=this.itemName),this.loadFile(t)}async loadFile(e){try{if(await co(e)){ke("กำลังแตกไฟล์ ZIP / แอดออน...","info");const n=await ho(e);if(n.addonName&&!this.addonName){this.addonName=n.addonName;const i=document.getElementById("standalone-addon-name");i&&(i.value=this.addonName)}if(n.fileName&&!this.itemName){this.itemName=n.fileName;const i=document.getElementById("standalone-item-name");i&&(i.value=this.itemName)}await this.loadSkinFromImage(n.image,`[ZIP] ${n.fileName}`);return}const t=new FileReader;t.onload=async n=>{const i=new Image;i.onload=async()=>{await this.loadSkinFromImage(i,e.name)},i.onerror=()=>ke("ไฟล์ภาพไม่ถูกต้อง","error"),i.src=n.target.result},t.readAsDataURL(e)}catch(t){ke(t.message||"ไม่สามารถอ่านไฟล์ได้","error")}}async loadSkinFromImage(e,t=""){try{const n=await lo(e);this.skinImg=n,this.skinResolution=n.width,this.canvas.width=this.skinResolution,this.canvas.height=this.skinResolution;const i=document.getElementById("standalone-res-badge");i&&(i.textContent=this.skinResolution>64?`${this.skinResolution}x${this.skinResolution} HD`:"64x64 Standard",i.style.display="inline-flex"),this.updateDynamicItemIcon(),this.itemSlotType==="head"?this.parts={head:!0,body:!1,arms:!1,legs:!1}:this.itemSlotType==="suit"?this.parts={head:!1,body:!0,arms:!0,legs:!0}:this.itemSlotType==="legs"?this.parts={head:!1,body:!1,arms:!1,legs:!0}:this.parts={head:!0,body:!0,arms:!0,legs:!0},["head","body","arms","legs"].forEach(o=>{const a=document.getElementById(`standalone-part-${o}`);a&&(a.checked=this.parts[o]);const l=a==null?void 0:a.closest(".part-toggle-item");l&&l.classList.toggle("checked",this.parts[o])}),document.getElementById("standalone-skin-workarea").style.display="block";const s=document.getElementById("standalone-3d-container");this.viewer&&s&&(this.viewer.width=s.clientWidth||300),this.renderSkin(),St.playPop(),ke(t?`โหลดสกิน ${t} เรียบร้อย`:"อัปโหลดสกินเรียบร้อย","success")}catch(n){ke(n.message||"ประมวลผลสกินล้มเหลว","error")}}handleCustomGeometryUpload(e){const t=e.target.files[0];if(!t)return;const n=new FileReader;n.onload=i=>{var s,o;try{const a=JSON.parse(i.target.result);if(a.format_version&&a["minecraft:geometry"]){this.customGeometryJson=a;const l=((o=(s=a["minecraft:geometry"][0])==null?void 0:s.description)==null?void 0:o.identifier)||"custom";ke(`โหลดโมเดล: ${l}`,"success")}else ke("รูปแบบไฟล์ Geometry JSON ไม่ถูกต้อง","error"),this.customGeometryJson=null}catch{ke("ไฟล์ JSON เสียหายหรือไม่ถูกต้อง","error"),this.customGeometryJson=null}},n.readAsText(t)}getPartRectangles(){const e=this.skinResolution/64,t=(n,i,s,o)=>({x:Math.round(n*e),y:Math.round(i*e),w:Math.round(s*e),h:Math.round(o*e)});return{head:[t(0,0,32,16),t(32,0,32,16)],body:[t(16,16,24,16),t(16,32,24,16)],arms:[t(40,16,16,16),t(40,32,16,16),t(32,48,16,16),t(48,48,16,16)],legs:[t(0,16,16,16),t(0,32,16,16),t(16,48,16,16),t(0,48,16,16)]}}renderSkin(){if(!this.skinImg.src)return;this.ctx.clearRect(0,0,this.skinResolution,this.skinResolution),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(this.skinImg,0,0,this.skinResolution,this.skinResolution);const e=this.getPartRectangles();this.parts.head||e.head.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.body||e.body.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.arms||e.arms.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.parts.legs||e.legs.forEach(t=>this.ctx.clearRect(t.x,t.y,t.w,t.h)),this.canvas.toBlob(t=>{if(this.processedSkinBlob=t,this.viewer&&t){const n=URL.createObjectURL(t);this.viewer.loadSkin(n)}},"image/png")}createSpecificSkinBlob(e){const t=document.createElement("canvas");t.width=this.skinResolution,t.height=this.skinResolution;const n=t.getContext("2d");n.imageSmoothingEnabled=!1,n.drawImage(this.skinImg,0,0,this.skinResolution,this.skinResolution);const i=this.getPartRectangles();return e.head||i.head.forEach(s=>n.clearRect(s.x,s.y,s.w,s.h)),e.body||i.body.forEach(s=>n.clearRect(s.x,s.y,s.w,s.h)),e.arms||i.arms.forEach(s=>n.clearRect(s.x,s.y,s.w,s.h)),e.legs||i.legs.forEach(s=>n.clearRect(s.x,s.y,s.w,s.h)),new Promise(s=>t.toBlob(s,"image/png"))}updateDynamicItemIcon(){if(!this.skinImg||!this.skinImg.src)return;const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");t.imageSmoothingEnabled=!1;const n=this.skinResolution/64;this.itemSlotType==="head"?(t.drawImage(this.skinImg,Math.round(8*n),Math.round(8*n),Math.round(8*n),Math.round(8*n),0,0,16,16),t.drawImage(this.skinImg,Math.round(40*n),Math.round(8*n),Math.round(8*n),Math.round(8*n),0,0,16,16)):this.itemSlotType==="legs"?(t.drawImage(this.skinImg,Math.round(4*n),Math.round(20*n),Math.round(4*n),Math.round(12*n),2,2,5,12),t.drawImage(this.skinImg,Math.round(4*n),Math.round(36*n),Math.round(4*n),Math.round(12*n),2,2,5,12),t.drawImage(this.skinImg,Math.round(20*n),Math.round(52*n),Math.round(4*n),Math.round(12*n),8,2,5,12),t.drawImage(this.skinImg,Math.round(4*n),Math.round(52*n),Math.round(4*n),Math.round(12*n),8,2,5,12)):(t.drawImage(this.skinImg,Math.round(20*n),Math.round(20*n),Math.round(8*n),Math.round(12*n),4,2,8,12),t.drawImage(this.skinImg,Math.round(20*n),Math.round(36*n),Math.round(8*n),Math.round(12*n),4,2,8,12),t.drawImage(this.skinImg,Math.round(44*n),Math.round(20*n),Math.round(4*n),Math.round(12*n),0,2,4,12),t.drawImage(this.skinImg,Math.round(36*n),Math.round(52*n),Math.round(4*n),Math.round(12*n),12,2,4,12)),this.itemIconDataUrl=e.toDataURL("image/png");const i=document.getElementById("standalone-icon-preview");if(i){i.src=this.itemIconDataUrl,i.style.display="block";const s=document.getElementById("standalone-icon-dropzone");s&&(s.style.display="none");const o=document.getElementById("standalone-remove-icon-btn");o&&(o.style.display="inline-flex")}}createHeadIconBlob(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");t.imageSmoothingEnabled=!1;const n=this.skinResolution/64;return t.drawImage(this.skinImg,Math.round(8*n),Math.round(8*n),Math.round(8*n),Math.round(8*n),0,0,16,16),t.drawImage(this.skinImg,Math.round(40*n),Math.round(8*n),Math.round(8*n),Math.round(8*n),0,0,16,16),new Promise(i=>e.toBlob(i,"image/png"))}createSuitIconBlob(){const e=document.createElement("canvas");e.width=16,e.height=16;const t=e.getContext("2d");t.imageSmoothingEnabled=!1;const n=this.skinResolution/64;return t.drawImage(this.skinImg,Math.round(20*n),Math.round(20*n),Math.round(8*n),Math.round(12*n),4,2,8,12),t.drawImage(this.skinImg,Math.round(20*n),Math.round(36*n),Math.round(8*n),Math.round(12*n),4,2,8,12),t.drawImage(this.skinImg,Math.round(44*n),Math.round(20*n),Math.round(4*n),Math.round(12*n),0,2,4,12),t.drawImage(this.skinImg,Math.round(36*n),Math.round(52*n),Math.round(4*n),Math.round(12*n),12,2,4,12),new Promise(i=>e.toBlob(i,"image/png"))}async generateAddon(){if(!this.addonName||!this.itemName){ke("กรุณากรอกชื่อแอดออนและชื่อไอเทมให้ครบถ้วน","error");return}if(!this.processedSkinBlob){ke("กรุณาอัพโหลดสกินก่อนดาวน์โหลด","error");return}if(this.modelType===3&&!this.customGeometryJson){ke("กรุณาอัพโหลดไฟล์โมเดล Geometry JSON","error");return}try{ke("กำลังสร้างแอดออน...","info");const e=new or,t=(this.itemName||"").toLowerCase().trim().replace(/[^a-z0-9]/g,"_").replace(/_+/g,"_").replace(/^_+|_+$/g,"").slice(0,14),n=is(6),i=t?`skin_${t}_${n}`:`skin_${n}`,s=en(),o=en();let a="geometry.humanoid.customSlim";this.modelType===1&&(a="geometry.humanoid.custom"),this.modelType===3&&this.customGeometryJson&&(a=this.customGeometryJson["minecraft:geometry"][0].description.identifier);let l=[];if(this.itemSlotType==="head")l.push({id:`${i}_head`,name:this.itemName,slot:"slot.armor.head",group:"itemGroup.name.helmet",parentSetup:"variable.helmet_layer_visible = 0.0;",skinBlob:this.processedSkinBlob,isHead:!0});else if(this.itemSlotType==="suit")l.push({id:`${i}_suit`,name:this.itemName,slot:"slot.armor.chest",group:"itemGroup.name.chestplate",parentSetup:"variable.chest_layer_visible = 0.0;",skinBlob:this.processedSkinBlob,isHead:!1});else if(this.itemSlotType==="legs")l.push({id:`${i}_legs`,name:this.itemName,slot:"slot.armor.legs",group:"itemGroup.name.leggings",parentSetup:"variable.leg_layer_visible = 0.0;",skinBlob:this.processedSkinBlob,isHead:!1});else if(this.itemSlotType==="both"){const v=await this.createSpecificSkinBlob({head:!0,body:!1,arms:!1,legs:!1});l.push({id:`${i}_head`,name:`${this.itemName} (หัว)`,slot:"slot.armor.head",group:"itemGroup.name.helmet",parentSetup:"variable.helmet_layer_visible = 0.0;",skinBlob:v,isHead:!0});const b=await this.createSpecificSkinBlob({head:!1,body:!0,arms:!0,legs:!0});l.push({id:`${i}_suit`,name:`${this.itemName} (ชุด)`,slot:"slot.armor.chest",group:"itemGroup.name.chestplate",parentSetup:"variable.chest_layer_visible = 0.0;",skinBlob:b,isHead:!1})}const c=`${this.addonName}_ZirconX-SKIN_BP`,u=`${this.addonName}_ZirconX-SKIN_RP`;l.forEach(v=>{const b={format_version:"1.21.10","minecraft:item":{description:{identifier:`zirconx:${v.id}`,menu_category:{category:"equipment",group:v.group}},components:{"minecraft:icon":v.id,"minecraft:max_stack_size":1,"minecraft:wearable":{slot:v.slot,protection:0},"minecraft:display_name":{value:v.name}}}};e.file(`${c}/items/${v.id}.json`,JSON.stringify(b,null,2))});const m={format_version:2,header:{name:`${this.addonName} | สกินไอเทม ${this.addonVersion.join(".")}`,description:"แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project",min_engine_version:[1,21,60],uuid:s,version:this.addonVersion},modules:[{type:"data",uuid:en(),version:this.addonVersion}],dependencies:[{uuid:o,version:this.addonVersion}]};e.file(`${c}/manifest.json`,JSON.stringify(m,null,2));const f={resource_pack_name:this.addonName,texture_name:"atlas.items",texture_data:{}};for(const v of l){const b={format_version:"1.8.0","minecraft:attachable":{description:{identifier:`zirconx:${v.id}`,materials:{default:"armor",enchanted:"armor_enchanted"},textures:{default:`textures/skin/${v.id}`,enchanted:"textures/misc/enchanted_item_glint"},geometry:{default:a},scripts:{parent_setup:v.parentSetup},render_controllers:["controller.render.armor"]}}};if(e.file(`${u}/attachables/${v.id}.json`,JSON.stringify(b,null,2)),f.texture_data[v.id]={textures:[`textures/items/zirconx/${v.id}`]},e.file(`${u}/textures/skin/${v.id}.png`,v.skinBlob),this.itemIconDataUrl&&!v.isHead&&this.itemSlotType==="both"){const E=await this.createSuitIconBlob();e.file(`${u}/textures/items/zirconx/${v.id}.png`,E)}else if(this.itemIconDataUrl){const E=await(await fetch(this.itemIconDataUrl)).blob();e.file(`${u}/textures/items/zirconx/${v.id}.png`,E)}else if(v.isHead){const E=await this.createHeadIconBlob();e.file(`${u}/textures/items/zirconx/${v.id}.png`,E)}else{const E=await this.createSuitIconBlob();e.file(`${u}/textures/items/zirconx/${v.id}.png`,E)}}e.file(`${u}/textures/item_texture.json`,JSON.stringify(f,null,2));const p={format_version:2,header:{name:`${this.addonName} | สกินไอเทม ${this.addonVersion.join(".")}`,description:"แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project",min_engine_version:[1,21,60],uuid:o,version:this.addonVersion},modules:[{type:"resources",uuid:en(),version:this.addonVersion}],dependencies:[{uuid:s,version:this.addonVersion}]};if(e.file(`${u}/manifest.json`,JSON.stringify(p,null,2)),this.modelType===3&&this.customGeometryJson){const v=a.replace("geometry.","")+".json";e.file(`${u}/models/entity/${v}`,JSON.stringify(this.customGeometryJson,null,2))}const _=["## ZirconX Skin Project Item Localization",`pack.name=${this.addonName} | สกินไอเทม ${this.addonVersion.join(".")}`,"pack.description=แอดออนสกินสวมใส่ สร้างโดย ZirconX Skin Project"];for(const v of l)_.push(`item.zirconx:${v.id}.name=${v.name}`),_.push(`item.zirconx:${v.id}=${v.name}`);const g=_.join(`
`)+`
`,d=JSON.stringify(["en_US","th_TH"],null,2);e.file(`${u}/texts/en_US.lang`,g),e.file(`${u}/texts/th_TH.lang`,g),e.file(`${u}/texts/languages.json`,d),e.file(`${c}/texts/en_US.lang`,g),e.file(`${c}/texts/th_TH.lang`,g),e.file(`${c}/texts/languages.json`,d);try{const v=await(await fetch("/MCPE-WEBSKIN/templates/packicon.png")).blob();e.file(`${c}/pack_icon.png`,v),e.file(`${u}/pack_icon.png`,v)}catch{}const h=await e.generateAsync({type:"blob"});tl.saveAs(h,`${this.addonName}_v${this.addonVersion.join("_")}.mcaddon`),St.playLevelUp(),ke("ดาวน์โหลดแอดออนเรียบร้อย","success")}catch(e){console.error(e),ke("เกิดข้อผิดพลาดในการสร้างแอดออน","error")}}}class em{constructor(){this.wardrobes=[],this.activeWardrobeUniq=null,this.addonVersion=[1,0,0],this.authors=["ServerTeam","SkinProject"],this.searchQuery="",this.init()}init(){const e=document.getElementById("wardrobe-search-input");e&&e.addEventListener("input",f=>{this.searchQuery=f.target.value.toLowerCase().trim(),this.renderWardrobeList()});const t=document.getElementById("wardrobe-clear-search");t&&t.addEventListener("click",()=>{e&&(e.value=""),this.searchQuery="",this.renderWardrobeList()});const n=document.getElementById("wardrobe-add-btn");n&&n.addEventListener("click",()=>this.addWardrobe());const i=document.getElementById("wardrobe-import-input");i&&i.addEventListener("change",f=>this.handleImportMcaddon(f));const s=document.getElementById("wardrobe-export-btn");s&&s.addEventListener("click",()=>this.exportMcaddon());const o=document.getElementById("wardrobe-detail-back-btn");o&&o.addEventListener("click",()=>{this.activeWardrobeUniq=null,document.getElementById("wardrobe-detail-panel").style.display="none",document.getElementById("wardrobe-list-panel").style.display="block",this.renderWardrobeList()});const a=document.getElementById("wardrobe-add-gamertag-btn");a&&a.addEventListener("click",()=>this.addGamertag());const l=document.getElementById("wardrobe-add-outfit-input");l&&l.addEventListener("change",f=>this.handleAddOutfit(f));const c=document.getElementById("wardrobe-toggle-meta-btn"),u=document.getElementById("wardrobe-meta-box");c&&u&&c.addEventListener("click",()=>{const f=u.style.display==="none";u.style.display=f?"block":"none",c.textContent=f?"ซ่อนการตั้งค่า":"ตั้งค่าเวอร์ชั่น & เครดิต"}),["major","minor","patch"].forEach((f,p)=>{const _=document.getElementById(`wardrobe-v-${f}`);_&&_.addEventListener("input",g=>{let d=parseInt(g.target.value);(isNaN(d)||d<0)&&(d=0),this.addonVersion[p]=d})});const m=document.getElementById("wardrobe-add-author-btn");m&&m.addEventListener("click",()=>{this.authors.push(`Author_${this.authors.length+1}`),this.renderAuthors()}),this.renderWardrobeList(),this.renderAuthors()}addWardrobe(){const e=this.wardrobes.length+1,t={uniq:(Date.now()+Math.random()*1e3).toString(32),name:`ตู้เสื้อผ้าที่ ${e}`,allowUsername:[],skinlist:[]};this.wardrobes.push(t),this.renderWardrobeList(),ke(`เพิ่ม ${t.name} เรียบร้อย`,"success")}deleteWardrobe(e){this.wardrobes=this.wardrobes.filter(t=>t.uniq!==e),this.renderWardrobeList(),ke("ลบตู้เสื้อผ้าเรียบร้อย","info")}openWardrobeDetail(e){this.activeWardrobeUniq=e;const t=this.wardrobes.find(i=>i.uniq===e);if(!t)return;document.getElementById("wardrobe-list-panel").style.display="none",document.getElementById("wardrobe-detail-panel").style.display="block";const n=document.getElementById("wardrobe-detail-name");n&&(n.value=t.name,n.oninput=i=>{t.name=i.target.value}),this.renderGamertags(),this.renderOutfits()}addGamertag(e){const t=this.wardrobes.find(i=>i.uniq===this.activeWardrobeUniq);if(!t)return;const n=e?e.trim():"PlayerName";n&&!t.allowUsername.includes(n)&&(t.allowUsername.push(n),this.renderGamertags())}renderGamertags(){const e=this.wardrobes.find(i=>i.uniq===this.activeWardrobeUniq),t=document.getElementById("wardrobe-gamertag-chips");if(!e||!t)return;t.innerHTML="",e.allowUsername.forEach((i,s)=>{const o=document.createElement("span");o.className="chip",o.innerHTML=`
        <span>${i}</span>
        <span class="chip-close" data-remove="${s}">&times;</span>
      `,o.querySelector("[data-remove]").onclick=()=>{e.allowUsername.splice(s,1),this.renderGamertags()},t.appendChild(o)});const n=document.createElement("input");n.type="text",n.className="chip-input",n.placeholder="+ พิมพ์ชื่อ Gamertag แล้วกด Enter...",n.onkeydown=i=>{if(i.key==="Enter"||i.key===","){i.preventDefault();const s=n.value.replace(",","").trim();s&&(this.addGamertag(s),n.value="")}},t.appendChild(n)}handleAddOutfit(e){const t=Array.from(e.target.files||[]);if(t.length===0)return;const n=this.wardrobes.find(s=>s.uniq===this.activeWardrobeUniq);if(!n)return;let i=0;t.forEach(s=>{const o=new FileReader;o.onload=a=>{const l=a.target.result,c=is(20),u=s.name.replace(/\.[^/.]+$/,"").replace(/[_\-]/g," ");n.skinlist.push({name:u||`ชุดที่ ${n.skinlist.length+1}`,action:c,skinURL:l,blob:s}),i++,i===t.length&&(this.renderOutfits(),ke(`เพิ่มสกินทั้งหมด ${i} ชุดเรียบร้อย!`,"success"))},o.readAsDataURL(s)}),e.target.value=""}renderOutfits(){const e=this.wardrobes.find(n=>n.uniq===this.activeWardrobeUniq),t=document.getElementById("wardrobe-outfit-list");!e||!t||(t.innerHTML="",e.skinlist.forEach((n,i)=>{const s=document.createElement("div");s.className="outfit-card";const o=document.createElement("img");o.className="outfit-thumbnail",o.src=n.skinURL;const a=document.createElement("input");a.type="text",a.className="mc-input outfit-name-input",a.value=n.name,a.oninput=c=>{n.name=c.target.value};const l=document.createElement("button");l.className="mc-btn mc-btn-danger",l.style.fontSize="0.75rem",l.style.padding="0.2rem 0.5rem",l.style.width="100%",l.textContent="ลบชุดนี้",l.onclick=()=>{e.skinlist.splice(i,1),this.renderOutfits()},s.appendChild(o),s.appendChild(a),s.appendChild(l),t.appendChild(s)}))}renderWardrobeList(){const e=document.getElementById("wardrobe-grid-container");if(!e)return;const t=this.searchQuery?this.wardrobes.filter(n=>n.name.toLowerCase().includes(this.searchQuery)):this.wardrobes;if(e.innerHTML="",t.length===0){e.innerHTML=`
        <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          ยังไม่มีข้อมูลตู้เสื้อผ้า กดปุ่ม <b>"+ เพิ่มตู้"</b> เพื่อเริ่มต้น
        </div>
      `;return}t.forEach(n=>{const i=document.createElement("div");i.className="wardrobe-card",i.innerHTML=`
        <div>
          <div class="wardrobe-card-title">${n.name}</div>
          <div class="wardrobe-card-count">จำนวนชุด: ${n.skinlist.length} ชุด</div>
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.2rem;">
            ผู้มีสิทธิ์เข้าถึง: ${n.allowUsername.length} คน
          </div>
        </div>
        <div class="wardrobe-card-actions">
          <button class="mc-btn mc-btn-primary" style="flex: 1;" data-edit="${n.uniq}">จัดการตู้</button>
          <button class="mc-btn mc-btn-danger" data-delete="${n.uniq}">ลบ</button>
        </div>
      `,i.querySelector(`[data-edit="${n.uniq}"]`).onclick=()=>this.openWardrobeDetail(n.uniq),i.querySelector(`[data-delete="${n.uniq}"]`).onclick=()=>this.deleteWardrobe(n.uniq),e.appendChild(i)})}renderAuthors(){const e=document.getElementById("wardrobe-author-list");e&&(e.innerHTML="",this.authors.forEach((t,n)=>{const i=document.createElement("div");i.style.display="flex",i.style.gap="0.5rem",i.style.marginBottom="0.4rem";const s=document.createElement("input");s.type="text",s.className="mc-input",s.value=t,s.oninput=a=>this.authors[n]=a.target.value;const o=document.createElement("button");o.className="mc-btn mc-btn-danger",o.textContent="ลบ",o.onclick=()=>{this.authors.splice(n,1),this.renderAuthors()},i.appendChild(s),i.appendChild(o),e.appendChild(i)}))}async handleImportMcaddon(e){var n,i;const t=e.target.files[0];if(t){try{ke("กำลังแยกไฟล์ .mcaddon...","info");const o=await new or().loadAsync(await t.arrayBuffer()),a=o.file(/.*(ZirconX-SKIN|ZXD44-SKIN)_BP\/manifest\.json$/i)[0]||o.file("ZirconX-SKIN_BP/manifest.json")||o.file("ZXD44-SKIN_BP/manifest.json");if(a)try{const u=JSON.parse(await a.async("text"));(n=u.header)!=null&&n.version&&(this.addonVersion=u.header.version),(i=u.metadata)!=null&&i.authors&&(this.authors=u.metadata.authors)}catch{}const l=o.file(/.*(ZirconX-SKIN|ZXD44-SKIN)_BP\/scripts\/main\.js$/i)[0]||o.file("ZirconX-SKIN_BP/scripts/main.js")||o.file("ZXD44-SKIN_BP/scripts/main.js");if(l){const u=await l.async("text");let m=u.match(/let\s+playerData\s*=\s*(\[[\s\S]*?\]);/);if(m||(m=u.match(/\[\s*(\{[\s\S]*\})\s*\]/)),m)try{const f=JSON.parse(m[1]||m[0]);this.wardrobes=f.map(p=>({uniq:p.uniq||(Date.now()+Math.random()*1e3).toString(32),name:p.name,allowUsername:p.allowUsername||[],skinlist:(p.skinlist||[]).map(_=>({name:_.name,action:_.action,skinURL:"",blob:null}))}))}catch(f){console.error("Failed to parse playerData JSON:",f)}}const c=o.file(/(ZirconX-SKIN|ZXD44-SKIN)_RP\/textures\/skin\/.*\.(png|jpg)$/i);for(const u of c){const m=u.name.split("/").pop().replace(/\.(png|jpg)$/i,""),f=new Blob([await u.async("arraybuffer")],{type:"image/png"}),p=URL.createObjectURL(f);this.wardrobes.forEach(_=>{_.skinlist.forEach(g=>{g.action===m&&(g.skinURL=p,g.blob=f)})})}this.renderWardrobeList(),this.renderAuthors(),ke(`โหลดสำเร็จ! พบตู้เสื้อผ้า ${this.wardrobes.length} ตู้`,"success")}catch(s){console.error(s),ke("ไม่สามารถนำเข้าไฟล์ .mcaddon ได้","error")}e.target.value=""}}async exportMcaddon(){if(this.wardrobes.length===0){ke("กรุณาสร้างตู้เสื้อผ้าอย่างน้อย 1 ตู้ก่อนส่งออก","error");return}try{ke("กำลังแพ็กเกจ .mcaddon...","info");const e=new or,t=is(10),n=en(),i=en(),s=["ZirconX-SKIN_BP/items/zxskin.json","ZirconX-SKIN_RP/attachables/zxskin.json","ZirconX-SKIN_RP/materials/entity.material","ZirconX-SKIN_RP/textures/items/skin_item.png","ZirconX-SKIN_RP/textures/item_texture.json","packicon.png"];for(const h of s)try{const b=await(await fetch(`/MCPE-WEBSKIN/templates/${h}`)).blob();h==="packicon.png"?(e.file("ZirconX-SKIN_BP/pack_icon.png",b),e.file("ZirconX-SKIN_RP/pack_icon.png",b)):e.file(h,b)}catch{}const o=this.wardrobes.map(h=>({uniq:h.uniq,name:h.name,allowUsername:h.allowUsername,skinlist:h.skinlist.map(v=>({name:v.name,action:v.action}))})),a=`/**
 * Minecraft Bedrock Server Wardrobe System
 * Generated by ZirconX Skin Project
 */
import { world, system } from '@minecraft/server';
import { ActionFormData, MessageFormData } from '@minecraft/server-ui';

let playerData = ${JSON.stringify(o,null,2)};

world.beforeEvents.itemUse.subscribe(event => {
    let source = event.source;
    if (event.itemStack.typeId === "zxskin:skin" || event.itemStack.typeId === "zirconx:skin" || event.itemStack.typeId === "zxd44:skin") {
        system.run(() => titleScreen(source));
    }

    function titleScreen(player) {
        const wardrobeData = playerData.filter(e => e.allowUsername.includes(player.name));
        const form = new MessageFormData()
            .title("ตู้เสื้อผ้า")
            .body("ระบบจัดการและเปลี่ยนชุดตัวละคร")
            .button1(wardrobeData.length > 0 ? "เปิดตู้เสื้อผ้า" : "§cไม่มีสิทธิ์เข้าถึงตู้เสื้อผ้า")
            .button2("ชุดเริ่มต้น");

        form.show(player).then(choice => {
            if (choice.selection === 0) {
                if (wardrobeData.length > 0) wardrobeSelection(player, wardrobeData);
                else player.runCommand("title @s actionbar §cคุณไม่มีสิทธิ์เข้าถึงตู้เสื้อผ้า");
            } else {
                if (choice.canceled) return;
                player.runCommand("title @s actionbar §aเปลี่ยนเป็นชุดเริ่มต้นเรียบร้อย");
                return player.runCommand('event entity @s ${t}:humanoid');
            }
        });
    }

    function wardrobeSelection(player, wardrobe) {
        const form = new ActionFormData()
            .title('เลือกตู้เสื้อผ้า')
            .body('สวัสดี §e' + player.name + '§r กรุณาเลือกตู้ที่ต้องการ');

        wardrobe.forEach(data => {
            form.button(data.name);
        });

        form.show(player).then(choice => {
            if (choice.canceled) return;
            return skinSelection(player, wardrobe[choice.selection].skinlist, wardrobe);
        });
    }

    function skinSelection(player, skinlist, wardrobe) {
        const form = new ActionFormData()
            .title('เลือกชุดสกิน')
            .body('เลือกชุดที่ต้องการสวมใส่');

        skinlist.forEach(skindata => {
            form.button(skindata.name);
        });

        form.show(player).then(choice => {
            if (choice.canceled) return wardrobeSelection(player, wardrobe);
            player.runCommand('title @s actionbar §aเปลี่ยนชุดเป็น "' + skinlist[choice.selection].name + '" เรียบร้อยแล้ว');
            player.runCommand('event entity @s ${t}:' + skinlist[choice.selection].action);
        });
    }
});
`;e.file("ZirconX-SKIN_BP/scripts/main.js",a);const l={format_version:2,metadata:{authors:this.authors,generated_with:{ZirconX_Project:["2.0.0"]}},header:{name:`ตู้เสื้อผ้า ZirconX ${this.addonVersion.join(".")}`,description:"ระบบตู้เสื้อผ้าและสลับชุดสำหรับเซิร์ฟเวอร์ พัฒนาโดย ZirconX",min_engine_version:[1,21,60],uuid:n,version:this.addonVersion},modules:[{type:"data",uuid:en(),version:this.addonVersion},{type:"script",language:"javascript",uuid:en(),entry:"scripts/main.js",version:this.addonVersion}],dependencies:[{uuid:i,version:this.addonVersion},{module_name:"@minecraft/server",version:"2.1.0"},{module_name:"@minecraft/server-ui",version:"2.0.0"}]},c={format_version:2,metadata:{authors:this.authors,generated_with:{ZirconX_Project:["2.0.0"]}},header:{name:`ตู้เสื้อผ้า ZirconX ${this.addonVersion.join(".")}`,description:"ระบบตู้เสื้อผ้าและสลับชุดสำหรับเซิร์ฟเวอร์ พัฒนาโดย ZirconX",min_engine_version:[1,21,60],uuid:i,version:this.addonVersion},modules:[{type:"resources",uuid:en(),version:this.addonVersion}],dependencies:[{uuid:n,version:this.addonVersion}]};e.file("ZirconX-SKIN_BP/manifest.json",JSON.stringify(l,null,2)),e.file("ZirconX-SKIN_RP/manifest.json",JSON.stringify(c,null,2));const u=[];this.wardrobes.forEach(h=>{h.skinlist.forEach(v=>u.push(v))});const m={format_version:"1.10.0",render_controllers:{"controller.render.player.1st_person":{arrays:{textures:{"array.skins":["Texture.default",...u.map(h=>`Texture.${h.action}`)]}},geometry:"Geometry.default",materials:[{"*":"Material.default"}],textures:["array.skins[query.mark_variant]"],part_visibility:[{"*":!1},{rightArm:"query.get_equipped_item_name == ''"},{rightSleeve:"query.get_equipped_item_name == ''"}]},"controller.render.skinpack":{geometry:"geometry.default",materials:[{"*":"Material.default"}],textures:["array.skins[query.mark_variant]"],part_visibility:[{"*":!0},{head:!0}],arrays:{textures:{"array.skins":["Texture.default",...u.map(h=>`Texture.${h.action}`)]},geometries:{"array.geo":["Geometry.default"]}}},"controller.render.player.spectator":{geometry:"'array.geo[query.mark_variant != undefined ? query.mark_variant : 0]'",materials:[{"*":"Material.spectator"}],textures:["array.skins[query.mark_variant]"],part_visibility:[{"*":!1},{head:!0}],ignore_lighting:!0,light_color_multiplier:2.5,overlay_color:{r:0,g:.2,b:.5,a:.8},color:{r:.7,g:.9,b:1,a:.5}}}},f={format_version:"1.10.0","minecraft:client_entity":{description:{identifier:"minecraft:player",materials:{default:"entity_alphatest",solid:"entity_alphatest",spectator:"player_spectator"},textures:{default:"textures/entity/alex"},geometry:{default:"geometry.humanoid",cape:"geometry.cape"},render_controllers:[{"controller.render.player.1st_person":"variable.is_first_person && !q.is_spectator"},{"controller.render.skinpack":"!variable.is_first_person && !variable.map_face_icon && !q.is_spectator"},{"controller.render.player.spectator":"q.is_spectator"}],enable_attachables:!0}}},p={format_version:"1.21.60","minecraft:entity":{description:{identifier:"minecraft:player",is_spawnable:!1,is_summonable:!1,is_experimental:!1},component_groups:{[`${t}:humanoid`]:{"minecraft:mark_variant":{value:0}}},components:{"minecraft:type_family":{family:["player"]}},events:{[`${t}:humanoid`]:{add:{component_groups:[`${t}:humanoid`]}}}}};u.forEach((h,v)=>{const b=v+1;f["minecraft:client_entity"].description.textures[h.action]=`textures/skin/${h.action}`,p["minecraft:entity"].component_groups[`${t}:${h.action}`]={"minecraft:mark_variant":{value:b}},p["minecraft:entity"].events[`${t}:${h.action}`]={add:{component_groups:[`${t}:${h.action}`]}},h.blob?e.file(`ZirconX-SKIN_RP/textures/skin/${h.action}.png`,h.blob):h.skinURL&&e.file(`ZirconX-SKIN_RP/textures/skin/${h.action}.png`,fetch(h.skinURL).then(E=>E.blob()))}),e.file("ZirconX-SKIN_RP/render_controllers/player.render_controller.json",JSON.stringify(m,null,2)),e.file("ZirconX-SKIN_RP/entity/player.entity.json",JSON.stringify(f,null,2)),e.file("ZirconX-SKIN_BP/entities/player.json",JSON.stringify(p,null,2));const _=["## ZirconX Wardrobe Localization","pack.name=ZirconX Wardrobe","pack.description=Server Wardrobe System by ZirconX","item.zxskin:skin.name=ตู้เสื้อผ้า (Wardrobe)","item.zxskin:skin=ตู้เสื้อผ้า (Wardrobe)","item.zirconx:skin.name=ตู้เสื้อผ้า (Wardrobe)","item.zirconx:skin=ตู้เสื้อผ้า (Wardrobe)","item.zxd44:skin.name=ตู้เสื้อผ้า (Wardrobe)","item.zxd44:skin=ตู้เสื้อผ้า (Wardrobe)"].join(`
`)+`
`,g=JSON.stringify(["en_US","th_TH"],null,2);e.file("ZirconX-SKIN_RP/texts/en_US.lang",_),e.file("ZirconX-SKIN_RP/texts/th_TH.lang",_),e.file("ZirconX-SKIN_RP/texts/languages.json",g),e.file("ZirconX-SKIN_BP/texts/en_US.lang",_),e.file("ZirconX-SKIN_BP/texts/th_TH.lang",_),e.file("ZirconX-SKIN_BP/texts/languages.json",g);const d=await e.generateAsync({type:"blob"});tl.saveAs(d,`zxskin_server_wardrobe_${Date.now()}.mcaddon`),ke("ดาวน์โหลดแอดออนเรียบร้อย","success")}catch(e){console.error(e),ke("เกิดข้อผิดพลาดในการแพ็กเกจแอดออน","error")}}}const ns=[{color:"#ffffff",alpha:.95},{color:"#fef08a",alpha:.9},{color:"#facc15",alpha:.85},{color:"#fb923c",alpha:.8},{color:"#f87171",alpha:.7},{color:"#e11d48",alpha:.55},{color:"#9f1239",alpha:.35}];function oo(r,e,t=18){const n=document.getElementById(r),i=document.getElementById(e);if(!n||!i)return;const s=i.getContext("2d",{alpha:!0});let o=[];const a=60,l=75;function c(){const f=(n.offsetWidth||100)+a,p=(n.offsetHeight||32)+l;(i.width!==f||i.height!==p)&&(i.width=f,i.height=p,i.style.width=`${f}px`,i.style.height=`${p}px`)}c(),window.addEventListener("resize",c),document.addEventListener("click",()=>{setTimeout(c,60)});class u{constructor(){this.init(!0)}init(p=!1){const _=n.offsetWidth||100,g=n.offsetHeight||32;this.x=a/2+Math.random()*(_-8)+4,this.y=l-8+Math.random()*(g*.65),this.vx=(Math.random()-.5)*.35,this.vy=-(Math.random()*.65+.45);const d=Math.random();this.size=d>.6?3:d>.25?2:1,this.maxLife=Math.floor(Math.random()*35)+35,this.life=p?Math.floor(Math.random()*this.maxLife):0,this.wobblePhase=Math.random()*Math.PI*2,this.wobbleSpeed=.08+Math.random()*.07,this.wobbleAmp=.25+Math.random()*.25}update(){this.life++,this.wobblePhase+=this.wobbleSpeed,this.x+=this.vx+Math.sin(this.wobblePhase)*this.wobbleAmp,this.y+=this.vy,(this.life>=this.maxLife||this.y<0)&&this.init(!1)}draw(){const p=this.life/this.maxLife,_=Math.min(Math.floor(p*ns.length),ns.length-1),g=ns[_];let d=g.alpha;p<.15?d*=p/.15:p>.65&&(d*=1-(p-.65)/.35),s.save(),s.globalAlpha=Math.max(0,Math.min(1,d)),s.fillStyle=g.color,s.imageSmoothingEnabled=!1;const h=Math.round(this.x),v=Math.round(this.y),b=this.size;s.fillRect(h,v,b,b),b>=2&&p<.5&&(s.globalAlpha=d*.25,s.fillStyle="#fbbf24",s.fillRect(h-1,v-1,b+2,b+2)),s.restore()}}for(let f=0;f<t;f++)o.push(new u);function m(){s.clearRect(0,0,i.width,i.height);for(let f=0;f<o.length;f++)o[f].update(),o[f].draw();requestAnimationFrame(m)}m(),n.addEventListener("mouseenter",()=>{o.length<t+6&&(o.push(new u),o.push(new u))}),n.addEventListener("mouseleave",()=>{o.length>t&&o.splice(t)})}function tm(){oo("mc-fire-button","mc-fire-canvas",18),oo("credit-fire-target","credit-fire-canvas",16)}document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("app-loader"),e=()=>{!r||r.classList.contains("loader-hidden")||(r.classList.add("loader-hidden"),setTimeout(()=>{r.style.display="none"},450))},t=new Promise(g=>setTimeout(g,400)),n=new Promise(g=>{document.readyState==="complete"?g():window.addEventListener("load",g,{once:!0})});Promise.all([t,n]).then(()=>{e()}),window.addEventListener("beforeunload",()=>{r&&(r.style.display="flex",r.classList.remove("loader-hidden"))}),window.addEventListener("keydown",g=>{(g.key==="F5"||g.ctrlKey&&g.key.toLowerCase()==="r")&&r&&(r.style.display="flex",r.classList.remove("loader-hidden"))}),tm();const i=new $p,s=new Qp;new em;let o="home";const a=document.querySelectorAll(".nav-tab-btn, .mobile-nav-item"),l=document.querySelectorAll(".page-section");function c(g){o=g,St.playClick(),a.forEach(d=>{d.classList.toggle("active",d.dataset.tab===g)}),l.forEach(d=>{d.classList.toggle("active",d.id===`section-${g}`)}),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{if(g==="hidepart"&&i.viewer){const d=document.getElementById("hidepart-3d-container");d&&d.clientWidth&&(i.viewer.width=d.clientWidth)}else if(g==="standalone"&&s.viewer){const d=document.getElementById("standalone-3d-container");d&&d.clientWidth&&(s.viewer.width=d.clientWidth)}},100)}a.forEach(g=>{g.addEventListener("click",()=>{const d=g.dataset.tab;c(d)})}),document.querySelectorAll("[data-goto]").forEach(g=>{g.addEventListener("click",()=>{const d=g.dataset.goto;c(d)})});const u=document.getElementById("sfx-toggle-btn"),m=document.getElementById("sfx-icon-on"),f=document.getElementById("sfx-icon-off");function p(g){u&&u.classList.toggle("muted",g),m&&f&&(m.style.display=g?"none":"block",f.style.display=g?"block":"none")}u&&(p(St.isMuted()),u.addEventListener("click",()=>{const g=St.toggleMute();p(g),g?ke("ปิดเสียงเอฟเฟกต์","info"):(St.playClick(),ke("เปิดเสียงเอฟเฟกต์","info"))}));function _(g,d){g&&(["dragenter","dragover"].forEach(h=>{g.addEventListener(h,v=>{v.preventDefault(),v.stopPropagation(),g.classList.add("drag-over")})}),["dragleave","drop"].forEach(h=>{g.addEventListener(h,v=>{v.preventDefault(),v.stopPropagation(),g.classList.remove("drag-over")})}),g.addEventListener("drop",h=>{var b;const v=(b=h.dataTransfer)==null?void 0:b.files;v&&v.length>0&&d(v[0])}))}_(document.getElementById("hidepart-dropzone"),g=>{i.loadFile(g)}),_(document.getElementById("standalone-dropzone"),g=>{s.loadFile(g)}),window.addEventListener("dragover",g=>g.preventDefault()),window.addEventListener("drop",g=>{var v;g.preventDefault();const d=(v=g.dataTransfer)==null?void 0:v.files;if(!d||d.length===0)return;const h=d[0];o==="hidepart"?i.loadFile(h):o==="standalone"?s.loadFile(h):(c("hidepart"),setTimeout(()=>i.loadFile(h),150))}),window.addEventListener("paste",async g=>{var h;const d=(h=g.clipboardData)==null?void 0:h.items;if(d)for(let v=0;v<d.length;v++){const b=d[v];if(b.type.indexOf("image")!==-1){const E=b.getAsFile();if(E){ke("วางสกินจาก Clipboard (Ctrl+V)","info"),o==="standalone"?s.loadFile(E):(o!=="hidepart"&&c("hidepart"),setTimeout(()=>i.loadFile(E),150));break}}}}),document.addEventListener("click",g=>{var h;const d=g.target.closest("button, .tool-card, .preset-chip, .slot-select-btn, .model-select-btn");d&&!((h=d.id)!=null&&h.includes("sfx-toggle"))&&St.playClick()})});
