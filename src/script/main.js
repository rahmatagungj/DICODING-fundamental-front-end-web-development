const main = () => {
    const animalList = document.getElementById("animal-list");
    let hpanimal = [];
    console.log(searchBar);

    // Pencarian
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredanimal = hpanimal.filter((animal) => {
            return (
                animal.first_name.toLowerCase().includes(searchString) || animal.last_name.toLowerCase().includes(searchString)
            );
        });
        displayanimal(filteredanimal);
    });

    const loadanimal = async () => {
        try {
            const res = await fetch('https://my-json-server.typicode.com/rahmatagungj/dicoding/hewan');
            hpanimal = await res.json();
            displayanimal(hpanimal);
            console.log(hpanimal);
        } catch (err) {
            console.error(err);
        }
    };

    const displayanimal = (animal) => {
        const htmlString = animal
            .map((animal) => {
                return `
            <div class="col-xl-3 col-md-6 mb-4 ">
            <div class="card border-0 shadow">
                <img src="../src/${animal.image}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                <h5 class="card-title mb-0"><a href="${animal.link}" target="_blank">${animal.first_name}</a></h5>
                <div class="card-text text-black-50">(${animal.last_name})</div>
                </div>
            </div>
            </div>`;
            })
            .join('');
        animalList.innerHTML = htmlString;
    };

    loadanimal();
};
export default main;