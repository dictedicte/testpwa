document.querySelectorAll('input[type="checkbox"], input[type="radio"]')
  .forEach(el => {
    el.addEventListener('change', () => {
      localStorage.setItem(el.id, el.checked);
    });
  });


  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]')
      .forEach(el => {
        const saved = localStorage.getItem(el.id);
        if (saved !== null) {
          el.checked = saved === "true";
        }
      });
  });
