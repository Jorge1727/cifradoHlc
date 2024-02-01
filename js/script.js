window.addEventListener("load", inicio, true);

function inicio() {
    try {
        document.getElementById("mensaje").addEventListener("keyup", function () {
            this.value = this.value.toUpperCase();
        }, true);

        document.getElementById("cifrar").addEventListener("click", function () {
            let texto = document.getElementById("mensaje").value;
            let desplazamiento = document.getElementById("desplazamiento").value;
            document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
        }, true);

        document.getElementById("descifrar").addEventListener("click", function () {
            let texto = document.getElementById("mensaje").value;
            let desplazamiento = document.getElementById("desplazamiento").value;
            document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
        }, true);
    } catch (error) {
        document.getElementById("error-message").innerText = "Error: " + error.message;
    }
}
