---
title: 'Python Basics'
slug: 'python-basics'
description: 'Learn the fundamentals of Python programming.'
icon: 'FaPython'
---

## Introduction to Python Basics

Welcome to Python Basics! This course is designed for absolute beginners with no prior programming experience. Python is a powerful, versatile, and easy-to-learn language, making it an excellent choice for your first step into the world of coding.

Throughout this course, you will learn:
- **What is Python**: Its key features and why it's so popular.
- **Setting Up Your Environment**: How to install Python and run your first program.
- **Python Fundamentals**: Variables, data types, control structures (if/else, loops), and functions.
- **Data Structures**: Working with lists and dictionaries.
- **Modules and Packages**: How to use Python's extensive libraries.

By the end of this course, you will have a solid foundation in Python programming, enabling you to write simple scripts, understand basic programming logic, and prepare for more advanced topics.

## Introduction to Python

### What is Python?
Python is a high-level, interpreted programming language known for its clear syntax and readability. It was created by Guido van Rossum and first released in 1991. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.

#### Key Features of Python
- **Easy to Learn and Use**: Python has a simple syntax that is easy to learn, making it an ideal language for beginners.
- **Interpreted Language**: Python is an interpreted language, which means that code is executed line by line. This makes debugging easier.
- **Cross-platform**: Python is a cross-platform language, which means that you can run the same code on different operating systems like Windows, macOS, and Linux.
- **Large Standard Library**: Python has a large standard library that provides a wide range of modules and functions, so you don't have to write everything from scratch.

### Why Learn Python?
Python is versatile and used in various domains, including web development, data science, artificial intelligence, and automation. Its large standard library and active community make it an excellent choice for beginners and experts alike.

#### Career Opportunities
- **Web Development**: Frameworks like Django and Flask are used to build robust web applications.
- **Data Science**: Libraries like Pandas, NumPy, and Matplotlib are essential tools for data analysis and visualization.
- **Machine Learning and AI**: Python is the language of choice for machine learning and AI, with libraries like TensorFlow, Keras, and Scikit-learn.

## Setting Up Your Environment

### Installing Python
To get started, you'll need to install Python on your computer. You can download the latest version from the official Python website, [python.org](https://python.org). The installation process is straightforward for Windows, macOS, and Linux.

#### Windows Installation
1.  Download the latest Python installer from python.org.
2.  Run the installer.
3.  Make sure to check the box that says "Add Python to PATH".
4.  Click "Install Now".

#### macOS Installation
Python is usually pre-installed on macOS. You can check the version by opening the terminal and typing `python --version`. If you need to install a newer version, you can use Homebrew or download the installer from python.org.

### Your First Python Program
Let's write a classic "Hello, World!" program. Open a text editor, create a new file named `hello.py`, and add the following code:

```python:hello.py
print("Hello, World!")
```

Save the file and run it from your terminal using the command: `python hello.py`.

#### Understanding the Code
- `print()` is a built-in function in Python that is used to display output to the console.
- `"Hello, World!"` is a string literal that is passed as an argument to the `print()` function.

## Python Fundamentals

### Variables and Data Types
In Python, you can store data in variables. Python is dynamically typed, so you don't need to declare the data type of a variable.

#### Numeric Types
- **Integers**: Whole numbers, e.g., `age = 30`
- **Floats**: Numbers with a decimal point, e.g., `pi = 3.14`
- **Complex Numbers**: Numbers with a real and imaginary part, e.g., `c = 1 + 2j`

```python
x = 10       # integer
y = 3.14     # float
z = 1 + 2j   # complex
```

#### String Type
- **Strings**: A sequence of characters, enclosed in single, double, or triple quotes.

```python
name = "Alice"
multi_line_string = """This is a
multi-line string."""
```

#### Boolean Type
- **Booleans**: Represent `True` or `False` values.

```python
is_student = True
has_license = False
```

### Control Structures
Control structures allow you to control the flow of your program.

#### If Statements
- **if**: Executes a block of code if a condition is true.
- **elif**: Used to check for multiple conditions.
- **else**: Executes a block of code if all the preceding conditions are false.

```python
age = 18

if age < 18:
    print("You are a minor.")
elif age >= 18 and age < 65:
    print("You are an adult.")
else:
    print("You are a senior citizen.")
```

#### For Loops
- **for**: Used to iterate over a sequence (like a list, tuple, or string).

```python
# Looping through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Looping through a range of numbers
for i in range(5):
    print(i)
```

#### While Loops
- **while**: Executes a block of code as long as a condition is true.

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

### Functions
Functions are reusable blocks of code. You can define your own functions to perform specific tasks.

#### Defining a Function
- Use the `def` keyword to define a function.
- The function can take arguments and return a value.

```python
def greet(name):
    """This function greets the person passed in as a parameter."""
    return f"Hello, {name}!"
```

#### Calling a Function
- To call a function, use the function name followed by parentheses.

```python
message = greet("Bob")
print(message)
```

#### Default Arguments
- You can provide default values for function arguments.

```python
def greet(name="World"):
    return f"Hello, {name}!"

print(greet())          # Output: Hello, World!
print(greet("Alice"))    # Output: Hello, Alice!
```

### Data Structures

#### Lists
Lists are ordered, mutable collections of items. They are one of the most versatile data types in Python.

```python
# Creating a list
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]

# Accessing elements
print(fruits[0])  # Output: apple
print(numbers[-1]) # Output: 5

# Modifying a list
fruits.append("orange")
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']

fruits[1] = "blueberry"
print(fruits)  # Output: ['apple', 'blueberry', 'cherry', 'orange']
```

#### Dictionaries
Dictionaries are unordered collections of key-value pairs. They are optimized for retrieving data when you know the key.

```python
# Creating a dictionary
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Accessing values
print(person["name"])  # Output: Alice

# Modifying a dictionary
person["age"] = 31
person["occupation"] = "Engineer"
print(person)  # Output: {'name': 'Alice', 'age': 31, 'city': 'New York', 'occupation': 'Engineer'}
```

### Modules and Packages
Python's power comes from its extensive standard library and third-party packages.

#### Importing Modules
You can use the `import` statement to use code from another module.

```python
# Import the math module
import math

print(math.pi)  # Output: 3.141592653589793
print(math.sqrt(16)) # Output: 4.0

# Import a specific function
from random import randint
print(randint(1, 10)) # Output: a random integer between 1 and 10
```

#### Pip and Packages
`pip` is the package installer for Python. You can use it to install packages from the Python Package Index (PyPI).

```bash
# Install a package
pip install requests

# Use the installed package in your code
import requests

response = requests.get("https://api.github.com")
print(response.status_code) # Output: 200
```
