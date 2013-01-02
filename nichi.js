/*
MIT License
Copyright (c) 2012-2013 Jongmin T. Moon <jongmin.t.moon@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var nichi = (function(input) {
  var date,
      ms = {
        sec           : 1000,
        min           : 60000,
        hr            : 3600000,
        day           : 86400000,
        wk            : 604800000,
      },
      daysInMonth = [
        31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
      ];
  function set(val) {
    /* Set date obj */
    /* TODO: Validate */
    if(val instanceof Date) date = val;
    else {
      date = new Date(val);
    }
  }
  function update(base, mult) {
    var current = date.getTime();
    current += base * mult;
    date = new Date(current);
  }
  if(!input) {
    /* Set new current date obj if no input */
    date = new Date();
  }
  else set(input);
  return {
    set               : set,
    get               : function() {
      return date;
    },
    sec               : function(sec) {
      update(ms.sec, sec);
      return this;
    },
    min               : function(min) {
      update(ms.min, min);
      return this;
    },
    hr                : function(hr) {
      update(ms.hr, hr);
      return this;
    },
    day               : function(day) {
      update(ms.day, day);
      return this;
    },
    wk                : function(wk) {
      update(ms.wk, wk);
      return this;
    },
    elapsed           : function() {
      var was = date.getTime(),
          now = Date.now(),
          passed = now - was,     //Time passed in ms
          unit,                   //Unit of measurement (e.g. 'day')
          recent = false,         //Time passed is less than a second.
          mod,                    //Remainder
          floor;                  //Math.floor() of time passed
      function calcElapsed(measure, time, num) {
        /* Calculates elapsed time based on unit */
        unit = measure;
        floor = Math.floor(time / num);
        mod = time % num;
      }
      if(passed >= ms.wk) {
        /* Check if weeks passed */
        calcElapsed('week', passed, ms.wk);
      }
      else if(passed >= ms.day) {
        /* Check if days passed */
        calcElapsed('day', passed, ms.day);
      }
      else if(passed >= ms.hr) {
        /* Check if hours passed */
        calcElapsed('hour', passed, ms.hr);
      }
      else if(passed >= ms.min) {
        /* Check if minutes passed */
        calcElapsed('minute', passed, ms.min);
      }
      else {
        /* Check if seconds passed */
        if(passed >= ms.sec) {
          calcElapsed('second', passed, ms.sec);
        }
        else recent = true;
      }
      if(recent) return 'just now';
      else {
        if(floor > 1) unit += 's';
        if(floor === 1) return 'a ' + unit + ' ago'
        else return floor + ' ' + unit + ' ago';
      }
    }
  }
});