//Classes
//A class in csharp is like a blueprint that lets us create an object
//Classes are written in Pascal case

using Classes;

Donut doug = new Donut("Creme Filled");
Console.WriteLine(doug.donutType);

doug.donutType = "Jelly Filled";
Console.WriteLine(doug.GetDonutType());

doug.SetDonutType("Glazed");
Console.WriteLine(doug.GetDonutType());

//Interacting with Properties
doug.Filling = "A second donut";
Console.WriteLine(doug.Filling);

Donut secondDonut = new Donut("Cookies 'n' Cream", "Crumbles", true, 1.23m);
secondDonut.SetDonutType("Weekly Special");
Console.WriteLine(secondDonut.GetDonutType());

namespace Classes
{
    class Donut
    {
        //Fields
        //A field is a variavle of any type, that is declared inside a type.
        //a Field is a member of a class.
        //Fields are written in camelCase

        public string donutType;

        //Constructors
        //A constructor is one of the first pieces of code that runs when a new instance is created.
        //This means anything you want the object to start off with as soon as it is insatantiated, can be put in the constructor.

        public Donut(string typeofDonut)
        {
            donutType = typeofDonut;
        }

        public Donut(string filling, string topping, bool onSpecial, decimal price)
        {
        Filling = filling;
        Topping = topping;
        IsOnSpecial = onSpecial;
        Price = price;
        }

        //Methods
        //A method is a code block that contains a series of statements.
        //This code block is reusable, and can be INVOKED by CALLING the method elsewhere in our code.
        //Note: a constructor is a specific type of method, so there are similarities.

        public string GetDonutType()
        {
            return donutType;
        }

        public void SetDonutType(string type)
        {
            donutType = type;
        }

        //Properties
        //A property is a member that provides a flexible mechanism to read, write, or compute the value of a private field.
        //Properties can be used as if they are public members, but they are actually special methods called "accessors"
        //This enables data to be accessed easily and still helps promote the safety and flexibility of methods.

        public string Filling { get; set; }
        public string Topping { get; set; }
        public bool IsOnSpecial { get; set; }
        public decimal Price { get; set; }

    }
}