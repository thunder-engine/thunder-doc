.. _doc_audioclip:

AudioClip
=========

**AudioClip** is a resource that represents audio data that can be played in the game. It serves as a container for imported audio files and provides an interface for playback management.

Overview
--------

AudioClip is the fundamental building block of Thunder Engine's audio system. When an audio file is imported, an AudioClip resource is created, which can then be used by ``AudioSource`` components for 3D spatial playback or directly through the audio mixer.

.. note::
    AudioClip itself does not play sound. It only stores data and settings. For playback, use the :ref:`AudioSource` component.

Supported Formats
-----------------

Thunder Engine supports the following audio formats:

=============== ==============================================================
Format          Features
=============== ==============================================================
**WAV**         Uncompressed format, minimal playback latency.
                Recommended for short sounds (gunshots, footsteps, UI effects).
**OGG Vorbis**  Compressed format with good quality/size ratio.
                Ideal for music and long sound effects.
**MP3**         Supported, but not recommended due to patent restrictions.
                Use OGG as an alternative.
=============== ==============================================================

.. warning::
    Using stereo files for 3D sounds may lead to incorrect spatial positioning. For spatial sounds, use mono files.

Properties
----------

Import Properties
-----------------

The following settings are available when importing an audio file into Thunder Engine:

**streamed** (bool)
    Enables streaming playback of audio data. When ``true``, the audio file is not fully loaded into memory but is read from disk as needed.
    
    - Use ``true`` for long tracks (music, dialogue, podcasts) to save RAM
    - Use ``false`` for short sounds (gunshots, footsteps, UI effects) that should play with minimal latency
    
    .. note::
        OGG Vorbis format is recommended for streaming playback.

**forceMono** (bool)
    Forcefully converts stereo audio to mono format during loading.
    
    - **Must be enabled** for sounds that will be used in 3D space (via the AudioSource component). Spatial positioning only works correctly with mono sounds
    - Leave ``false`` for music and sounds that always play in stereo (e.g., background music, cutscenes)
    
    .. warning::
        Using stereo files in 3D scenes without enabling ``forceMono`` may cause incorrect positioning and phase distortion.

**quality** (float)
    Compression quality for audio data. The value range depends on the source file format:
    
    - **0.0** — minimum quality, maximum compression (smallest file size)
    - **1.0** — maximum quality, minimum compression (largest file size)
    
    .. tip::
        Recommended values:
        
        - For sound effects: ``0.5`` — 0.7 (good balance of quality and size)
        - For music: ``0.7`` — 0.9 (quality matters more than size)
        - For speech/dialogue: ``0.4`` — 0.6 (speech is less sensitive to compression)

Usage Example
-------------

**Basic Playback in Code**

.. code-block:: cpp

    // Get AudioClip resource
    AudioClip* clip = Engine::loadResource<AudioClip>("sounds/explosion.ogg");
    if (clip) {
        AudioSource* source = actor()->getComponent<AudioSource>();
        if (source) {
            source->setClip(clip);
            source->setLooping(false);
            source->play();
        }
    }

Optimization Recommendations
----------------------------

1. **Use the right format**
    - Short sounds (up to 5 seconds): WAV (uncompressed) or OGG with low bitrate
    - Music and long sounds: OGG with quality 5-7 (q=5-7)
    - Dialogue: OGG mono, 64-96 kbps

2. **3D sounds**
    - Always use mono files for 3D positioning
    - Don't create more than 20-30 active AudioSource instances simultaneously

.. 3. **Manage memory**
   - Don't keep all AudioClip resources in memory at once
   - Use ``setPreload(false)`` for sounds that play infrequently
   - Unload resources from unused levels:
     .. code-block:: cpp
        engine->resourceManager()->unloadAllUnused<AudioClip>();

.. 4. **Profiling**
   Use the built-in profiler to track:
   - Number of simultaneously playing sounds
   - Memory usage of audio data
   - Load on audio streams