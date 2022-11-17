
function changeVisible(){
    let visible = document.getElementById("visible");
    const sheet = new CSSStyleSheet();

    if (visible.name == "visible"){
        visible.src = "Assets/icons/invisible.png";
        visible.name = "invisible";

        sheet.replaceSync(".content{display: none}");
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
        
    }else{
        visible.src = "Assets/icons/visible.png";
        visible.name = "visible"

        sheet.replaceSync(".content{display: block}");
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    }
}
