# patch-layout
Bootstrap like Layout System

##Why

- Columns could be aligned vertically!
- Columns use inline document flow
- `.push-xs-n, .pull-sm-n, .offset-md-n` for shorter markup

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

`n` is 1-12 column width

- `.col-xs-n`
- `.col-sm-n`
- `.col-md-n`
- `.col-lg-n`

###Column indent

- `.offset-xs-n`
- `.offset-sm-n`
- `.offset-md-n`
- `.offset-lg-n`

###Relative move

####To left

- `.push-xs-n`
- `.push-sm-n`
- `.push-md-n`
- `.push-lg-n` - 

####To right

- `.pull-xs-n`
- `.pull-sm-n`
- `.pull-md-n`
- `.pull-lg-n`

##Visibility

- `.visible, .visible-inline` - show
- `.hidden` - collapse
- `.invisible` - hidden but not collapsed

###Media queries

- `.visible-xs`
- `.visible-sm`
- `.visible-md`
- `.visible-lg`
- `.hidden-xs`
- `.hidden-sm`
- `.hidden-md`
- `.hidden-lg`

###Inline-block

- `.visible-xs-inline`
- `.visible-sm-inline`
- `.visible-md-inline`
- `.visible-lg-inline`
- `.hidden-xs-inline`
- `.hidden-sm-inline`
- `.hidden-md-inline`
- `.hidden-lg-inline`

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
- iframe, embed, object, video and `.embed-responsive-item` - child
- `.img-responsive`

##License

[The MIT License (MIT)](LICENSE)

Copyright &copy; 2015 Bogdan Chadkin
