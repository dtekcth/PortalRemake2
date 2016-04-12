# PortalRemake2
PortalRemake²

## Installation

Finguide!

### Installera stack

T.ex. genom `pacman -Sy ghc stack` eller genom att följa relevant
guide här:
<https://github.com/commercialhaskell/stack/blob/master/doc/install_and_upgrade.md>

#### (Installera haskell)

Om du inte redan har rätt GHC:

    stack setup

### Bygg Hakyll

    stack build

(det kan ta en bra stund)

### Starta dev-servern

    stack exec dtek watch

Gå sen in på http://127.0.0.1:8000 för att titta på nuvarande
inkarnation av portalen.

## Hacka

`site.hs` innehåller byggsystemet för sidan, om du ändrar något i
denna filen måste du köra `stack build` igen och starta om
dev-servern.

Ändrar du bara templates eller skriver poster så behöver du inte
starta om dev-servern.

## Skriva

Skriv text och lägg i `posts/`, formatet är markdown och hur filen
skall vara strukturerad borde vara uppenbart från existerande poster.

## Frågor, panik, o.s.v.

Gå in på #dtek@irc.dtek.se så finns vi där för dig.
