/* global describe, it, expect, before, markWindowSize */

(function () {
    'use strict';

    describe('Body', function(){
				var body = $(document.body);

				before(function(){
					
				});

				describe('#markWindowSize()', function(){
					it('should add .clickable when window width is more than 942', function() {
						markWindowSize(1000);
						expect(body).to.have.class('clickable');
					});

					it('should remove .unclickable when window width is more than 942', function() {
						markWindowSize(1000);
						expect(body).to.not.have.class('unclickable');
					});

					it('should add .unclickable when window width is less than 942', function() {
						markWindowSize(200);
						expect(body).to.have.class('unclickable');
					});

					it('should remove .clickable when window width is less than 942', function() {
						markWindowSize(200);
						expect(body).to.not.have.class('clickable');
					});
				});
/*
				describe('#mouseClickMenu()', function() {
					it('should toggle betwean showing and hidding the .menu when clicked', function() {
						markWindowSize(1000);
						body.trigger('click');
						mouseClickMenu();
						body.trigger('click');
						expect($('.menu')).to.have.css('display', 'none');

					});
				});*/

			});


 

})();
