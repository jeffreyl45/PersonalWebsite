var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");


// control the tab changes under the About Me section
function opentab(tabName) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function expandProject(){
}

function submitForm(){


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzlOHAY1jkrFBSCnA-SWcYp-sk3akDfyIxK6ol6yX1P6tiwgr_bfnUDVYmnxOhHTaS2/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Your Message Was Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
}
