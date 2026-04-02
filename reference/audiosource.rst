.. _api_AudioSource:

AudioSource
===========

Inherited: None

.. _api_AudioSource_description:

Description
-----------

The AudioSource class provides methods to manage the playback of audio clips. It allows users to set audio clips, control playback, and adjust parameters like auto-play and looping.



.. _api_AudioSource_public:

Public Methods
--------------

+------------------------------------+-------------------------------------------------------------+
|                               bool | :ref:`autoPlay<api_AudioSource_d32f0bc8>` () const          |
+------------------------------------+-------------------------------------------------------------+
|  :ref:`AudioClip<api_AudioClip>` * | :ref:`clip<api_AudioSource_e9a173cd>` () const              |
+------------------------------------+-------------------------------------------------------------+
|                               bool | :ref:`loop<api_AudioSource_6390c1e8>` () const              |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`play<api_AudioSource_0e2bd4c5>` ()                    |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`setAutoPlay<api_AudioSource_64acb2f9>` (bool  play)   |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`setClip<api_AudioSource_b83e10c5>` (AudioClip * clip) |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`setLoop<api_AudioSource_27f65043>` (bool  loop)       |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`stop<api_AudioSource_69c0215a>` ()                    |
+------------------------------------+-------------------------------------------------------------+



.. _api_AudioSource_static:

Static Methods
--------------

None

.. _api_AudioSource_methods:

Methods Description
-------------------

.. _api_AudioSource_d32f0bc8:

 bool **AudioSource::autoPlay** () const

Returns true if auto-play is enabled; otherwise, returns false.

**See also** setAutoPlay().

----

.. _api_AudioSource_e9a173cd:

 :ref:`AudioClip<api_AudioClip>` * **AudioSource::clip** () const

Returns the audio clip associated with the audio source.

**See also** setClip().

----

.. _api_AudioSource_6390c1e8:

 bool **AudioSource::loop** () const

Returns true if looping is enabled; otherwise, returns false.

**See also** setLoop().

----

.. _api_AudioSource_0e2bd4c5:

 void **AudioSource::play** ()

Plays the audio clip in the specific position in 3D space.

----

.. _api_AudioSource_64acb2f9:

 void **AudioSource::setAutoPlay** (bool  *play*)

Sets the auto *play* state.

**See also** autoPlay().

----

.. _api_AudioSource_b83e10c5:

 void **AudioSource::setClip** (:ref:`AudioClip<api_AudioClip>` * *clip*)

Sets the audio *clip* for the audio source.

**See also** *clip*().

----

.. _api_AudioSource_27f65043:

 void **AudioSource::setLoop** (bool  *loop*)

Sets the *loop* state.

**See also** *loop*().

----

.. _api_AudioSource_69c0215a:

 void **AudioSource::stop** ()

Stops the audio source.


