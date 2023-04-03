/* js code */

const cancelBtn = document.querySelector("button");
const modal = document.getElementById("modal");
const modalContent = document.createElement("div");
modalContent.id = "modal-content";

// Show modal when cancel button is clicked
cancelBtn.addEventListener("click", () => {
  modalContent.innerHTML = `
    <h2>Are you sure you want to cancel your subscription?</h2>
    <button id="no-btn">No</button>
    <button id="yes-btn">Yes - Cancel</button>
  `;
  modal.appendChild(modalContent);
  modal.style.display = "block";

  const noBtn = document.getElementById("no-btn");
  const yesBtn = document.getElementById("yes-btn");

  // Hide modal when no button is clicked
  noBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Update modal content and hide modal after 2 seconds when yes button is clicked
  yesBtn.addEventListener("click", () => {
    modalContent.innerHTML = `
      <p>Subscription successfully cancelled! 😭😭😭</p>
    `;
    cancelBtn.textContent = "Cancelled";
    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  });
});

// Hide modal when user clicks outside of it
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
