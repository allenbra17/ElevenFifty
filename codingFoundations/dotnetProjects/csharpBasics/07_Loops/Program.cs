//While
int counter = 0;
while(counter <= 50)
{
    Console.WriteLine($"Your number is {counter}");
    counter +=10;
}

//For Statement
List<string> listofAnimals = new List<string> { "Cat", "Dog", "Fish", "Goat"};
listofAnimals.Add("Platypus");

for(int i = 0; i < listofAnimals.Count; i++)
{
    Console.WriteLine(listofAnimals[i]);
}

//ForEach
foreach(string animal in listofAnimals)
{
    Console.WriteLine(animal);
}