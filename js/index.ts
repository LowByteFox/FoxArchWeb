/// <reference path="jquery/index.d.ts" />
/// <reference path="jqueryui/index.d.ts" />

const words = ["beginner friendly", "minimal", "powerful", "customizable"]

let wait = true;

function delay(time) {
    // @ts-ignore
    return new Promise(resolve => setTimeout(resolve, time));
}

function fillOut(currentChar = 0) {
    setTimeout(async () => {
        if (wait) {
            await delay(4000)
            wait = false;
        }
        let ele = $(".blink-text");
        ele.text(ele.text() + words[0][currentChar]);
        if (currentChar + 1 < words[0].length) {
            return fillOut(currentChar+1);
        } else {
            await delay(2000)
            clearOut()
        }
    }, 225)
}

function clearOut(currentChar = 0) {
    setTimeout(async () => {
        let ele = $(".blink-text");
        ele.text(ele.text().slice(0, words[0].length - currentChar));

        if (words[0].length - currentChar === 0) {
            let temp = words.shift()
            words.push(temp)
            await delay(500)
            return fillOut()
        } else {
            return clearOut(currentChar+1)
        }
    }, 100)
}

fillOut();

function DropMenu() {
    $("#drop").slideToggle();
}

// @ts-ignore
$(window).ready(async () => {
    // @ts-ignore
    disableScroll();
    $(".promo-text").css("height", `${$("#promo-bg").height()}px`)
    $(".cursor").css("height", $("#promo-title").css("font-size"));
    await delay(4000);
    // @ts-ignore
    enableScroll();
    $(".loading").fadeOut()
})

$(window).resize(function() {
    $(".promo-text").css("height", `${$("#promo-bg").height()}px`)
    $(".cursor").css("height", $("#promo-title").css("font-size"));
})

async function ConfigMenu() {
    let configButton = $("#ConfigButton > span").addClass("animate-spin");
    if (configButton !== null) {
        configButton.addClass("animate-spin")
        $("#configDrop").show('slide', {direction: 'down'})
        await delay(500)
        configButton.removeClass("animate-spin")
    }
}