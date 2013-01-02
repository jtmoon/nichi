nichi
=====

**nichi** is a Javascript Date library that provides basic methods when interacting with dates.

Features
--------
* Simple manipulation of date/time
* Quick calculation of elapsed time

Example
-------
```javascript
nichi() //Initializes with current Date object
nichi().get() //Returns Date
nichi('January 2nd, 2013') //Initializes with Date string or Date object
nichi().sec(-10).day(1).get() //Returns Date after subtracting 10 seconds and adding 1 day
```

Methods
-------
* ```get()``` Returns the Date object
* ```set(Date)``` Sets to new Date object or Date string
* ```sec(int)```
* ```min(int)```
* ```hr(int)```
* ```day(int)```
* ```wk(int)```
* ```elapsed()``` Returns string representing elapsed time (e.g. ```Just now``` ```a minute ago``` ```3 weeks ago```)