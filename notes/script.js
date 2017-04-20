      var id = 2
      
      function newElement() {
        if (id == undefined) {
          var id = 2;
        }
        var li = document.createElement("li");
        li.innerHTML = "<span onClick='noteTools()'>☰</span><span onclick='this.parentElement.outerHTML = \"\";' class='close'>&times;</span><textarea placeholder='Enter note text here...'></textarea>";
        document.getElementsByClassName("note-area")[0].appendChild(li);
        li.id = String(id);
        li.setAttribute("draggable", "true");
        var id = id + 1
      }
      
      function resetNotes() {
        swal({
          title: "Clear notes?",
          text: "Are you really sure that you want to clear all of your notes? They can't magically come back.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Delete",
          closeOnConfirm: false,
          showLoaderOnConfirm: true
        }, function() {
          setTimeout(function(){
            document.getElementsByClassName("note-area")[0].innerHTML = "";
          swal({
            title: "Notes deleted!",
            type: "success",
            timer: "3000"
          });
          }, "1500");
        });
      }
      
      function noteTools() {
        swal("Error", "This feature doesn't work yet!", "error");
      }
