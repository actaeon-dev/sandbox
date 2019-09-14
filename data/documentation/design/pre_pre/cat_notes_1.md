
I'm gonna lay out some criteria and options for the tools and platforms we use to make this idea a playable reality. 

It would be my decision alone as lead programmer, except that each decision is associated with implications for the rest of our team (you, reading this): drawbacks and features and future complications.

Of course, it isn't that bad to have to change platforms later; nothing has to be set in stone all the way to post-alpha and post-beta. However, if we choose wisely now, it will save us some trouble later.
Our very first MVP (minimum viable product) prototype will be as bare-bones as possible to figure out exactly which basic features are important to the rest of our team (writers, testers etc).

----

One of Myla's points of feature, which I like very much, is that the game should have a real-time component to its world, so that (e.g.) time passes in game at some linear ratio to real-world wall-clock time.                     

Most simple text-based engines are essentially turn-based, where the game world only ticks forward upon the player pressing Enter to submit some command... 

...because the game engine is single-threaded, and is "blocked" from continuing to run in the same thread where it is waiting for keyboard input. 

(It's possible, but not wise for a prototype, to simulate a "real-time" game engine that runs while waiting for keyboard input. <snip> long discussion of ncurses </snip>)

This is a long introduction to the point that the textual real-time prototype should probably be multi-threaded, because it will be simpler to think about. 

(A later graphical version of the game, where there's a full UI and animations and so on, can be both real-time and textual, because the entire game and input device state can be re-calculated more than once every frame, the engine ticked forward, and the entire graphical game surface still drawn.)

Browser JavaScript, the obvious first choice to make a prototype anyone can try, is single-threaded; one JavaScript execution context for each browser frame. A loose approximation of two threads is possible with asynchronous callbacks, but it's very flimsy and complicated. 

Of course, we could use single-thread browser JavaScript to communicate with an internet game server, but then the game is only playable with an internet connection, and has network latency each time you type a command. These are very minimal drawbacks for a first prototype. 

It's also an option to move away from the browser target until later. 

In terms of a simple console application, there's a long list of suitable programming languages, but now we can discuss the next 2 criteria.
The next consideration is simplicity of the language and architecture, not only so that Chelsea and Peter and I all know the technology,

but for ease of maintenance and lack of headaches, and also so that our less-programmy team members can understand what's going on, and even read/understand parts of the code if they need to. 

I can't talk about gradual learning curve programming languages without an obvious mention of Python, which is not the greatest language for many reasons, but has a great advantage in a lot of simplicity. 

When written by sensible people such as me and you, C, JavaScript, and even Rust or Sidef or Lua etc can be easy to read and not convoluted.

A multi-threaded or client/server desktop application need not automatically be complex and convoluted either. 
Alluded to earlier, cross-platform capability of all the iterations of the game is pretty important. I don't want to be making a system that only works on Windows or only works with an internet connection. 

I would also like to avoid having to port code or objects (i.e. convert platform-specific things to different platform-specific things), because that's a never ending job, and should be left to the languages and runtimes the game uses. 

I contribute to the porting of language and data platforms so that games like this can be made without having to be specially ported.

Browser JavaScript is incredibly cross-platform, as it can run in a browser or in a native desktop application. 

C is even more cross-platform because it targets almost every platform, except until you want to move past basic textual input/output. (Also, trying to compile / use standard C99 on Windows is really hell.) 

So, not that practical then.

Pretty much every modern OS has access to Python, Perl, and a wide range of similar scripting languages, but then there comes a question of requiring those interpreters to be installed, or packaging them with our application. 

It's a great possibility to write in Rust or Sidef as a source language and compile it to the browser and the desktop alike, and I would definitely like to do that, but complexity appears quickly and steeply.

Later we'll have the question of the cross-platform-ness and backwards compatibility of the graphical engine and platform, but that's an even more complicated decision.

As you can tell, even a simple decision like "what language shall we start with" has (to me) a great amount of depth and consideration necessary for it. 

Decisions of data design (storage, transfer, formats, etc), which are currently in my notes and head, are better left to a separate post. 

Rather than launch into a long examination of what's been outlined, let's answer a simple question instead: where do you want our prototype to start? 

Remember this will be a text- and semantics-oriented MVP, rather than a UI/UX prototype. 

IOW, the initial focus is on how the game reacts to input like "greet Emma" or "inspect door", and how it feels for time to pass in the game world.

Are you (as a tester, writer, designer) more keen on the idea of installing a scripting language interpreter like Python and then downloading the game code and running it? 

Or would you prefer we start with something that simply runs in a browser tab, but might rely on an internet connection to a game server? 

And to my fellow programmers (all of you, potentially, but specifically Chelsea and Peter), would you rather audit and debug and iterate and innovate on a web or desktop application? I don't implore you to put a lot of time in, but I don't want to use a platform that consistently annoys you. 
