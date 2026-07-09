let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let image = document.querySelector("#image");

const usermanager = {
    users: [],

    init: function () {
        form.addEventListener("submit", this.submitform.bind(this));
    },

    submitform: function (e) {
        e.preventDefault();
        this.addUser();
    },

    addUser: function () {
        this.users.push({
            username: username.value,
            role: role.value,
            bio: bio.value,
            image: image.value,
        });

        form.reset();
        this.renderUI();
    },

    renderUI: function () {
        const cardsContainer = document.querySelector(".cards-container");

        cardsContainer.innerHTML = "";

        this.users.forEach(function (val, index) {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = val.image;
            img.alt = "Profile Image";

            const name = document.createElement("h2");
            name.textContent = val.username;

            const userRole = document.createElement("h4");
            userRole.textContent = val.role;

            const userBio = document.createElement("p");
            userBio.textContent = val.bio;

            card.append(img, name, userRole, userBio);

            card.addEventListener("click", () => {
                this.removeUser(index);
            });

            cardsContainer.appendChild(card);
        }, this);
    },

    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUI();
    },
};

usermanager.init();