.. _doc_audio_index:

Audio
=====
.. tip:: This module is an optional. You always are able to exclude it from your project.

The Audio module provides a complete sound system for Thunder Engine, allowing you to add music, sound effects, and spatial audio to your game. It is built as a modular component that can be included or excluded from your project based on your needs.

Module Overview
---------------

Perhaps you have already created your first game. Piles of characters and monsters are running around on the screen.
Now listen! Do you hear? Nothing! Modern games can hardly be imagined without music and sound effects. Fortunately, Thunder Engine has a sound system to bring some noise to your game.
Thunder Engine Audio Module supports 2D and 3D audio sources and several audio formats for import.

The concept of this module is very simple. Audio Listener automatically attaching to the active camera and catching sound from Audio Sources.

The Audio module is responsible for:

- Loading and managing audio resources
- Playing sounds in 2D (UI, background music) and 3D (positional audio)
- Managing audio sources attached to actors
- Resource streaming for large audio files

.. toctree::
   :maxdepth: 1
   :name: toc-audio
   
   resources/audioclip
   components/audiosource
