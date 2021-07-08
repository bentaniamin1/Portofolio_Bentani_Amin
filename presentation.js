let qui_je_s = document.getElementById("qui_je_s").addEventListener("click",()=>{
    let btn1 =
    `
    <h1 class="a_propos_de">Bonjour !</h1>
    <div class="contenu_de_a_propos">
        <img class="monimg" src="assets/images/IMG_20210602_165837 1.png" alt="">
        <h2 class="nom">BENTANI Amin</h2>
        <h3 class="met">Développeur Full-stack/Back-end</h3>
        <p class="moi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, culpa doloribus accusamus hic dolore ipsum quaerat repellat delectus recusandae nisi non blanditiis nam consequatur eveniet deleniti! Rerum tempora quaerat odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium quaerat non nostrum repellendus molestias soluta corporis accusantium fugit, quod tempora error! Laborum incidunt reiciendis sit sed quaerat aperiam vel.</p>
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
    </div>`
    let right = document.querySelector(".r1right");
    right.innerHTML = btn2;
    console.log(right);
});
let mes_formations =  document.getElementById("mes_formations").addEventListener("click", ()=>{
    let btn3 =
    ` <h1 class="a_propos_de">Formations</h1>
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
    ` <h1 class="a_propos_de">Atouts</h1>
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