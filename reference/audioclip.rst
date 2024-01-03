.. _api_AudioClip:

AudioClip
=========

Inherited: :doc:`Object<api_Object>`

.. _api_AudioClip_description:

Description
-----------

The AudioClip class provides methods to access and manipulate audio data, supporting loading and streaming from disk.



.. _api_AudioClip_public:

Public Methods
--------------

+-------+----------------------------------------------------+
|   int | :ref:`channels<api_AudioClip_channels>` () const   |
+-------+----------------------------------------------------+
|   int | :ref:`duration<api_AudioClip_duration>` () const   |
+-------+----------------------------------------------------+
|   int | :ref:`frequency<api_AudioClip_frequency>` () const |
+-------+----------------------------------------------------+
|  bool | :ref:`isStream<api_AudioClip_isStream>` () const   |
+-------+----------------------------------------------------+



.. _api_AudioClip_static:

Static Methods
--------------

None

.. _api_AudioClip_methods:

Methods Description
-------------------

.. _api_AudioClip_channels:

 int **AudioClip::channels** () const

Returns the number of audio channels.

----

.. _api_AudioClip_duration:

 int **AudioClip::duration** () const

Returns the duration of audio clip.

----

.. _api_AudioClip_frequency:

 int **AudioClip::frequency** () const

Returns frequency of audio clip in Hz.

----

.. _api_AudioClip_isStream:

 bool **AudioClip::isStream** () const

Returns true in case of the audio clip is streamed from disk; otherwise returns false.


