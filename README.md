# uniKanban
University Assignment Tracker Kanban using HTML &amp; Javascript

Those who know Kanban know it is a useful workflow management system. In my mind, the best way to demonstrate understanding of something is to build it. There are a lot of varying Kanban software and apps out there I could sue, but by commencing on this small project, it will allow me to put into real case uses some of my skills across HTML, CSS & Javascript and create a tool I can use for my studies. 

# Rules! #
* **No Frameworks!** The aim of this is to write code and understand the fundamentals without introducing additional libraries or frameworks. It will also demonstrate my organisational skills more clearly if I am forced to think about the order of my files.
* **No Downloaded Libraries!** I personally like to create seperate files to store my objects in so I can bring them in cleanly as necessary. I am aware by default bringing over some external functions from a series of modules is by its defenition utilising a library, so I will be clear that I will only be using libraries that I make myself on this occasion.
* **NO PHP** This is the hardest part for me. I absolutely adore everything about PHP, it was one of the first languages I learnt and holds a special place in my heart. Reluctantly though, this project would be built too quickly if I used it, and would detract from my ability to learn more from javascript. So local files only, no servers, no PHP :(
* **NO MYSQLi** For the same reason, hooking into a database would take the fun out of this. Local Arrays and lists it is!

* **It must be pretty** Kanban is by design a visible workflow, and it's strength is this visibility. I will want to make this be something I actually awntt o look at, otherwise what's the point!

* **No scrolling** The entire app should be within a fullscreen window with no browser based horizontal or vertical scrolling

## Brief ##
Create a small workflow management tool following the core principles of Kanban. The above rules must be satisfied. GO!


# Start #

The completed app should allow or the following:

* The user will be able to input a task which isn't shown by default but automatically moves over to the 'To Do' column once bandwiwdth becomes available.
* When the task reaches the 'Completed', it drops off into a completed section which isn't shown by default but can be viewed.
* The user can delete tasks
* the user can edit tasks
* the user can push a task forward
* the user can push a task backward
* the tasks should have a log of what happened to it

So I have typed up the preqrequisites that the Kanban app should allow me to do. I will now re read them, and see if there is anything I would change before commencing the drawings.

# Amendments #
I will pop any additional feature ideas here that I feel may serve m in the future.
* I will have the tasks automatically populate a To Do list and show it. The nature of seeing whats in the To Do will act as a visual stimulant to encourage progress.
* Difficulty gauge. Althoguh this is qualitative, I will be the only user so there will be no risk of miscommunication or misinterpretation
* Reference Source - I can past in a link or directions to a page in a book as a seperate list




# The Task Class #
What information will a task need to hold? wbn = would be nice, but not necessary

* Date
* Title
* Description
* Author
* Category
* Update Log
*  *difficulty gauge - wbn*
*  *reference source - wbn*





```

list0:[task 0, task 1], list1:[task 2, task 3], list2:[task 4, task 5], list3:[task 6, task 7]

```
And that is the general premise behind Kanban.



## General Barebones ##

![Barebones image depicting 4 columns each with its own label](https://github.com/Chrisbmorris21/uniKanban/blob/main/images/designs/1.jpg)

It's not Disneyland (guess the movie) but the colors give me a rough idea of what I'm shooting for. Everything is easily seperated. I have split the CSS into a few files,
one for the Cards, one will be for the Board, and another for the CRUD buttons.
