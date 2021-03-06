'use strict';

var hexo = hexo || {};
var config = hexo.config;
var addlink = hexo.config.addlink;

hexo.extend.filter.register('before_post_render', function (data) {
  if (!addlink || !config.url || data.layout !== 'post') {
    return data;
  }

  var domain = config.url;
  var beforeText = addlink.before_text || '';
  var afterText = addlink.after_text || '';
  var layout = data.layout;
  var href = domain + '/' + data.path;
  var hrefText = beforeText + ' [' + href + '](' + href + ') ' + afterText;

  data.content += '\n\n' + hrefText;
}, 20);
