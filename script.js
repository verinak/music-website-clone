(() => {
    window.addEventListener("load", () => {
        document.querySelectorAll("video").forEach((video) => {
            video.load();
            video.play();
            video.classList.remove("invisible");
        });
    });

    const form = document.querySelector(
        "#contact-section form.needs-validation",
    );

    form.addEventListener(
        "submit",
        (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            // always disable form
            event.preventDefault();
            form.classList.add("was-validated");

            const data = new FormData(form);
            for (const [name, value] of data.entries()) {
                console.log(name + ": " + value);
            }
        },
        false,
    );
})();
