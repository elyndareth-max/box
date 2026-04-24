(function () {
  var body = ($response && $response.body) || '';
  var arg = typeof $argument === 'string' ? $argument : '';
  function done(x) { $done({ body: x }); }
  function parseJSON(s) { try { return JSON.parse(s); } catch (e) { return null; } }
  function parseArg(str) {
    var out = {};
    (str || '').split('&').forEach(function (pair) {
      if (!pair) return;
      var idx = pair.indexOf('=');
      if (idx === -1) return;
      var k = pair.slice(0, idx).trim();
      var v = pair.slice(idx + 1).trim();
      out[k] = decodeURIComponent(v);
    });
    return out;
  }
  var cfg = parseArg(arg);
  var nsfwOff = ['on', 'true', '1'].indexOf((cfg.nsfw || 'on').toLowerCase()) !== -1;

  function transform(value) {
    if (Array.isArray(value)) {
      var out = [];
      for (var i = 0; i < value.length; i++) {
        var t = transform(value[i]);
        if (t !== undefined) out.push(t);
      }
      return out;
    }
    if (!value || typeof value !== 'object') return value;

    if (nsfwOff) {
      if (value.isNsfw === true) value.isNsfw = false;
      if (value.isNsfwMediaBlocked === true) value.isNsfwMediaBlocked = false;
      if (value.isNsfwContentShown === false) value.isNsfwContentShown = true;
    }
    if (Array.isArray(value.commentsPageAds)) value.commentsPageAds = [];

    if (value.__typename === 'AdPost') return undefined;
    if (value.node && typeof value.node === 'object' && value.node.adPayload && typeof value.node.adPayload === 'object') return undefined;
    if (value.node && typeof value.node === 'object' && Array.isArray(value.node.cells)) {
      var hasAdCell = value.node.cells.some(function (c) {
        return c && (c.__typename === 'AdMetadataCell' || c.isAdPost === true);
      });
      if (hasAdCell) return undefined;
    }

    Object.keys(value).forEach(function (k) {
      var t = transform(value[k]);
      if (t === undefined) {
        if (Array.isArray(value[k])) value[k] = [];
        else delete value[k];
      } else {
        value[k] = t;
      }
    });
    return value;
  }

  var obj = parseJSON(body);
  if (!obj) return done(body);
  var out = transform(obj);
  done(JSON.stringify(out));
})();
