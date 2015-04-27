# patch-layout
Inline layout system

##Why

- Columns use inline document flow
- Columns could be aligned vertically!
- `.push-xs-n, .pull-sm-n, .offset-md-n` for shorter markup
- Fixed bootstrap visibility utils for mobile first
- Default screen ratio (16by9) for embed content

##Media Queries

- none - to 767px
- **sm** - 768px to 991px
- **md** - 992px to 1199px
- **lg** - 1200px and greater

##Grid

- `.container`
- `.container-fluid`
- `.row`

###Columns

`n` is 1-12 column width/offset indent

- `.col-n` - `.offset-n`
- `.col-sm-n` - `.offset-sm-n`
- `.col-md-n` - `.offset-md-n`
- `.col-lg-n` - `.offset-lg-n`

By default columns vertically aligned to top. These classes will make you happy ;-)

- `.text-middle`
- `.text-bottom`

Or positioned columns inside row with

- `.text-left` - `.text-center` - `.text-right`
- `.text-sm-left` - `.text-sm-center` - `.text-sm-right`
- `.text-md-left` - `.text-md-center` - `.text-md-right`
- `.text-lg-left` - `.text-lg-center` - `.text-lg-right`

###Relative move

Push - to left, pull - to right

- `.push-n` - `.pull-n`
- `.push-sm-n` - `.pull-sm-n`
- `.push-md-n` - `.pull-md-n`
- `.push-lg-n` - `.pull-lg-n`

##Visibility

- `.visible-inline` - `.visible` - `.hidden`
- `.visible-sm-inline` - `.visible-sm` - `.hidden-sm`
- `.visible-md-inline` - `.visible-md` - `.hidden-md`
- `.visible-lg-inline` - `.visible-lg` - `.hidden-lg`

##Flow Align

- `.pull-left` - `.pull-center` - `.pull-right`
- `.pull-sm-left` - `.pull-sm-center` - `.pull-sm-right`
- `.pull-md-left` - `.pull-md-center` - `.pull-md-right`
- `.pull-lg-left` - `.pull-lg-center` - `.pull-lg-right`

- `.clearfix`

##Responsive Media

- `.embed-responsive` - wrapper. By default 16by9
- `.embed-responsive-4by3` - modificator for `.embed-responsive`
- `iframe, embed, object, video` and `.embed-responsive-item` - child
- `.img-responsive`

##License

[The MIT License (MIT)](LICENSE)

Copyright &copy; 2015 Bogdan Chadkin
