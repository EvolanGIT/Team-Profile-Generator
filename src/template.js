function createCard(profileInfo) {
    let spawnCard = "";
    for (let i = 0; i < profileInfo.length; i++) {
        spawnCard += `
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-4 px-4 photos"><img src="./dist/images/managerImg.jpg" alt="manager hand with team" width="100" class="mb-3  shadow-sm">
                <h5 class="mb-0">${profileInfo[i].retName}</h5><span class="small text-uppercase text-muted">${profileInfo[i].retRole}</span>
            <hr class="border border-primary border-3 opacity-75">
                <p class="mt-3 ">${profileInfo[i].retID}</p>
            <hr>
                <p class="mt-3">${profileInfo[i].retMail}</p>
            <hr>
                <p class="mt-3">${profileInfo[i].retName}</p>
            </div>
        </div> 
        `
    }
}