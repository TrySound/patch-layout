# patch-layout
Bootstrap like Layout System

##Why

- Columns use inline document flow
- Columns could be aligned vertically!
- `.push-xs-n, .pull-sm-n, .offset-md-n` for shorter markup
- Fixed bootstrap visibility utils for mobile first
- Default screen ratio (16by9) for embed content

##Media Queries

- **xs** - to 767px
- **sm** - 768px to 991px
- **md** - 992px to 1199px
- **lg** - 1200px and greater

##Grid

- `.container`
- `.container-fluid`
- `.row`

###Columns

`n` is 1-12 column width/offset indent

- `.col-xs-n` - `.offset-xs-n`
- `.col-sm-n` - `.offset-sm-n`
- `.col-md-n` - `.offset-md-n`
- `.col-lg-n` - `.offset-lg-n`

By default columns vertically aligned to top. These classes will make you happy ;-)

- `.col-middle`
- `.col-bottom`

Or positioned columns inside row with

- `.row-center`
- `.row-right`

###Relative move

Push - to left, pull - to right

- `.push-xs-n` - `.pull-xs-n`
- `.push-sm-n` - `.pull-sm-n`
- `.push-md-n` - `.pull-md-n`
- `.push-lg-n` - `.pull-lg-n`

##Visibility

- `.visible, .visible-inline` - show
- `.hidden` - collapse
- `.invisible` - hidden but not collapsed

###Media queries

- `.visible-xs` - `.hidden-xs`
- `.visible-sm` - `.hidden-sm`
- `.visible-md` - `.hidden-md`
- `.visible-lg` - `.hidden-lg`

###Inline-block

- `.visible-xs-inline` - `.hidden-xs-inline`
- `.visible-sm-inline` - `.hidden-sm-inline`
- `.visible-md-inline` - `.hidden-md-inline`
- `.visible-lg-inline` - `.hidden-lg-inline`

##Flow Align

Could be used with columns

- `.pull-left`
- `.pull-center`
- `.pull-right`

##Clearfix
- `.clearfix`

##Responsive Media

- `.embed-responsive` - wrapper. By default 16by9
- `.embed-responsive-4by3` - modificator for `.embed-responsive`
- `iframe, embed, object, video` and `.embed-responsive-item` - child
- `.img-responsive`

##License

[The MIT License (MIT)](LICENSE)

Copyright &copy; 2015 Bogdan Chadkin
