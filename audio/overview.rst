.. _doc_audio_overview:

Audio Module Overview
==============================
Perhaps you have already created your first game. Piles of characters and monsters are running around on the screen.
Now listen! Do you hear? Nothing! Modern games can hardly be imagined without music and sound effects. Fortunately, Thunder Engine has a sound system to bring some noise to your game.
Thunder Engine Audio Module supports 2D and 3D audio sources and several audio formats for import.

The concept of this module is very simple. Audio Listener automatically attaching to the active camera and catching sound from Audio Sources.

.. image:: images/scheme.png
	 :alt: Audio System scheme
	 :width: 400
	 
There are several ways to create Audio Sources:

- Just drag and drop Audio Clip on the scene.
- Add Audio Source component for an existing object.

Thunder Engine Audio module is based on OpenAL framework.
OpenAL has an additional functionality like audio filters.
This functionality will be supported in future Thunder Engine releases.