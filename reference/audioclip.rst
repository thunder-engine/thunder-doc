.. _api_AudioClip:

AudioClip
=========

Inherited: None

.. _api_AudioClip_description:

Description
-----------

The AudioClip class provides methods to access and manipulate audio data, supporting loading and streaming from disk.



.. _api_AudioClip_public:

Public Methods
--------------

+-----------+---------------------------------------------------+
|  uint32_t | :ref:`channels<api_AudioClip_e2f3a086>` () const  |
+-----------+---------------------------------------------------+
|  uint32_t | :ref:`duration<api_AudioClip_a52c83fb>` () const  |
+-----------+---------------------------------------------------+
|  uint32_t | :ref:`frequency<api_AudioClip_bde41386>` () const |
+-----------+---------------------------------------------------+
|      bool | :ref:`isStream<api_AudioClip_12dcb956>` () const  |
+-----------+---------------------------------------------------+



.. _api_AudioClip_static:

Static Methods
--------------

None

.. _api_AudioClip_methods:

Methods Description
-------------------

.. _api_AudioClip_e2f3a086:

 uint32_t **AudioClip::channels** () const

Returns the number of audio channels.

----

.. _api_AudioClip_a52c83fb:

 uint32_t **AudioClip::duration** () const

Returns the duration of audio clip.

----

.. _api_AudioClip_bde41386:

 uint32_t **AudioClip::frequency** () const

Returns frequency of audio clip in Hz.

----

.. _api_AudioClip_12dcb956:

 bool **AudioClip::isStream** () const

Returns true in case of the audio clip is streamed from disk; otherwise returns false.


