/// <reference path="jquery/index.d.ts" />
/// <reference path="jqueryui/index.d.ts" />

const NavIDS = [["InfoBTN", "ReasonBTN", "WikiBTN", "StackBTN"], ["DInfoBTN", "DReasonBTN", "DWikiBTN", "DStackBTN"]]
let logic = 0;

function delay(time) {
    // @ts-ignore
    return new Promise(resolve => setTimeout(resolve, time));
}

function DropMenu() {
    $("#drop").slideToggle();
}

async function ConfigMenu() {
    let configButton = $("#ConfigButton > span").addClass("animate-spin");
    if (configButton !== null) {
        configButton.addClass("animate-spin")
        switch (logic) {
            case 0:
                $("#configDrop").show('slide', {direction: 'down'})
                logic = 1;
                break;
            case 1:
                $("#configDrop").hide('slide', {direction: 'down'})
                logic = 0;
                break;
        }
        await delay(500)
        configButton.removeClass("animate-spin")
    }
}

// @ts-ignore
$(window).ready(async () => {

    // @ts-ignore
    disableScroll();
    $(".promo-text").css("height", `${$("#promo-bg").height()}px`)
    $(".cursor").css("height", $("#promo-title").css("font-size"));
    $(".toTopBtn").click(() => {
        toTop()
    })
    await delay(4000);
    // @ts-ignore
    enableScroll();
    $(".loading").fadeOut()

    $(`#${NavIDS[0][0]}`).click(function() {
        window.location.href = "index.html"
    });

    $(`#${NavIDS[1][0]}`).click(function() {
        window.location.href = "index.html"
    });
})

function toTop() {
    $([document.documentElement, document.body]).animate({
        scrollTop: 0
    }, 2000);
}