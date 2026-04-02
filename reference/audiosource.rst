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
|                               bool | :ref:`autoPlay<api_AudioSource_f4182e5a>` () const          |
+------------------------------------+-------------------------------------------------------------+
|  :ref:`AudioClip<api_AudioClip>` * | :ref:`clip<api_AudioSource_46cad073>` () const              |
+------------------------------------+-------------------------------------------------------------+
|                               bool | :ref:`loop<api_AudioSource_e97a6854>` () const              |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`play<api_AudioSource_5208cd67>` ()                    |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`setAutoPlay<api_AudioSource_2c8b3406>` (bool  play)   |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`setClip<api_AudioSource_9e64851c>` (AudioClip * clip) |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`setLoop<api_AudioSource_963e8f5c>` (bool  loop)       |
+------------------------------------+-------------------------------------------------------------+
|                               void | :ref:`stop<api_AudioSource_647ad5e0>` ()                    |
+------------------------------------+-------------------------------------------------------------+



.. _api_AudioSource_static:

Static Methods
--------------

None

.. _api_AudioSource_methods:

Methods Description
-------------------

.. _api_AudioSource_f4182e5a:

 bool **AudioSource::autoPlay** () const

Returns true if auto-play is enabled; otherwise, returns false.

**See also** setAutoPlay().

----

.. _api_AudioSource_46cad073:

 :ref:`AudioClip<api_AudioClip>` * **AudioSource::clip** () const

Returns the audio clip associated with the audio source.

**See also** setClip().

----

.. _api_AudioSource_e97a6854:

 bool **AudioSource::loop** () const

Returns true if looping is enabled; otherwise, returns false.

**See also** setLoop().

----

.. _api_AudioSource_5208cd67:

 void **AudioSource::play** ()

Plays the audio clip in the specific position in 3D space.

----

.. _api_AudioSource_2c8b3406:

 void **AudioSource::setAutoPlay** (bool  *play*)

Sets the auto *play* state.

**See also** autoPlay().

----

.. _api_AudioSource_9e64851c:

 void **AudioSource::setClip** (:ref:`AudioClip<api_AudioClip>` * *clip*)

Sets the audio *clip* for the audio source.

**See also** clip().

----

.. _api_AudioSource_963e8f5c:

 void **AudioSource::setLoop** (bool  *loop*)

Sets the *loop* state.

**See also** loop().

----

.. _api_AudioSource_647ad5e0:

 void **AudioSource::stop** ()

Stops the audio source.


