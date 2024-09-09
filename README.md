# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

## Answer 

In the best-case senario we get $\Theta(n)$ this happens because the input array is already sorted. Since the array is already
in order, the function only needs to iterate through the array once making checks. In the worst-case we get $\Theta(n^{2})$.
This case would be when the input array is in reverse order. Being in reverse order the function would need to iterate through the entire array
making checks as well as making swaps at each iteration. The average case would be $\Theta(n^{2})$. This is because we want to determine the time complexity
for the case which will most likely to occur. The most commen case would be an array that is partially sorted since the array is partially sorted the function 
would have to iterate through the array $n$ times as well as make swaps. This would cause us to get a time complexity of $\theta(n^{2})$ since we are itterating through
the array and also making swaps. 

## Plagiarism Acknowledgment

I started this project on my own then while testing I was getting a error for counterexample []. I was having trouble fixing it so looked at my repository form last semester.
https://github.com/COSC3020/reverse-insertion-sort-swilso59-1
Turns out when I started working from the insertionSort code given I changed the name of the function in the code.js file so the code.test.js was failing. 

I answered the question of average case time complexicty on my own. After I still had a look at what I had previously written in the same repository provided to compare my answer.

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”




