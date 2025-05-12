const footerHTML = `
  <footer class="section-footer">
    <div class="f-design">
      <div class="f-design-txt">
        <p>Made by SIBTAIN RAZA 💕 </p>
      </div>
    </div>
  </footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
