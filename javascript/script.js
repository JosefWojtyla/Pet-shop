document.addEventListener("DOMContentLoaded", function () {
    const commentList = document.getElementById("commentList");
    const commentInput = document.getElementById("commentInput");
    const submitButton = document.getElementById("submitButton");
  
    submitButton.addEventListener("click", function () {
      const commentText = commentInput.value;
      if (commentText.trim() !== "") {
        const newComment = document.createElement("li");
        newComment.innerText = commentText;
        commentList.appendChild(newComment)
        commentInput.value = "";
      }
    });
  });
  

  
