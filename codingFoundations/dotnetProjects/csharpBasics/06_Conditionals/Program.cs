//FLow Control
//if else, if
bool isRaining = true;
bool amGoingOutside = true;

if(isRaining && amGoingOutside) {
    Console.WriteLine("I might need a jacket.");
}

int age = 4;
if(age >= 36)
{
    Console.WriteLine("Running for Prez");
}
else if(age >=18)
{
    Console.WriteLine("You can vote.");
}
else {
    Console.WriteLine("You are a Child");
}

//switches
Console.WriteLine("Enter your name");
string name = Console.ReadLine();
switch(name)
{
    case "Brad":
        Console.WriteLine("Hello Brad");
        break;
    case "Billy":
        Console.WriteLine("Yo Billy");
        break;
    default:
        Console.WriteLine($"Go away {name}, I dont know you!");
        break;
}

//ternaries
