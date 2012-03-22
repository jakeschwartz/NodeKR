/**
* jQuery Inline Edit
* Copyright (c) 2009 Markus Hedlund, Mimmin AB
* Version 1.0
* Licensed under MIT license
* http://www.opensource.org/licenses/mit-license.php
* http://labs.mimmin.com/inlineedit
*
*
* Adds inline edit to html elements with classes editableSingle and editableMulti.
* Elements must have class to identify type of data and id.
* Types are linked to urls
* 
* Example:
* <li class="editableSingle categoryName id3">
* 
* Javascript:
* $.inlineEdit({categoryName: 'category/edit/id/'});
* 
* 
* Or:
* <td class="editableSingle videoTitle id3"></td>
* <td class="editableMulti videoDescription id3"></td>
* 
* Javascript:
* $.inlineEdit({
*     videoTitle: '/video/edit/title/',
*     videoDescription: '/video/edit/description/'
* });
*/

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(2($){$.1z=2(h,i){3 j=h;3 i=1a.1A({1b:2(){},1c:2(){},y:y,V:2(a){u a.w()},L:M,r:{E:\'1B\',z:\'1C\'}},i);3 k={};3 l=p;3 m=p;4($(\'.6, .7\').A>0){3 n=$(\'.6, .7\')[0].1D.1E()!=\'1F\';i.r.J=$(\'.6, .7\').1d(0).F(\'G\')}$(\'.6\').x(2(){4(m){m=p;u}4(!l||$(\'.8\').A<l){3 a=i.V($(5));W($(5));$(5).1e(\'X\').F(\'G\',i.r.J).1f();4($(\'.H\').A==0){l=$(5).N(\'.6, .7\').A+1;$(5).w(\'<q o="s"><Y v="1g" Z="\'+a+\'" o="8 H" /></q>\');4(!n){$(5).N(\'.6, .7\').x()}t{l=1}10(2(){$(\'.H\').1h()})}t{$(5).w(\'<q o="s"><Y v="1g" Z="\'+a+\'" o="8" /></q>\')}}});$(\'.7\').x(2(){4(m){m=p;u p}4(!l||$(\'.8\').A<l){3 a=i.V($(5));W($(5));$(5).1e(\'X\').F(\'G\',i.r.J).1f();4($(\'.H\').A==0){l=$(5).N(\'.6, .7\').A+1;$(5).w(\'<q o="s"><O o="8 H">\'+a+\'</O></q>\');4(!n){$(5).N(\'.6, .7\').x()}10(2(){$(\'.H\').1h()})}t{$(5).w(\'<q o="s"><O o="8">\'+a+\'</O></q>\')}}});$(\'.6 a, .7 a\').x(2(){m=M});2 10(a){4($(\'.s:11\').1G().1i(\'1H\')){$(\'.s:11\').1j(\'<q o="B"><C>1k</C>\'+\', <a 12="14:;" o="1l">1I</a> 1m \'+\'<a 12="14:;" o="15">1n</a></q>\')}t{$(\'.s:11\').1j(\'<q o="B"><C>1k</C> 1m \'+\'<a 12="14:;" o="15">1n</a></q>\')}$(\'.B > C\').x(16);$(\'.B > a.15\').x(17);$(\'.B > a.1l\').x(1o);$(\'Y.8\').1J(2(e){4(e.1p==13){16()}t 4(e.1p==1K){17()}});4(i.L){$(\'.s\').1L(18,a)}t{$(\'.s\').1M();a()}}2 17(e){m=1q(e)!=\'1r\';$(\'.8\').I(2(){3 a=$(5).K(\'.6, .7\');D(a,P(a),p)})}2 1o(){m=M;4(!1N(\'1O 1s 1P 1Q 1s 1R 1S Q 5?\')){u p}$(\'.B > C, .8\').19(\'R\',\'R\').w(\'1T...\');3 c=$(\'.8\').1d(0).K(\'.6, .7\');3 d=j.Q;3 e=i.y(c);$.1t({S:d+e,v:\'1u\',E:2(b){$(\'.8\').I(2(){3 a=$(5).K(\'.6, .7\');4(b==1){4(i.L){a.1v(18,2(){$(5).Q()})}t{a.Q()}}t{D(a,P(a),p,i.r.z)}});i.1c({E:b==1,T:e})},z:2(){$(\'.8\').I(2(){3 a=$(5).K(\'.6, .7\');D(a,P(a),p,i.r.z)})}})}2 D(a,b,c,d){3 f=2(){a.w(b).1U(\'X\');4(c){a.F(\'G\',d);1V(2(){a.F(\'G\',i.r.J)},1W)}t 4(1q(d)!=\'1r\'){a.F(\'G\',d)}};4(i.L){a.1w(\'.s\').1v(18,f)}t{a.1w(\'.s\').1X();f()}}2 W(a){3 b=i.y(a)+U(a).v;k[b]=a.w()}2 P(a){3 b=i.y(a)+U(a).v;u k[b]}2 y(c){3 d;$.I(c.19(\'o\').1Y(\' \'),2(a,b){4(b.1x(/^T[0-9]*$/)){d=b.1x(/^T([0-9]*)$/)[1];u p}});u d}2 U(c){3 d;$.I(j,2(a,b){4(c.1i(a)){d={v:a,S:b};u p}});u d}2 16(){$(\'.B > C, .8\').19(\'R\',\'R\');$(\'.8\').I(2(){3 b=$(5).K(\'.6, .7\');3 c=U(b);3 d=c.S;3 e=i.y(b);3 f=$(5).1Z();3 g=i.r.J;$.1t({S:d+e,1y:{1y:f},v:\'1u\',E:2(a){4(a==1){D(b,f,M,i.r.E)}t{D(b,f,p,i.r.z)}i.1b({E:a==1,v:c.v,T:e,Z:f})},z:2(){D(b,f,p,i.r.z)}})})}}})(1a);',62,124,'||function|var|if|this|editableSingle|editableMulti|editField||||||||||||||||class|false|div|colors|editFieldWrapper|else|return|type|html|click|getId|error|length|editFieldSaveControllers|button|removeEditField|success|css|color|editFieldFirst|each|standard|parents|animate|true|siblings|textarea|getInitialValue|remove|disabled|url|id|getTypeAndUrl|filterElementValue|saveInitialValue|isEditing|input|value|addSaveControllers|last|href||javascript|editFieldCancel|editSave|editCancel|500|attr|jQuery|afterSave|afterRemove|eq|addClass|stop|text|focus|hasClass|append|Save|editFieldRemove|or|Cancel|editRemove|keyCode|typeof|undefined|you|ajax|POST|slideUp|children|match|data|inlineEdit|extend|green|red|tagName|toLowerCase|td|parent|removable|Remove|keydown|27|slideDown|show|confirm|Are|sure|that|want|to|Removing|removeClass|setTimeout|5000|hide|split|val'.split('|'),0,{}))