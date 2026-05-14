$(document).ready(function() {
    
    // 1. Highlight First: Желтая рамка первой карточке [cite: 178]
    $("#highlightFirst").click(function() {
        $(".card").removeClass("highlight-border"); 
        $(".card:first").addClass("highlight-border"); // Используем фильтр :first 
    });

    // 2. Hide Last: Скрыть последнюю карточку через slideUp [cite: 180]
    $("#hideLast").click(function() {
        $(".card:last").slideUp(); // Используем :last и .slideUp() [cite: 169, 171]
    });

    // 3. Fade Toggle All: Плавное затухание/появление всех карточек [cite: 182]
    $("#fadeToggleAll").click(function() {
        $(".card").fadeToggle(); // Метод .fadeToggle() [cite: 171]
    });

    // 4. Hover Animation: Увеличение на 10% при наведении [cite: 183]
    $(".card").hover(
        function() {
            // Увеличиваем ширину через .animate() [cite: 172, 183]
            $(this).stop().animate({ width: "198px" }, 300); 
        }, 
        function() {
            // Возвращаем исходную ширину [cite: 184]
            $(this).stop().animate({ width: "180px" }, 300);
        }
    );

    // 5. Shuffle: Случайная перестановка через .appendTo() [cite: 185]
    $("#shuffleCards").click(function() {
        var cardHolder = $("#cardHolder");
        var cards = cardHolder.children(".card");
        
        // Берем случайную карточку и перемещаем её в конец списка
        var randomIdx = Math.floor(Math.random() * cards.length);
        cards.eq(randomIdx).appendTo(cardHolder); // Метод .appendTo() [cite: 185]
    });

    // 6. Reset: Восстановить всё в исходное состояние [cite: 184]
    $("#resetPractice").click(function() {
        $(".card").show().removeClass("highlight-border").stop().css("width", "180px");
    });
}); 