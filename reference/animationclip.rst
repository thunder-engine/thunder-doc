.. _api_AnimationClip:
AnimationClip Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_AnimationClip_description:
Description
-----------

An AnimationClip resource contains keyframe based animation data. The animation data split to a number of tracks that must be connected with the properties of Components. Each track can contain multiple curves or channels like X, Y and Z Which allows them to animate elements independently.



.. _api_AnimationClip_public:
Public Methods
--------------

+---------------------+------------------------------------------------------+
| :ref:`int<api_int>` | :ref:`duration<api_AnimationClip_duration>` () const |
+---------------------+------------------------------------------------------+



.. _api_AnimationClip_static:
Static Methods
--------------

None

.. _api_AnimationClip_methods:
Methods Description
-------------------

.. _api_AnimationClip_duration:

:ref:`int<api_int>`  **AnimationClip::duration** () const

Returns duration of the animation clip in milliseconds.

----


