export class Serie {
    num: number;
    name: string;
    prod: string;
    seas: number;
    desc: string;
    pag: string;
    img: string;

    constructor(num: number, name: string, prod: string, seas: number, desc: string, pag: string, img: string) {
    this.num = num;
    this.name = name;
    this.prod = prod;
    this.seas = seas;
    this.desc = desc;
    this.pag = pag;
    this.img = img;
    }

}