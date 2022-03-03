const rangeInput = document.querySelector('input[type="range"]');

const setValue = (event) => {

    const currentValue = event.target.value;
    event.target.style.backgroundSize = currentValue+"% 100%";
};

rangeInput.addEventListener('input', setValue);
