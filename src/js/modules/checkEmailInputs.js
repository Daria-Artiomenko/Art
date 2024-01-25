const checkEmailInputs = (selector) => {
    const emailInputs = document.querySelectorAll(selector);

    emailInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^a-z 0-9 \. @]/ig)) {
                e.preventDefault();
            }
        });
    });
}

export default checkEmailInputs;