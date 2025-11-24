// document.querySelectorAll('input[type="checkbox"], input[type="radio"]')
//   .forEach(el => {
//     el.addEventListener('change', () => {
//       localStorage.setItem(el.id, el.checked);
//     });
//   });


//   window.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('input[type="checkbox"], input[type="radio"]')
//       .forEach(el => {
//         const saved = localStorage.getItem(el.id);
//         if (saved !== null) {
//           el.checked = saved === "true";
//         }
//       });
//   });



//Save:
function saveFormState() {
    const inputs = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');
    const state = {};
  
    inputs.forEach(el => {
      state[el.id] = el.checked;
    });
  
    localStorage.setItem("formState", JSON.stringify(state));
  }
  
  document.addEventListener("change", saveFormState);


//Restore:
  function loadFormState() {
    const saved = JSON.parse(localStorage.getItem("formState") || "{}");
  
    Object.keys(saved).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.checked = saved[id];
    });
  }
  
  window.addEventListener("DOMContentLoaded", loadFormState);
