
function createCard(profileInfo) {
    let spawnCard = "";
    for (let i = 0; i < profileInfo.length; i++) {
        spawnCard += `
        <div class="col-xl-3 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-4 px-4 photos">
            <img src="./dist/images/managerImg.jpg" alt="cards depicting each employee's role" width="100" class="mb-3  shadow-sm">
                <h5 class="mb-0">${profileInfo[i].retName}</h5><span class="small text-uppercase text-muted">${profileInfo[i].retRole}</span>
            <hr class="border border-primary border-3 opacity-75">
                <p class="mt-3 ">${profileInfo[i].retID}</p>
            <hr>
                <p class="mt-3">${profileInfo[i].retMail}</p>
            <hr>
                <p class="mt-3">${profileInfo[i].???}</p>
            </div>
        </div> 
        `
    }
}

function generateHtml(profileInfo) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link href="/dist/style.css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body class="bg">
        <header>
            <nav class="navbar bg bg-body-tertiary pb-5">
                <div class="container d-flex justify-content-start pe-5 navflex">
                    <a class="navbar-brand" href="#">
                        <img class="banner" src="/dist/images/teamGen.jpg" width="150px">
                    </a>
                    <div class="branding text-center text-white">
                    <h1 class="lh-lg fw-bold fst-italic">Business Name goes here</h1>
                    <h3 class="fst-italic text-decoration-underline">Meet the team</h3>
                    </div>
                </div>
            </nav>
        </header>
        <section class="container">
            <div class="container-fluid">
                <div class="row text-center">
                ${createCard(profileInfo)}
                </div>
                </div>
                    
            </section>
            <script src="./index.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>`;
}

module.exports = { createCard, generateHtml };