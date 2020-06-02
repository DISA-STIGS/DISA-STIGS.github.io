
function search1() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("tableSearch1");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable1");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = ((tr[i].getElementsByTagName("td")[0]) || (tr[i].getElementsByTagName("th")[0]));
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function search2() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("tableSearch2");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable2");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = ((tr[i].getElementsByTagName("td")[0]) || (tr[i].getElementsByTagName("th")[0]));
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function search3() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("tableSearch3");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable3");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = ((tr[i].getElementsByTagName("td")[0]) || (tr[i].getElementsByTagName("th")[0]));
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}	



		// Get the modal
		var modal = document.getElementById("myModal1");

		// Get the button that opens the modal
		var btn = document.getElementById("aboutMe");
		
		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal
		btn.onclick = function() {
		  modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}
		
		
		
		
		
		// Get the modal
		var modal2 = document.getElementById("myModal2");

		// Get the button that opens the modal
		var btn2 = document.getElementById("faqs");
		
		// Get the <span> element that closes the modal
		var span2 = document.getElementsByClassName("close")[1];

		// When the user clicks on the button, open the modal
		btn2.onclick = function() {
		  modal2.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span2.onclick = function() {
		  modal2.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal2) {
			modal2.style.display = "none";
		  }
		}
		
		
		
		
		
		// Get the modal
		var modal3 = document.getElementById("myModal3");

		// Get the button that opens the modal
		var btn3 = document.getElementById("contactUs");
		
		// Get the <span> element that closes the modal
		var span3 = document.getElementsByClassName("close")[2];

		// When the user clicks on the button, open the modal
		btn3.onclick = function() {
		  modal3.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span3.onclick = function() {
		  modal3.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal3) {
			modal3.style.display = "none";
		  }
		}