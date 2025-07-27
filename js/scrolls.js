const btnTopo = document.getElementById("btnTopo");
// btn ao rolar a pagina
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                btnTopo.style.display = "block";
                setTimeout(() => {
                    btnTopo.style.opacity = "1";
                    btnTopo.style.transform = "translateX(0)";
                }, 50);
            } else {
                btnTopo.style.opacity = "0";
                btnTopo.style.transform = "translateX(-100px)";
                setTimeout(() => { btnTopo.style.display = "none"; }, 400);
            }
        };
        function voltarAoTopo() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }