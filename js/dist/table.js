$(document).ready(function () {


    $('#example').DataTable({
        "scrollX": true
    });



    

    $('.side-child2').click(function(){
        $('.side-child').fadeToggle()
    })


    $('.carousel').carousel({
        interval: false,
      });





    $("#ken").click(function(){
        $("#admin").fadeToggle(300)
    })


    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });


    let testh = document.getElementById('testh');

    testh = window.outerHeight;



    let section = document.getElementById('section');


    // $(window).scroll(function(){

    //     let top = $(window).scrollTop();
    

    //     if(top > testh )
    //     {
    //         section.classList.remove('hell');
    //     }
    //     else
    //     {
    //         section.classList.add('hell');

	// 	};

		
    // })

    // $('.searchtest').clickToggle(function() {   
    //     $(this).animate({width: "500px"}, 1500);
    // },
    // function() {$(this).animate({width: "30px"}, 1500);
    
    // });

    // $('.searchtest').click(function(){
    //     $(this).animate({width:'500px'} , 500);
    //     $('.search-input').fadeIn(1000),
    //     function(){
    //         $(this).animate({width:'100px'} , 500);
    // });



    $('#colorbtn').click(function(){
        $('#input').fadeToggle()
    })

    $('#funone').click(function(){
        $('#cardone').slideToggle()
    });

    $('#funtwo').click(function(){
        $('#cardtwo').slideToggle()
    });

    $('#funthree').click(function(){
        $('#cardthree').slideToggle()
    });

    $('#funfour').click(function(){
        $('#cardfour').slideToggle()
    });

    $('#funfive').click(function(){
        $('#cardfive').slideToggle()
    });

    $('#funsix').click(function(){
        $('#cardsix').slideToggle()
    });

    $('#funseven').click(function(){
        $('#cardseven').slideToggle()
    });

    $('#funeight').click(function(){
        $('#cardeight').slideToggle()
    });




    });

    


    







$('#btnscreen').on('click',function() {
	if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement) { 
		
		if(document.exitFullscreen) {
			document.exitFullscreen();
		} else if(document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	} else { 
		
		if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if(document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen();
		} else if(document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if(document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		}
	}
});


let input = document.getElementById('input');
let searchnav = document.getElementById('searchnav');


input.addEventListener('keyup' , function(){
    if(input.value != "")
    {
        searchnav.style.display = 'block'
    }else

    {
        searchnav.style.display = 'none'
    }
})




var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');
var box10 = document.getElementById('box10');
var box11 = document.getElementById('box11');
var box12 = document.getElementById('box12');
var box13 = document.getElementById('box13');
var box14 = document.getElementById('box14');
var box15 = document.getElementById('box15');
var box16 = document.getElementById('box16');




var check1 = document.getElementById('check1');
var check2 = document.getElementById('check2');
var check3 = document.getElementById('check3');
var check4 = document.getElementById('check4');
var check5 = document.getElementById('check5');
var check6 = document.getElementById('check6');
var check7 = document.getElementById('check7');
var check8 = document.getElementById('check8');
var check9 = document.getElementById('check9');
var check10 = document.getElementById('check10');
var check11 = document.getElementById('check11');
var check12 = document.getElementById('check12');
var check13 = document.getElementById('check13');
var check14 = document.getElementById('check14');
var check15 = document.getElementById('check15');
var check16 = document.getElementById('check16');






box1.addEventListener( 'click', function(){

    if (box1.checked == true)
    {
        check1.style.display = 'block';
    }else

    {
        check1.style.display = 'none';
    }

})


box2.addEventListener( 'click', function(){

    if (box2.checked == true)
    {
        check2.style.display = 'block';
    }else

    {
        check2.style.display = 'none';
    }

})


box3.addEventListener( 'click', function(){

    if (box3.checked == true)
    {
        check3.style.display = 'block';
    }else

    {
        check3.style.display = 'none';
    }

})

box4.addEventListener( 'click', function(){

    if (box4.checked == true)
    {
        check4.style.display = 'block';
    }else

    {
        check4.style.display = 'none';
    }

})

box5.addEventListener( 'click', function(){

    if (box5.checked == true)
    {
        check5.style.display = 'block';
    }else

    {
        check5.style.display = 'none';
    }

})

box6.addEventListener( 'click', function(){

    if (box6.checked == true)
    {
        check6.style.display = 'block';
    }else

    {
        check6.style.display = 'none';
    }

})

box7.addEventListener( 'click', function(){

    if (box7.checked == true)
    {
        check7.style.display = 'block';
    }else

    {
        check7.style.display = 'none';
    }

})

box8.addEventListener( 'click', function(){

    if (box8.checked == true)
    {
        check8.style.display = 'block';
    }else

    {
        check8.style.display = 'none';
    }

})

box9.addEventListener( 'click', function(){

    if (box9.checked == true)
    {
        check9.style.display = 'block';
    }else

    {
        check9.style.display = 'none';
    }

})

box10.addEventListener( 'click', function(){

    if (box10.checked == true)
    {
        check10.style.display = 'block';
    }else

    {
        check10.style.display = 'none';
    }

})

box11.addEventListener( 'click', function(){

    if (box11.checked == true)
    {
        check11.style.display = 'block';
    }else

    {
        check11.style.display = 'none';
    }

})

box12.addEventListener( 'click', function(){

    if (box12.checked == true)
    {
        check12.style.display = 'block';
    }else

    {
        check12.style.display = 'none';
    }

})

box13.addEventListener( 'click', function(){

    if (box13.checked == true)
    {
        check13.style.display = 'block';
    }else

    {
        check13.style.display = 'none';
    }

})

box14.addEventListener( 'click', function(){

    if (box14.checked == true)
    {
        check14.style.display = 'block';
    }else

    {
        check14.style.display = 'none';
    }

})

box15.addEventListener( 'click', function(){

    if (box15.checked == true)
    {
        check15.style.display = 'block';
    }else

    {
        check15.style.display = 'none';
    }

})

box16.addEventListener( 'click', function(){

    if (box16.checked == true)
    {
        check16.style.display = 'block';
    }else

    {
        check16.style.display = 'none';
    }

})


let plus = document.getElementById('plus');


plus.addEventListener('click' , function(){
    var cont = ``;
    cont += `<div class='d-flex justify-content-between'>
                <input class='form-control-file m-2' type='file'>
                <button class='btn btn-info my-2'>x</button>
            </div>`;

    document.getElementById('tester').innerHTML = cont;

});



var editor; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "../php/staff.php",
        table: "#example",
        fields: [ {
                label: "First name:",
                name: "first_name"
            }, {
                label: "Last name:",
                name: "last_name"
            }, {
                label: "Position:",
                name: "position"
            }, {
                label: "Office:",
                name: "office"
            }, {
                label: "Extension:",
                name: "extn",
                multiEditable: false
            }, {
                label: "Start date:",
                name: "start_date",
                type: "datetime"
            }, {
                label: "Salary:",
                name: "salary"
            }
        ]
    } );
 
    $('#example').DataTable( {
        dom: "Bfrtip",
        ajax: "../php/staff.php",
        columns: [
            { data: null, render: function ( data, type, row ) {
                // Combine the first and last names into a single table field
                return data.first_name+' '+data.last_name;
            } },
            { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
    } );
} );




















