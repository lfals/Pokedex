export default interface Ipokemon {
    name: string
    image: string
    color: string
    sprites: Isprite
}

interface Isprite {
    front_default: string
}