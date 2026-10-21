
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
    showFeelingsPage();
});

function showFeelingsPage() {
    document.querySelector(".welcome").innerHTML = `
        <div class="heart">♡</div>
        <p class="small-text">En manasula irundhu...</p>
        <h1>Unkitta Oru Vaarthai ❤️</h1>

        <p class="message">
            Enakku unkooda neraiya neram spend pannanum nga...
            <br><br>
            Chinna chinna vishayangalai share pannanum,
            edhavadhu pesi manasara sirikkanum.
            <br><br>
            Happy-ah irundhaalum sad-ah irundhaalum,
            unga kitta ellame sollanum nu thonum.
            <br><br>
            Unga kuda pesura neram enakku romba special.
            Innum konjam neram unkooda irundhirukkalaame
            nu sila neram thonudhu. yenaku puriyuthu ungaluku anga neriya work iruku nu irundhalum ungalukuaga na eppavume inga wait pannitu irupen nga🥺❤️
        </p>

        <button id="nextButton">Innum konjam sollanum...</button>
        <p class="footer">Idhu en manasula irukkura unmaiyaana aasai.</p>
    `;

    document.getElementById("nextButton").addEventListener("click", showTimePage);
}

function showTimePage() {
    document.querySelector(".welcome").innerHTML = `
        <div class="heart">♡</div>
        <p class="small-text">Namma rendu perukkaga...</p>
        <h1>Konjam Neram Namakkaga 🫂</h1>

        <p class="message">
            Daily periya vishayam edhuvum panna vendam nga.
            <br><br>
            Konjam neram mattum nenga anga irukura tension pressure ellame marandhutu yena kuda sirichi pesuna pothum nga.
            <br><br>
            Ungaluku enna kastam irundhaalum yenkitta sollunga.
            Enakku enna thonudho adhayum unga kita
            bayam illaama sollanum nu aasai.
            <br><br>
            Namma rendu perum orutharukku oruthar
            time othukki, feelings-ah purinjukittu
            irundha enakku romba sandhoshama irukkum. ❤️
        </p>

        <div class="time-ideas">
            <p>💬 Konjam neram manasu vittu pesalaam</p>
            <p>😂 Onna serndhu sirikkalaam</p>
            <p>🫶 Innaikku nadandhadha share pannalaam</p>
            <p>❤️ Oruvarukku oruvar time othukkalaam</p>
        </div>

        <button id="lastButton">En kadaisi aasai...</button>
        <p class="footer">Neram mattum illa, andha nerathula un presence-um venum.</p>
    `;

    document.getElementById("lastButton").addEventListener("click", showLastPage);
}

function showLastPage() {
    document.querySelector(".welcome").innerHTML = `
        <div class="heart">♡</div>
        <p class="small-text">Unga kita mattum sollanum nu thonuchu...</p>
        <h1>En Chinna Aasai ❤️</h1>

        <p class="message">
            Unga life-la unakku neraya responsibilities,
            velai, personal time ellame irukkum nu enakku puriyum nga.
            <br><br>
            Aana adhula enakkum konjam neram irundha
            naan romba happy-ah iruppen.
            <br><br>
            Naan ungakooda neraya pesa aasai padradhu,
            unna miss pannuradhu, un time venum nu
            ninaikkuradhu ellame un mela enakku
            irukkura paasathunaala dhaan.
            <br><br>
            En feelings-ai nee purinjukka try pannanum,
            namma rendu perum serndhu namma bond-ah
            innum strong-ah maathikkanum nu aasai paduren.
            <br><br>
            Unga kooda irukkanum mattum illa da...
            unga kooda irukkumbodhu naanum unakku
            mukkiyamana oruthar nu feel pannanum. 🥺❤️
        </p>

        <p class="footer">Idhu dhaan naan ungaluku solla ninaicha en manasu.</p>
        <button id="restartButton">Marubadiyum padikkalaam ❤️</button>
    `;

    document.getElementById("restartButton").addEventListener("click", function () {
        location.reload();
    });
}
