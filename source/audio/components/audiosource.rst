.. _doc_audiosource:

AudioSource
===========

**AudioSource** is a component that plays sounds in 3D space. It attaches to an actor and creates a sound source that can be heard by the :ref:`AudioListener` component (typically attached to the player's camera).

Overview
--------

AudioSource is the primary tool for creating spatial audio in Thunder Engine. The component attaches to an actor and manages playback of an :ref:`AudioClip` resource in 3D space.

.. note::
    Spatial parameters (volume based on distance, panning) are calculated automatically based on the position of the AudioSource relative to the AudioListener. Additional attenuation configuration is done through AudioClip import properties.

Component Properties
--------------------

The following settings are available when creating an AudioSource:

**clip** (ResourceRef<AudioClip>)
    Reference to the :ref:`AudioClip` resource to be played.
    
    - Type: ``AudioClip*``
    - Editor: Asset picker
    - Can be changed at runtime via ``setClip()``

**autoPlay** (bool)
    If set to ``true``, playback starts automatically when the component is activated or the scene is loaded.
    
    - Default: ``false``
    - Useful for background music or persistent ambient sounds

**loop** (bool)
    Loops playback. If enabled, the sound will repeat indefinitely until ``stop()`` is called or the component is destroyed.
    
    - Default: ``false``
    - Use for engine sounds, wind, waterfalls, and other continuous effects

.. note::
    Spatial attenuation settings (minDistance, maxDistance, rolloffMode) are configured at the :ref:`AudioClip` level during audio file import, not in the AudioSource component. This allows the same settings to be reused for all sources using a given clip.

Usage Examples
--------------

**Creating a Sound Source for an NPC**

.. code-block:: cpp

    class NPC : public Actor {
    public:
        void start() override {
            // Add AudioSource
            m_voiceSource = addComponent<AudioSource>();
            m_voiceSource->setAutoPlay(false);
            m_voiceSource->setLoop(false);
            
            // Load different phrases
            m_greetingClip = Engine::loadResource<AudioClip>("npc/greeting.ogg");
            m_questionClip = Engine::loadResource<AudioClip>("npc/question.ogg");
            m_farewellClip = Engine::loadResource<AudioClip>("npc/farewell.ogg");
        }
        
        void onInteract() {
            // Play a random phrase
            AudioClip* clips[] = {m_greetingClip, m_questionClip, m_farewellClip};
            int randomIndex = rand() % 3;
            
            m_voiceSource->setClip(clips[randomIndex]);
            m_voiceSource->play();
        }
        
    private:
        AudioSource* m_voiceSource = nullptr;
        AudioClip* m_greetingClip = nullptr;
        AudioClip* m_questionClip = nullptr;
        AudioClip* m_farewellClip = nullptr;
    };

Recommendations
---------------

**Using with 3D Sound**
    For proper 3D positioning:
    
    1. When importing AudioClip for 3D sounds, set ``forceMono = true``

**Resource Management**
    .. code-block:: cpp

        if (!audioSource->isPlaying() && !audioSource->isLooping()) {
            // Can unload the clip if it's no longer needed
            Engine::unloadResource(audioSource->getClip());
        }

**Optimization for Mobile Platforms**
    - Use ``loop = true`` only when absolutely necessary
    - For background music, use a single AudioSource with a looped clip
    - For one-shot sounds (gunshots, footsteps), use temporary AudioSources or an object pool