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

To Do
-----
* Elapsed for months
* Return formatted date

License
-------
MIT License

Copyright (c) 2012-2013 Jongmin T. Moon <jongmin.t.moon@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.