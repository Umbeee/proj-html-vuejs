<script>

export default {

    name: "FooterComp"
}

</script>


<template>
    <footer>
        <div class="container d-flex">
            <div class="d-flex justify-content-center align-items-center h3logo">
                <h3>Designed by <b>Alessandro Tomaselli</b></h3>
                <img src="/img/logo.png" alt="logo" class="logo">
            </div>
            <span>Made in <img src="https://flagsapi.com/IT/shiny/64.png"></span>
            <div class="p-3">
                <a href="https://www.instagram.com/lil.flenfli/ " target="_blank">Lil.flenfli <i
                        class="fa-brands fa-instagram"></i></a>
                <a href="mailto:alex.tom2002@gmail.com">@gmail <i class="fa-regular fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/alessandro-tomaselli-19b36926a/" target="_blank">Alessandro <i
                        class="fa-brands fa-linkedin"></i></a>
            </div>

        </div>

    </footer>
</template>


<style lang="scss" scoped>
footer {
    height: 20vh;

    span {
        margin-bottom: 15px;

        img {
            height: 25px;
        }
    }

    .container {
        height: 100%;
        text-align: center;
        flex-direction: column;
        justify-content: center;

        .h3logo {
            height: 100px;
        }

        .logo {
            height: 60px;
            width: 60px;
            margin-bottom: 10px;
        }

        a {
            color: black;
            padding: 10px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;

            i {
                margin-left: 15px;
            }
        }

        a:hover {
            background-color: rgb(243, 235, 219);
            text-decoration: underline;

            transition: 0.2s;
        }
    }
}
</style>