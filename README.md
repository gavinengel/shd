# shd (shell daemon)
Wrap little shell daemons in javascript, for use with node.js process managers.  Useful for watch-compilers like jade, less, sass, etc.

[![npm version](https://badge.fury.io/js/shd.svg)](http://badge.fury.io/js/shd)
[![100pct-evil](https://img.shields.io/badge/evil-100%25-red.svg?style=flat)](http://i.imgur.com/7zpaaV5.jpg)


```
     _         _
 ___| |__   __| |                                    
/ __| '_ \ / _` |       ,╓▄▄φ▓▓▓▓▓▓▓▄▄╓     ▐\
\__ \ | | | (_| |    ▄▓▓▀åT`   ▐\     å▀▓▄╕,▀ ▓         
|___/_| |_|\__,_| ╔▓▀T         █ ▀       ]▓▀  ▓         
      _          ▓▓^          ▐▀  ▓    ┌@Φ`   ▌         
     (_)___    ╒█▀         ,╓▄▀   █     ▌    ╣█▄        
     | / __|   █▌          ,▓`    ▌     ?W╦,4█╙█       
    _| \__ \ ╟█            "W▄,╓▓µ        π*T █▌       
   (_) |___/  ▓▌               '               ▓▓       
  ___/ |      █▌                          ,▄▄, 1█╕      
  \___/       å█           ,▄▄            ▓███⌐ ║█      
        ,╓▄▄▄▄▄█▌          ████Ω          ▓███` ▓█      
    ,▄▓▀▀TT^lΓTå▀▌        ]████▌    ▌  ▌   ΓT ,▓█       
   ▓▓T            å½,      å▀▓▀      ▀▀     ╓▓█T        
  █▌                å▓▄╓               ,╓▄▓▓▀^          
 ║█        ▄=*τ=╕    ███▓╬▓▓Wφ====≈≈▓▀T▀█▌              
 ║█       ▓     "▌   ▓█▌╢▌▄Tl^T*m╗▄▓    1█              
  █▄      å╕     ║   ╠▓╬╣WΩ       .▀µ   ▄█ .            
  ?█▄           ╒▌   ╣▒╢╢▌å▄╓     ,▄▌=#*╠█▄▄▄▄          
    ▀█▄▄,    ,╓▓T    ▓▒╢╢▓ ▌ ▀╣╣▄▄==╣≈τ*▀█▓l,å█         
      `T▀▀▀▀▀▀T▓▓╕   ║▒▀▓╔▀^TT%▓T"T½▐Ω   ▌    █Ü        
                ?▀▓▓▄▄▓▒▌▓     `   ╫▐▄ ,▀    ▄█         
                    `TT▀█▓╦       ╔█▌▄██▓▓▓▓▓▀          
                         `╙▀▀▀▀▀▀▀▀T`                   
                         
```

## What problem does `shd` solve?
It is common to run many small services during development.  Common examples including compilers such as jade, sass, less, livereload, typescript, coffeescript, etc.  To make starting & stoping these services easier, there is `shd`.  In short, create a single .js for each of your shell commands that you run continuously during development.

## Usage

### step 1: add to your project
```js
npm install --save-dev shd 
```

### step 2: add one shell command to single .js file:
```js
#!/usr/bin/env node
var shd = require('shd')
shd.start('jade -w index.jade')
```

### step 3: use process manager (ex. pm2):
```bash
# summon daemons before beginning work...
$ pm2 start ./daemons/jade.js
$ pm2 start ./daemons/sass.js
$ pm2 start ./daemons/livereload.js

# ...do your web dev work...

# ...then vanquish daemons when you're done.
$ pm2 kill
```
## TODO
- display output from shell commands
- advice on hohup, startup daemons
- single line instead of 2 lines of custom code for a shd file

## Credits
TODO

## Alternatives
These are alternative projects which can yield achieve a similar result:

TODO

## License

([The MIT License](http://opensource.org/licenses/MIT))
Copyright (c) 2015 Gavin Engel <<gavin@engel.com>>

