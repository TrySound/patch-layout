# patch-layout

Inline layout system

## Why

- Columns use inline document flow
- Columns could be aligned vertically!
- `.push-xs-n, .pull-sm-n` for shorter markup
- Fixed bootstrap visibility utils for mobile first
- Default screen ratio (16by9) for embed content

## Install

```
bower i patch-layout -S
```

```
npm i patch-layout -S
```

## Media Queries

- `xs` - to 544px
- `sm` - 545px to 767px
- `md` - 768px to 991px
- `lg` - 992px to 1199px
- `xl` - 1200px and greater

## Grid

- `.container`
- `.row`

### Columns

`n` is 1-12 column width/offset indent

- `.col-xs-n`
- `.col-sm-n`
- `.col-md-n`
- `.col-lg-n`

### Relative move

Push - to left, pull - to right

- `.push-xs-n` - `.pull-xs-n`
- `.push-sm-n` - `.pull-sm-n`
- `.push-md-n` - `.pull-md-n`
- `.push-lg-n` - `.pull-lg-n`

## Responsive Media

- `.embed-responsive` - wrapper. By default 16by9
- `.embed-responsive--4by3`
- `.embed-responsive--16by9`
- `.embed-responsive--21by9`
- `iframe`, `embed`, `object`, `video` and `.embed-responsive-item` are children
- `.img-responsive`

## License

[The MIT License (MIT)](LICENSE)

Copyright &copy; 2015 Bogdan Chadkin
