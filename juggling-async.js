/*
  This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments. 
*/

const http = require('http')
const bl = require('bl')
const results = []
let count = 0

printResults = () => {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
    }
}

httpGet = (index) => {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}

/*
WALKIG THROUGH:
We are going to need 2 main functions. One is to stream the data from the 3 urls 
and the other is to print out the data once it has been recieved. Lets call the 
stream function "httpGet" and the print function "printResults". Seeing as the 
httpGet will be calling on printResults we should write printResults out first.

We can write our function to print out the elements of an array one line at a time. 
So our array can be a variable, lets call it results. The results variable will 
contain the data from each url. Then we can use a for loop to print out the results. 

So first create a variable and assign it an empty array.

Then our PrintResults function containing a for loop.

We now need to write out httpGet function. We need to open a stream for each url, 
collect the data and then store it in the results array. How can we do this to all 3? 
We can create a for loop to go through each url, collect the data, and then add it 
to the corresponding position in the array. So the for loop can be simple, 
like the last one

So, if i is less that 3, console log the element in position i. Simple. Now we can 
start writing our httpGet function around the i or index parameter.
-----------------------------------
function httpGet (index) {
  doSomething
}
------------------------------------

Our function, as part of the for loop will scroll through index 0, 1 and 2. 
We can use this as we have done before to access each part of a command line argument 
that we want. Skipping out the first 2 arguments:
----------------------------------------------------------
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    doSomething
  })
}
----------------------------------------------------------

We now perform a http.get on each url in the command line. Now pipe the stream to 
collect the data, incuding the early error callback:
----------------------------------------------------------
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)
    }))
  })
}
----------------------------------------------------------

Now we need to string the data, and add it to the results array in the corresponding 
position. We can do this using our index:
----------------------------------------------------------
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
    }))
  })
}
----------------------------------------------------------

So far our program is storing the data from the 3 urls in our command line. 
We need to now somehow use our printResults function to print out the data. 
But it has to all be done in the correct order, all at once. So we need to wait for 
all the data to be collected and stored. We can use a count mechanism to do this.
> First declare the count variable
> Then we add instructions to increase the count by 1 when the data has been stringed 
and added to the results array:
----------------------------------------------------------
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++
    }))
  })
}
----------------------------------------------------------

So after the data is stored we increase the count variable by 1.
Now we need to carryout our printResuts function when all the data is stored. 
So at 3 count:
----------------------------------------------------------
function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}
----------------------------------------------------------

And you've done it. Our printResults function now loops through our results array, 
printing off each element which is a string of data from the corresponding urls 
in the same order they were passed to the console.

*/