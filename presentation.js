let qui_je_s = document.getElementById("qui_je_s").addEventListener("click",()=>{
    let btn1 =
    `
    <h1 class="a_propos_de">BONJOUR !</h1>
    <div class="contenu_de_a_propos">
        <img class="monimg" src="assets/images/IMG_20210602_165837 1.png" alt="">
        <h2 class="nom">BENTANI Amin</h2>
        <h3 class="met">Développeur Full-stack/Back-end</h3>
        <p class="moi">Suite à un premier parcours dans le domaine de la santé et par la suite dans un parcours Linguistique, j'ai décidé de faire aujourd'hui une reconversion  en suivant le Bachelor Web d'Hetic et en faisant de ma passion mon métier. Par conséquent après cette première année de formation, je suis en recherche d’un stage à partir du 21 juin 2021 de 2 à 3 mois et d’une alternance dès octobre 2021, qui me permettront de consolider et mettre en oeuvre  mon savoir dans le développement front et back.</p>
    </div>
    `
    let right = document.querySelector(".r1right");
    right.innerHTML = btn1;
    console.log(right);
});

let mes_competences =  document.getElementById("mes_competences").addEventListener("click", ()=>{
    let btn2 =
    ` <h1 class="a_propos_de">Mes compètences</h1>
    <div class="mes_competences">
            <img src="assets/icons/iconfinder_3069654_circle_php_programming_programming language_round icon_icon.svg" alt="" class="imgphp">
            <p class="nomphp">PHP</p>
            <p class="niveauphp">MOYEN</p>
            <img src="assets/icons/iconfinder_652581_code_command_develop_javascript_language_icon.svg" alt="" class="imgjs">
            <p class="nomjs">JAVASCRIPT</p>
            <p class="niveaujs">MOYEN</p>
            <img src="assets/icons/iconfinder_652583_code_develop_html_language_layout_icon.svg" alt="" class="imghtml">
            <p class="nomhtml">HTML</p>
            <p class="niveauhtml">MOYEN</p>
            <img src="assets/icons/iconfinder_652584_code_css_develop_language_layout_icon.svg" alt="" class="imgcss">
            <p class="nomcss">CSS</p>
            <p class="niveaucss">MOYEN</p>
            <img src="assets/icons/iconfinder_4518857_python_icon.svg" alt="" class="imgpython">
            <p class="nompython">PYTHON</p>
            <p class="niveaupython">MOYEN</p>
            <p class="niveaucss">MOYEN</p>
            <img src="assets/icons/iconfinder_7564187_figma_logo_brand_icon.svg" alt="" class="imgfigma">
            <p class="nomfigma">FIGMA</p>
            <p class="niveaufigma">MOYEN</p>
            <img src="assets/icons/iconfinder_4691303_mysql_icon.svg" alt="" class="imgsql">
            <p class="nomsql">SQL</p>
            <p class="niveausql">MOYEN</p>
    </div>`
    let right = document.querySelector(".r1right");
    right.innerHTML = btn2;
    console.log(right);
});
let mes_formations =  document.getElementById("mes_formations").addEventListener("click", ()=>{
    let btn3 =
    ` <h1 class="a_propos_de">FORMATIONS</h1>
    <div class="mes_formations">
            <img src="assets/icons/henri_martin.png" alt="" class="imgbac">
            <p class="y2018">2018-2019</p>
            <p class="nombac">Baccalauréat scientifique</p>
            <p class="niveaubac">LYCÉE HENRI MARTIN ,02100 Saint-Quentin</p>
            <img src="assets/icons/univ_de_lille.jpg" alt="" class="imgpaces">
            <p class="y2019">2019</p>
            <p class="nompaces">Première année commune aux études de santé</p>
            <img src="assets/icons/univ_de_lille.jpg" alt="" class="imgllcer">
            <p class="y2020">2020</p>
            <p class="nomllcer">L1 et L2 LLCER Italien</p>
            <p class="niveaullcer">LLCER La licence Langues, Littératures et  Civilisations Étrangères et Régionales, Lille</p>
            <img src="assets/icons/hetic.png" alt="" class="imghetic">
            <p class="y2020s">2020 </p>
            <p class="nomhetic">HETIC</p>
            <p class="niveauhetic">Bachelor Concepteur développeur de solutions digitales, programmation / développeur informatique</p>
            
    </div>`
    let right = document.querySelector(".r1right");
    right.innerHTML = btn3;
    console.log(right);
})
let mes_atouts =  document.getElementById("mes_atouts").addEventListener("click", ()=>{
    let btn4 =
    ` <h1 class="a_propos_de">ATOUTS</h1>
    <div class="mes_atouts">
        <p class="mes_a" >Curieux <br><br>Motivé <br><br> Esprit d'équipe <br><br> Dynamique <br><br> Sérieux <br> </p>
    </div>
    `
    let right = document.querySelector(".r1right");
    right.innerHTML = btn4;
    console.log(right);
});
let mes_passions =  document.getElementById("mes_passions").addEventListener("click", ()=>{
    let btn4 =
    ` <h1 class="a_propos_de">CENTRES D’INTÉRÊTS</h1>
    <div class="mes_passions">
        <img src="assets/icons/informatique.svg" alt="" class="imgp1">
        <p class="nom_passion1">Informatique</p>
        <img src="assets/icons/voyage.svg" alt="" class="imgp2">
        <p class="nom_passion2">Voyages</p>
        <img src="assets/icons/film_1.svg" alt="" class="imgp3">
        <p class="nom_passion3">Series/films</p>
        <img src="assets/icons/musculation_1.svg" alt="" class="imgp4">
        <p class="nom_passion4">Musculation</p>
    </div>
    `
    let right = document.querySelector(".r1right");
    right.innerHTML = btn4;
    console.log(right);
})