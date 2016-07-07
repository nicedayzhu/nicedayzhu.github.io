$(document).ready(function(){
	$('#pagepiling').pagepiling({
		menu: '#menu',
		anchors: ['about', 'project', 'education','contact'],
		sectionsColor: ['#87CEEB', '#778899', '#8FBC8F','#E9967A'],
		navigation: {
			'textColor': '#f2f2f2',
			'bulletsColor': '#fff',
			'position': 'right',
			'tooltips': ['关于我', '项目', '学历','联系方式' ]
		},
		loopTop: true,
		loopBottom: true,
		afterLoad: function(anchorLink, index){
		switch (index){
			case 1:
				move('.section1 img.avatar').rotate(360).end();
				break;
			case 2:
				move('.section2 h1').scale(0.7).end();
				move('.section2 p').scale(1.2).end();
				break;
			case 3:
				move('.section3 h1').set('margin-left','20%').end();
				move('.section3 p').set('margin-left','20%').end(function(){
						move('.section3 p').scale(1.2).end();
					});
				break;
			case 4:
				break;
			default :
				break;
			}
		},
		//离开某一屏后恢复到初始效果
		onLeave: function(index, nextIndex, direction){
		switch (index){
			case 1:
				move('.section1 img.avatar').rotate(-360).end();
				break;
			case 2:
				move('.section2 h1').scale(1).end();
				move('.section2 p').scale(1).end();
				break;
			case 3:
			    move('.section3 h1').set('margin-left','-1500px').end();
                move('.section3 p').set('margin-left','1500px').end();
				move('.section3 p').scale(1).end();
				break;
			case 4:
				break;
			default :
				break;
			}
		}
	})
});