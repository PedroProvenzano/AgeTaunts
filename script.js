const input = document.getElementById('input');


// sonidos
const Uno = new Audio('./assets/1_Si.ogg');
const Dos = new Audio('./assets/2_No.ogg');
const Tres = new Audio('./assets/3_Dame alimento.ogg');
const Cuatro = new Audio('./assets/4_dameMadera.ogg');
const Cinco = new Audio('./assets/5_dameOro.ogg');
const Seis = new Audio('./assets/6_damePiedra.ogg');
const Siete = new Audio('./assets/7_aaaaaah.ogg');
const Ocho = new Audio('./assets/8_todosSaludan.ogg');
const Nueve = new Audio('./assets/9_ooooh.ogg');
const Diez = new Audio('./assets/10_deVueltaA.ogg');
const Once = new Audio('./assets/11_jajajaja.ogg');
const Doce = new Audio('./assets/12_aaahSoyAsaltado.ogg');
const Trece = new Audio('./assets/13_porSupuesto.ogg');
const Catorce = new Audio('./assets/14_comienzaAJugar.ogg');
const Quince = new Audio('./assets/15_noMeApuntes.ogg');
const Dieciseis = new Audio('./assets/16_enemigoALa.ogg');
const Diecisiete = new Audio('./assets/17_esEstupendoSer.ogg');
const Dieciocho = new Audio('./assets/18_unMonje.ogg');
const Diecinueve = new Audio('./assets/19_llevamosMuchoTiempo.ogg');
const Veinte = new Audio('./assets/20_miAbuelita.ogg');
const Veintiuno = new Audio('./assets/21_bonitaCiudad.ogg');
const Veintidos = new Audio('./assets/22_noMeToques.ogg');
const Veintitres = new Audio('./assets/23_grupoDeCaza.ogg');
const Veinticuatro = new Audio('./assets/24_malditaSea.ogg');
const Veinticinco = new Audio('./assets/25_heyHiereme.ogg');
const Veintiseis = new Audio('./assets/26_noLaMaravilla.ogg');
const Veintisiete = new Audio('./assets/27_hasJugadoDosHoras.ogg');
const Veintiocho = new Audio('./assets/28_esoCrees.ogg');
const Veintinueve = new Audio('./assets/29_rou.ogg');
const Treinta = new Audio('./assets/30_wololo.ogg');
const Treintaiuno = new Audio('./assets/31_atacaAlEnemigo.ogg');
const Treintaidos = new Audio('./assets/32_dejaDeCrear.ogg');
const Treintaitres = new Audio('./assets/33_creaMasAldeanos.ogg');
const Treintaicuatro = new Audio('./assets/34_construyeUna.ogg');
const Treintaicinco = new Audio('./assets/35_dejaDeConstruir.ogg');
const Treintaiseis = new Audio('./assets/36_esperaMiSe.ogg');
const Treintaisiete = new Audio('./assets/37_construyeUnaMara.ogg');
const Treintaiocho = new Audio('./assets/38_dameLosRecursos.ogg');
const Treintainueve = new Audio('./assets/39_aliado.ogg');
const Cuarenta = new Audio('./assets/40_enemigo.ogg');
const Cuarentaiuno = new Audio('./assets/41_neutral.ogg');
const Cuarentaidos = new Audio('./assets/42_enQueEdad.ogg');


// Eventos
input.addEventListener('keydown', (event) => {
    if(event.key=="Enter"){
        event.preventDefault();
        switch(parseInt(input.value)){
            case 1:
                Uno.play();
                input.value = "";
            break;
            case 2:
                Dos.play();
                input.value = "";
            break;
            case 3:
                Tres.play();
                input.value = "";                
            break;
            case 4:
                Cuatro.play();
                input.value = "";
            break;
            case 5:
                Cinco.play();
                input.value = "";
            break;
            case 6:
                Seis.play();
                input.value = "";
            break;
            case 7:
                Siete.play();
                input.value = "";
            break;
            case 8:
                Ocho.play();
                input.value = "";
            break;
            case 9:
                Nueve.play();
                input.value = "";
            break;
            case 10:
                Diez.play();
                input.value = "";
            break;
            case 11:
                Once.play();
                input.value = "";
            break;
            case 12:
                Doce.play();
                input.value = "";
            break;
            case 13:
                Trece.play();
                input.value = "";
            break;
            case 14:
                Catorce.play();
                input.value = "";
            break;
            case 15:
                Quince.play();
                input.value = "";
            break;
            case 16:
                Dieciseis.play();
                input.value = "";
            break;
            case 17:
                Diecisiete.play();
                input.value = "";
            break;
            case 18:
                Dieciocho.play();
                input.value = "";
            break;
            case 19:
                Diecinueve.play();
                input.value = "";
            break;
            case 20:
                Veinte.play();
                input.value = "";
            break;
            case 21:
                Veintiuno.play();
                input.value = "";
            break;
            case 22:
                Veintidos.play();
                input.value = "";
            break;
            case 23:
                Veintitres.play();
                input.value = "";
            break;
            case 24:
                Veinticuatro.play();
                input.value = "";
            break;
            case 25:
                Veinticinco.play();
                input.value = "";
            break;
            case 26:
                Veintiseis.play();
                input.value = "";
            break;
            case 27:
                Veintisiete.play();
                input.value = "";
            break;
            case 28:
                Veintiocho.play();
                input.value = "";
            break;
            case 29:
                Veintinueve.play();
                input.value = "";
            break;
            case 30:
                Treinta.play();
                input.value = "";
            break;
            case 31:
                Treintaiuno.play();
                input.value = "";
            break;
            case 32:
                Treintaidos.play();
                input.value = "";
            break;
            case 33:
                Treintaitres.play();
                input.value = "";
            break;
            case 34:
                Treintaicuatro.play();
                input.value = "";
            break;
            case 35:
                Treintaicinco.play();
                input.value = "";
            break;
            case 36:
                Treintaiseis.play();
                input.value = "";
            break;
            case 37:
                Treintaisiete.play();
                input.value = "";
            break;
            case 38:
                Treintaiocho.play();
                input.value = "";
            break;
            case 39:
                Treintainueve.play();
                input.value = "";
            break;
            case 40:
                Cuarenta.play();
                input.value = "";
            break;
            case 41:
                Cuarentaiuno.play();
                input.value = "";
            break;
            case 42:
                Cuarentaidos.play();
                input.value = "";
            break;
            default:
                input.value = "";
            break;
        }
    }
})