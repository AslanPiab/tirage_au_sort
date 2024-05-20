<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de Participants</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li>
                    <a href="index.html"><img src="img/LogoCv2.png" alt="logo de Pierre ASLAN"></a>
                </li>
                <li><a href="formulaire.php">Tirage au sort</a></li>
                <li><a href="createurdegroupe.php">Créateur de groupe</a></li>
                <li><a href="inscription.php">Inscription / connexion</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Tirage au sort by Piab</h1>
        <div id="blocPrincipal">
            <div id="leftColumn">
                <div class="custom-block mb-4">
                    <div class="custom-block-body text-center">
                        <h5 class="custom-title">Ajouter un participant :</h5>
                        <form id="formulaireParticipant">
                            <div class="form-group">
                                <label for="nomParticipant">Inscription :</label>
                                <input type="text" class="form-control" id="nomParticipant" name="nomParticipant" placeholder="Saisissez le nom d'un participant" required>
                            </div>
                            <button type="button" class="btn btn-primary" id="boutonAjouterParticipant">Ajouter Participant</button>
                            <button class="btn-success" id="afpaTeam">Afpa Team</button>
                        </form>
                    </div>
                </div>

                <div class="custom-block mb-4">
                    <div class="custom-block-body text-center">
                        <h5 class="custom-title">Tirage au sort</h5>
                        <button class="btn btn-success" id="boutonTirage">Tirer au sort</button>
                        <p id="resultatTirage" class="mt-4"></p>
                    </div>
                </div>
            </div>

            <div class="custom-block mb-4 card-liste-participants" id="rightColumn">
                <div class="custom-block-body text-center">
                    <h5 class="custom-title">Liste des participants :</h5>
                    <fieldset id="participants" class="border p-4">
                        <!-- Les participants ajoutés apparaîtront ici -->
                    </fieldset>
                    <button class="btn btn-success" id="boutonAllSelect">Tout le monde</button>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer text-center">
        <p>Crédit: <a href="https://Aslan-Developpement.fr">Aslan-Developpement.fr</a></p>
    </footer>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script2.js"></script>
</body>
</html>
