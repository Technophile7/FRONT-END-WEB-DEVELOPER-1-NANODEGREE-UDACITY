
//declring variables
var rows;
var cols;
var color;

//getting value of rows and columns 
//using event.preventDefault() tostop the default action of the element from happening.
$('#sizePicker').submit(function(event){
                       
   event.preventDefault();
    rows=$('#inputHeight').val();
    cols=$('#inputWeight').val();
makeGrid(rows,cols);//calling of makeGrid function to make the grid
    

  })
//function to make grid
  function makeGrid(row,col){
      $('table tr').remove();
      for(var r=0;r<row;r++)
          {
			$('table').append('<tr></tr>');
			for(var j=0;j<col;j++)
			{
				$('tr').last().append('<td></td>');
				$('td').addClass('cells');
			}
		}
   //to add user wished colors in the grid    
      $('td').click(function putColor(){
          
          color=$('#colorPicker').val();
                    $(this).css('background-color',color);
                   
      
      })
                  
  }