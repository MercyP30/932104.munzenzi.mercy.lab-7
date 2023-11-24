document.addEventListener("click", function (event) {
    if (event.target === document.documentElement) {
        clearAll(); //Все очищается при нажатии на пустое место в документе
    }
});

function createShape(shape) {
    let value = Number(document.getElementById("input").value);

    for (let i = 0; i < value; i++) {
        let div = document.createElement("div");
        div.className = "shape";
        let size = Math.floor(Math.random() * 200);  //Размеры нарисованных фигур выбираются рандомно
        let top = document.documentElement.clientHeight - size - 45;
        let left = document.documentElement.clientWidth - size;
        div.style.position = "absolute";
        div.style.width = size + "px";
        div.style.height = size + "px";

        switch (shape) {
            case "circle":
                div.style.backgroundColor = "green";
                div.style.borderRadius = String(size / 2) + "px";
                break;
            case "square":
                div.style.backgroundColor = "red";
                div.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100%, 0%)";
                break;
            case "triangle":
                div.style.backgroundColor = "blue";
                div.style.clipPath = "polygon(50% 50%, 100% 100%, 0% 100%)";
                break;
        }

        div.style.opacity = "0.8";
        div.style.border = "0.5";
        div.style.overflow = "hidden";
        div.style.top = Math.floor(Math.random() * top) + 20 + "px";
        div.style.left = Math.floor(Math.random() * left) + "px";

        div.onclick = function () {        //выделение цветом при нажатии на фигуру
            div.style.background = "yellow";
        };

        div.ondblclick = function () {   //удаление элемента при двойном нажатии на фигуру
            div.remove();
        };

        document.getElementById("shape").append(div);
    }
}

function clearAll() {  //Все очищается при нажатии на пустое место в документе
    let shapes = Array.from(document.getElementsByClassName("shape"));

    shapes.forEach(shape => {
        shape.remove();
    });
}
