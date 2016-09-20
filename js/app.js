//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//Capture the click event on a link to an image
  //1. Show the overlay
  //2. Update the overlay with the image
  //3. Get the alt attribute and use as a caption
  // 4. When clicked hide the overlay

  const overlay = $('<div id="overlay" />')
  const currentLBImg = $('<img />')
  const caption = $('<p/>')

  $('body').append(overlay);
  overlay.append(currentLBImg);
  overlay.append(caption);

  $('#imageGallery a').click(e=>{
     e.preventDefault()
    //  console.log(e.currentTarget.href);
     const imageLocation = e.currentTarget.href
     currentLBImg.attr('src', imageLocation);

      const captionText = $(e.currentTarget).children('img').attr('alt')
      caption.text(captionText);
      overlay.show()
    })
    overlay.click(()=>{
    overlay.hide()

  })
