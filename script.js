$(document).ready(function() {
    // Проверка в консоли (если увидишь эту фразу — кнопки оживут!)
    console.log("jQuery logic is now active and error-free.");

    // --- HOME PAGE (index.html) ---
    $("#changeTextBtn").on("click", function() {
        $("#main-text").html("<strong>Success!</strong> Content updated.");
    });

    $("#changeStyleBtn").on("click", function() {
        $("#selectors-section").css("background-color", "#e3f2fd");
    });

    $("#hideBtn").on("click", function() { $(".target-para").hide(); });
    $("#showBtn").on("click", function() { $(".target-para").show(); });
    $("#toggleBtn").on("click", function() { $(".target-para").toggle(); });

    $("#fadeOutBtn").on("click", function() { $("#fadeImg").fadeOut(); });
    $("#fadeInBtn").on("click", function() { $("#fadeImg").fadeIn(); });
    $("#fadeToggleBtn").on("click", function() { $("#fadeImg").fadeToggle(); });

    $("#panel-header").on("click", function() { $("#panel-content").slideToggle(); });

    // --- DOM & ANIMATION (elements.html) ---
    $("#addBtn").on("click", function() {
        $("#dynamic-list").append("<li>New list item added via jQuery!</li>");
    });

    $("#removeBtn").on("click", function() {
        $("#dynamic-list li").last().remove();
    });

    $("#changeSrcBtn").on("click", function() {
        $("#attrImg").attr("src", "https://picsum.photos/id/40/200/150");
    });

    $("#startAnimBtn").on("click", function() {
        $("#animateBox")
            .animate({ left: "+=100px", opacity: 0.6 }, 800)
            .animate({ top: "+=40px", width: "100px" }, 600)
            .animate({ left: "0", top: "0", width: "60px", opacity: 1 }, 1000);
    });

    // --- GAME PAGE (game.html) ---
    $("#bounceBtn").on("click", function() {
        var containerWidth = $("#ball-container").width() - 40;
        $("#ball").animate({ left: containerWidth }, 1000).animate({ left: 0 }, 1000);
    });

    var secretNum = Math.floor(Math.random() * 10) + 1;
    $("#checkGuessBtn").on("click", function() {
        var userVal = $("#userGuess").val();
        if (userVal == secretNum) {
            $("#gameFeedback").text("Correct! Finding new number...").css("color", "green");
            secretNum = Math.floor(Math.random() * 10) + 1;
        } else {
            $("#gameFeedback").text("Wrong! Try again.").css("color", "red");
        }
    });
}); 