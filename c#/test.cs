// omit namespace and main
using System;

var solution = new Solution();
solution.PrintFuzzBuzz();

class Solution
{
    public const string FIZZ = "Fizz";
    public const string BUZZ = "Buzz";
    public void PrintFuzzBuzz(int start = 0, int end = 100)
    {
        // validation
        var isValidRange = start <= end;
        if (isValidRange)
        {
            throw new ArgumentException("Not valid range");
        }

        for (var i = start; i <= end; i++)
        {
            var isByThree = i%3;
            var isByFive = i%5;

            if (isByThree && isByFive)
            {
                Console.WriteLine($"{FIZZ}{BUZZ}");
                continue;  // skip
            }

            if (isByThree)
            {
                Console.WriteLine($"{FIZZ}");
                continue;  // skip
            }

            if (isByFive)
            {
                Console.WriteLine($"{BUZZ}");
                continue;  // skip
            }
            
            // do something else
        }
    }
}