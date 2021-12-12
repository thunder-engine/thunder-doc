.. _doc_explore_builder:

Building with Builder tool
----------------------------------------------
The Builder tool is a Continuous Integration (CI) friendly console tool.
It helps developers to create a game binary and pack required resources.

This tool can be found in the main bynary direcory near WorldBuilder.
::

    sdk/%version%/%platform%/x86_64/bin/WorldEditor


To start the build process please use the following arguments:

::

    $ Builder -s project.forge -t target/directory -p platform


Where project.forge is a path to your project file, "target/directory" is the place where your game binaries will be placed.
The "platform" parameter defines the current platform for which your project will be built.