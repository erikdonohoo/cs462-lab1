# Lab 1 CS 462 Erik Donohoo
## Part 0

1. home.byu.edu/home
2. 71 requests at just over 1.4 seconds
3. home/
4. 87 ms to download, waited 88 ms to download
5. Yes, on a subsequent request the browser says it retrieves from the cache
6. home.byu.edu, the domain name the server is listening on
7. X-Drupal-Cache:HIT, X-Generator:Drupal 7 (http://drupal.org)
8. 301, the url redirects to home.byu.edu/home

## Part 1
Initially, since the extension wasn't mapped to a mime type, it was returned as application/octet-stream, which triggered chrome to just try and download the file.  After adding `.byu` as a text/html type, the browser rendered it like a normal html page.

## Part 2

Mappings
```javascript
var redirectMap = {
	goog: 'http://google.com',
	face: 'http://facebook.com',
	yahoo: 'http://yahoo.com'
};
```
