var rUrl = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;

/**
* Fancybox tag
*
* Syntax:
*   {% rpgallery galleryname /path/to/image [/path/to/thumbnail] [title] %}
*/

hexo.extend.tag.register('rpgallery', function(args){
  var reltag = args.shift(),
    original = args.shift(),
    thumbnail = '';

  // // This is silly because (1) the URL does not need to be absolute and if it does then we should check original too
  // if (args.length && rUrl.test(args[0])){
    thumbnail = args.shift();
  // }

  var title = args.join(' ');

  // console.log("reltag    = " + reltag);
  // console.log("original  = " + original);
  // console.log("thumbnail = " + thumbnail);
  // console.log("title     = " + title);
  var resstr = '<a class="fancybox" href="' + original + '" title="' + title + '" rel="' + reltag + '">' +
    '<img src="' + (thumbnail || original) + '" alt="' + title + '">' +
    '</a>' + 
    (title ? '<span class="caption">' + title + '</span>' : '');
  // console.log(resstr);
  return resstr;
});
