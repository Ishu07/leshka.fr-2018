// FUNCTION THAT APPLY ONCE WHEN WE CHANGE PROJECT

var targetProject
var currentProject
function initapplyOnce(){
var pageTarget='.this .project'
var oldProject
var newProject

  var transition = false;
  var applyOnce = true;

  function applyOnceFunc() {
    // this or that
    if (thisOrThat == "this"){
      pageTarget='.this .project'
    } else {
      pageTarget='.that .project'
    }
    for (var i = 0; i <  $(pageTarget).length; i++) {
      targetProject = $(pageTarget)[i];
      if (inView(targetProject)){
        // newProject = "?page=" + "identities" + "&project=" + targetProject.id;
        newProject = targetProject.id;


        // check if we are durring a transition
        if (newProject != oldProject){
          transition = true;
          oldProject = newProject;
        } else {
          transition = false;
          applyOnce = true;
        }

        // Durring the transition
        if (transition){
          if (applyOnce == true){

            // FUNCTIONS TO APPLY ONCE
            currentProject = targetProject
            changeURL();
            bgColorFunc();

            console.log("Project : " + targetProject.id);

            applyOnce = false;
          }
        }


      }
    }
}

  $(window).scroll(function() {
    applyOnceFunc();
  });

}

$( document ).ready(function() {
    initapplyOnce();
});
