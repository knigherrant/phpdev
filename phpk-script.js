var phpk = (function($){
	var fn = {
    	log: function (){
        	console.log('xxxx');
        },
        makeAutocomplete : function(){
        	var forms = $('.phpk-living-room .search_brands'),
            	minusearch = $('#search_mini_form')
            ;
            forms.each(function(i, form){
            	var data = [],
                	jform = $(form)
                ;
                jform.find('ul.phpk_autocomplete li').each(function(j, li){
                	data.push($(li).text());
                });
                jform.find('.input-search-brands').autocomplete({
                  	source: data
                });
				jform.find('.btn-search-brands').click(function(){
					var url = minusearch.attr('action'),
						jtext = jform.find('.input-search-brands'),
						openUrl = url + '?q=' + jtext.val()
					;
					phpk.openInNewTab(openUrl);
				});
            })
        },
		openInNewTab : function (url) {
		  var win = window.open(url, '_blank');
		  win.focus();
		}
    };
    return fn;

})(jQuery);
phpk.makeAutocomplete();