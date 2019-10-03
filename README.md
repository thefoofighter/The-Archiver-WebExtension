## The Archiver: Web Extension (Chrome, Firefox)

The Archiver is a tool that lets you save a webpage to the top 3 popular Archival services available today. It also lets you check if the page has already been archived.

Thanks to Firefox's new WebExtension Api I literally only had to copy my original Chrome Extensions and  build it for Firefox. It worked out of the box. I have since retired the original Firefox extension, It should still work but lacks a key feature: Archiving an image or a link you right click on. The original can only archive a page and is not context sensitive.

- [Archive.org's](https://archive.org/) Wayback Machine
- [Archive.is](https://archive.is/) (aka: Archive.Today)

Simply right click on a Page, Image or Link and use the context menu to archive the page or check if the page has been previously saved.

Save all the Internets!

### Installation

Installing on Firefox:

Addon can be found in the Firefox Addon store [here](https://addons.mozilla.org/en-US/firefox/addon/the-archiver/)

Chrome support is currently broken as i need to bring the plugin to CRX3 but hav no time ^^
You can fork this repo and enable developer mode in the chrome extensions tab and load the unpacked plugin to get it to work

Once i have time I will bring it to chrome properly through the store.

### Usage

1. Right click on a Page, Link or Image
2. Use the Archivers menu to Save or Check your selected item.
3. Save all the Internets!
4. Set your options via the context menu to customize your archival experience.

### Screenshots

![Chrome context menu](http://s5.postimg.org/mha1vnjt3/archiver_chrome.png)

![Chrome options](http://s5.postimg.org/mijzp2lmv/archiver_chrome_options.png)

### License

MIT License

Copyright (c) [2017] [Cathal McNally]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.