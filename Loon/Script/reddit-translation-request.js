(function () {
  var headers = ($request && $request.headers) || {};
  function setHeader(name, value) {
    Object.keys(headers).forEach(function (k) {
      if (k.toLowerCase() === name.toLowerCase()) delete headers[k];
    });
    headers[name] = value;
  }
  setHeader('x-reddit-translations', 'enabled, seo, zh-hans');
  $done({ headers: headers });
})();
