document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
  
    // Load saved states
    checkboxes.forEach(cb => {
      const saved = localStorage.getItem(cb.id);
      if (saved !== null) {
        cb.checked = saved === "true";
      }
  
      // Save state whenever checkbox changes
      cb.addEventListener("change", () => {
        localStorage.setItem(cb.id, cb.checked);
      });
    });
  });