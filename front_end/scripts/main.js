$(document).ready(function() {
  
  $("#post_recipe").on('submit', function(e) {
    e.preventDefault();
    var recipeName = $('#recipeName').val();
    var gradient = $('#ingredients').val();
    $.ajax({
      url: 'http://localhost:3000/api/recipes',
      type: 'POST',
      contentType: 'application/json', 
      data: JSON.stringify({ 
        recipeName: recipeName,
        gradient: gradient
      }),
      success: function(response) {
        Swal.fire({
          icon: 'success',
          title: 'Recipe Added Successfully!',
        });
        fetchData();
      },
      error: function(xhr, status, error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while adding the recipe!'
        });
      }
    });
  });
  function appendData(recipes) {
    var accordion = $('#recipeAccordion');
    accordion.empty();
  
    recipes.forEach(function(recipe, index) {
      var accordionItemHtml = `
        <div class="accordion-item">
          <h2 class="accordion-header d-flex justify-content-between" id="recipeHeading${index}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#recipeCollapse${index}" aria-expanded="false" aria-controls="recipeCollapse${index}">
                ${recipe.recipeName}
                <button class="btn btn-danger btn-sm" data-id="${recipe._id}" onclick="deleteRecipe('${recipe._id}')">Delete</button>
            </button>
          </h2>
          <div id="recipeCollapse${index}" class="accordion-collapse collapse"
              aria-labelledby="recipeHeading${index}" data-bs-parent="#recipeAccordion">
              <div class="accordion-body" style="background: linear-gradient(to bottom, ${recipe.gradient});">
                  Ingredients for ${recipe.recipeName}
                  <p>${recipe.gradient}</p>
              </div>
          </div>
        </div>
      `;
      accordion.append(accordionItemHtml);
    });
}

  
   
  function fetchData() {
    $.ajax({
      url: 'http://localhost:3000/api/recipes/get',
      type: 'GET',
      success: function(response) {
        appendData(response);
      },
      error: function(xhr, status, error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred while fetching recipes!'
        });
      }
    });
  }
 
  fetchData();
});

function deleteRecipe(id){
  $.ajax({
    url: 'http://localhost:3000/api/recipes/delete',
    method: 'POST',
    contentType: 'application/json', 
    data: JSON.stringify({ id: id }),
    success: function(response) {
      Swal.fire({
        icon: 'success',
        title: 'Recipe Deleted Successfully!',
      });
      location.reload();
    },
    error: function(xhr, status, error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while fetching recipes!'
      });
    }
  })
}