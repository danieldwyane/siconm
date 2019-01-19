/*
	Evento document ready
*/
$(document).ready(function(){
    
        
	//Inicializamos el calendario
	$('#calendario').fullCalendar({
               
		header:{
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
        },
                events: {
		url : 'fechas_cumpleanos'
		},
                
	/*eventColor: 'rgb(26,187,156)',
	eventBackgroundColor : : 'rgb(26,187,156)',*/
        
		color: 'yellow', 
		eventRender: function(event, element){

            $(element).attr('title', event.title);
            $(element).attr('data-placement', 'bottom');
            $(element).tooltip({title: event.title});  
        }
    })
	
});/*Fin del document ready*/
/***************************/