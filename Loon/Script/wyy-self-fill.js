/*
网易云音乐自填请求头脚本
- 仅注入用户在插件参数中自行填写的请求头
- 不内置任何共享 Cookie / 凭证
*/

function parseArgument(raw) {
  const out = {};
  String(raw || '').split('&').forEach(pair => {
    if (!pair) return;
    const idx = pair.indexOf('=');
    const key = idx >= 0 ? pair.slice(0, idx) : pair;
    const val = idx >= 0 ? pair.slice(idx + 1) : '';
    out[key] = decodeURIComponent(val || '');
  });
  return out;
}

function setHeader(headers, name, value) {
  const lower = name.toLowerCase();
  Object.keys(headers).forEach(k => {
    if (k.toLowerCase() === lower && k !== name) delete headers[k];
  });
  headers[name] = value;
}

const args = parseArgument(typeof $argument !== 'undefined' ? $argument : '');
const enabled = String(args.SelfMember || '').toLowerCase() === 'true';
const headers = ($request && $request.headers) ? $request.headers : {};

if (enabled) {
  const cookie = String(args.Cookie || '').trim();
  const mconfigInfo = String(args.MConfigInfo || '').trim();
  const userAgent = String(args.UserAgent || '').trim();

  if (cookie) setHeader(headers, 'Cookie', cookie);
  if (mconfigInfo) setHeader(headers, 'MConfig-Info', mconfigInfo);
  if (userAgent) setHeader(headers, 'User-Agent', userAgent);
}

$done({ headers });
