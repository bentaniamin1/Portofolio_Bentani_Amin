const logo1 = document.querySelectorAll('#logo path');

for(let i=0; i<logo1.length;i++){
    console.log(`la lettre ${i} est de ${logo1[i].getTotalLength()} `);
}