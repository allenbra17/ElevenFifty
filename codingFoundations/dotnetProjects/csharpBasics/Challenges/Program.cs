// Challenge #1: Conditionals and Loops Challenge
// Print every letter of the word "Supercalifragilisticexpialidocious" to the console, one character at a time.
// Do the same, except only print the letter if it's an 'i' If it's an other letter, print "Not an i".
// Bonus: Print the number of letters in the word (not by counting, but using code)
// Bonus #2: In part 2, also check for the letter L

string word = "Supercalifragilisticexpialidocious";
foreach (char letter in word)
{
    Console.WriteLine(letter);

    // if(letter = "i")
    // {
    //     Console.WriteLine("i");
    // }
    // else
    // {
    //     Console.WriteLine("Not an i");
    // }
}

Console.WriteLine(word.Length);
//----------------------------------------------
//----------------------------------------------
