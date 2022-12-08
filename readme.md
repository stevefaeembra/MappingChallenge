Map challenge
=============

Toy project for learning Deck.GL and typescript

To install, from project directory

```
yarn
yarn dev:local
```

Branch __master__ is stable and a MVP. All layers are loaded and toggled by changing layer visibility.

Branch __load-layers-on-demand__ is experimental and lazy-loads layers. It's a work in progress and only allows a layer to be toggled once (the layer is restored after turning off, but it is invisible)
