const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText() {
//prevent button going to the site
    e.preventDefault()
      const Link = this.getAttribute('Link')
      console.log(Link)
      try {
         await navigator.clipboard.writeText(Link)
         alert ("Copied the text: " + Link)
      } catch (err) {
        console.error(err)
      }
}
shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click', copyText))