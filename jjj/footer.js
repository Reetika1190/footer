document.addEventListener('DOMContentLoaded', function () {
    <footer class="fixed_footer">
    <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ducimus nemo quo totam neque quis soluta nisi obcaecati aliquam saepe dicta adipisci blanditiis quaerat earum laboriosam accusamus nesciunt! Saepe ex maxime enim asperiores nisi. Obcaecati nostrum nobis laudantium aliquam commodi veniam magni similique ullam quis pariatur voluptatem harum id error.</p>
    </div>
  </footer>
    var footerContainer = document.createElement('div');
    footerContainer.innerHTML = '<div w3-include-html="footer.html"></div>';
    
    // Append the footer content to the body
    document.body.appendChild(footerContainer);
  });