export default interface Ipokemon {
    [x: string]: any;
    name: string
    image: string
    color: string
    sprites: Isprite
}

interface Isprite {
    front_default: string
}