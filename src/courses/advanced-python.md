---
title: 'Advanced Python'
slug: 'advanced-python'
description: 'Dive into advanced Python topics and techniques.'
icon: 'FaPython'
---

## Introduction to Advanced Python

Welcome to the Advanced Python course! This course is designed for developers who have a solid understanding of Python fundamentals and are ready to explore more sophisticated concepts and techniques. We will delve into topics that enable you to write more efficient, robust, and maintainable Python applications.

Throughout this course, you will learn about:
- **Decorators**: How to extend and modify functions without altering their core code.
- **Generators and Iterators**: Techniques for memory-efficient data processing.
- **Context Managers**: Best practices for resource management using `with` statements.
- **Object-Oriented Programming (OOP)**: Advanced aspects of Python's object model, including inheritance, polymorphism, and encapsulation.
- **Concurrency and Parallelism**: Utilizing threads, multiprocessing, and `asyncio` for high-performance applications.

By mastering these advanced topics, you will significantly enhance your Python programming skills and be better equipped to tackle complex software engineering challenges.

## Advanced Python Concepts

### Decorators
Decorators are a powerful feature in Python that allow you to modify or extend the behavior of functions or methods without changing their source code. They are often used for logging, timing, and authentication.

#### Understanding Decorators
A decorator is a function that takes another function as an argument, adds some functionality, and then returns another function.

```python
def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

#### Decorators with Arguments
Decorators can also take arguments, which allows for more flexible and reusable code.

```python
def repeat(num_times):
    def decorator_repeat(func):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator_repeat

@repeat(num_times=3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
```

### Generators and Iterators
Generators provide a way to create iterators in a simple and memory-efficient manner. They are useful for working with large datasets or streams of data.

#### Creating a Generator
- Use a function with the `yield` keyword to create a generator.
- When the generator is called, it returns a generator object, which can be iterated over.

```python
def my_generator():
    yield 1
    yield 2
    yield 3

for value in my_generator():
    print(value)
```

#### Generator Expressions
- Similar to list comprehensions, you can use generator expressions to create generators in a single line.

```python
my_generator = (i for i in range(10) if i % 2 == 0)
for value in my_generator:
    print(value)
```

### Context Managers
Context managers, used with the `with` statement, help manage resources like file handles or network connections, ensuring that they are properly cleaned up after use.

#### Creating a Context Manager
- You can create a context manager by defining a class with `__enter__` and `__exit__` methods.
- The `contextlib` module also provides a decorator for creating context managers from generator functions.

```python
class MyContextManager:
    def __enter__(self):
        print("Entering the context")
        # You can return a resource here, e.g., a file handle
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        # This method is called upon exiting the `with` block
        # exc_type, exc_value, and traceback are used for exception handling
        print("Exiting the context")

with MyContextManager() as cm:
    print("Inside the context")
```

## Object-Oriented Programming (OOP) in Python

### Classes and Objects
Python is an object-oriented language. Understanding how to create and use classes and objects is essential for building scalable and maintainable applications.

#### Defining a Class
- Use the `class` keyword to define a class.
- The `__init__` method is a special method that is called when an object is created.

```python
class Dog:
    # Class attribute
    species = "Canis familiaris"

    def __init__(self, name, age):
        # Instance attributes
        self.name = name
        self.age = age

    def bark(self):
        print("Woof!")
```

#### Creating an Object
- To create an object (instance) of a class, you call the class as if it were a function.

```python
my_dog = Dog("Buddy", 3)
print(f"{my_dog.name} is {my_dog.age} years old.")
my_dog.bark()
print(f"All dogs are of the species: {my_dog.species}")
```

### Inheritance and Polymorphism
Inheritance allows you to create new classes that inherit properties and methods from existing classes. Polymorphism enables you to use a single interface to represent different data types.

#### Inheritance
- Create a new class that inherits from a parent class (superclass).

```python
class GoldenRetriever(Dog):
    def __init__(self, name, age, favorite_toy):
        # Call the parent class's __init__ method
        super().__init__(name, age)
        self.favorite_toy = favorite_toy

    def fetch(self):
        print(f"Fetching the {self.favorite_toy}!")

my_golden = GoldenRetriever("Goldie", 2, "ball")
my_golden.bark() # Inherited from Dog class
my_golden.fetch()
```

#### Polymorphism
- Different classes can have methods with the same name, and you can call them on objects of different classes.

```python
class Cat:
    def speak(self):
        print("Meow!")

class Dog:
    def speak(self):
        print("Woof!")

# A function that can work with any animal that has a `speak` method
def animal_sound(animal):
    animal.speak()

animal_sound(Cat())
animal_sound(Dog())
```

### Encapsulation
Encapsulation is the bundling of data (attributes) and methods that operate on the data into a single unit (a class). It restricts direct access to some of an object's components.

#### Private and Protected Members
- Python doesn't have strict private members, but a convention using underscores is used to indicate that a member should not be accessed directly.
- A single underscore `_` prefix is a hint for "internal use" (protected).
- A double underscore `__` prefix triggers name mangling, making it harder to access from outside (private).

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance # Private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Invalid withdrawal amount")

    def get_balance(self):
        return self.__balance

acc = BankAccount(1000)
# print(acc.__balance) # This will cause an AttributeError
print(acc.get_balance()) # Use the public method to access the balance
```

### Static and Class Methods
- **Instance methods** (like `bark` in the `Dog` class) operate on an instance of the class.
- **Class methods** operate on the class itself. They are marked with the `@classmethod` decorator.
- **Static methods** don't operate on the instance or the class. They are essentially normal functions namespaced within the class. They are marked with the `@staticmethod` decorator.

```python
class MyMath:
    @staticmethod
    def add(x, y):
        return x + y

    @classmethod
    def from_string(cls, s):
        # A factory method that creates an instance from a string
        return cls(int(s))

print(MyMath.add(5, 3)) # Call static method without creating an instance
```

## Concurrency and Parallelism

### Threading and Multiprocessing
Python provides modules for both threading and multiprocessing, allowing you to run tasks concurrently or in parallel to improve performance.

#### Threading
- Used for I/O-bound tasks, where the program is waiting for external resources (e.g., network requests, disk reads).

```python
import threading
import time

def my_task(name):
    print(f"Task {name} starting")
    time.sleep(1)
    print(f"Task {name} finishing")

threads = []
for i in range(3):
    thread = threading.Thread(target=my_task, args=(i,))
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join() # Wait for all threads to complete

print("All tasks finished")
```

#### Multiprocessing
- Used for CPU-bound tasks, where the program is doing a lot of computation. It gets around the Global Interpreter Lock (GIL) by creating separate processes.

```python
import multiprocessing
import time

def cpu_bound_task(n):
    count = 0
    for i in range(n):
        count += i
    return count

if __name__ == "__main__":
    pool = multiprocessing.Pool(processes=2)
    results = pool.map(cpu_bound_task, [10**7, 10**7])
    pool.close()
    pool.join()
    print(f"Results: {results}")
```

### Asyncio
`asyncio` is a library for writing single-threaded concurrent code using the `async/await` syntax. It is particularly well-suited for I/O-bound and high-level structured network code.

#### Practical Asyncio Example
Here's an example of fetching data from multiple URLs concurrently.

```python
import asyncio
import aiohttp

async def fetch(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    urls = [
        'https://api.github.com',
        'https://api.ipify.org',
    ]
    async with aiohttp.ClientSession() as session:
        tasks = [fetch(session, url) for url in urls]
        htmls = await asyncio.gather(*tasks)
        for html in htmls:
            print(html[:80] + '...') # Print first 80 chars of each response

if __name__ == "__main__":
    # You might need to run `pip install aiohttp` for this example
    asyncio.run(main())
```
