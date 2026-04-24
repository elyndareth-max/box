
/*
 *
 *
脚本功能：喜马拉雅+会员调试
软件版本：9.4.50
脚本作者：
更新时间：+20260304
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]

# > 喜马拉雅+会员解锁+大师课+音质/音效/下载/播放器皮肤
^https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2\/homePage|product\/detail\/v1|v1\/album\/track\/ts|mobile-playpage\/track\/v4\/baseInfo\/ts|mobile-playpage\/playpage\/tabs\/v2|mobile-playpage\/playpage\/track\/qualityAndEffect|mobile\/download\/v2\/track|mobile-user-grade\/decoratorV2\/decorationDetails\/page|mobile-album\/album\/plant\/grass) url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/ximalaya.js
#  > 去广告
^https?://passport\.ximalaya\.com/friendship-mobile/v1/findFriendsBanner/show/ url reject
^https?://xdcs-collector\.ximalaya\.com/api/v1/realtime url reject
^https?://adse\.wsa\.ximalaya\.com url reject
^https?://adse\.ximalaya\.com url reject
^https?://ad\.ximalaya\.com url reject
^https?://ulogs\.umeng\.com\/unify_logs url reject
^https?://.+ximalaya\.com/x-web-activity/signIn/getHomePageSignInInfo/ url reject-200
^https?://.+ximalaya\.com/product/promotion/v1/album/price url reject-200
#底部弹出会员购买页面
^https?://mobile\.ximalaya\.com/business-sale-promotion-guide-mobile-web/popup/info/ url reject
[mitm]
hostname = mobwsa.ximalaya.com,mobile.ximalaya.com, apisg.himalaya.com,36.150.215.*,61.172.194.*,180.153.*.*,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*,114.80.161.29,1.62.62.64,1.194.255.171,23.236.99.89,36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.13*.*,203.205.250.*, 211.152.137.*,47.100.227.85,61.164.145.12, 106.41.204.126,118.25.119.177,223.111.231.198,120.22*.2*.*,43.132.8*.*,101.33.27.*,43.141.11.*,117.34.49.212,36.103.197.65,198.18.1*.*,198.18.2*.*,101.91.13*,36.42.77.*,118.180.43.252,49.119.120.*,58.144.235.61,58.251.62*,221.204.4*.*,112.84.131.*,112.80.180.72,112.98.170.228,112.99.146.108,116.136.188.184,116.162.203.111,116.177.225.247,123.138.8.*,183.204.35.*,183.201.114.*,101.91.135.*,101.91.133.*,101.91.134.*,adse.ximalaya.com,61.170.88.*,101.91.134.*,42.56.64.*,*.xmcdn.com,*.ximalaya.com,61.172.194.*,180.153.*.*,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*,114.80.161.29,1.62.62.64,1.194.255.171,23.236.99.89,36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.13*.*,203.205.250.*,211.152.137.*,47.100.227.85,61.164.145.12,106.41.204.126,112.80.180.72,112.98.170.228, 112.99.146.108,118.25.119.177,223.111.231.198,120.22*.2*.*,43.132.8*.*,101.33.27.*,43.141.11.*,101.89.53.*,36.131.221.*,111.42.194.*,adse.ximalaya.com,36.131.221.*,112.84.131.*,111.6.56.*,111.6.56.228,*.xmcdn.com,120.232.165.228,43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171,23.236.99.89,36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.132.80.77,43.132.83.175,43.132.84.11,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,114.80.99.90,114.80.99.70,114.80.99.71,114.80.99.89,114.80.99.91,114.80.99.88,114.80.99.87,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.136.87,203.205.136.100,203.205.136.102,203.205.136.159,203.205.137.27,203.205.137.87,203.205.137.241,203.205.250.111,203.205.250.113,211.152.137.25,ulogs.umeng.com,passport.ximalaya.com,m.ximalaya.com,116.153.*.*,39.156.8.*,183.204.64.*,61.241.178.*,112.64.213.*,43.174.54.*,27.152.187.*,117.161.*.*,183.204.64.*,182.242.50.*,101.91.134.*,123.12.235.*,101.91.135.*,85.211.193.*,111.12.187.*,117.161.169.*,59.37.143.*,42.202.164.*,219.144.82.*,152.67.253.*,42.200.166.*,163.177.58.*,120.240.179.*,36.170.27.*

*
*
*/


const $ = new Env('喜马拉雅+会员解锁');

(function(A){var V,h,Z,W,a,u,i,D;i=t(g=>{var b,D,o,Z,y;((b=g.map(g=>g+'').join(''))||true)&&(o=1)&&0||(D=0);if(b){o=0;for(y=b.length-1;y>=0;y--)Z=b.charCodeAt(y),o=(o<<6&0xfffffff)+Z+(Z<<14),D=o&0xfe00000,o=D!==0?o^D>>21:o}return~~String(o).slice(0,3)},1);function e(g,o){return Object.defineProperty(g,'length',{value:o,configurable:!0})&&0||g}(D=t((...g)=>{return(((g.length=0)||3)&&(g[157]=g.A)&&false||(g[157]={z1:52,r:function(g='length'){return!D.s[0]&&D.s.push(-11)&&0||D.s[g]},R:59,c1:79,s1:'t1',w1:57,c:'d',f1:'g1',o2:'p2',_:[],X:79,g:[],R1:54,I1:[],m1:[],e2:59,b1:62,j:52,y1:[],W1:'X1',$1:'_1',Z:[],U:[],p1:72,Z1:[],g2:56,$:function(g='length'){return!D._[0]&&D._.push(56)&&0||D._[g]},x1:function(g='length'){return!D.y1[0]&&D.y1.push(-7)&&0||D.y1[g]},B:[],L1:'M1',A:function(g='length'){return!D.B[0]&&D.B.push(53)&&0||D.B[g]},w:'x',e1:[],F1:'G1',c2:function(g='length'){return!D.d2[0]&&D.d2.push(84)&&0||D.d2[g]},h1:function(g='length'){return!D.i1[0]&&D.i1.push(88)&&0||D.i1[g]},s:[],K:'L',V:function(g='length'){return!D.W[0]&&D.W.push(93)&&0||D.W[g]},u:'v',Q:[],P1:'Q1',J1:'K1',G:'H',d1:function(g='length'){return!D.e1[0]&&D.e1.push(-43)&&0||D.e1[g]},a2:'b2',E:'F',i1:[],q:[],M:function(g='length'){return!D.N[0]&&D.N.push(8)&&0||D.N[g]},z:[],y:function(g='length'){return!D.z[0]&&D.z.push(-36)&&0||D.z[g]},P:function(g='length'){return!D.Q[0]&&D.Q.push(-92)&&0||D.Q[g]},D1:'E1',d2:[],U1:function(g='length'){return!D.V1[0]&&D.V1.push(-77)&&0||D.V1[g]},e:72,l1:function(g='length'){return!D.m1[0]&&D.m1.push(-3)&&0||D.m1[g]},j2:46,a:'b',m:52,n:function(g='length'){return!D.o[0]&&D.o.push(-22)&&0||D.o[g]},N:[],k:function(g='length'){return!D.l[0]&&D.l.push(78)&&0||D.l[g]},J:83,W:[],i2:[],I:70,i:66,k1:[],r2:[],Y1:function(g='length'){return!D.Z1[0]&&D.Z1.push(-57)&&0||D.Z1[g]},l:[],o:[],T:function(g='length'){return!D.U[0]&&D.U.push(59)&&0||D.U[g]},N1:'O1',r1:[],j1:function(g='length'){return!D.k1[0]&&D.k1.push(9)&&0||D.k1[g]},h:67,h2:function(g='length'){return!D.i2[0]&&D.i2.push(-33)&&0||D.i2[g]},q2:function(g='length'){return!D.r2[0]&&D.r2.push(-5)&&0||D.r2[g]},S:58,m2:'n2',S1:function(g='length'){return!D.T1[0]&&D.T1.push(-100)&&0||D.T1[g]},Y:function(g='length'){return!D.Z[0]&&D.Z.push(48)&&0||D.Z[g]},f2:60,O:51,V1:[],k2:27,f:function(g='length'){return!D.g[0]&&D.g.push(74)&&0||D.g[g]},T1:[],n1:49,A1:68,B1:'C1',t:35,C:'D',o1:50,l2:47,a1:79,q1:function(g='length'){return!D.r1[0]&&D.r1.push(-51)&&0||D.r1[g]},p:function(g='length'){return!D.q[0]&&D.q.push(38)&&0||D.q[g]},u1:'v1',H1:function(g='length'){return!D.I1[0]&&D.I1.push(99)&&0||D.I1[g]}}))&&0||g[157]},0)())&&0||e(F,2);function F(...g){((g.length=2)||2)&&(g[98]=g[1],g[144]=g[98]);switch(a){case D.a.charAt(0)=='b'?34:175:return g[0]+g[144];case 58:return g[0]-g[144];case!(D.c.charAt(0)=='d')?void 0:-7:return g[0]/g[144]}}e(O,1);function O(...g){return((g
