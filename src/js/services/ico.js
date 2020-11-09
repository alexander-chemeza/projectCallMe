export default class Icon {
    static ns = "http://www.w3.org/2000/svg";

    constructor(firstColor, secondColor, thirdColor) {
        this.firstColor = firstColor;
        this.secondColor = secondColor;
        this.thirdColor = thirdColor;
    }

    static setAttributes(el, attrs) {
        for (let key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    static rectRounded(parent, color) {
        const rect = document.createElementNS(Icon.ns, "rect");
        Icon.setAttributes(rect, {
            "x": 0,
            "y": 0,
            "rx": 5,
            "ry": 5,
            "width": 100,
            "height": 100,
            "fill": color
        });
        parent.append(rect);
    }

    static circle(parent, cx, cy, r, color) {
        const circle = document.createElementNS(Icon.ns, "circle");
        Icon.setAttributes(circle, {
            "cx": cx,
            "cy": cy,
            "r": r,
            "fill": color
        })
        parent.append(circle);
        return circle;
    }

    static line(parent, x1, y1, x2, y2, color, width) {
        const line = document.createElementNS(Icon.ns, "line");
        Icon.setAttributes(line, {
            "x1": x1,
            "y1": y1,
            "x2": x2,
            "y2": y2,
            "stroke": color,
            "stroke-width": width,
            "stroke-linecap": "round"
        });
        parent.append(line);
    }

    static mask(parent, height) {
        const defs = document.createElementNS(Icon.ns, "defs");
        parent.append(defs);

        const clipPath = document.createElementNS(Icon.ns, "clipPath");
        defs.append(clipPath);

        const maskRect = document.createElementNS(Icon.ns, "rect");
        clipPath.append(maskRect);

        Icon.setAttributes(clipPath, {
            "id": "cut"
        });

        Icon.setAttributes(maskRect, {
            "x": 0,
            "y": 0,
            "width": 100,
            "height": height
        });
    }

    static man (parent, color) {
        const firstCircle = Icon.circle(parent, 50, 40, 10, color);
        const secondCircle = Icon.circle(parent, 50, 65, 20, color);

        Icon.mask(parent, 65);
        secondCircle.setAttribute("clip-path", "url(#cut)");
    }

    static svg(parentID) {
        const svgBlock = document.createElementNS(Icon.ns, "svg");
        Icon.setAttributes(svgBlock, {
            "id": `${parentID}-icon`,
            "version": 1.1,
            "baseProfile": "full",
            "viewBox": "0 0 100 100",
            "xmlns": Icon.ns
        });
        document.getElementById(parentID).append(svgBlock);
        return svgBlock;
    }

    add(parentID) {
        const add = Icon.svg(parentID);
        Icon.rectRounded(add, this.firstColor);
        Icon.line(add, 50, 20, 50, 80, this.secondColor, 10);
        Icon.line(add, 20, 50, 80, 50, this.secondColor, 10);
    }

    del(parentID) {
        const del = Icon.svg(parentID);
        Icon.rectRounded(del, this.firstColor);
        Icon.line(del, 30, 30, 70, 70, this.secondColor, 10);
        Icon.line(del, 30, 70, 70, 30, this.secondColor, 10);
    }

    show(parentID) {
        const show = Icon.svg(parentID);
        Icon.rectRounded(show, this.firstColor);

        let startPoint = 25;

        for(let i = 0; i <= 2; i++) {
            Icon.line(show, 20, startPoint, 80, startPoint, this.secondColor, 10);
            startPoint += 25;
        }
    }

    user(parentID) {
        const user = Icon.svg(parentID);
        const bg = Icon.circle(user, 50, 50, 50, this.thirdColor);
        Icon.man(user, this.secondColor);
    }

    logo(parentID) {
        const logoBox = Icon.svg(parentID);
        Icon.rectRounded(logoBox, this.firstColor);
        let startPoint = 25;

        for(let i = 0; i <= 2; i++) {
            Icon.line(logoBox, 0, startPoint, 10, startPoint, this.secondColor, 10);
            startPoint += 25;
        }

        Icon.man(logoBox, this.secondColor);
    }
}